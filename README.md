# Mariposa 250 Website

The official website for the Mariposa 250 America 250 Celebration on July 4, 2026.

Built with Next.js 15, Tailwind CSS, and deployed on Vercel.

## Getting Started (Developer)

```bash
# Install dependencies
npm install

# Copy environment file and fill in values
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** — App Router, Server Components
- **Tailwind CSS v4** — utility-first styling
- **TypeScript** — strict mode
- **Vercel** — hosting
- **Stripe Payment Links** — sponsor and vendor payments (no PCI handling in this app)
- **Zapier Webhooks** — form submissions -> Notion via Zaps

## Design System

See `app/globals.css` for the locked design tokens.

- Colors: cream `#F7F3EB`, navy `#0F2B4C`, oxblood `#7B2D26`, gold `#C4A457`
- Fonts: Fraunces (display) and Inter Tight (body) via `next/font/google`
- Tone: editorial Americana

## Project Structure

```
app/                App Router pages
components/         Reusable components
lib/                Shared helpers (Stripe, Zapier)
public/             Static assets
```

## Environment Variables

See `.env.example` for the full list. Required:

- All `STRIPE_LINK_*` variables for sponsor and vendor pages
- All `ZAPIER_WEBHOOK_*` variables for form submissions

These must be set in **Vercel Project Settings > Environment Variables** for production.

## Deployment

Push to `main` — Vercel auto-deploys. Pull requests get a preview URL.

## Pages Built (Phase 1)

- `/` — Home with countdown
- `/about` — About the event
- `/schedule` — Five stages + key moments timeline
- `/parade` — Parade info + entry form
- `/map` — Event map (Google embed placeholder)
- `/sponsor` — Seven sponsor tiers + Stripe Payment Links
- `/vendor` — Two-location vendor page + Stripe Payment Links
- `/volunteer` — Volunteer signup with task selection
- `/press` — Press kit + releases + media contact
- `/faq` — Categorized FAQ
- `/contact` — General contact form
- `/emergency` — Day-of safety and logistics info

## Form Handling

Forms submit via Next.js Server Actions (`app/actions.ts`) to Zapier
Catch Hooks, which route to Notion databases. No server-side DB in Phase 1.

## Editing Content

Most text content lives in `lib/content.ts` — stages, acts, FAQ, press
releases, volunteer tasks. Non-developers can edit this file directly.

## What's Next

See the Notion page "Next.js Website Phase 1 Build Plan" for the roadmap.

## Two-Location Vendor Setup

The vendor page hits two separate Stripe accounts:

- **Butterfly Festival 501(c)(3)** — Stroming Road booths
- **Frost Shop Marketplace** — Frost Shop booths

Each location's payment flows to the correct Stripe account based on which button the user clicks. Reconciliation happens per-account.

## License

© 2026 Mariposa Butterfly Festival. All rights reserved.
