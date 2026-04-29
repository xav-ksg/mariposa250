import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: 'Press Kit',
    description: 'Media resources, press releases, and journalist contacts for the Mariposa 250 Celebration on July 4, 2026.',
    alternates: { canonical: 'https://www.mariposa250.org/press' },
    openGraph: {
          title: 'Press Kit | Mariposa 250',
          description: 'Press releases, event facts, photos, and journalist contact information for Mariposa 250.',
          url: 'https://www.mariposa250.org/press',
    },
};

export default function PressPage() {
  return (
    <div className="bg-cream min-h-screen">
              <Script id="press-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'NewsMediaOrganization',
                name: 'Mariposa 250 Press Office',
                description: 'Press kit, media resources, press releases, story angles, and journalist contacts for the Mariposa 250 Celebration on July 4, 2026.',
                url: 'https://www.mariposa250.org/press',
                email: 'press@mariposa250.org',
                telephone: '+1-209-201-4137',
                parentOrganization: { '@type': 'Organization', name: 'Mariposa 250', url: 'https://www.mariposa250.org' },
                contactPoint: { '@type': 'ContactPoint', name: 'Kimberly Vaughn', contactType: 'Press', email: 'press@mariposa250.org', telephone: '+1-209-201-4137' }
    }) }} />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Press Kit
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-12 leading-relaxed">
          A free community celebration. A 200-drone light show replacing
          fireworks. A small Gold Rush town hosting America&apos;s 250th
          birthday. Below are the resources journalists need to tell this
          story.
        </p>

        {/* MEDIA CONTACT */}
        <div className="bg-oxblood text-cream p-6 rounded-lg mb-12">
          <h2 className="font-serif text-2xl mb-3">Media Contact</h2>
          <p className="text-cream/90 mb-4 leading-relaxed">
            For interview requests, high-resolution assets, embargoed access,
            or fact-checking, contact the event directly:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-cream/70 mb-1">Press Contact</div>
              <div className="font-medium">
                Kimberly Vaughn
                <br />
                Mariposa 250 Celebration
              </div>
            </div>
            <div>
              <div className="text-cream/70 mb-1">Reach us</div>
              <div className="font-medium">
                <a
                  href="mailto:press@mariposa250.org"
                  className="text-gold hover:underline"
                >
                  press@mariposa250.org
                </a>
                <br />
                209-201-4137
              </div>
            </div>
          </div>
        </div>

        {/* QUICK FACTS */}
        <h2 className="font-serif text-3xl text-navy mb-6">Quick Facts</h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-12">
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-navy/90">
            <FactItem label="Event Name" value="Mariposa 250 Celebration" />
            <FactItem
              label="Date"
              value="Saturday, July 4, 2026"
            />
            <FactItem label="Hours" value="9:00 AM – 10:30 PM" />
            <FactItem label="Location" value="Downtown Mariposa, California" />
            <FactItem
              label="Expected Attendance"
              value="5,000–7,000"
            />
            <FactItem
              label="Admission"
              value="Free to the public"
            />
            <FactItem
              label="Co-hosts"
              value="Mariposa County + Mariposa Butterfly Festival (501(c)(3), EIN 85-2475621)"
            />
            <FactItem
              label="Headline Feature"
              value="200-drone light show by Skydreams over 8th Street, replacing traditional fireworks"
            />
            <FactItem
              label="Parade"
              value="Produced by Mariposa County Chamber of Commerce + Lions Club, stepping off at 8:00 PM"
            />
            <FactItem
              label="Stages"
              value="Five live music stages across downtown"
            />
            <FactItem
              label="Website"
              value="mariposa250.org"
            />
          </div>
        </div>

        {/* STORY ANGLES */}
        <h2 className="font-serif text-3xl text-navy mb-6">Story Angles</h2>
        <div className="space-y-4 mb-12">
          <StoryAngle
            title="Fireworks, Reimagined"
            description="A 200-drone aerial light show replaces traditional fireworks on one of California's most fire-prone weekends. Silent, safer for wildlife and watersheds, and designed specifically for the Sierra Nevada foothills. First of its scale in Mariposa County."
          />
          <StoryAngle
            title="Gold Rush Meets 250"
            description="Mariposa County is one of the original California Gold Rush counties, home to the state's oldest courthouse still in use (1854) and the oldest continuously-published weekly newspaper (Mariposa Gazette, est. 1854). A Historical Firearms Auction at the Mariposa Museum and History Center connects July 4, 2026 back to the frontier era that shaped California's entry into the Union."
          />
          <StoryAngle
            title="Small Town Scales Up"
            description="A county of ~17,000 people hosting an event for 5,000–7,000. The logistics story: how a volunteer-driven Butterfly Festival 501(c)(3) partnered with the County to organize five stages, a parade, first aid, security, shuttles, and a drone show on a community budget."
          />
          <StoryAngle
            title="Economic Impact of Heritage Events"
            description="Free community events like this drive meaningful economic activity: lodging, dining, tours, and repeat visitation. Mariposa County is also the main gateway to Yosemite National Park — July 4 traffic brings overnight stays across a region whose tourism economy funds local schools, health services, and infrastructure."
          />
          <StoryAngle
            title="California and the 250th"
            description="As California reckons with its complex role in America's first 250 years — Indigenous history, Gold Rush, statehood, the Chinese Exclusion era, the Dust Bowl, the Japanese internment, and modern Silicon Valley — Mariposa represents a specific and significant piece of the state's story. The event invites attendees to engage with both celebration and history."
          />
        </div>

        {/* PRESS RELEASES */}
        <h2 className="font-serif text-3xl text-navy mb-6">Press Releases</h2>
        <p className="text-navy/80 mb-6 leading-relaxed">
          Our press release schedule tracks the build-up to July 4 with
          releases targeted at specific news windows. All releases are
          available upon request to{' '}
          <a
            href="mailto:press@mariposa250.org"
            className="text-oxblood hover:underline"
          >
            press@mariposa250.org
          </a>
          .
        </p>
        <div className="bg-white border border-navy/10 rounded-lg overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead className="bg-navy/5 text-navy">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Release</th>
                <th className="text-left px-4 py-3 font-medium">
                  Target Date
                </th>
                <th className="text-left px-4 py-3 font-medium">Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/10 text-navy/90">
              <tr>
                <td className="px-4 py-3 font-medium">
                  #1 — Event Announcement
                </td>
                <td className="px-4 py-3">Early May 2026</td>
                <td className="px-4 py-3">
                  Full event reveal; drone show; co-host announcement
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #2 — Drone Show Deep Dive
                </td>
                <td className="px-4 py-3">Mid May 2026</td>
                <td className="px-4 py-3">
                  Skydreams; fire safety; how the show is choreographed
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #3 — Sponsor Launch
                </td>
                <td className="px-4 py-3">Late May 2026</td>
                <td className="px-4 py-3">
                  Opening of sponsor tiers; Presenting Sponsor call
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #4 — Volunteer Call
                </td>
                <td className="px-4 py-3">Early June 2026</td>
                <td className="px-4 py-3">
                  Service club partnerships; volunteer recruitment
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #5 — Visitor Planning
                </td>
                <td className="px-4 py-3">Mid June 2026</td>
                <td className="px-4 py-3">
                  Plan Your Visit launch; lodging; Yosemite access
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #6 — Safety & Road Closures
                </td>
                <td className="px-4 py-3">Late June 2026</td>
                <td className="px-4 py-3">
                  Public safety plan; road closures; day-of logistics
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #7 — Final Countdown
                </td>
                <td className="px-4 py-3">Week of July 4</td>
                <td className="px-4 py-3">
                  Final schedule; last-minute attendee info
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #8 — Post-Event Recap
                </td>
                <td className="px-4 py-3">Week of July 11</td>
                <td className="px-4 py-3">
                  Attendance numbers; highlights; thank-yous
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  #9 — After-Action Report
                </td>
                <td className="px-4 py-3">Late July 2026</td>
                <td className="px-4 py-3">
                  Lessons learned; 2027 outlook
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* KEY PEOPLE */}
        <h2 className="font-serif text-3xl text-navy mb-6">Key People for Interviews</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <PersonCard
            name="Jenni Kiser"
            role="Supervisor, Mariposa County Board of Supervisors (District 4) / Co-Producer, Mariposa 250"
            context="How the drone show is choreographed, FAA approvals, fire-safety design"
          />
          <PersonCard
            name="Kimberly Vaughn"
            role="Executive Director, Mariposa Butterfly Festival"
            context="501(c)(3) context, community fundraising, nonprofit mission"
          />
          <PersonCard
            name="Gail Dreyfus"
            role="Stage Manager"
            context="Five-stage music programming, community performers, schedule"
          />
          <PersonCard
            name="Captain Wes Smith"
            role="Event Incident Commander"
            context="Safety planning, first responder coordination, emergency protocols"
          />
          <PersonCard
            name="Kari Kisela"
            role="Mariposa County Chamber of Commerce and Visitors Center"
            context="Chamber operations, parade coordination, business engagement. kari@mariposachamber.org"
          />
          <PersonCard
            name="Jacob Hawley"
            role="Mariposa County Chamber of Commerce and Visitors Center"
            context="Chamber operations, parade coordination, business engagement. jacob@mariposachamber.org"
          />
        </div>

        {/* VISUAL ASSETS */}
        <h2 className="font-serif text-3xl text-navy mb-6">Visual Assets</h2>
        <div className="bg-white border border-navy/10 p-6 rounded-lg mb-12">
          <p className="text-navy/90 mb-4 leading-relaxed">
            High-resolution event logos, background photography of Mariposa
            County, drone show renderings, and sponsor-approved imagery are
            available upon request.
          </p>
          <p className="text-navy/90 mb-4 leading-relaxed">
            All visual assets may be used freely in coverage of the Mariposa
            250 Celebration. Please credit &ldquo;Mariposa 250 Celebration&rdquo; and
            &ldquo;Skydreams&rdquo; where applicable.
          </p>
          <a
            href="mailto:press@mariposa250.org?subject=Press%20Kit%20Asset%20Request"
            className="inline-block bg-oxblood text-cream px-5 py-3 rounded hover:bg-oxblood/90 font-medium"
          >
            Request Press Kit Assets →
          </a>
        </div>

        {/* BOILERPLATE */}
        <h2 className="font-serif text-3xl text-navy mb-6">About Mariposa 250</h2>
        <div className="bg-navy text-cream p-6 rounded-lg mb-12">
          <p className="text-cream/90 mb-4 leading-relaxed">
            The Mariposa 250 Celebration is a free community event on
            Saturday, July 4, 2026, commemorating America&apos;s 250th birthday in
            downtown Mariposa, California — a Gold Rush town and the original
            gateway to Yosemite National Park.
          </p>
          <p className="text-cream/90 mb-4 leading-relaxed">
            Co-hosted by the Mariposa Butterfly Festival (a 501(c)(3)
            nonprofit) and Mariposa County, the event features five live
            music stages, a community parade produced by the Mariposa County
            Chamber of Commerce and the Mariposa Lions Club, a Historical
            Firearms Auction at the Mariposa Museum and History Center, food
            and artisan vendors, and — instead of traditional fireworks — a
            200-drone aerial light show choreographed by Skydreams over 8th
            Street.
          </p>
          <p className="text-cream/90 leading-relaxed">
            The Butterfly Festival is a Mariposa-based 501(c)(3) (EIN
            85-2475621) dedicated to community events that bring Mariposa
            County residents together and support local nonprofits.
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-center pt-8 border-t border-navy/20">
          <p className="text-navy/70 text-sm">
            Working on a story and have questions?{' '}
            <a
              href="mailto:press@mariposa250.org"
              className="text-oxblood font-medium hover:underline"
            >
              press@mariposa250.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

function FactItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-navy/60 uppercase text-xs font-medium mb-1">
        {label}
      </div>
      <div>{value}</div>
    </div>
  );
}

function StoryAngle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border-l-4 border-gold p-5 rounded-r">
      <h3 className="font-serif text-xl text-navy mb-2">{title}</h3>
      <p className="text-sm text-navy/80 leading-relaxed">{description}</p>
    </div>
  );
}

function PersonCard({
  name,
  role,
  context,
}: {
  name: string;
  role: string;
  context: string;
}) {
  return (
    <div className="bg-white border border-navy/10 p-5 rounded-lg">
      <h3 className="font-serif text-lg text-navy">{name}</h3>
      <p className="text-sm text-oxblood mb-2 font-medium">{role}</p>
      <p className="text-sm text-navy/70">{context}</p>
    </div>
  );
}
