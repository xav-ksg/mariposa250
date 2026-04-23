import ParadeEntryForm from '@/components/ParadeEntryForm';

export const metadata = {
  title: 'Parade',
  description:
    'Community parade at 8:00 PM on July 4, 2026. Produced by the Mariposa Chamber of Commerce and Lions Club. Entry information and sign-up.',
};

export default function ParadePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Community Parade · 8:00 PM</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          A parade by and for
          <br />
          <span className="italic text-oxblood">Mariposa County.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          Produced by the Mariposa Chamber of Commerce and the Mariposa Lions
          Club, the Community Parade kicks off the evening celebration. Local
          businesses, service clubs, schools, classic cars, and community
          groups are all welcome to enter.
        </p>
      </div>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <p className="label-smallcaps mb-3">The Route</p>
          <h2 className="font-display text-3xl text-navy">Through downtown Mariposa</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Final parade route will be published approximately one week
            before the event, coordinated with the Mariposa County
            Sheriff&rsquo;s Office. The route winds through the heart of
            downtown, ending near the drone show viewing area on 8th Street.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            <li>• <strong>Line-up:</strong> 7:00 PM at the staging area (TBD)</li>
            <li>• <strong>Step-off:</strong> 8:00 PM</li>
            <li>• <strong>Expected length:</strong> 45–60 minutes</li>
            <li>• <strong>Judging:</strong> Golf cart decoration contest judged at 6:00 PM prior</li>
          </ul>
        </div>

        <div>
          <p className="label-smallcaps mb-3">Entry Guidelines</p>
          <h2 className="font-display text-3xl text-navy">What we ask of entries</h2>
          <ul className="mt-4 space-y-3 text-ink/80">
            <li>
              <strong className="text-navy">Family-friendly.</strong> Content
              appropriate for all ages and all political perspectives.
            </li>
            <li>
              <strong className="text-navy">Safe.</strong> No live fireworks,
              confetti cannons, or thrown candy directly at crowds (hand
              distribution by walkers only).
            </li>
            <li>
              <strong className="text-navy">Insured.</strong> Commercial
              entries with vehicles must carry liability insurance; COI on
              file before parade day.
            </li>
            <li>
              <strong className="text-navy">On-time.</strong> Line up by 7:00 PM. Late entries cannot be accommodated.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-10">
        <p className="label-smallcaps mb-3">Entry Form</p>
        <h2 className="font-display text-3xl text-navy">Enter the parade</h2>
        <p className="mt-2 text-ink/80">
          Submit your parade entry below. We&rsquo;ll confirm receipt within
          48 hours and send line-up instructions closer to the event.
        </p>

        <div className="mt-8">
          <ParadeEntryForm />
        </div>
      </section>
    </div>
  );
}
