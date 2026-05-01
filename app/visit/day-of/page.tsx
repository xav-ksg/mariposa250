import Link from 'next/link';
import TravelAdvisory from '@/components/TravelAdvisory';
export const metadata = {
  title: 'Day of the Celebration | Mariposa 250',
  description:
    'Day-of logistics for July 4, 2026: parking, road closures, shuttle routes, accessibility, and what to bring.',
};

export default function DayOfPage() {
  return (
    <div className="bg-cream min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Day of the Celebration — Mariposa 250", description: "Day-of logistics for July 4, 2026: parking, road closures, shuttle routes, accessibility, and what to bring.", url: "https://www.mariposa250.org/visit/day-of", about: { "@type": "Event", name: "Mariposa 250 — America's 250th Birthday Celebration", startDate: "2026-07-04T09:00:00-07:00", endDate: "2026-07-04T22:00:00-07:00", eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", isAccessibleForFree: true, url: "https://www.mariposa250.org/", image: ["https://www.mariposa250.org/og-image.png"], location: { "@type": "Place", name: "Downtown Mariposa", address: { "@type": "PostalAddress", streetAddress: "Historic Downtown — 5th & 8th Streets", addressLocality: "Mariposa", addressRegion: "CA", postalCode: "95338", addressCountry: "US" } }, organizer: { "@type": "Organization", name: "Mariposa Butterfly Festival", url: "https://www.mariposa250.org/", logo: "https://www.mariposa250.org/og-image.png" }, performer: [{ "@type": "PerformingGroup", name: "Mariposa 250 Community Lineup" }], offers: { "@type": "Offer", name: "Free Admission", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://www.mariposa250.org/", validFrom: "2025-10-01T00:00:00-07:00" } } }) }} />
      <TravelAdvisory />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/visit"
          className="text-navy/60 text-sm hover:text-navy mb-6 inline-block"
        >
          ← Back to Plan Your Celebration
        </Link>
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Day-of Event Info
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-12 leading-relaxed">
          The essential logistics for Saturday, July 4, 2026 — so you can focus
          on the celebration instead of scrambling for parking.
        </p>

        <div className="bg-oxblood text-cream p-6 rounded-lg mb-10">
          <h2 className="font-serif text-2xl mb-3">
            📍 Quick Reference
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <strong>Event date:</strong> Saturday, July 4, 2026
            </div>
            <div>
              <strong>Hours:</strong> 9:00 AM – 10:30 PM
            </div>
            <div>
              <strong>Location:</strong> Downtown Mariposa
            </div>
            <div>
              <strong>Parade:</strong> 8:00 PM
            </div>
            <div>
              <strong>Drone show:</strong> 9:00 PM (approx.)
            </div>
            <div>
              <strong>Event cost:</strong> Free
            </div>
          </div>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">Parking</h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-8">
          <p className="text-navy/90 leading-relaxed mb-4">
            We have three primary event parking lots serving downtown Mariposa:
          </p>
          <ul className="space-y-3 text-navy/90 mb-6">
            <li className="flex gap-3">
              <span className="text-gold font-semibold">1.</span>
              <div>
                <strong>Frost Shop Marketplace lot</strong>
                <br />
                <span className="text-sm text-navy/70">Primary vendor and attendee parking</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-semibold">2.</span>
              <div>
                <strong>Mariposa Museum and History Center lot</strong>
                <br />
                <span className="text-sm text-navy/70">Central to event footprint</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-semibold">3.</span>
              <div>
                <strong>Third location — details coming soon</strong>
                <br />
                <span className="text-sm text-navy/70">Additional capacity; location to be confirmed</span>
              </div>
            </li>
          </ul>
          <p className="text-navy/90 leading-relaxed mb-4">
            We strongly recommend arriving <strong>before 4 PM</strong> and
            parking in designated event lots rather than circling downtown.
            If you&apos;re staying at a Mariposa-area hotel within walking distance
            of downtown, walking is the easiest option.
          </p>
          <div className="mt-4 p-3 bg-gold/10 border-l-4 border-gold text-sm text-navy/80">
            <strong>Coming in early June:</strong> detailed event map showing
            each parking lot, walking routes to the main event footprint,
            and ADA-accessible options.
          </div>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">
          Shuttle Service
        </h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-8">
          <p className="text-navy/90 leading-relaxed mb-4">
            The <strong>Mariposa 250 Golf Cart</strong> shuttle service will
            run between event parking lots and the main event footprint
            throughout the day. Priority is given to guests with mobility
            limitations, seniors, and families with young children.
          </p>
          <p className="text-navy/90 leading-relaxed">
            Look for <strong>&quot;Mariposa 250 Golf Cart&quot;</strong> signs at each
            lot. Our Golf Cart volunteers wear reflective vests and
            Mariposa 250 shirts. Service is free; tips support the Mariposa
            Butterfly Festival.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">
          Road Closures
        </h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-8">
          <p className="text-navy/90 leading-relaxed mb-4">
            Portions of downtown Mariposa will be closed to vehicle traffic on
            July 4 to accommodate the event footprint and the 8:00 PM parade.
            The Mariposa County Sheriff&apos;s Office is coordinating closures
            with the event team.
          </p>
          <p className="text-navy/90 leading-relaxed">
            Specific street-level closures, times, and detour routes will be
            published on this page, on our social media, and in the Mariposa
            Gazette in the weeks leading up to the event. If you live or own a
            business on a potentially affected street, we&apos;ll coordinate
            directly.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">
          Open Beverages Permitted
        </h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-8">
          <p className="text-navy/90 leading-relaxed mb-4">
            Mariposa County has secured <strong>California ABC approval</strong>{' '}
            for open beverages on Main Street and in the downtown event
            footprint. This means attendees of legal age can walk with alcohol
            within the approved event zone on July 4.
          </p>
          <p className="text-navy/90 leading-relaxed mb-4">
            Beer and wine will be sold by licensed vendors who each maintain
            their own ABC permits. Vendors will check IDs. Please drink
            responsibly.
          </p>
          <p className="text-navy/90 leading-relaxed">
            <strong>No outside glass containers</strong> for safety. No alcohol
            outside the approved event zone — please don&apos;t walk it to your
            car or hotel.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">
          Accessibility
        </h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-8">
          <p className="text-navy/90 leading-relaxed mb-4">
            Mariposa 250 is committed to being accessible. On event day we
            will have:
          </p>
          <ul className="space-y-2 text-navy/90 mb-4">
            <li className="flex gap-3">
              <span className="text-gold">▸</span>
              <span>Designated ADA parking near the event footprint</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold">▸</span>
              <span>
                Mariposa 250 Golf Cart shuttle service with priority for guests
                with mobility limitations
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold">▸</span>
              <span>
                Reserved accessible viewing area for the 8:00 PM parade
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold">▸</span>
              <span>
                ADA-compliant portable restrooms throughout the footprint
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold">▸</span>
              <span>
                The Hospitality Tent for all visitors needing a rest, water,
                or air-conditioned break
              </span>
            </li>
          </ul>
          <p className="text-navy/90 leading-relaxed">
            Have specific accessibility needs or questions? Contact us in
            advance and we&apos;ll make arrangements.{' '}
            <Link
              href="/contact"
              className="text-oxblood hover:underline font-medium"
            >
              Contact the event team →
            </Link>
          </p>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">What to Bring</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-navy/10 p-6 rounded-lg">
            <h3 className="font-serif text-xl text-navy mb-3">
              ✅ Recommended
            </h3>
            <ul className="space-y-2 text-navy/90 text-sm">
              <li>• Water bottle (free refill stations on-site)</li>
              <li>• Sunscreen (July sun in Sierra foothills is intense)</li>
              <li>• Hat and sunglasses</li>
              <li>• Comfortable walking shoes</li>
              <li>• Light layer for evening (temps drop after dark)</li>
              <li>• Cash or card for food vendors and merchandise</li>
              <li>• Camera — the drone show is worth documenting</li>
              <li>• Low-back chair or blanket for the drone show viewing</li>
            </ul>
          </div>

          <div className="bg-white border border-navy/10 p-6 rounded-lg">
            <h3 className="font-serif text-xl text-navy mb-3">❌ Please Leave at Home</h3>
            <ul className="space-y-2 text-navy/90 text-sm">
              <li>• Fireworks, sparklers, or any pyrotechnics</li>
              <li>• Personal drones (FAA restricted airspace during show)</li>
              <li>• Glass containers or bottles</li>
              <li>• Weapons of any kind</li>
              <li>• Large coolers or wheeled carts</li>
              <li>• Pets (service animals welcome)</li>
            </ul>
          </div>
        </div>

        <h2 className="font-serif text-3xl text-navy mb-4 mt-12">Weather</h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-8">
          <p className="text-navy/90 leading-relaxed mb-4">
            July in Mariposa County is hot and dry. Expect daytime
            temperatures of 95–105°F, with evening temperatures in the 70s
            after sunset. Humidity is low. Fire danger in the surrounding
            foothills is typically elevated.
          </p>
          <p className="text-navy/90 leading-relaxed">
            In case of extreme weather, wildfire smoke, or other safety
            concerns, we may adjust the event schedule. Updates will be
            posted here and on our social media accounts.
          </p>
        </div>

        <div className="p-6 bg-navy text-cream rounded-lg">
          <h2 className="font-serif text-2xl mb-3">
            Questions on July 4?
          </h2>
          <p className="mb-4 leading-relaxed">
            The Hospitality Tent and Information Booth will be located in
            downtown Mariposa with volunteer staff from 9 AM to 10 PM. Look
            for signage.
          </p>
          <p className="leading-relaxed mb-4">
            For emergencies, dial 911. For event-related help that&apos;s not an
            emergency, find any volunteer in a Mariposa 250 shirt — they&apos;ll
            radio for whatever you need.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-2 text-gold hover:underline font-medium"
          >
            Contact the event team →
          </Link>
        </div>
      </section>
    </div>
  );
}
