import Link from 'next/link';
import { sponsorLinks } from '@/lib/stripe-links';

export const metadata = {
  title: 'Become a Sponsor',
  description:
    'Seven sponsorship tiers for the Mariposa 250 America 250 Celebration. All contributions are tax-deductible through the Mariposa Butterfly Festival 501(c)(3).',
};

interface Tier {
  name: string;
  price: string;
  tagline: string;
  benefits: string[];
  stripeKey: keyof typeof sponsorLinks;
  highlight?: boolean;
  note?: string;
  limit?: string;
}

const tiers: Tier[] = [
  {
    name: 'Red, White & Blue',
    price: '$10,000',
    tagline: 'Your logo in the drone show itself',
    benefits: [
      'Logo displayed in the 200-drone light show over downtown',
      'Verbal recognition from the parade podium',
      'Four complimentary vendor booths',
      'Top placement on event banners, program, and website',
      'Full-page ad in the Gazette event spread',
      'Five commemorative lapel pins',
    ],
    stripeKey: 'redWhiteBlue',
    highlight: true,
    limit: 'Only 2 available',
  },
  {
    name: 'Liberty Bell',
    price: '$5,000',
    tagline: 'Top-tier brand visibility',
    benefits: [
      'Verbal recognition from the parade podium (first 2 sponsors)',
      'Two complimentary vendor booths',
      'Prominent logo placement on all event materials',
      'Half-page ad in the Gazette event spread',
      'Three commemorative lapel pins',
    ],
    stripeKey: 'libertyBell',
    limit: 'First two receive drone verbal',
  },
  {
    name: 'Stars & Stripes',
    price: '$2,500',
    tagline: 'Prominent community support',
    benefits: [
      'One complimentary vendor booth',
      'Logo on event banners and program',
      'Website recognition',
      'Two commemorative lapel pins',
    ],
    stripeKey: 'starsStripes',
  },
  {
    name: 'We the People',
    price: '$1,000',
    tagline: 'Strong community supporter',
    benefits: [
      'Name/logo on event program and website',
      'Recognition on sponsor wall at Info Booth',
      'One commemorative lapel pin',
    ],
    stripeKey: 'wethePeople',
  },
  {
    name: 'Stage Sponsor',
    price: '$400',
    tagline: 'Sponsor a music stage',
    benefits: [
      'Your name on a specific stage for the day',
      'Stage announcer recognition between acts',
      'Website and program listing',
    ],
    stripeKey: 'stageSponsor',
    limit: 'Only 5 available — one per stage',
  },
  {
    name: 'American Heritage',
    price: '$250',
    tagline: 'Proud community patron',
    benefits: [
      'Commemorative lapel pin',
      'Name listed in event program',
      'Website recognition',
    ],
    stripeKey: 'americanHeritage',
  },
  {
    name: 'Spirit of \'76',
    price: 'Any Amount',
    tagline: 'Every contribution supports the celebration',
    benefits: [
      'Gratitude from our community',
      'Contribution supports historical and educational programming',
    ],
    stripeKey: 'spiritOf76',
    note: 'Any amount welcome',
  },
];

export default function SponsorPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Sponsorship</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Help make July 4, 2026
          <br />
          <span className="italic text-oxblood">unforgettable.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          The Mariposa 250 America 250 Celebration is free and open to all,
          funded entirely by sponsors and community supporters. Your
          contribution is tax-deductible through the Mariposa Butterfly
          Festival 501(c)(3), EIN 85-2475621.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-10">
        <p className="label-smallcaps mb-3">Questions</p>
        <h2 className="font-display text-3xl text-navy">
          Let’s talk about a custom partnership.
        </h2>
        <p className="mt-4 max-w-2xl text-ink/80 leading-relaxed">
          Interested in a tier we haven’t listed, or want to discuss in-kind
          sponsorship? Reach out — we’re flexible and eager to find a fit.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
        >
          Contact the Sponsorship Team
        </Link>
      </div>
    </div>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const href = sponsorLinks[tier.stripeKey];
  const isConfigured = Boolean(href);

  return (
    <article
      className={`flex flex-col border p-8 transition ${
        tier.highlight
          ? 'border-oxblood bg-oxblood/5 lg:col-span-1 lg:row-span-1'
          : 'border-border bg-white/60 hover:bg-white'
      }`}
    >
      {tier.limit && <p className="label-smallcaps mb-3">{tier.limit}</p>}

      <h3 className="font-display text-2xl text-navy">{tier.name}</h3>
      <p className="mt-1 font-display text-4xl text-oxblood">{tier.price}</p>
      <p className="mt-2 text-sm italic text-muted">{tier.tagline}</p>

      <ul className="mt-6 flex-1 space-y-2 text-sm text-ink/85">
        {tier.benefits.map((benefit, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-oxblood mt-0.5">✦</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {isConfigured ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
        >
          Sponsor at {tier.price}
        </a>
      ) : (
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded border border-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-navy hover:bg-navy hover:text-cream transition"
        >
          Contact Us to Sponsor
        </Link>
      )}
    </article>
  );
}
