import Link from 'next/link';
import { vendorLinks } from '@/lib/stripe-links';

export const metadata = {
  title: 'Vendor Information',
  description:
    'Two vendor locations for the Mariposa 250 America 250 Celebration on July 4, 2026. Book your booth at Stroming Road & 5th Street (Butterfly Festival operated) or Frost Shop Marketplace.',
};

export default function VendorPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Vendor Information</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Two locations.
          <br />
          <span className="italic text-oxblood">One celebration.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          The Mariposa 250 Celebration features two downtown vendor areas,
          each with its own character and operator. Choose the location that
          fits your needs — both are part of the official event footprint.
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <LocationCard
          name="Stroming Road & 5th Street"
          operator="Operated by Mariposa Butterfly Festival"
          blurb="Our primary vendor area just off downtown. Paved setup, generator access available, with vehicle access for load-in. Payments processed through the Butterfly Festival 501(c)(3)."
          booths={[
            { label: '10×10 Booth', price: '$75', link: vendorLinks.stroming10x10 },
            { label: '10×20 Booth', price: '$125', link: vendorLinks.stroming10x20 },
            { label: 'Food Truck', price: '$150', link: vendorLinks.stromingFoodTruck },
          ]}
        />
        <LocationCard
          name="Frost Shop Marketplace"
          operator="Operated by Frost Shop Marketplace"
          blurb="An eclectic marketplace setting that doubles as Stage 3 of the event. Frost Shop manages its own vendor intake and payment processing. Pricing and booth sizes set by Frost Shop directly."
          booths={[
            { label: '10×10 Booth', price: 'TBD', link: vendorLinks.frost10x10 },
            { label: '10×20 Booth', price: 'TBD', link: vendorLinks.frost10x20 },
            { label: 'Food Truck', price: 'TBD', link: vendorLinks.frostFoodTruck },
          ]}
        />
      </div>

      <div className="mt-20 border-t border-border pt-10 grid gap-10 md:grid-cols-2">
        <div>
          <p className="label-smallcaps mb-3">What's Included</p>
          <ul className="space-y-2 text-ink/85">
            <li>• Listing on the official event map and program</li>
            <li>• Vendor parking pass (emailed on payment)</li>
            <li>• Dedicated Vendor Coordinator on-site during event</li>
            <li>• Access to staff-only refreshments and restrooms</li>
            <li>• Load-in window 6:00–8:30 AM, load-out after 9:30 PM</li>
          </ul>
        </div>
        <div>
          <p className="label-smallcaps mb-3">What's Required</p>
          <ul className="space-y-2 text-ink/85">
            <li>• Current Certificate of Insurance (COI)</li>
            <li>
              • Food vendors: Mariposa County Health Department permit and
              food handler credentials
            </li>
            <li>• Signed vendor agreement</li>
            <li>• Booth setup must be complete by 9:00 AM on July 4</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded border border-oxblood bg-oxblood/5 p-8">
        <p className="label-smallcaps mb-2">Questions</p>
        <p className="font-display text-2xl text-navy">
          Not sure which location is right for you?
        </p>
        <p className="mt-3 text-ink/80 leading-relaxed">
          Reach out to our Vendor Coordinator — we'll help you decide based on
          your product, crowd expectations, and logistical needs.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
        >
          Contact Vendor Coordinator
        </Link>
      </div>
    </div>
  );
}

interface Booth {
  label: string;
  price: string;
  link: string;
}

function LocationCard({
  name,
  operator,
  blurb,
  booths,
}: {
  name: string;
  operator: string;
  blurb: string;
  booths: Booth[];
}) {
  return (
    <article className="border border-border bg-white/60 p-8">
      <h2 className="font-display text-3xl text-navy">{name}</h2>
      <p className="mt-1 text-sm italic text-muted">{operator}</p>
      <p className="mt-4 text-ink/80 leading-relaxed">{blurb}</p>

      <div className="mt-8 rule-double">
        <p className="label-smallcaps">Booth Options</p>
      </div>

      <ul className="mt-4 space-y-3">
        {booths.map((booth) => (
          <li
            key={booth.label}
            className="flex items-center justify-between border-b border-border pb-3"
          >
            <div>
              <p className="font-semibold text-navy">{booth.label}</p>
              <p className="text-2xl font-display text-oxblood">{booth.price}</p>
            </div>
            {booth.link ? (
              <a
                href={booth.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
              >
                Book Now
              </a>
            ) : (
              <span className="text-xs italic text-muted">Coming soon</span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
