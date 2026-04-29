import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Mariposa 250 on July 4, 2026 — parking, schedule, parade, drone show, vendors, and accessibility.',
  alternates: { canonical: 'https://www.mariposa250.org/faq' },
  openGraph: {
    title: 'FAQ | Mariposa 250',
    description: 'Everything you need to know about attending Mariposa 250 on July 4, 2026 — parking, drone show, parade, accessibility, and more.',
    url: 'https://www.mariposa250.org/faq',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'When and where is Mariposa 250?', acceptedAnswer: { '@type': 'Answer', text: 'Saturday, July 4, 2026, from 9:00 AM to 10:30 PM in downtown Mariposa, California across five music stages.' } },
    { '@type': 'Question', name: 'How much does it cost to attend?', acceptedAnswer: { '@type': 'Answer', text: 'The event is free. Food and drinks are sold by vendors.' } },
    { '@type': 'Question', name: 'Is it family-friendly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is a Kids Zone, family-friendly performances, and the 9 PM drone show is suitable for all ages.' } },
    { '@type': 'Question', name: 'Do I need tickets or to register?', acceptedAnswer: { '@type': 'Answer', text: 'No tickets or pre-registration required. Just show up.' } },
    { '@type': 'Question', name: 'Who is hosting this event?', acceptedAnswer: { '@type': 'Answer', text: 'The Mariposa Butterfly Festival (a 501(c)(3) nonprofit) and Mariposa County are co-hosting.' } },
    { '@type': 'Question', name: 'When is the parade?', acceptedAnswer: { '@type': 'Answer', text: 'The Community Parade steps off at 8:00 PM on July 4, 2026. Participants line up at 7:00 PM.' } },
    { '@type': 'Question', name: 'Why no fireworks?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional fireworks have been replaced with a 200-drone light show by SkyDreams — safer for the fire-prone Sierra foothills and spectacular over 8th Street at dusk.' } },
    { '@type': 'Question', name: 'Where is the best spot to watch the drone show?', acceptedAnswer: { '@type': 'Answer', text: 'The drone show takes place over 8th Street in downtown Mariposa.' } },
    { '@type': 'Question', name: 'Can I fly my own drone at the event?', acceptedAnswer: { '@type': 'Answer', text: 'No. Personal drones are not permitted during the event.' } },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
