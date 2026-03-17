"use server";

import { db } from "@/lib/db/client";
import { subscriptions, teams } from "@/lib/db/schema";
import { stripe, createStripeCustomer, createStripeSubscription, cancelStripeSubscription } from "@/lib/payments/stripe";
import { getAuthSession } from "@/lib/auth/session";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const createSubscriptionAction = async (teamId: string, plan: string, priceId: string) => {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Only owner or admin can manage
  const [team] = await db.select().from(teams).where(eq(teams.id, teamId));
  if (!team) throw new Error("No team found");

  // Only one active subscription per team allowed
  const [existing] = await db.select().from(subscriptions).where(eq(subscriptions.teamId, teamId));
  if (existing) throw new Error("Subscription already exists");

  // Create Stripe customer and subscription
  const customer = await createStripeCustomer(session.email, team.name);
  const stripeSub = await createStripeSubscription(customer.id, priceId);

  await db.insert(subscriptions).values({
    teamId,
    stripeCustomerId: customer.id,
    stripeSubscriptionId: stripeSub.id,
    plan,
    price: stripeSub.items.data[0].price.unit_amount
      ? String(stripeSub.items.data[0].price.unit_amount / 100)
      : "0.00",
    currency: stripeSub.items.data[0].price.currency,
    status: stripeSub.status,
    currentPeriodStart: new Date(stripeSub.current_period_start * 1000),
    currentPeriodEnd: new Date(stripeSub.current_period_end * 1000),
    cancelAtPeriodEnd: String(stripeSub.cancel_at_period_end),
  });

  return { success: true };
};

export const cancelSubscriptionAction = async (teamId: string) => {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  const [sub] = await db.select().from(subscriptions).where(eq(subscriptions.teamId, teamId));
  if (!sub) throw new Error("No active subscription for this team");

  await cancelStripeSubscription(sub.stripeSubscriptionId);

  await db
    .update(subscriptions)
    .set({ status: "canceled", canceledAt: new Date() })
    .where(eq(subscriptions.id, sub.id));

  return { success: true };
};