import { stages, keyMoments } from '@/lib/content';

export const metadata = {
  title: 'Schedule',
  description:
    'Full schedule for the Mariposa 250 America 250 Celebration on July 4, 2026. Five stages of music, parade, 200-drone light show.',
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Schedule</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          A day-long celebration.
          <br />
          <span className="italic text-oxblood">Something for everyone.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          Five stages of music, a Kids Zone, historical programming, a
          community parade, and a 200-drone light show — all in downtown
          Mariposa on July 4, 2026.
        </p>
        <p className="mt-4 text-sm italic text-muted">
          Schedule subject to change. Check back closer to the event for final times.
        </p>
      </div>

      {/* Key moments timeline */}
      <section className="mt-16">
        <h2 className="font-display text-4xl text-navy">Key Moments</h2>
        <p className="mt-2 text-muted">The anchors of the day, wherever you are in the event.</p>

        <div className="mt-10 space-y-0">
          {keyMoments.map((moment, i) => (
            <article
              key={i}
              className="grid md:grid-cols-[140px_1fr] gap-6 border-t border-border py-6 last:border-b"
            >
              <div>
                <p className="font-display text-2xl text-oxblood">{moment.time}</p>
                <p className="label-smallcaps mt-1 text-muted">{moment.location}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-navy">{moment.title}</h3>
                {moment.description && (
                  <p className="mt-2 text-ink/80 leading-relaxed">{moment.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section className="mt-20">
        <h2 className="font-display text-4xl text-navy">Five Stages</h2>
        <p className="mt-2 text-muted">Music all day across downtown Mariposa.</p>

        <div className="mt-10 space-y-12">
          {stages.map((stage) => (
            <article key={stage.id} className="border border-border bg-white/60 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-4">
                <h3 className="font-display text-3xl text-navy">{stage.name}</h3>
                {stage.sponsor && (
                  <p className="label-smallcaps">Sponsored by {stage.sponsor}</p>
                )}
              </div>
              <p className="mt-4 text-ink/80 leading-relaxed">{stage.description}</p>

              <div className="mt-8">
                <p className="label-smallcaps mb-4">Performances</p>
                <ul className="space-y-3">
                  {stage.acts.map((act, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[100px_1fr] gap-4 border-b border-border/60 pb-3 last:border-b-0"
                    >
                      <span className="font-display text-lg text-oxblood tabular-nums">
                        {act.time}
                      </span>
                      <div>
                        <p className={`font-semibold ${act.confirmed ? 'text-navy' : 'text-muted italic'}`}>
                          {act.name}
                        </p>
                        {act.description && (
                          <p className="mt-1 text-sm text-ink/70">{act.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
