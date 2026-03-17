import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function createStripeCustomer(email: string, teamName: string) {
  return stripe.customers.create({
    email,
    name: teamName,
  });
}

export async function createStripeSubscription(customerId: string, priceId: string) {
  return stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: "default_incomplete",
    expand: ["latest_invoice.payment_intent"],
  });
}

export async function cancelStripeSubscription(subscriptionId: string) {
  return stripe.subscriptions.update(subscriptionId, {
    cancel_at_period_end: true,
  });
}

export async function getStripePortalSession(customerId: string, returnUrl: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
}

export async function getStripeInvoiceList(customerId: string) {
  return stripe.invoices.list({ customer: customerId });
}