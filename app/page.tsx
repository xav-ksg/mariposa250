import Link from 'next/link';
import Countdown from '@/components/Countdown';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="label-smallcaps mb-6">
            Mariposa County · July 4, 2026
          </p>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-navy md:text-7xl lg:text-[5.5rem]">
            America’s 250<sup className="text-[0.5em] align-super">th</sup>{' '}
            Birthday,
            <br />
            <span className="italic text-oxblood">celebrated together.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
            A full day of music, history, community, and a 200-drone light show
            over downtown Mariposa. Free and open to all, produced by the
            Mariposa Butterfly Festival in partnership with Mariposa County.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-oxblood"
            >
              See the Schedule
            </Link>
            <Link
              href="/sponsor"
              className="inline-flex items-center rounded border border-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-navy transition hover:bg-navy hover:text-cream"
            >
              Become a Sponsor
            </Link>
          </div>

          <div className="mt-16">
            <Countdown targetDate="2026-07-04T09:00:00-07:00" />
          </div>
        </div>
      </section>

      {/* Overview sections */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl grid gap-12 px-6 py-20 md:grid-cols-3">
          <Feature
            label="Main Event"
            title="200-Drone Light Show"
            body="A choreographed drone display replacing traditional fireworks — safer for our fire-prone Sierra foothills, and spectacular over 8th Street at dusk."
          />
          <Feature
            label="All Day"
            title="Five Stages of Music"
            body="Local artists and regional headliners across five downtown stages from morning through evening. Something for every taste."
          />
          <Feature
            label="8:00 PM"
            title="Community Parade"
            body="Produced by the Mariposa Chamber and Lions Club. Local entries welcome — floats, classic cars, service clubs, and community groups."
          />
        </div>
      </section>

      {/* Call to action blocks */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-2">
        <CTACard
          label="For Businesses"
          title="Sponsor the Celebration"
          body="Seven sponsorship tiers supporting a free community event. Founding sponsors receive logo placement in the drone show itself."
          href="/sponsor"
        />
        <CTACard
          label="For Makers & Food"
          title="Become a Vendor"
          body="Two vendor areas across downtown. Booths starting at $75 for the 10×10. Food trucks welcome."
          href="/vendor"
        />
      </section>
    </>
  );
}

function Feature({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <p className="label-smallcaps mb-3">{label}</p>
      <h3 className="font-display text-2xl text-navy">{title}</h3>
      <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
    </div>
  );
}

function CTACard({
  label,
  title,
  body,
  href,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block border border-border bg-white/60 p-8 transition hover:border-navy hover:bg-white"
    >
      <p className="label-smallcaps mb-3">{label}</p>
      <h3 className="font-display text-3xl text-navy">{title}</h3>
      <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
      <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-oxblood group-hover:translate-x-1 transition">
        Learn more →
      </span>
    </Link>
  );
}
