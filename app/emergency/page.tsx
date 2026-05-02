import { EVENT_START_ISO, EVENT_END_ISO } from '@/lib/content';

export const metadata = {
  title: 'Day-Of Info',
  description:
    'Road closures, parking, first aid, accessibility, and safety information for July 4, 2026.',
};

export default function EmergencyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Day-Of Info — Mariposa 250", description: "Road closures, parking, first aid, accessibility, and safety information for July 4, 2026.", url: "https://www.mariposa250.org/emergency", about: { "@type": "Event", name: "Mariposa 250 — America's 250th Birthday Celebration", description: "A free, day-long community celebration on July 4, 2026 in downtown Mariposa, California. Five music stages, Kids Zone, community parade, and a 200-drone light show.", startDate: EVENT_START_ISO, endDate: EVENT_END_ISO, eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", isAccessibleForFree: true, url: "https://www.mariposa250.org/", image: ["https://www.mariposa250.org/og-image.png"], location: { "@type": "Place", name: "Downtown Mariposa", address: { "@type": "PostalAddress", streetAddress: "Historic Downtown — 5th & 8th Streets", addressLocality: "Mariposa", addressRegion: "CA", postalCode: "95338", addressCountry: "US" } }, organizer: { "@type": "Organization", name: "Mariposa Butterfly Festival", url: "https://www.mariposa250.org/", logo: "https://www.mariposa250.org/og-image.png" }, performer: [{ "@type": "PerformingGroup", name: "Mariposa 250 Community Lineup" }], offers: { "@type": "Offer", name: "Free Admission", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://www.mariposa250.org/", validFrom: "2025-10-01T00:00:00-07:00" } } }) }} />
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Day-Of Info · July 4, 2026</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Everything you need to know.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          This page will be the source of truth for day-of logistics — road
          closures, parking, accessibility, and safety. Final details are
          published approximately one week before the event.
        </p>
      </div>

      {/* Emergency */}
      <section className="mt-12 border-2 border-oxblood bg-oxblood/5 p-8">
        <p className="label-smallcaps text-oxblood mb-3">Emergency</p>
        <h2 className="font-display text-3xl text-oxblood">Call 911 First</h2>
        <p className="mt-3 text-ink/85 leading-relaxed">
          For any life-threatening emergency on event day, call 911
          immediately. Then notify event staff — all volunteers and
          coordinators carry radios and can summon additional help.
        </p>
        <ul className="mt-4 space-y-1 text-sm text-ink/85">
          <li><strong>Info Booth:</strong> Central location, staffed continuously from 9 AM to end of event</li>
          <li><strong>First Aid Stations:</strong> Three locations across the event footprint</li>
          <li><strong>Lost Children:</strong> Report to Info Booth — primary reunion point</li>
        </ul>
      </section>

      {/* Road closures */}
      <section className="mt-12">
        <p className="label-smallcaps mb-3">Traffic</p>
        <h2 className="font-display text-3xl text-navy">Road Closures</h2>
        <p className="mt-3 text-ink/80">
          Final road closure schedule will be posted here approximately one
          week before the event, coordinated with the Mariposa County
          Sheriff&rsquo;s Office.
        </p>
        <div className="mt-4 border border-border bg-white/60 p-6">
          <p className="text-sm italic text-muted">
            Anticipated closures include portions of downtown Mariposa,
            Stroming Road, County Park Road, and 8th Street during the
            evening drone show. Specific times and detour routes pending.
          </p>
        </div>
      </section>

      {/* Parking */}
      <section className="mt-12">
        <p className="label-smallcaps mb-3">Parking</p>
        <h2 className="font-display text-3xl text-navy">Where to Park</h2>
        <ul className="mt-4 space-y-2 text-ink/80">
          <li>• <strong>General parking</strong> — designated lots (TBD, announced by late June)</li>
          <li>• <strong>ADA parking</strong> — near main event area</li>
          <li>• <strong>Shuttle service</strong> — from outer parking lots to event center (if needed based on demand)</li>
        </ul>
        <p className="mt-4 text-sm italic text-muted">
          Plan to arrive early. Peak crowd arrives 6–8 PM for parade and drone show.
        </p>
      </section>

      {/* Heat & health */}
      <section className="mt-12 bg-gold/10 border border-gold p-8">
        <p className="label-smallcaps mb-3">Stay Safe in the Heat</p>
        <h2 className="font-display text-3xl text-navy">
          July in Mariposa: 95–105°F
        </h2>
        <ul className="mt-4 space-y-2 text-ink/85">
          <li>• Bring a refillable water bottle — water stations throughout the event</li>
          <li>• Wear sunscreen, a hat, light-colored clothing</li>
          <li>• Take breaks in shaded areas (Kids Zone, Info Booth, museum)</li>
          <li>• Watch for heat exhaustion: dizziness, nausea, headache</li>
          <li>• Visit any First Aid booth if you feel unwell</li>
        </ul>
      </section>

      {/* Accessibility */}
      <section className="mt-12">
        <p className="label-smallcaps mb-3">Accessibility</p>
        <h2 className="font-display text-3xl text-navy">Everyone Welcome</h2>
        <ul className="mt-4 space-y-2 text-ink/80">
          <li>• ADA parking designated near main event</li>
          <li>• Golf cart shuttles available across event footprint</li>
          <li>• Accessible portable restrooms at multiple locations</li>
          <li>• Service animals welcome everywhere</li>
          <li>• Quiet area available for anyone needing a sensory break (location TBD)</li>
        </ul>
      </section>

      {/* Prohibited */}
      <section className="mt-12">
        <p className="label-smallcaps mb-3">Please Leave At Home</p>
        <h2 className="font-display text-3xl text-navy">Prohibited Items</h2>
        <ul className="mt-4 space-y-2 text-ink/80">
          <li>• Personal fireworks (all forms — the drone show is our celebration)</li>
          <li>• Outside alcohol (beer and wine available at permitted locations)</li>
          <li>• Weapons of any kind</li>
          <li>• Drones (FAA airspace is restricted during the drone show)</li>
          <li>• Open flames or personal grills</li>
        </ul>
      </section>
    </div>
  );
}
