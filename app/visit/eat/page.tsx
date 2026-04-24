import Link from 'next/link';
import TravelAdvisory from '@/components/TravelAdvisory';

export const metadata = {
  title: 'Where to Eat | Mariposa 250',
  description:
    'Restaurants, cafés, and bars in Mariposa County for July 4, 2026 visitors.',
};

// ⚠️ Event staff: verify these before public launch. Names + addresses from
// Chamber directory and Tourism Bureau listings; descriptions are factual
// and neutral, not reviews.
const restaurants = [
  {
    name: "Savoury's Restaurant",
    category: 'Fine Dining',
    address: '5034 CA-140, Mariposa, CA 95338',
    description:
      'Longtime downtown Mariposa fine-dining establishment. Dinner reservations recommended, especially for July 4 weekend.',
  },
  {
    name: '1850 Restaurant & Brewing Co.',
    category: 'American / Brewery',
    address: '5114 CA-140, Mariposa, CA 95338',
    description:
      "Named for Mariposa County's founding year. Brewery and restaurant in historic downtown.",
  },
  {
    name: 'Happy Burger Diner',
    category: 'Casual / Diner',
    address: '5120 CA-140, Mariposa, CA 95338',
    description:
      'Mariposa institution known for classic American diner fare and their big menu. Good family option.',
  },
  {
    name: 'Charles Street Dinner House',
    category: 'Steakhouse',
    address: '5043 CA-140, Mariposa, CA 95338',
    description:
      'Traditional steakhouse in downtown Mariposa. Dinner only; reservations recommended.',
  },
  {
    name: 'Sugar Pine Café',
    category: 'Breakfast / Lunch',
    address: '5038 CA-140, Mariposa, CA 95338',
    description:
      'Local favorite for breakfast and lunch. Expect a line on weekend mornings.',
  },
  {
    name: 'Pony Espresso Café',
    category: 'Coffee / Light Meals',
    address: 'Mariposa, CA',
    description: 'Coffee shop and café serving breakfast, light lunch, and pastries.',
  },
  {
    name: 'Castillo\'s Mexican Food',
    category: 'Mexican',
    address: '4995 5th St, Mariposa, CA 95338',
    description: 'Local Mexican restaurant, popular with locals and visitors.',
  },
  {
    name: 'Yaqui Gulch Brewing Company',
    category: 'Brewery / Pub',
    address: 'Mariposa, CA',
    description: 'Craft brewery serving beer and pub food.',
  },
  {
    name: 'Hideout Steakhouse',
    category: 'Steakhouse',
    address: 'Mariposa, CA',
    description: 'Steakhouse with western atmosphere.',
  },
  {
    name: 'June Bug Café (Yosemite Bug Resort)',
    category: 'Casual / Healthy',
    address: '6979 CA-140, Midpines, CA 95345',
    description:
      'Café at Yosemite Bug Resort in Midpines. Known for fresh, healthy options and is a hub for Yosemite-bound travelers.',
  },
];

export default function EatPage() {
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
          Where to Eat
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-4 leading-relaxed">
          Downtown Mariposa has a compact but diverse restaurant scene — from
          Gold Rush–era dining rooms to craft breweries, Mexican cantinas, and
          classic American diners. On July 4, many restaurants will be busy;
          we recommend reservations where possible and patience where not.
        </p>
        <div className="bg-oxblood/10 border-l-4 border-oxblood p-4 mb-10 text-navy/90">
          <strong>Day-of Mariposa 250 food:</strong> The event will have food
          vendors, food trucks, and the Butterfly Festival&apos;s Margarita Booth
          on-site. You don&apos;t need to eat off-site during the event unless you
          want to.
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {restaurants.map((r) => (
            <div
              key={r.name}
              className="bg-white p-5 rounded-lg border border-navy/10"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-serif text-xl text-navy">{r.name}</h3>
                <span className="text-xs text-oxblood bg-oxblood/10 px-2 py-1 rounded whitespace-nowrap">
                  {r.category}
                </span>
              </div>
              <p className="text-sm text-navy/60 mb-2">{r.address}</p>
              <p className="text-sm text-navy/80">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-navy text-cream rounded-lg">
          <h2 className="font-serif text-2xl mb-3">Looking for More?</h2>
          <p className="mb-3 leading-relaxed">
            The Mariposa County Chamber of Commerce maintains a complete
            business directory including every restaurant, café, and food
            business in the county.
          </p>
          <a
            href="https://www.mariposachamber.org/copy-of-business-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline font-medium"
          >
            Full Chamber of Commerce directory →
          </a>
        </div>
      </section>
    </div>
  );
}
