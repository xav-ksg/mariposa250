import Link from 'next/link';

export const metadata = {
  title: 'Sponsor | Mariposa 250',
  description: 'Become a sponsor of the Mariposa 250 America 250 Celebration on July 4, 2026.',
};

const COUNTY_SPONSOR_URL = 'https://www.mariposacounty.gov/3032/Become-a-Sponsor';

type Tier = {
  name: string;
  price: string;
  slots: string;
  description: string;
  benefits: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Presenting Sponsor',
    price: '$50,000',
    slots: '1 slot available',
    description: 'The single top-tier partnership. Your organization is named in every public mention of Mariposa 250.',
    benefits: [
      'Dedicated Presented by recognition site-wide',
      'Logo in all marketing materials',
      'Verbal recognition during drone show',
      'Dedicated press release',
      'Banner at Stage 1 (Arts Park)',
      'VIP hospitality for your team',
      'Framed certificate and Executive Director thank-you',
    ],
    highlight: true,
  },
  {
    name: 'Red, White and Blue',
    price: '$10,000',
    slots: 'Up to 2 slots',
    description: 'Headline-tier partnership. Your logo appears inside the drone show.',
    benefits: [
      'Logo IN the 200-drone show (unique to this tier)',
      'Prominent homepage Headline Sponsors display',
      'Featured on sponsor page with description',
      'Named in next event press release',
      'Banner at event and verbal stage recognition',
      'Tax receipt and framed certificate',
    ],
  },
  {
    name: 'Liberty Bell',
    price: '$5,000',
    slots: 'Standard tier',
    description: 'Signature partnership for organizations supporting a signature civic event.',
    benefits: [
      'Logo in homepage Signature Sponsors grid',
      'First two Liberty Bell sponsors get verbal recognition at drone show',
      'Featured on sponsor page',
      'Included in next event press release',
      'Named in event program',
    ],
  },
  {
    name: 'Stars and Stripes',
    price: '$2,500',
    slots: 'Standard tier',
    description: 'Core community partnership tier.',
    benefits: [
      'Logo on sponsor page and homepage community partners strip',
      'Grouped social media announcement',
      'Listed in event program',
      'Tax receipt',
    ],
  },
  {
    name: 'We the People',
    price: '$1,000',
    slots: 'Standard tier',
    description: 'For small businesses and individuals who want meaningful recognition at a more accessible price point.',
    benefits: [
      'Logo on sponsor page and homepage community partners strip',
      'Named in monthly sponsor roundup posts',
      'Listed in event program',
      'Tax receipt',
    ],
  },
  {
    name: 'Stage Sponsor',
    price: '$400',
    slots: '5 stages available',
    description: 'Each of our 5 stages can be sponsored independently. Your logo appears at your stage all day.',
    benefits: [
      'Logo at your dedicated stage',
      'Named as stage sponsor on Schedule page',
      'Logo on sponsor page',
      'Mentioned when your stage lineup is announced',
      'Tax receipt',
    ],
  },
  {
    name: 'American Heritage',
    price: '$250',
    slots: 'Open, no cap',
    description: 'Accessible community partnership with a commemorative physical token.',
    benefits: [
      'Name on sponsor page',
      'Commemorative lapel pin (tier-specific premium)',
      'Listed in event program',
      'Tax receipt',
    ],
  },
  {
    name: 'Spirit of 76',
    price: 'Any amount',
    slots: 'All community welcome',
    description: 'Make a contribution in any amount. Supports the community education program.',
    benefits: [
      'Name on sponsor page',
      'Grouped in community supporters mentions',
      'Tax receipt',
    ],
  },
];

const confirmedSponsors = [
  { name: 'Mountain Fitness', tier: 'Stage Sponsor' },
  { name: "Smokin' Oak BBQ and Twisted Cedar Tap House", tier: 'Stage Sponsor' },
];

function TierCard({ tier }: { tier: Tier }) {
  const cardClasses = tier.highlight
    ? 'bg-navy text-cream p-6 rounded-lg border-2 border-gold'
    : 'bg-white p-6 rounded-lg border border-navy/10';
  const titleClasses = tier.highlight ? 'font-serif text-2xl text-gold' : 'font-serif text-2xl text-navy';
  const priceClasses = tier.highlight ? 'text-3xl text-cream font-bold' : 'text-3xl text-oxblood font-bold';
  const slotClasses = tier.highlight ? 'text-sm text-cream/70' : 'text-sm text-navy/60';
  const descClasses = tier.highlight ? 'text-cream/90 text-sm mt-3 leading-relaxed' : 'text-navy/80 text-sm mt-3 leading-relaxed';
  const bulletClasses = tier.highlight ? 'text-cream/90 text-sm' : 'text-navy/80 text-sm';

  return (
    <div className={cardClasses}>
      <div className="flex items-start justify-between mb-2">
        <h3 className={titleClasses}>{tier.name}</h3>
      </div>
      <div className={priceClasses}>{tier.price}</div>
      <div className={slotClasses}>{tier.slots}</div>
      <p className={descClasses}>{tier.description}</p>
      <ul className="mt-4 space-y-2">
        {tier.benefits.map((b) => (
          <li key={b} className={bulletClasses}>
            <span className="text-gold mr-2">{"\u2713"}</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CountyButton() {
  return (
    <a href={COUNTY_SPONSOR_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-oxblood px-8 py-4 text-base font-semibold uppercase tracking-widest text-cream hover:bg-navy transition">
      Become a Sponsor
    </a>
  );
}

function ConfirmedSponsorCard({ name, tier }: { name: string; tier: string }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-navy/10">
      <h3 className="font-serif text-lg text-navy">{name}</h3>
      <div className="text-sm text-oxblood">{tier}</div>
    </div>
  );
}

export default function SponsorPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/" className="text-navy/60 text-sm hover:text-navy mb-6 inline-block">
          Back to home
        </Link>
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">Sponsor Mariposa 250</h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-4 leading-relaxed">
          On July 4, 2026, Mariposa hosts a free community celebration unlike any other in the Sierra foothills. A 200-drone aerial show, five stages of live music, an evening parade, and a downtown transformed for the day. Sponsors make it possible.
        </p>
        <p className="text-lg text-navy/80 max-w-3xl mb-10 leading-relaxed">
          Choose your level of support below. When you are ready, your sponsorship is completed through the Mariposa County government portal. Simple, transparent, and officially processed.
        </p>

        <div className="bg-navy text-cream p-6 rounded-lg mb-12 text-center">
          <h2 className="font-serif text-2xl text-gold mb-3">Ready to Sponsor?</h2>
          <p className="text-cream/90 mb-4">
            Sponsorship registration and payment is handled through the Mariposa County government website.
          </p>
          <CountyButton />
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-3xl text-navy mb-4">Confirmed Sponsors</h2>
          <p className="text-navy/70 mb-6">These organizations have committed to supporting Mariposa 250:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {confirmedSponsors.map((s) => (
              <ConfirmedSponsorCard key={s.name} name={s.name} tier={s.tier} />
            ))}
          </div>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-6 mt-12">Sponsorship Tiers</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tiers.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>

        <div className="bg-oxblood/10 border-l-4 border-oxblood p-6 mb-12">
          <h3 className="font-serif text-xl text-navy mb-2">Nonprofit Information</h3>
          <p className="text-navy/80 leading-relaxed">
            Mariposa 250 is co-hosted by the Mariposa Butterfly Festival (501(c)(3), EIN 85-2475621) and Mariposa County. Sponsorships are tax-deductible to the extent allowed by law. Your receipt is issued by the Butterfly Festival after payment is processed through the County.
          </p>
        </div>

        <div className="bg-navy text-cream p-8 rounded-lg text-center">
          <h2 className="font-serif text-3xl text-gold mb-4">Make History with Mariposa 250</h2>
          <p className="text-cream/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            July 4, 2026 marks America&apos;s 250th birthday. Your sponsorship underwrites free admission for an estimated 5,000 to 7,000 attendees, a 200-drone aerial show replacing traditional fireworks during wildfire season, and a day of celebration for Mariposa County.
          </p>
          <CountyButton />
          <p className="mt-6 text-cream/70 text-sm">
            Questions? Email kimberly.mariposafestival@gmail.com or call 209-201-4137.
          </p>
        </div>
      </section>
    </div>
  );
}
