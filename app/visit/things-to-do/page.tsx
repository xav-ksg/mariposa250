import Link from 'next/link';
import TravelAdvisory from '@/components/TravelAdvisory';
export const metadata = {
  title: 'Things to Do | Mariposa 250',
  description:
    'Museums, the Mariposa Grove of Giant Sequoias, wineries, tours, and activities in Mariposa County.',
};

const attractions = [
  {
    category: 'Museums & History',
    items: [
      {
        name: 'Mariposa Museum and History Center',
        address: '5119 Jessie St, Mariposa, CA',
        description:
          "Hosts Mariposa 250's Historical Firearms Auction. A deep dive into Gold Rush–era Mariposa, mining artifacts, and indigenous Miwok history.",
      },
      {
        name: 'California State Mining & Mineral Museum',
        address: '5005 Fairgrounds Rd, Mariposa, CA',
        description:
          "California's official mineral collection, including the Fricot Nugget — a 13-pound crystallized gold specimen found in 1865. Underground mine tunnel exhibit and junior ranger program for kids.",
      },
      {
        name: "Mariposa County's Old Stone Jail",
        address: 'Bullion St, Mariposa, CA',
        description:
          "Historic 1858 stone jail building, part of downtown Mariposa's Gold Rush–era architecture walking tour.",
      },
      {
        name: 'Mariposa County Courthouse',
        address: '5088 Bullion St, Mariposa, CA',
        description:
          'Built in 1854, this is the oldest courthouse west of the Rockies still in use. A National Historic Landmark and a key stop on any downtown walking tour.',
      },
    ],
  },
  {
    category: 'Natural Wonders',
    items: [
      {
        name: 'Mariposa Grove of Giant Sequoias',
        address: 'Yosemite National Park, CA',
        description:
          "Home to more than 500 giant sequoias, including the 2,700-year-old Grizzly Giant. Access via Yosemite's South Entrance (Highway 41). Free shuttle from the Welcome Center, typically April–November.",
      },
      {
        name: 'Stockton Creek Preserve',
        address: 'Mariposa, CA',
        description:
          'Trails just outside downtown Mariposa. Good for a morning walk or trail run before the July 4 event.',
      },
      {
        name: 'Hite Cove Trail',
        address: 'Near El Portal, CA',
        description:
          "Historic gold mining trail along the Merced River's South Fork. Famous for wildflowers in spring, but worth a hike any time.",
      },
    ],
  },
  {
    category: 'Tours & Experiences',
    items: [
      {
        name: 'Yosemite Mountain Sugar Pine Railroad',
        address: '56001 CA-41, Fish Camp, CA',
        description:
          'Historic narrow-gauge steam train that runs through the Sierra National Forest near the South Entrance of Yosemite. A fun family half-day near Oakhurst.',
      },
      {
        name: 'Yosemite Tours (Tourism Bureau partners)',
        address: 'Various',
        description:
          'The Tourism Bureau maintains a list of licensed tour operators offering guided Yosemite day trips from Mariposa.',
      },
    ],
  },
  {
    category: 'Arts & Shopping',
    items: [
      {
        name: 'Mariposa Arts Park',
        address: 'Mariposa, CA',
        description:
          "Home to Stage 1 of Mariposa 250 on July 4. Throughout the year, hosts community arts events and the town's creative scene.",
      },
      {
        name: 'Downtown Mariposa Historic District',
        address: 'Mariposa, CA',
        description:
          'Walkable downtown with antique shops, galleries, specialty stores, and restaurants. A good pre-event afternoon stroll.',
      },
    ],
  },
];

export default function ThingsToDoPage() {
  return (
    <div className="bg-cream min-h-screen">
      <TravelAdvisory />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Things to Do in Mariposa County", description: "Museums, the Mariposa Grove of Giant Sequoias, wineries, tours, and activities in Mariposa County.", url: "https://www.mariposa250.org/visit/things-to-do" }) }} />
        <Link
          href="/visit"
          className="text-navy/60 text-sm hover:text-navy mb-6 inline-block"
        >
          ← Back to Plan Your Celebration
        </Link>
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Things to Do
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-12 leading-relaxed">
          Mariposa County is Gold Rush history, ancient giant sequoias, Sierra
          Nevada foothills, and one of the most celebrated national parks on
          Earth — all in one compact region. Here&apos;s a starter guide organized
          by what you&apos;re in the mood for. For the complete list of things to
          do, check the Tourism Bureau&apos;s 100 Things To Do guide.
        </p>

        {attractions.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="font-serif text-3xl text-navy border-b border-navy/20 pb-3 mb-6">
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-5 rounded-lg border border-navy/10"
                >
                  <h3 className="font-serif text-xl text-navy mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-navy/60 mb-2">{item.address}</p>
                  <p className="text-sm text-navy/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-6 bg-navy text-cream rounded-lg">
          <h2 className="font-serif text-2xl mb-3">
            The Tourism Bureau Has the Full Picture
          </h2>
          <p className="mb-4 leading-relaxed">
            The Yosemite-Mariposa County Tourism Bureau publishes the
            definitive &quot;100 Things to Do in Mariposa County&quot; guide, plus
            detailed breakdowns by activity type and season.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <a
              href="https://www.yosemite.com/100-things-to-do-in-mariposa-county/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              100 Things to Do →
            </a>
            <a
              href="https://www.yosemite.com/things-to-do/adventure-activities/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Adventure Activities →
            </a>
            <a
              href="https://www.yosemite.com/things-to-do/arts-and-culture/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Arts & Culture →
            </a>
            <a
              href="https://www.yosemite.com/things-to-do/yosemite-tours/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Yosemite Tours →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
