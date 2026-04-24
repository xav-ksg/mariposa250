import Link from 'next/link';
import TravelAdvisory from '@/components/TravelAdvisory';

export const metadata = {
  title: 'Visiting Yosemite | Mariposa 250',
  description:
    'How to visit Yosemite National Park as part of your July 4, 2026 Mariposa trip. Entry reservations, routes, and shuttle info.',
};

export default function YosemitePage() {
  return (
    <div className="bg-cream min-h-screen">
      <TravelAdvisory />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/visit"
          className="text-navy/60 text-sm hover:text-navy mb-6 inline-block"
        >
          ← Back to Plan Your Celebration
        </Link>
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Visiting Yosemite
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-12 leading-relaxed">
          Mariposa is the original gateway to Yosemite, and for many July 4
          visitors, combining the event with a day in the park makes perfect
          sense. Here&apos;s the logistical information that matters most. For
          anything we don&apos;t cover here, the National Park Service is the
          authoritative source.
        </p>

        <div className="bg-oxblood/10 border-l-4 border-oxblood p-6 mb-10">
          <h2 className="font-serif text-2xl text-navy mb-3">
            🎟️ Entry Reservations May Be Required
          </h2>
          <p className="text-navy/90 leading-relaxed mb-3">
            In recent years, Yosemite National Park has required{' '}
            <strong>timed-entry reservations</strong> during peak summer
            weekends. Requirements for July 2026 will be announced by the
            National Park Service — check before you go.
          </p>
          <p className="text-navy/90 leading-relaxed mb-3">
            Reservations (when required) are booked through recreation.gov.
            Your standard Yosemite entry pass is separate from this
            reservation. If you have an annual pass, America the Beautiful
            pass, or Golden Eagle, you still need the timed-entry reservation
            during blackout windows.
          </p>
          <a
            href="https://www.nps.gov/yose/planyourvisit/reservations.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-oxblood font-medium hover:underline"
          >
            Check current reservation requirements at nps.gov →
          </a>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-6">Getting to Yosemite</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <RouteCard
            name="Highway 140"
            subtitle="The All-Year Highway"
            description="The scenic route up the Merced River canyon, entering at the Arch Rock Entrance near El Portal. Historically the most reliable year-round route, though subject to weather and slide closures."
            note="Check conditions — section between Yosemite Bug Mountain Resort and Cedar Lodge has experienced closures."
          />
          <RouteCard
            name="Highway 41"
            subtitle="The Southern Entrance"
            description="Enters at Wawona, near the Mariposa Grove of Giant Sequoias. Best for visitors coming from Fresno or Oakhurst."
            note="Higher-elevation route; generally open year-round but can have winter chain controls."
          />
          <RouteCard
            name="Highway 120"
            subtitle="The Big Oak Flat Entrance"
            description="Enters at the Big Oak Flat Entrance. Best for visitors coming from the Bay Area or Stockton."
            note="Highest elevation of the three routes; chain controls more common in winter."
          />
        </div>

        <h2 className="font-serif text-3xl text-navy mb-6">
          Take the Shuttle, Skip the Stress
        </h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-12">
          <p className="text-navy/90 leading-relaxed mb-4">
            <strong>YARTS (Yosemite Area Regional Transportation System)</strong>{' '}
            runs buses into Yosemite Valley from Mariposa, Midpines, and other
            gateway communities. It&apos;s comfortable, the driver handles the
            road for you, and you don&apos;t have to find parking in the Valley
            (which in summer is a real problem).
          </p>
          <p className="text-navy/90 leading-relaxed mb-4">
            YARTS service runs year-round along the Highway 140 corridor from
            Merced. Check current schedules and fares on their website.
          </p>
          <a
            href="https://yarts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-oxblood font-medium hover:underline"
          >
            YARTS schedules and fares →
          </a>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-6">What to Know Before You Go</h2>
        <ul className="space-y-3 text-navy/90 mb-12">
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>
              <strong>Park entry fee:</strong> $35 per vehicle (7-day pass) as
              of 2025. America the Beautiful pass accepted. Check current
              fees at nps.gov.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>
              <strong>Valley gets hot and crowded in July:</strong> Temperatures
              in Yosemite Valley can exceed 95°F. Arrive early, bring water,
              wear sunscreen.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>
              <strong>Air quality varies:</strong> Summer wildfires can
              affect AQI. Check{' '}
              <a
                href="https://www.airnow.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-oxblood hover:underline"
              >
                airnow.gov
              </a>{' '}
              before committing to strenuous hikes.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>
              <strong>Yosemite Falls in July:</strong> Water flow in Yosemite
              Falls decreases significantly through summer. For the dramatic
              waterfall photos, April–June is better; by July, flow is
              reduced or nearly absent.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>
              <strong>Mariposa Grove of Giant Sequoias:</strong> Accessed via
              the South Entrance (Hwy 41). Free shuttle runs from the
              Welcome Center April–November.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>
              <strong>Bring cash/card for gas:</strong> Gas stations inside
              the park are limited and expensive. Fill up in Mariposa, Fish
              Camp, or El Portal before entering.
            </span>
          </li>
        </ul>

        <div className="p-6 bg-navy text-cream rounded-lg">
          <h2 className="font-serif text-2xl mb-3">
            The Park Service Is the Authority
          </h2>
          <p className="mb-4 leading-relaxed">
            Weather, road closures, reservation requirements, and wildfire
            conditions can all change quickly. For anything mission-critical
            to your trip, check with the National Park Service directly.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <a
              href="https://www.nps.gov/yose/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              NPS Yosemite Main Site →
            </a>
            <a
              href="https://www.nps.gov/yose/planyourvisit/conditions.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Current Conditions & Alerts →
            </a>
            <a
              href="https://www.nps.gov/yose/planyourvisit/reservations.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Entry Reservations →
            </a>
            <a
              href="tel:2093720200"
              className="text-gold hover:underline"
            >
              Road Hotline: (209) 372-0200 →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function RouteCard({
  name,
  subtitle,
  description,
  note,
}: {
  name: string;
  subtitle: string;
  description: string;
  note: string;
}) {
  return (
    <div className="bg-white p-5 rounded-lg border border-navy/10 flex flex-col">
      <h3 className="font-serif text-xl text-navy">{name}</h3>
      <p className="text-oxblood text-sm font-medium mb-3">{subtitle}</p>
      <p className="text-sm text-navy/80 mb-3 flex-1">{description}</p>
      <p className="text-xs text-navy/60 italic border-t border-navy/10 pt-2">
        {note}
      </p>
    </div>
  );
}
