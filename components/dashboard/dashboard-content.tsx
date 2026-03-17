"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type DashboardContentProps = {
  greeting: string;
  firstName: string;
  brand?: string;
};

export function DashboardContent({ greeting, firstName, brand }: DashboardContentProps) {
  // Example demo state, for dynamic sections later
  const [projectCount, setProjectCount] = useState(3);

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {greeting}, {firstName}! Welcome to {brand || "your dashboard"}.
        </h1>
        <p className="mt-3 text-muted-foreground text-lg">
          This is your StripePilot workspace. Manage teams, projects, and billing below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">{projectCount}</div>
            <Button
              size="sm"
              className="mt-4"
              onClick={() => setProjectCount(projectCount + 1)}
            >
              Add Demo Project
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">Unlimited</div>
            <div className="mt-2 text-muted-foreground text-sm">
              Invite your team to collaborate in a Stripe-caliber SaaS workspace.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold text-primary">Active</div>
            <div className="mt-2 text-muted-foreground text-sm">
              Your workspace is ready. Start building with StripePilot today.
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Getting started</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            Invite your team — Use the <b>Team</b> tab to send invites and assign roles.
          </li>
          <li>
            Add features — Open the <b>Feature</b> tab to test production-ready CRUD flows.
          </li>
          <li>
            Integrate billing — Plug in your <b>Stripe</b> keys to enable subscription management.
          </li>
        </ol>
      </div>
    </section>
  );
}