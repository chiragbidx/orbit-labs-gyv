-- Migration SQL for subscriptions table (auto-generated)

CREATE TABLE IF NOT EXISTS "subscriptions" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" TEXT NOT NULL,
  "stripe_customer_id" TEXT NOT NULL,
  "stripe_subscription_id" TEXT NOT NULL,
  "plan" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "price" DECIMAL(10,2) NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'usd',
  "current_period_start" TIMESTAMPTZ,
  "current_period_end" TIMESTAMPTZ,
  "cancel_at_period_end" TEXT NOT NULL DEFAULT 'false',
  "canceled_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS "subscriptions_team_idx"
  ON "subscriptions" ("team_id");

CREATE UNIQUE INDEX IF NOT EXISTS "subscriptions_stripe_sub_idx"
  ON "subscriptions" ("stripe_subscription_id");

ALTER TABLE "subscriptions"
  ADD CONSTRAINT "subscriptions_team_id_fk"
  FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE;