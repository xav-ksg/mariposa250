'use client';

import { useState } from 'react';
import Link from 'next/link';

export const dynamic = 'force-static';

// ⚠️ Event staff: update FAQ entries below as questions evolve.
// Keep answers concise (2-3 sentences max where possible).
// Group by category for findability.

type FaqItem = {
  q: string;
  a: string;
  a_more?: string;
  link?: { href: string; label: string };
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    title: 'The Basics',
    items: [
      {
        q: 'When and where is Mariposa 250?',
        a: 'Saturday, July 4, 2026, from 9:00 AM to 10:30 PM in downtown Mariposa, California. The event spans multiple blocks of downtown with five music stages.',
      },
      {
        q: 'How much does it cost to attend?',
        a: 'The event is free. Food and drinks are sold by vendors; merchandise is available for a suggested donation supporting the Mariposa Butterfly Festival 501(c)(3).',
      },
      {
        q: 'Is it family-friendly?',
        a: 'Yes. There will be a Kids Zone, family-friendly performances on multiple stages, and the 9 PM drone show is suitable for all ages — it\'s a silent aerial art show, not explosive fireworks.',
      },
      {
        q: 'Do I need tickets or to register?',
        a: 'No tickets or pre-registration required to attend. Just show up.',
      },
      {
        q: 'Who is hosting this event?',
        a: 'The Mariposa Butterfly Festival (a 501(c)(3) nonprofit, EIN 85-2475621) and Mariposa County are co-hosting.',
      },
    ],
  },
  {
    title: 'Getting There & Parking',
    items: [
      {
        q: 'Where should I park?',
        a: 'Event parking lots will be available throughout downtown Mariposa. The Frost Shop Marketplace lot and the Mariposa Museum & History Center lot are two of our primary lots. We strongly recommend arriving before 4 PM.',
        a_more:
          'A third event parking lot is being finalized. Updated parking map will be posted on the Day-of Event page closer to the date.',
      },
      {
        q: 'Are there road closures?',
        a: 'Yes. Portions of downtown Mariposa will be closed to vehicle traffic on July 4. The Sheriff\'s Office is coordinating closures with the event team. Detailed road closure info will be published here and in the Mariposa Gazette in late June.',
      },
      {
        q: 'Can I take a shuttle?',
        a: 'Yes. Event Golf Cart shuttle service will be available between event parking lots and the main event footprint, with priority for guests with mobility limitations. Look for the "Mariposa 250 Golf Cart" signs.',
      },
      {
        q: 'Is Highway 140 open?',
        a: 'Highway 140 has had temporary closures east of Mariposa (toward Yosemite). Downtown Mariposa and the July 4 event remain accessible from the west (Merced side). Always check current road conditions before your trip.',
        link: {
          href: 'https://www.yosemite.com/plan-your-trip/travel-responsibly/yosemite-road-conditions/',
          label: 'Current road conditions',
        },
      },
    ],
  },
  {
    title: 'Food, Drinks & Vendors',
    items: [
      {
        q: 'Will there be food and drinks?',
        a: 'Yes — food vendors, food trucks, and a beverage booth will be available throughout the event. Our vendors include local favorites plus specialty offerings for July 4.',
      },
      {
        q: 'Can I drink alcohol at the event?',
        a: 'Yes. Mariposa County has secured ABC approval for open beverages on Main Street and in the downtown event footprint. Licensed vendors will sell beer and wine with ID checks. Please drink responsibly and know your limits.',
        a_more:
          'Individual alcohol vendors maintain boundaries around their booths per their ABC permit requirements. Outside glass containers are not permitted for safety.',
      },
      {
        q: 'Can I bring my own food?',
        a: 'You may bring food and non-alcoholic drinks for personal consumption. We ask that you support our food vendors when possible — they help make this event financially possible.',
      },
      {
        q: 'Are there vegetarian, vegan, or gluten-free options?',
        a: 'Yes, we\'ve worked to ensure our vendor mix includes options for most dietary needs. Specific vendor menus will be linked from our event program closer to the date.',
      },
    ],
  },
  {
    title: 'The Parade & Drone Show',
    items: [
      {
        q: 'When is the parade?',
        a: 'The community parade steps off at 8:00 PM sharp. It\'s produced by the Mariposa County Chamber of Commerce and the Mariposa Lions Club.',
      },
      {
        q: 'Where is the best spot to watch the drone show?',
        a: 'The 200-drone aerial show will be visible from most of downtown Mariposa beginning at approximately 9:00 PM over 8th Street. Specific viewing zones will be marked on the event map.',
        a_more:
          'Bring a low-back chair or blanket if you want to sit during the show. ADA-accessible viewing areas will be designated.',
      },
      {
        q: 'Is the drone show loud? Will it scare my dog?',
        a: 'No. Drone light shows are nearly silent — you\'ll hear music and ambient event sound, but no explosions or bangs like fireworks. This is one reason we chose drones: they\'re gentler for pets, wildlife, and people with sensory sensitivities.',
      },
      {
        q: 'Why no fireworks?',
        a: 'July in the Sierra Nevada foothills is extreme fire season. Traditional fireworks pose a real wildfire risk. A drone show gives us a spectacular experience without igniting our home.',
      },
      {
        q: 'Can I fly my own drone at the event?',
        a: 'No. The FAA will have restricted airspace over the event during the show, and personal drones are prohibited throughout event hours for safety reasons.',
      },
    ],
  },
  {
    title: 'Accessibility',
    items: [
      {
        q: 'Is the event accessible for people with mobility needs?',
        a: 'Yes. We have designated ADA parking, Mariposa 250 Golf Cart shuttle service, a reserved accessible viewing area for the parade and drone show, and ADA-compliant portable restrooms throughout the footprint.',
      },
      {
        q: 'Are service animals permitted?',
        a: 'Yes, service animals are always welcome. Other pets should be left at home due to crowd density, heat, and noise.',
      },
      {
        q: 'Is there a quiet or sensory-friendly area?',
        a: 'A Hospitality Tent provides an air-conditioned space for guests needing a break from crowds, heat, or noise. It\'s open throughout the event.',
      },
      {
        q: 'I have a specific accessibility need not listed here. Who do I contact?',
        a: 'Please reach out before the event so we can accommodate. We\'re happy to coordinate in advance.',
        link: { href: '/contact', label: 'Contact the event team' },
      },
    ],
  },
  {
    title: 'Safety & Emergencies',
    items: [
      {
        q: 'What should I do in a medical emergency?',
        a: 'Dial 911 for any emergency. Our event first aid station is centrally located and staffed with medical volunteers for minor issues. Look for any volunteer in a Mariposa 250 shirt — they\'ll radio for help immediately.',
      },
      {
        q: 'What if I get lost or separated from my group?',
        a: 'The Hospitality Tent and the Information Booth are good meet-up points. Agree on one with your group before the event. Volunteers throughout the event can help if you\'re lost.',
      },
      {
        q: 'What is the heat plan?',
        a: 'July in Mariposa can hit 95–105°F. We have free water refill stations throughout the event, shade canopies in key gathering areas, and medical volunteers trained for heat-related illness. Drink water frequently, wear sunscreen and a hat, and take breaks in shade.',
      },
      {
        q: 'What should I do if I see something unsafe?',
        a: 'Tell any volunteer in a Mariposa 250 shirt. They carry radios and can escalate to Sheriff, fire, or medical as needed. Trust your instincts.',
      },
    ],
  },
  {
    title: 'Weather & Cancellation',
    items: [
      {
        q: 'What happens if there\'s bad weather or wildfire smoke?',
        a: 'The event will happen rain or shine. However, if extreme weather, dangerous air quality, or wildfire risk forces a safety decision, we may adjust, delay, or modify parts of the event. Any changes will be posted here and on our social media.',
      },
      {
        q: 'Can the drone show be canceled?',
        a: 'Yes. Drone shows are weather-sensitive: strong winds, heavy smoke, or extreme conditions may force a cancellation or delay for safety. Skydreams makes that call. We\'ll announce any changes as soon as possible.',
      },
      {
        q: 'Will you refund my ticket if canceled?',
        a: 'The event is free, so there are no tickets to refund. If you made travel plans based on the event, we\'re sorry for any disruption — decisions about safety always come first.',
      },
    ],
  },
  {
    title: 'Volunteering, Sponsoring & Participating',
    items: [
      {
        q: 'I want to volunteer. How?',
        a: 'We need 177 volunteers across 20 task categories. Visit the volunteer page to see roles and sign up. Service clubs, businesses, and families are welcome.',
        link: { href: '/volunteer', label: 'Volunteer sign-up' },
      },
      {
        q: 'My business wants to sponsor. What are the tiers?',
        a: 'We have sponsor tiers from $250 to $10,000, each with specific recognition benefits. All sponsorships are tax-deductible through the Butterfly Festival 501(c)(3).',
        link: { href: '/sponsor', label: 'See sponsor tiers' },
      },
      {
        q: 'I want to be a vendor. How do I apply?',
        a: 'Vendor applications are open for food, beverage, and artisan vendors. Pricing and requirements are on the vendor page.',
        link: { href: '/vendor', label: 'Vendor info' },
      },
      {
        q: 'I want to be in the parade. How?',
        a: 'The parade is produced by the Chamber of Commerce and Lions Club. Entry forms and requirements are on the parade page.',
        link: { href: '/parade', label: 'Parade entry' },
      },
    ],
  },
  {
    title: 'Planning Your Visit',
    items: [
      {
        q: 'Where should I stay?',
        a: 'Mariposa County has hotels, motels, B&Bs, and cabins. Oakhurst (45-60 min south) is a good overflow option. Book early — July 4 weekend sells out.',
        link: { href: '/visit/stay', label: 'Where to stay' },
      },
      {
        q: 'What else can I do while I\'m in Mariposa County?',
        a: 'A lot. Yosemite National Park, the Mariposa Grove of Giant Sequoias, the California State Mining & Mineral Museum, wineries, and dozens of hiking trails.',
        link: { href: '/visit/things-to-do', label: 'Things to do' },
      },
      {
        q: 'Do I need a reservation to visit Yosemite?',
        a: 'Possibly — Yosemite has implemented peak-season timed-entry reservations in recent years. Check NPS before your trip.',
        link: { href: '/visit/yosemite', label: 'Visiting Yosemite' },
      },
    ],
  },
  {
    title: 'Still Have Questions?',
    items: [
      {
        q: 'My question isn\'t answered here.',
        a: 'We\'re happy to help. Please reach out directly.',
        link: { href: '/contact', label: 'Contact the event team' },
      },
      {
        q: 'Can I get updates as the event approaches?',
        a: 'Yes — follow our social media (links in the footer) or bookmark this website. Major updates will also be covered in the Mariposa Gazette.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-serif text-5xl text-navy mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-navy/80 max-w-3xl mb-12 leading-relaxed">
          Planning to attend Mariposa 250 on July 4, 2026? Here&apos;s what our
          visitors ask most often. If your question isn&apos;t below,{' '}
          <Link href="/contact" className="text-oxblood hover:underline font-medium">
            reach out to us
          </Link>
          .
        </p>

        {faqSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="font-serif text-3xl text-navy border-b border-navy/20 pb-3 mb-4">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.items.map((item) => (
                <FaqAccordion key={item.q} item={item} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-navy/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-navy/5 transition"
        aria-expanded={open}
      >
        <span className="font-medium text-navy pr-4">{item.q}</span>
        <span
          className={`text-oxblood text-xl transition-transform flex-shrink-0 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 py-4 border-t border-navy/10 text-navy/80 leading-relaxed">
          <p>{item.a}</p>
          {item.a_more && <p className="mt-3 text-sm">{item.a_more}</p>}
          {item.link && (
            <Link
              href={item.link.href}
              className="inline-block mt-3 text-oxblood hover:underline font-medium text-sm"
            >
              {item.link.label} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
