import Link from 'next/link';
export const metadata = {
  title: 'About',
  description:
    'The story behind the Mariposa 250 America 250 Celebration. A community event produced by the Mariposa Butterfly Festival 501(c)(3) in partnership with Mariposa County.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AboutPage", name: "About Mariposa 250", description: "The story behind the Mariposa 250 America 250 Celebration. A community event produced by the Mariposa Butterfly Festival 501(c)(3) in partnership with Mariposa County.", url: "https://www.mariposa250.org/about", mainEntity: { "@type": "Organization", name: "Mariposa Butterfly Festival", legalName: "Mariposa Butterfly Festival", taxID: "85-2475621", nonprofitStatus: "501(c)(3)", description: "A 501(c)(3) nonprofit dedicated to community events celebrating Mariposa County.", url: "https://www.mariposa250.org" } }) }} />
      <p className="label-smallcaps mb-4">About</p>
      <h1 className="font-display text-5xl md:text-6xl text-navy">
        A county celebrating
        <br />
        <span className="italic text-oxblood">250 years.</span>
      </h1>

      <div className="mt-12 space-y-8 text-lg leading-relaxed text-ink/85">
        <p>
          On July 4, 2026, America turns 250. In Mariposa County — the
          original gateway to Yosemite, home to California&rsquo;s oldest
          continuously-published weekly newspaper, and a community that has
          weathered gold rushes, fires, and floods for over a century and a
          half — we&rsquo;re marking the occasion the way we know best:
          together, outdoors, with music, neighbors, history, and one
          spectacular evening sky.
        </p>

        <p>
          Mariposa 250 is a free, day-long community celebration produced by
          the <strong>Mariposa Butterfly Festival</strong>, a 501(c)(3)
          nonprofit, in partnership with <strong>Mariposa County</strong>.
          Our goal is simple: a July 4th that honors where our country has
          been, where our community stands today, and brings everyone in
          Mariposa County together for one memorable day.
        </p>

        <div className="rule-double my-10" />

        <h2 className="font-display text-3xl text-navy">What the day looks like</h2>
        <p>
          Gates open at 9:00 AM. Five stages of music play throughout the
          day. The Kids Zone runs from 11:00 AM to 5:00 PM. The Mariposa
          Museum and History Center hosts historical programming including a
          History-Themed Costume Contest and a Historical Firearms Auction.
          Vendor booths line Stroming Road and fill the Frost Shop
          Marketplace. Golf carts shuttle visitors who need a ride.
        </p>
        <p>
          At 8:00 PM, the Mariposa Chamber of Commerce and the Mariposa Lions
          Club produce a community parade through downtown. At 9:00 PM, a
          200-drone light show rises over 8th Street — choreographed to tell
          the story of America&rsquo;s 250 years, the history of Mariposa
          County, and our sponsors who made the day possible.
        </p>

        <div className="rule-double my-10" />

        <h2 className="font-display text-3xl text-navy">Why drones instead of fireworks</h2>
        <p>
          Mariposa County sits in the Sierra foothills. July is our driest,
          highest-risk month for wildfire. A 200-drone light show delivers a
          spectacular visual celebration without ignition risk, without the
          noise stress that loud fireworks cause to pets, wildlife, children,
          and veterans — and frankly, with a more memorable show.
        </p>

        <div className="rule-double my-10" />

        <h2 className="font-display text-3xl text-navy">Produced by</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="label-smallcaps">Co-Host</p>
            <h3 className="font-display text-2xl text-navy mt-1">
              Mariposa Butterfly Festival
            </h3>
            <p className="mt-2 text-ink/80">
              A 501(c)(3) nonprofit (EIN 85-2475621) dedicated to community
              events celebrating Mariposa County. All contributions to
              Mariposa 250 flow through the Butterfly Festival and are fully
              tax-deductible.
            </p>
          </div>

          <div>
            <p className="label-smallcaps">Co-Host</p>
            <h3 className="font-display text-2xl text-navy mt-1">
              Mariposa County
            </h3>
            <p className="mt-2 text-ink/80">
              Mariposa County government is a proud partner in this
              celebration, providing coordination with the Sheriff&rsquo;s
              Office, Public Works, and the Board of Supervisors.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-10 flex flex-wrap gap-4">
          <Link
            href="/sponsor"
            className="inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
          >
            Sponsor the Celebration
          </Link>
          <Link
            href="/volunteer"
            className="inline-flex items-center rounded border border-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-navy hover:bg-navy hover:text-cream transition"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
