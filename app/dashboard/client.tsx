"use client";

import { DashboardContent } from "@/components/dashboard/dashboard-content";

// Purpose: Client UI for /dashboard.
// Use this file for interactive/dashboard presentation logic.

type ClientProps = {
  greeting: string;
  firstName: string;
  brand?: string;
};

export default function Client({ greeting, firstName, brand }: ClientProps) {
  return (
    <DashboardContent
      greeting={greeting}
      firstName={firstName}
      brand={brand}
    />
  );
}