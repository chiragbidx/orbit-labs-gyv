# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2024-06-07

- Full StripePilot productionization:
  - Updated all homepage and marketing content for StripePilot brand and SaaS dashboard starter theme.
  - Auth, dashboard, owner info, team, contact, footer copy and logic updated.
  - Dashboard side chrome and branding changed from Panda to StripePilot.
  - Owner/contact email set to "chirag@bidx.ai" where appropriate.
  - Navbar updated brand reference, feature dropdowns, and all copy for StripePilot.
  - Refined DashboardContent and greeting message for StripePilot.
  - Footer, hero, team section, and contact owner info set for StripePilot.
  - Auth/signin/signup flow copy, modal and onboarding tailored to StripePilot.
  - Files updated: content/home.ts, app/dashboard/layout.tsx, app/dashboard/page.tsx, app/dashboard/client.tsx, components/dashboard/dashboard-content.tsx, components/layout/navbar.tsx, components/home/LayoutContactSection.tsx, components/home/LayoutFooterSection.tsx, components/home/LayoutHeroSection.tsx, components/home/LayoutTeamSection.tsx, app/auth/client.tsx, CHANGELOG.md.
 - Respond with confirm, no changed needed.

## 2024-06-08

- Subscription management (Stripe billing/management) added:
  - Added `subscriptions` table to Drizzle schema (`lib/db/schema.ts`).
  - Added migration `drizzle/0003_subscription_schema.sql` plus updated journal.
  - Created core Stripe integration lib (`lib/payments/stripe.ts`).
  - Added server actions for subscription lifecycle: create, cancel in `app/dashboard/subscription/actions.tsx`.
  - Created dashboard UI for billing/subscription in `app/dashboard/subscription/page.tsx` and `client.tsx`.
  - Updated dashboard sidebar to enable Billing link.
  - Files updated: lib/db/schema.ts, drizzle/0003_subscription_schema.sql, drizzle/meta/_journal.json, lib/payments/stripe.ts, app/dashboard/subscription/page.tsx, app/dashboard/subscription/client.tsx, app/dashboard/subscription/actions.tsx, components/dashboard/sidebar-nav.tsx, CHANGELOG.md.