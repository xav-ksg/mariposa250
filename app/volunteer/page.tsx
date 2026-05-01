import VolunteerForm from '@/components/VolunteerForm';
import { volunteerTasks, EVENT_END_ISO } from '@/lib/content';

export const metadata = {
    title: 'Volunteer',
    description: 'Volunteer with Mariposa 250 on July 4, 2026. Sign up for setup, stage crew, first aid, parade support, and more.',
    alternates: { canonical: 'https://www.mariposa250.org/volunteer' },
    openGraph: {
          title: 'Volunteer | Mariposa 250',
          description: 'Help make Mariposa 250 happen. Volunteer opportunities include setup, stage crew, first aid, and parade support.',
          url: 'https://www.mariposa250.org/volunteer',
    },
};

export default function VolunteerPage() {
  const totalSlots = volunteerTasks.reduce((sum, t) => sum + t.volunteersNeeded, 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'VolunteerAction',
                name: 'Volunteer for Mariposa 250 Celebration',
                description: 'Volunteer opportunities for the Mariposa 250 Celebration on July 4, 2026 in downtown Mariposa. Setup, stage crew, first aid, parade support, and 16 other roles.',
                url: 'https://www.mariposa250.org/volunteer',
                startTime: '2026-07-04T06:00-07:00',
                endTime: EVENT_END_ISO,
                location: { '@type': 'Place', name: 'Downtown Mariposa', address: { '@type': 'PostalAddress', addressLocality: 'Mariposa', addressRegion: 'CA', addressCountry: 'US' } },
                organizer: { '@type': 'Organization', name: 'Mariposa 250', url: 'https://www.mariposa250.org' }
    }) }} />
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Volunteer</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Help make it happen.
          <br />
          <span className="italic text-oxblood">It takes a community.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Mariposa 250 is entirely volunteer-staffed. We need{' '}
          <strong>{totalSlots} volunteers</strong> across 20 task categories
          to make July 4 work. Whether you have a morning, an afternoon, or
          the full day, there&rsquo;s a role for you.
        </p>
      </div>

      <section className="mt-14">
        <p className="label-smallcaps mb-3">How it works</p>
        <ol className="space-y-3 text-ink/80 list-decimal list-inside">
          <li>Tell us a bit about yourself and which tasks interest you.</li>
          <li>We&rsquo;ll contact you within a week to confirm your role, shift, and any training required.</li>
          <li>Show up on July 4 ready to work — we&rsquo;ll provide a t-shirt, meal vouchers, and our eternal gratitude.</li>
        </ol>
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <p className="label-smallcaps mb-3">Sign Up</p>
        <h2 className="font-display text-3xl text-navy">Volunteer interest form</h2>
        <p className="mt-2 text-ink/80">
          Select as many tasks as you&rsquo;re interested in. We&rsquo;ll
          match you to your best-fit role based on availability, credentials,
          and where help is most needed.
        </p>

        <div className="mt-8">
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
}
