import Link from 'next/link';
import { EVENT_START_ISO, EVENT_END_ISO } from '@/lib/content';
export const metadata = {
    title: 'Become a Vendor',
    description: 'Two vendor locations for the Mariposa 250 Celebration on July 4, 2026. Apply through Mariposa County. Food trucks welcome.',
    alternates: { canonical: 'https://www.mariposa250.org/vendor' },
    openGraph: {
          title: 'Become a Vendor | Mariposa 250',
          description: 'Two vendor areas in downtown Mariposa for July 4, 2026. Apply through Mariposa County. Food trucks welcome.',
          url: 'https://www.mariposa250.org/vendor',
    },
};

const COUNTY_VENDOR_URL = 'https://www.mariposacounty.gov/3033/Become-a-Vendor';

type BoothOption = {
  label: string;
  price: string;
};

const stromingBooths: BoothOption[] = [
  { label: '10x10 Booth', price: '$75' },
  { label: '10x20 Booth', price: '$125' },
  { label: 'Food Truck', price: '$150' },
];

const frostBooths: BoothOption[] = [
  { label: '10x10 Booth', price: 'TBD' },
  { label: '10x20 Booth', price: 'TBD' },
  { label: 'Food Truck', price: 'TBD' },
];

function BoothList({ booths }: { booths: BoothOption[] }) {
  return (
    <ul className="mt-6 space-y-2">
      {booths.map((b) => (
        <li key={b.label} className="flex items-center justify-between border-b border-navy/10 py-2">
          <span className="text-navy">{b.label}</span>
          <span className="font-semibold text-oxblood">{b.price}</span>
        </li>
      ))}
    </ul>
  );
}

function CountyVendorButton() {
  return (
    <a href={COUNTY_VENDOR_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded bg-oxblood px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-navy transition">
      Apply through Mariposa County
    </a>
  );
}

function FrostShopButton() {
  return (
    <a href="mailto:Xav@FrostShopMarketplace.com?subject=Frost%20Shop%204th%20of%20July%20Vendor%20Inquiry" className="mt-6 inline-block rounded border-2 border-navy bg-cream px-6 py-3 text-sm font-semibold uppercase tracking-widest text-navy hover:bg-navy hover:text-cream transition">
      Contact for Frost Shop vendor info
    </a>
  );
}

export default function VendorPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'Become a Vendor at Mariposa 250',
                description: 'Two vendor locations in downtown Mariposa for the July 4, 2026 Mariposa 250 Celebration. Apply through Mariposa County. Food trucks welcome.',
                url: 'https://www.mariposa250.org/vendor',
                about: {
                  '@type': 'Event',
                  name: "Mariposa 250 — America's 250th Birthday Celebration",
                  startDate: EVENT_START_ISO,
                  endDate: EVENT_END_ISO,
                  eventStatus: 'https://schema.org/EventScheduled',
                  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                  isAccessibleForFree: true,
                  url: 'https://www.mariposa250.org/',
                  image: ['https://www.mariposa250.org/og-image.png'],
                  location: { '@type': 'Place', name: 'Downtown Mariposa', address: { '@type': 'PostalAddress', streetAddress: 'Historic Downtown — 5th & 8th Streets', addressLocality: 'Mariposa', addressRegion: 'CA', postalCode: '95338', addressCountry: 'US' } },
                  organizer: { '@type': 'Organization', name: 'Mariposa Butterfly Festival', url: 'https://www.mariposa250.org/', logo: 'https://www.mariposa250.org/og-image.png' },
                  performer: [{ '@type': 'PerformingGroup', name: 'Mariposa 250 Community Lineup' }],
                  offers: { '@type': 'Offer', name: 'Free Admission', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: 'https://www.mariposa250.org/', validFrom: '2025-10-01T00:00:00-07:00' },
                }
    }) }} />
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Vendor Information</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Two locations.
          <br />
          <span className="italic text-oxblood">One celebration.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          The Mariposa 250 Celebration features two downtown vendor areas, each with its own character and operator. Choose the location that fits your needs. Both are part of the official event footprint.
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 border border-navy/10">
          <h2 className="font-serif text-3xl text-navy">Stroming Road & 5th Street</h2>
          <p className="mt-2 text-sm text-oxblood uppercase tracking-widest">Applications handled by Mariposa County</p>
          <p className="mt-4 text-navy/80 leading-relaxed">
            The primary downtown vendor footprint. Food vendors, artisans, retail, and community organizations. Vendor applications and payment are processed through the Mariposa County government website.
          </p>
          <BoothList booths={stromingBooths} />
          <CountyVendorButton />
          <p className="mt-4 text-xs text-navy/60 leading-relaxed">
            Pricing listed above is indicative. Final pricing, booth availability, and all terms are set by Mariposa County on the official application page.
          </p>
        </div>

        <div className="rounded-lg bg-white p-8 border border-navy/10">
          <h2 className="font-serif text-3xl text-navy">Frost Shop Marketplace</h2>
          <p className="mt-2 text-sm text-oxblood uppercase tracking-widest">Managed by Frost Shop Marketplace</p>
          <p className="mt-4 text-navy/80 leading-relaxed">
            An eclectic marketplace setting that doubles as Stage 3 of the event. Frost Shop manages its own vendor intake separately from the main event footprint. Pricing and booth sizes set by Frost Shop directly.
          </p>
          <BoothList booths={frostBooths} />
          <FrostShopButton />
          <p className="mt-4 text-xs text-navy/60 leading-relaxed">
            Frost Shop Marketplace vendor applications and pricing are handled through Mariposa 250 directly. Contact us for details while this system is being finalized.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-navy text-cream p-8">
        <h2 className="font-serif text-2xl text-gold mb-4">Why Two Operators?</h2>
        <p className="text-cream/90 leading-relaxed max-w-3xl">
          Mariposa 250 is co-hosted by Mariposa County and the Mariposa Butterfly Festival. For the primary Stroming Road vendor footprint, the County handles vendor applications and payments through its official government portal. This keeps revenue collection transparent and properly processed. The Frost Shop Marketplace is a separate private venue that is operating as Stage 3 of the event, and they handle their own vendor coordination.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/" className="text-navy/60 text-sm hover:text-navy">
          Back to home
        </Link>
      </div>
    </div>
  );
}
