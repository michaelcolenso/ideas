# ideas — Digital Product Storefront

A zero-fee, conversion-optimized storefront for selling digital products. Built with Next.js 14, TypeScript, Tailwind CSS, and Stripe. Deploy to Vercel in under 5 minutes and start accepting payments immediately.

**Why this exists:** Platforms like Gumroad take 10%. Shopify charges monthly fees. This storefront costs $0 to run on Vercel's free tier — you only pay Stripe's standard 2.9% + 30¢ per transaction. On $10,000 in sales, that's ~$7,000 more in your pocket compared to Gumroad.

## Features

- **Stripe Checkout** — Secure, PCI-compliant payments with one-time purchases
- **Product catalog** — Add products by editing a single config file
- **Landing page** — Conversion-optimized with social proof, CTAs, and newsletter capture
- **Product detail pages** — Auto-generated for each product with buy buttons
- **Webhook handling** — Receive real-time payment notifications for fulfillment
- **Email capture** — Built-in newsletter signup with file-based storage (swap for any email service)
- **SEO ready** — Open Graph, Twitter cards, and semantic HTML out of the box
- **Mobile-first** — Fully responsive design that looks great on every device
- **Type-safe** — Full TypeScript coverage
- **Fast** — Static generation where possible, edge-ready API routes

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/michaelcolenso/ideas.git
cd ideas
npm install
```

### 2. Set up Stripe

1. Create a [Stripe account](https://dashboard.stripe.com/register) (free)
2. Get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Copy the environment template:

```bash
cp .env.example .env.local
```

4. Fill in your keys:

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Customize your products

Edit `src/lib/config.ts` to add your own products:

```typescript
export const products: Product[] = [
  {
    id: "my-product",
    name: "My Digital Product",
    description: "A short compelling description.",
    longDescription: "The full pitch that appears on the product page.",
    price: 2900, // $29.00 in cents
    features: ["Feature 1", "Feature 2", "Feature 3"],
    category: "Templates",
  },
];
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you'll see your storefront.

### 5. Deploy to Vercel (free)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to your GitHub
2. Import it on [vercel.com/new](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Deploy — your store is live

### 6. Set up Stripe Webhooks (for order fulfillment)

1. In Stripe Dashboard, go to Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `checkout.session.completed`, `charge.refunded`
4. Copy the webhook signing secret to your `STRIPE_WEBHOOK_SECRET` env var

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout with SEO metadata
│   ├── globals.css                 # Tailwind imports + base styles
│   ├── success/page.tsx            # Post-purchase confirmation
│   ├── products/[id]/
│   │   ├── page.tsx                # Product detail page
│   │   └── BuyButton.tsx           # Client-side purchase button
│   └── api/
│       ├── checkout/route.ts       # Creates Stripe checkout session
│       ├── webhook/route.ts        # Handles Stripe webhooks
│       └── subscribe/route.ts      # Newsletter email capture
├── components/
│   ├── Header.tsx                  # Navigation bar
│   ├── Hero.tsx                    # Above-the-fold hero section
│   ├── ProductCard.tsx             # Product card component
│   ├── ProductGrid.tsx             # Product listing grid
│   ├── SocialProof.tsx             # Stats/social proof bar
│   ├── Newsletter.tsx              # Email signup form
│   └── Footer.tsx                  # Site footer
└── lib/
    ├── config.ts                   # Store config + product catalog
    └── stripe.ts                   # Stripe client initialization
```

## Fulfillment

After a successful payment, the webhook at `/api/webhook` fires. This is where you deliver your product. Common approaches:

- **Email delivery**: Send a download link via [Resend](https://resend.com), SendGrid, or AWS SES
- **Private repo access**: Use the GitHub API to invite the buyer as a collaborator
- **License key**: Generate and email a unique license key
- **Membership**: Add the user to a database and gate content

The webhook logs every sale to the console. In production, replace the TODO section with your delivery logic.

## Customization

| What | Where |
|------|-------|
| Store name, tagline, description | `src/lib/config.ts` → `store` object |
| Products and pricing | `src/lib/config.ts` → `products` array |
| Colors and fonts | `tailwind.config.js` |
| Landing page layout | `src/app/page.tsx` |
| SEO metadata | `src/app/layout.tsx` |

## Revenue Strategies

This storefront supports multiple business models:

1. **Sell digital products directly** — templates, ebooks, courses, software
2. **Sell this boilerplate** — the code itself is a product others will buy
3. **Build and flip** — customize for a niche, sell the whole business
4. **White-label** — set up stores for clients as a service
5. **Bundle and upsell** — add more products over time to increase average order value

## License

MIT — use it however you want, commercially or otherwise.
