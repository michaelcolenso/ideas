// ============================================================================
// STORE CONFIGURATION — Edit this file to customize your store
// ============================================================================

export const store = {
  name: "Digital Products",
  tagline: "Premium digital tools to level up your work",
  description:
    "Curated collection of templates, tools, and resources built by makers who ship.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  social: {
    twitter: "", // e.g. "https://twitter.com/yourhandle"
    github: "", // e.g. "https://github.com/yourrepo"
  },
};

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in cents
  features: string[];
  category: string;
  popular?: boolean;
  stripePriceId?: string; // set after creating in Stripe Dashboard
  downloadUrl?: string; // URL or path to deliver after purchase
}

// ============================================================================
// YOUR PRODUCTS — Add, remove, or edit products here
// ============================================================================

export const products: Product[] = [
  {
    id: "starter-kit",
    name: "Next.js SaaS Starter Kit",
    description:
      "Production-ready boilerplate with auth, payments, and database.",
    longDescription:
      "Stop wasting weeks on boilerplate. This starter kit gives you authentication (OAuth + magic links), Stripe subscriptions, a PostgreSQL database with Prisma ORM, email templates, admin dashboard, and deployment configs — all wired together and ready to ship. Built with Next.js 14, TypeScript, and Tailwind CSS.",
    price: 4900,
    features: [
      "Next.js 14 App Router + TypeScript",
      "Stripe subscriptions & one-time payments",
      "Auth with NextAuth.js (Google, GitHub, email)",
      "PostgreSQL + Prisma ORM with migrations",
      "Transactional email templates",
      "Admin dashboard",
      "One-click Vercel deploy",
      "Lifetime updates",
    ],
    category: "Templates",
    popular: true,
    stripePriceId: process.env.STRIPE_PRICE_STARTER_KIT || "",
  },
  {
    id: "prompt-library",
    name: "The Prompt Engineering Vault",
    description: "500+ battle-tested prompts for ChatGPT, Claude, and more.",
    longDescription:
      "A comprehensive library of prompts organized by use case: copywriting, coding, analysis, creative writing, business strategy, and more. Each prompt includes variables you can customize, example outputs, and tips for getting the best results. Updated monthly with new prompts.",
    price: 2900,
    features: [
      "500+ tested prompts across 12 categories",
      "Works with ChatGPT, Claude, Gemini",
      "Copy-paste ready with variables",
      "Example outputs for every prompt",
      "Notion + Markdown formats",
      "Monthly updates with new prompts",
    ],
    category: "Resources",
    stripePriceId: process.env.STRIPE_PRICE_PROMPT_LIBRARY || "",
  },
  {
    id: "landing-page-templates",
    name: "Conversion Landing Pages Pack",
    description:
      "12 high-converting landing page templates. Copy, deploy, profit.",
    longDescription:
      "Twelve meticulously crafted landing page templates designed to convert visitors into customers. Each template is built with Next.js and Tailwind CSS, scores 100 on Lighthouse, and includes A/B testing variants. Covers SaaS, info products, agencies, newsletters, and more.",
    price: 3900,
    features: [
      "12 unique landing page designs",
      "Next.js + Tailwind CSS",
      "100/100 Lighthouse scores",
      "Mobile-first responsive design",
      "A/B testing variants included",
      "Figma source files",
      "Dark mode support",
    ],
    category: "Templates",
    stripePriceId: process.env.STRIPE_PRICE_LANDING_PAGES || "",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
