import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teams, subscriptions } from "@/lib/db/schema";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import SubscriptionClient from "./client";

export const dynamic = "force-dynamic";

export default async function SubscriptionPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Get the user's team and subscription, as owner/admin can manage
  const team = await db.query.teams.findFirst({
    where: eq(teams.id, session.teamId),
  });

  if (!team) {
    return <div>No team found.</div>;
  }

  const [subscription] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.teamId, team.id));

  return (
    <SubscriptionClient
      team={team}
      subscription={subscription ?? null}
      userEmail={session.email}
    />
  );
}