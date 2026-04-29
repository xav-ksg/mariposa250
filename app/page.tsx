import Link from 'next/link';
import Countdown from '@/components/Countdown';
import Script from 'next/script';
const FB_EVENT_URL = 'https://www.facebook.com/events/963357109509757';

type ConfirmedSponsor = {
  name: string;
  tier: string;
  tierClass: 'presenting' | 'headline' | 'signature' | 'community' | 'stage';
};

const confirmedSponsors: ConfirmedSponsor[] = [
  { name: 'Mountain Fitness', tier: 'Stage Sponsor', tierClass: 'stage' },
  { name: "Smokin' Oak BBQ and Twisted Cedar Tap House", tier: 'Stage Sponsor', tierClass: 'stage' },
];

function SponsorBadge({ sponsor }: { sponsor: ConfirmedSponsor }) {
  const tierStyles = {
    presenting: 'col-span-2 bg-gradient-to-br from-navy via-navy to-oxblood text-cream border-4 border-gold p-8',
    headline: 'col-span-2 bg-oxblood text-cream border-2 border-gold p-6',
    signature: 'bg-navy text-cream border-2 border-gold p-5',
    community: 'bg-white text-navy border-2 border-navy p-4',
    stage: 'bg-gradient-to-br from-oxblood to-navy text-cream border-2 border-gold p-5 shadow-md',
  };
  const nameSize = {
    presenting: 'text-3xl md:text-4xl',
    headline: 'text-2xl md:text-3xl',
    signature: 'text-xl md:text-2xl',
    community: 'text-lg',
    stage: 'text-lg md:text-xl',
  };
  return (
    <div className={`rounded-lg flex flex-col items-center justify-center text-center transition hover:scale-105 ${tierStyles[sponsor.tierClass]}`}>
      <div className="mb-2 text-xl">🎇</div>
      <p className="label-smallcaps text-gold mb-2">{sponsor.tier}</p>
      <h3 className={`font-display font-semibold leading-tight ${nameSize[sponsor.tierClass]}`}>
        {sponsor.name}
      </h3>
      <div className="mt-3 flex gap-2 text-sm">
        <span>⭐</span>
        <span>🎆</span>
        <span>⭐</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="label-smallcaps mb-6">
            <Script id="home-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Event", name: "Mariposa 250 — America 250 Celebration", description: "A free, day-long community celebration on July 4, 2026 in downtown Mariposa, California. Five music stages, Kids Zone, parade, and a 200-drone light show.", startDate: "2026-07-04T09:00:00-07:00", endDate: "2026-07-04T22:00:00-07:00", eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", isAccessibleForFree: true, url: "https://www.mariposa250.org/", image: "https://www.mariposa250.org/og-image.png", location: { "@type": "Place", name: "Downtown Mariposa", address: { "@type": "PostalAddress", addressLocality: "Mariposa", addressRegion: "CA", postalCode: "95338", addressCountry: "US" } }, organizer: { "@type": "Organization", name: "Mariposa Butterfly Festival", url: "https://www.mariposa250.org" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://www.mariposa250.org/" } }) }} />
            Mariposa County · July 4, 2026
          </p>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-navy md:text-7xl lg:text-[5.5rem]">
            America&rsquo;s 250<sup className="text-[0.5em] align-super">th</sup>{' '}
            Birthday,
            <br />
            <span className="italic text-oxblood">celebrated together.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
            A full day of music, history, community, and a 200-drone light show over downtown Mariposa. Free and open to all, produced by the Mariposa Butterfly Festival in partnership with Mariposa County.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/schedule" className="inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-oxblood">
              See the Schedule
            </Link>
            <Link href="/sponsor" className="inline-flex items-center rounded border border-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-cream">
              Become a Sponsor
            </Link>
            <a href={FB_EVENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded border border-oxblood px-6 py-3 text-sm font-semibold uppercase tracking-widest text-oxblood transition hover:bg-oxblood hover:text-cream">
              <span>📘</span>
              Facebook Event
            </a>
          </div>

          <div className="mt-16">
            <Countdown targetDate="2026-07-04T09:00:00-07:00" />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl grid gap-12 px-6 py-20 md:grid-cols-3">
          <Feature label="Main Event" title="200-Drone Light Show" body="A choreographed drone display by SkyDreams replacing traditional fireworks. Safer for our fire-prone Sierra foothills, and spectacular over 8th Street at dusk." />
          <Feature label="All Day" title="Five Stages of Music" body="Local artists and regional headliners across five downtown stages from morning through evening. Something for every taste." />
          <Feature label="8:00 PM" title="Community Parade" body="Produced by the Mariposa Chamber and Lions Club. Local entries welcome. Floats, classic cars, service clubs, and community groups." />
        </div>
      </section>

      <section className="border-b border-border bg-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <div className="mb-4 text-3xl">🎆 🎇 🎆</div>
            <p className="label-smallcaps mb-3 text-oxblood">Proudly Supported By</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">
              Our Founding Sponsors
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-ink/80 leading-relaxed">
              These generous partners are making Mariposa 250 possible. Join them by becoming a sponsor today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {confirmedSponsors.map((s) => (
              <SponsorBadge key={s.name} sponsor={s} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/sponsor" className="inline-block rounded bg-oxblood px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-navy transition">
              Join Our Sponsors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-2">
        <CTACard label="For Businesses" title="Sponsor the Celebration" body="Eight sponsorship tiers supporting a free community event. Top tiers include logo placement in the 200-drone show itself." href="/sponsor" />
        <CTACard label="For Makers & Food" title="Become a Vendor" body="Two vendor areas across downtown. Applications handled through Mariposa County. Food trucks welcome." href="/vendor" />
      </section>
    </>
  );
}

function Feature({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <p className="label-smallcaps mb-3">{label}</p>
      <h3 className="font-display text-2xl text-navy">{title}</h3>
      <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
    </div>
  );
}

function CTACard({ label, title, body, href }: { label: string; title: string; body: string; href: string }) {
  return (
    <Link href={href} className="group block border border-border bg-white/60 p-8 transition hover:border-navy hover:bg-white">
      <p className="label-smallcaps mb-3">{label}</p>
      <h3 className="font-display text-3xl text-navy">{title}</h3>
      <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
      <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-oxblood group-hover:translate-x-1 transition">
        Learn more →
      </span>
    </Link>
  );
}
