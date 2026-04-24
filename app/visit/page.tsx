import Link from 'next/link';
import TravelAdvisory from '@/components/TravelAdvisory';

export const metadata = {
  title: 'Plan Your Visit | Mariposa 250 Celebration',
  description:
    "Plan your July 4, 2026 visit to downtown Mariposa, California for the America 250 Celebration. Where to stay, eat, and explore Yosemite.",
};

export default function VisitPage() {
  return (
    <div className="bg-cream min-h-screen">
      <TravelAdvisory />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Plan Your Celebration
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-12 leading-relaxed">
          Coming to Mariposa for July 4, 2026? You&apos;re in for more than just an
          evening of fireworks reimagined. Mariposa County is the gateway to
          Yosemite, a Gold Rush town with more than 170 years of history, and a
          perfect base for a long weekend in the Sierra. Here&apos;s how to make the
          most of your trip.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <VisitCard
            href="/visit/stay"
            title="Where to Stay"
            description="Hotels, motels, B&Bs, cabins, and campgrounds in Mariposa County and overflow options in Oakhurst."
            icon="🏨"
          />
          <VisitCard
            href="/visit/eat"
            title="Where to Eat"
            description="Local restaurants, cafés, and specialty food spots — from Gold Rush saloons to modern farm-to-table."
            icon="🍴"
          />
          <VisitCard
            href="/visit/yosemite"
            title="Visiting Yosemite"
            description="Entry reservations, road conditions, shuttle info, and how to make Yosemite part of your trip."
            icon="🏔️"
          />
          <VisitCard
            href="/visit/things-to-do"
            title="Things to Do"
            description="Museums, the Mariposa Grove of Giant Sequoias, wineries, tours, and local experiences."
            icon="🗺️"
          />
          <VisitCard
            href="/visit/day-of"
            title="Day-of Event Info"
            description="Parking, road closures, shuttle routes, accessibility, and what to bring on July 4."
            icon="🎆"
            highlight
          />
        </div>

        <div className="mt-16 p-6 bg-navy/5 border-l-4 border-gold rounded-r">
          <h2 className="font-serif text-2xl text-navy mb-3">
            A Note on Our Listings
          </h2>
          <p className="text-navy/80 leading-relaxed mb-3">
            We&apos;ve curated the information on these pages from the Mariposa
            County Chamber of Commerce, the Yosemite-Mariposa County Tourism
            Bureau, the National Park Service, and local partners in Oakhurst.
            These are the authoritative sources for anything in this region;
            our goal is to give you a useful starting point and then point you
            to them for the full picture.
          </p>
          <p className="text-navy/80 leading-relaxed">
            Our event is not a booking platform. To make reservations, you&apos;ll
            need to contact the businesses directly or use their preferred
            booking partners. We&apos;ve included phone numbers and website links
            wherever possible.
          </p>
        </div>
      </section>
    </div>
  );
}

function VisitCard({
  href,
  title,
  description,
  icon,
  highlight,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block p-8 rounded-lg border-2 transition hover:shadow-lg ${
        highlight
          ? 'bg-oxblood text-cream border-oxblood hover:bg-oxblood/90'
          : 'bg-white border-navy/10 hover:border-gold'
      }`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className={`font-serif text-2xl mb-2 ${highlight ? '' : 'text-navy'}`}>
        {title}
      </h2>
      <p className={highlight ? 'text-cream/90' : 'text-navy/70'}>
        {description}
      </p>
    </Link>
  );
}
