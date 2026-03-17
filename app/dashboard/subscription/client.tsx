"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getStripePortalSession } from "@/lib/payments/stripe";

export default function SubscriptionClient({ team, subscription, userEmail }: any) {
  const [loading, setLoading] = useState(false);

  async function handleBillingPortal() {
    setLoading(true);
    const res = await fetch("/api/stripe/billing-portal", {
      method: "POST",
      body: JSON.stringify({ customerId: subscription?.stripeCustomerId }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { url } = await res.json();
      window.location.href = url;
    } else {
      alert("Unable to open billing portal.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white dark:bg-black rounded-xl shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Subscription &amp; Billing</h1>
      {subscription ? (
        <div>
          <div>
            <div className="font-semibold mb-1">Current Plan:</div>
            <div>{subscription.plan} (${subscription.price} / {subscription.currency})</div>
            <div className="mb-4 text-sm text-muted-foreground">
              Status: {subscription.status}
            </div>
          </div>
          <Button
            onClick={handleBillingPortal}
            disabled={loading}
            variant="secondary"
            className="w-full"
          >
            {loading ? "Loading..." : "Manage billing in Stripe"}
          </Button>
        </div>
      ) : (
        <div>
          <p className="mb-4">No active subscription for your team.</p>
          <Button asChild variant="primary" className="w-full">
            <a href="/dashboard/settings">Set up Subscription</a>
          </Button>
        </div>
      )}
    </div>
  );
}