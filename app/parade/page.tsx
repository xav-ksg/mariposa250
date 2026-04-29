
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Community Parade',
  description: 'Community parade at 8:00 PM on July 4, 2026 in downtown Mariposa. Produced by the Mariposa Chamber of Commerce and Lions Club. Entry information and application.',
  alternates: { canonical: 'https://www.mariposa250.org/parade' },
  openGraph: {
    title: 'Community Parade | Mariposa 250',
    description: 'A parade by and for Mariposa County. Step-off at 8:00 PM on July 4, 2026. Local businesses, schools, classic cars, and community groups welcome.',
    url: 'https://www.mariposa250.org/parade',
  },
};

const paradeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Mariposa 250 Community Parade',
  description: 'A parade by and for Mariposa County, produced by the Mariposa Chamber of Commerce and the Mariposa Lions Club.',
  startDate: '2026-07-04T20:00:00-07:00',
  endDate: '2026-07-04T21:00:00-07:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  isAccessibleForFree: true,
  url: 'https://www.mariposa250.org/parade',
  location: {
    '@type': 'Place',
    name: 'Downtown Mariposa',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mariposa',
      addressRegion: 'CA',
      postalCode: '95338',
      addressCountry: 'US',
    },
  },
  organizer: [
    { '@type': 'Organization', name: 'Mariposa Chamber of Commerce' },
    { '@type': 'Organization', name: 'Mariposa Lions Club' },
  ],
};
const COUNTY_PARADE_URL = 'https://www.mariposacounty.gov/3034/Parade-Entry';

function CountyParadeButton() {
  return (
    <a href={COUNTY_PARADE_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-oxblood px-8 py-4 text-base font-semibold uppercase tracking-widest text-cream hover:bg-navy transition">
      Apply through Mariposa County
    </a>
  );
}
export default function ParadePage() {
  return (
    <div><Script id="schema-parade" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(paradeSchema) }} />
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Community Parade · 8:00 PM</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          A parade by and for
          <br />
          <span className="italic text-oxblood">Mariposa County.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          Produced by the Mariposa Chamber of Commerce and the Mariposa Lions Club, the Community Parade kicks off the evening celebration. Local businesses, service clubs, schools, classic cars, and community groups are all welcome to enter.
        </p>
      </div>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <p className="label-smallcaps mb-3">The Route</p>
          <h2 className="font-display text-3xl text-navy">Through downtown Mariposa</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Final parade route will be published approximately one week before the event, coordinated with the Mariposa County Sheriff&rsquo;s Office. The route winds through the heart of downtown, ending near the drone show viewing area on 8th Street.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            <li>Line-up: 7:00 PM at the staging area (TBD)</li>
            <li>Step-off: 8:00 PM</li>
            <li>Expected length: 45 to 60 minutes</li>
            <li>Judging: Golf cart decoration contest judged at 6:00 PM prior</li>
          </ul>
        </div>

        <div>
          <p className="label-smallcaps mb-3">Entry Guidelines</p>
          <h2 className="font-display text-3xl text-navy">What we ask of entries</h2>
          <ul className="mt-4 space-y-3 text-ink/80">
            <li>
              <strong className="text-navy">Family-friendly.</strong> Content appropriate for all ages and all political perspectives.
            </li>
            <li>
              <strong className="text-navy">Safe.</strong> No live fireworks, confetti cannons, or thrown candy directly at crowds (hand distribution by walkers only).
            </li>
            <li>
              <strong className="text-navy">Insured.</strong> Commercial entries with vehicles must carry liability insurance; COI on file before parade day.
            </li>
            <li>
              <strong className="text-navy">On-time.</strong> Line up by 7:00 PM. Late entries cannot be accommodated.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-10">
        <div className="rounded-lg bg-navy text-cream p-8 text-center">
          <p className="label-smallcaps text-gold mb-3">Parade Entry Applications</p>
          <h2 className="font-display text-3xl text-gold mb-4">Enter the Parade</h2>
          <p className="text-cream/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Parade entry applications are handled through the Mariposa County government portal. Click below to submit your entry. You will receive confirmation and line-up instructions from the County and Mariposa 250 organizers closer to the event.
          </p>
          <CountyParadeButton />
          <p className="mt-6 text-cream/70 text-sm">
            Questions about parade entries? Email the Mariposa Chamber of Commerce at kari@mariposachamber.org or jacob@mariposachamber.org.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-navy/60 text-sm hover:text-navy">
          Back to home
        </Link>
      </div>
    </div>
    </div>
  );
}
