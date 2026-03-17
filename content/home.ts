// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "StripePilot",
    badgeOuter: "The modern SaaS dashboard boilerplate",
    titleBefore: "Scale your next",
    titleHighlight: "Stripe-style",
    titleAfter: "startup with confidence",
    subtitle:
      "StripePilot accelerates your SaaS product with authentication, team workspaces, polished components, and a real Stripe-inspired dashboard.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "StripePilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Powered by industry leaders",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why StripePilot",
    heading: "Your Stripe-inspired SaaS starter",
    description:
      "Get production-ready architecture, Stripe-standard UX, and blazing fast iteration for your next SaaS startup. Stop paying dev-tax on boilerplate.",
    items: [
      {
        icon: "Blocks",
        title: "Production-Ready Foundation",
        description: "Modern stack, robust multi-tenant support, and proven patterns help you avoid startup rework.",
      },
      {
        icon: "LineChart",
        title: "Designed for Velocity",
        description: "Jump-start dashboard, auth, and onboarding with Stripe-caliber polish.",
      },
      {
        icon: "Wallet",
        title: "Lower Engineering Cost",
        description: "Reusable logic, team flows, and integrated payments keep you focused on your differentiator.",
      },
      {
        icon: "Sparkle",
        title: "World-Class UX",
        description: "Dark mode, clean design, and Stripe-inspired UI out of the box.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything SaaS teams demand",
    subtitle:
      "StripePilot delivers scalable dashboard logic, tested database models, and delightfully clean UI for payments, teams, and more.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive Across Devices", description: "Built for desktop and mobile from day one." },
      { icon: "BadgeCheck", title: "Production-Grade Auth", description: "Email + password flows, email verification, password reset, team invites, and role management." },
      { icon: "Goal", title: "Team-First Structure", description: "Workspaces, roles, and invitation flows modeled after the best SaaS products." },
      { icon: "CreditCard", title: "Billing-Ready Paths", description: "Plan models and billing hooks—just plug your Stripe account." },
      { icon: "MousePointerClick", title: "Strategic CTAs", description: "Smart calls to action drive users from demo to paid plan." },
      { icon: "Sparkles", title: "Stripe-Caliber UI", description: "Polished design, clean sections, and an adaptive dashboard shell." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What StripePilot gives you",
    subtitle:
      "Move from zero to Stripe-inspired dashboard with proven code, not half-baked templates.",
    items: [
      { title: "Enterprise-Ready Auth", description: "Credential flow, roles, invitations, and verification included.", pro: false },
      { title: "Payments Foundation", description: "Billing models and upgrade mechanics ready for Stripe integration.", pro: false },
      { title: "SaaS Multi-Tenancy", description: "Team-based workspaces right out of the gate.", pro: false },
      { title: "Launch with Confidence", description: "Deploy-grade, proven UI. Standardize your SaaS surface.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Builders scaling with StripePilot",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "CTO, AtlasWorks", comment: "StripePilot gave us a Stripe-caliber look and SaaS features instantly. Onboarded our team and shipped in days.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Olivia Chen", role: "Head of Product, GrowthLeap", comment: "The ready-to-go auth, billing, and dashboard convinced our founders StripePilot was our MVP's fastest path to launch.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Lucas Hu", role: "Engineering Lead, Substacker", comment: "StripePilot means we spend zero time on onboarding or redoing user flows. It works out-of-the-box.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Zara Klein", role: "Founder, PilotLead", comment: "Startup UI on day one and multi-tenant teams were the real unlock. Can't recommend StripePilot enough.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "StripePilot",
    heading: "Meet the StripePilot Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "David",
        lastName: "Diaz",
        positions: ["Platform Engineer", "AI Integrations"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team1.jpg",
        firstName: "Sarah",
        lastName: "Robinson",
        positions: ["Cloud Engineer", "Kubernetes"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Pricing for every stage",
    subtitle: "Free to start. Upgrade when you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "For early experiments and side projects.",
        buttonText: "Start now",
        benefits: [
          "Up to 3 team members",
          "Complete dashboard",
          "User & team auth flows",
          "Core StripePilot UI",
          "Email support"
        ],
      },
      {
        title: "SaaS Team",
        popular: true,
        price: 49,
        description: "Perfect for growing SaaS products shipping to users.",
        buttonText: "Start 14-day trial",
        benefits: [
          "Unlimited team seats",
          "Advanced plans and billing hooks",
          "Priority email support",
          "Multi-tenant workspaces",
          "Invite and role management",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For regulated organizations and production at scale.",
        buttonText: "Contact sales",
        benefits: [
          "Dedicated onboarding",
          "Compliance support",
          "SAML SSO/SCIM path",
          "Custom feature engagements",
          "Direct contact to engineering"
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the StripePilot team",
    description:
      "Need help with the template, architecture, or Stripe integration? Let us know your goals and timeline.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Available", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: [
      "Working SaaS Demo",
      "Stripe Integration",
      "Dashboard Extension",
      "Platform Partnership",
      "Enterprise Inquiry"
    ],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "StripePilot Questions",
    items: [
      { question: "Is StripePilot free to use?", answer: "Yes. Start on the Starter plan for free and upgrade only if you need cloud, team, or enterprise features." },
      { question: "Can I launch a SaaS MVP with StripePilot?", answer: "Absolutely! StripePilot is designed for real SaaS launches and MVPs starting from day one." },
      { question: "Is the dashboard really ready to deploy?", answer: "Yes. No demo placeholders. You get working dashboard, auth, database, and team logic out of the box." },
      { question: "Does StripePilot work with my own Stripe account?", answer: "Yes. All billing wiring is built for easy plug-and-play with your own Stripe credentials." },
      { question: "Can I extend features, models, and UI?", answer: "Definitely—StripePilot is designed for team-friendly extension, not as a rigid template." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "StripePilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "#" },
          { label: "Twitter", href: "https://x.com" },
          { label: "Discord", href: "https://discord.com" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Get in Touch", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "Discord", href: "https://discord.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 StripePilot. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "StripePilot",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "StripePilot dashboard preview" },
    features: [
      { title: "Ready-Made Auth & Teams", description: "Onboard users, teams, and billing in minutes." },
      { title: "Stripe-Ready Billing", description: "Stripe-fluent models and billing logic as in production SaaS platforms." },
      { title: "Deploy-First Workflow", description: "All config built for Vercel (prod) and Railway (dev) on day one." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}