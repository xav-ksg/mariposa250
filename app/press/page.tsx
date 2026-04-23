import { pressReleases } from '@/lib/content';
import Link from 'next/link';

export const metadata = {
  title: 'Press',
  description:
    'Press resources for the Mariposa 250 America 250 Celebration: press releases, media kit, high-res photos, contact information.',
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">For the Press</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Press &amp; Media Resources
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Covering Mariposa 250? Everything you need is here. For
          interviews, exclusive quotes, or on-site media credentials for
          event day, use the media contact form below.
        </p>
      </div>

      {/* Press kit download */}
      <section className="mt-12 border border-border bg-white/60 p-8">
        <p className="label-smallcaps mb-3">Press Kit</p>
        <h2 className="font-display text-3xl text-navy">
          One-page fact sheet, logos, high-res photos
        </h2>
        <p className="mt-3 text-ink/80 leading-relaxed">
          The press kit includes: event fact sheet, co-host bios (Butterfly
          Festival and Mariposa County), official event logo in multiple
          formats, high-res photos of Mariposa and drone show renderings,
          and approved quotes from event producers.
        </p>
        <a
          href="/press-kit/mariposa250-press-kit.zip"
          className="mt-6 inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
        >
          Download Press Kit (Coming Soon)
        </a>
      </section>

      {/* Press releases list */}
      <section className="mt-16">
        <h2 className="font-display text-3xl text-navy border-b border-border pb-3">
          Press Releases
        </h2>
        <p className="mt-2 text-muted">Chronological, most recent first.</p>

        <div className="mt-8 space-y-8">
          {[...pressReleases]
            .sort((a, b) => b.targetDate.localeCompare(a.targetDate))
            .map((release) => {
              const isFuture = new Date(release.targetDate) > new Date();
              return (
                <article key={release.id} className="border-b border-border pb-8">
                  <div className="flex items-center gap-3">
                    <time className="label-smallcaps" dateTime={release.targetDate}>
                      {formatDate(release.targetDate)}
                    </time>
                    {isFuture ? (
                      <span className="text-xs italic text-muted">(Scheduled)</span>
                    ) : (
                      <span className="text-xs font-semibold text-green-700">Released</span>
                    )}
                    <span className="text-xs text-muted">· {release.type}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-navy leading-tight">
                    {release.headline}
                  </h3>
                  <p className="mt-3 text-ink/80 leading-relaxed">{release.leadParagraph}</p>
                  {release.fullTextUrl && (
                    <a
                      href={release.fullTextUrl}
                      className="mt-3 inline-block text-sm font-semibold text-oxblood hover:text-navy"
                    >
                      Read full release →
                    </a>
                  )}
                </article>
              );
            })}
        </div>
      </section>

      {/* Media contact */}
      <section className="mt-16 border-t border-border pt-10">
        <p className="label-smallcaps mb-3">Media Contact</p>
        <h2 className="font-display text-3xl text-navy">
          Request an interview, quote, or media credential.
        </h2>
        <p className="mt-3 text-ink/80 leading-relaxed max-w-2xl">
          The fastest way to reach us for press inquiries is through the
          Contact form with &ldquo;Press / media inquiry&rdquo; selected as
          your topic.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
        >
          Contact the Press Team
        </Link>
      </section>
    </div>
  );
}

function formatDate(iso: string): string {
  const date = new Date(iso + 'T12:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
