import Link from 'next/link';
import TravelAdvisory from '@/components/TravelAdvisory';
import { stayListings, oakhurstListings } from '@/lib/visit-content';
export const metadata = {
  title: 'Where to Stay | Mariposa 250',
  description:
    'Hotels, motels, B&Bs, cabins, and campgrounds for July 4, 2026 visitors to Mariposa County. Plus Oakhurst overflow lodging.',
};

export default function StayPage() {
  const hotels = stayListings.filter((l) => l.type === 'hotel');
  const bnbs = stayListings.filter((l) => l.type === 'bnb');
  const cabinsVacation = stayListings.filter((l) => l.type === 'cabin');
  const camping = stayListings.filter((l) => l.type === 'camping');

  return (
    <div className="bg-cream min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Where to Stay in Mariposa County", description: "Hotels, motels, B&Bs, cabins, and campgrounds for July 4, 2026 visitors to Mariposa County. Plus Oakhurst overflow lodging.", url: "https://www.mariposa250.org/visit/stay", about: { "@type": "TouristDestination", name: "Mariposa County", touristType: "July 4 2026 visitors" } }) }} />
      <TravelAdvisory />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/visit"
          className="text-navy/60 text-sm hover:text-navy mb-6 inline-block"
        >
          ← Back to Plan Your Celebration
        </Link>
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Where to Stay
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-4 leading-relaxed">
          Mariposa County has hotels, motels, historic inns, B&amp;Bs, cabins,
          and campgrounds to fit every budget. Most options are within a short
          drive of downtown Mariposa, where the July 4 event is held.
        </p>
        <div className="bg-gold/20 border-l-4 border-gold p-4 mb-10 text-navy/90">
          <strong>Book early.</strong> July 4 falls on a Saturday in 2026 and
          is peak Yosemite-season weekend. Between this event and normal
          national park tourism, rooms in Mariposa will sell out. If you wait
          past mid-May, you may need to look at Oakhurst or Merced.
        </div>

        <SectionHeader
          title="Hotels &amp; Motels in Mariposa"
          link="https://www.yosemite.com/places-to-stay/hotels-and-motels/"
          linkLabel="Full list at yosemite.com"
        />
        <ListingGrid items={hotels} />

        <SectionHeader
          title="Bed &amp; Breakfasts"
          link="https://www.yosemite.com/places-to-stay/bed-breakfast/"
          linkLabel="Full list at yosemite.com"
        />
        <ListingGrid items={bnbs} />

        <SectionHeader
          title="Cabins &amp; Vacation Rentals"
          link="https://www.yosemite.com/places-to-stay/cabins/"
          linkLabel="Full list at yosemite.com"
        />
        <ListingGrid items={cabinsVacation} />

        <SectionHeader
          title="Camping &amp; RV"
          link="https://www.yosemite.com/places-to-stay/camping-and-rv/"
          linkLabel="Full list at yosemite.com"
        />
        <ListingGrid items={camping} />

        <div className="mt-16 p-6 bg-navy text-cream rounded-lg">
          <h2 className="font-serif text-3xl mb-3">
            Rooms in Mariposa Sold Out? Try Oakhurst.
          </h2>
          <p className="mb-4 leading-relaxed">
            Oakhurst sits about 35 miles south of Mariposa on Highway 41 —
            about 45–60 minutes by car. It has significantly more lodging
            capacity, and is a practical overflow option for July 4 visitors.
            Oakhurst is also a good base if you plan to enter Yosemite
            through the South Entrance (Mariposa Grove of Giant Sequoias).
          </p>
          <div className="space-y-4">
            {oakhurstListings.map((l) => (
              <OakhurstCard key={l.name} listing={l} />
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-cream/20">
            <a
              href="https://www.oakhurstchamber.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-medium"
            >
              Full Oakhurst directory at oakhurstchamber.com →
            </a>
          </div>
        </div>

        <LocalReviewFooter />
      </section>
    </div>
  );
}

function SectionHeader({
  title,
  link,
  linkLabel,
}: {
  title: string;
  link: string;
  linkLabel: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-navy/20 pb-3 mt-12 mb-6">
      <h2
        className="font-serif text-3xl text-navy"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-oxblood text-sm hover:underline hidden sm:block"
      >
        {linkLabel} →
      </a>
    </div>
  );
}

function ListingGrid({ items }: { items: any[] }) {
  if (items.length === 0) {
    return (
      <p className="text-navy/60 italic">
        More listings coming soon. In the meantime, check the full directory
        linked above.
      </p>
    );
  }
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.name}
          className="bg-white p-5 rounded-lg border border-navy/10"
        >
          <h3 className="font-serif text-xl text-navy mb-1">{item.name}</h3>
          <p className="text-sm text-navy/60 mb-2">{item.address}</p>
          {item.description && (
            <p className="text-sm text-navy/80 mb-3">{item.description}</p>
          )}
          <div className="flex gap-4 text-sm">
            {item.phone && (
              <a
                href={`tel:${item.phone.replace(/\D/g, '')}`}
                className="text-oxblood hover:underline"
              >
                {item.phone}
              </a>
            )}
            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-oxblood hover:underline"
              >
                Website →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function OakhurstCard({ listing }: { listing: any }) {
  return (
    <div className="bg-cream/10 p-4 rounded">
      <h3 className="font-serif text-lg text-cream mb-1">{listing.name}</h3>
      <p className="text-sm text-cream/70 mb-1">{listing.address}</p>
      {listing.description && (
        <p className="text-sm text-cream/90">{listing.description}</p>
      )}
    </div>
  );
}

function LocalReviewFooter() {
  return (
    <div className="mt-16 p-4 border border-gold/40 rounded text-xs text-navy/60 italic">
      <strong>Note to event staff:</strong> These listings are compiled from the
      Yosemite-Mariposa County Tourism Bureau, the Mariposa County Chamber of
      Commerce, and verified business directories. Listings are factual
      (name, address, contact) but were not independently reviewed by the
      event team. Before public launch, a local Butterfly Festival board
      member should review for accuracy and any necessary additions/removals.
    </div>
  );
}
