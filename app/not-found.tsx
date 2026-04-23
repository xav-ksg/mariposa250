import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="label-smallcaps mb-4">Error 404</p>
      <h1 className="font-display text-6xl md:text-7xl text-navy">
        Not found.
      </h1>
      <p className="mt-6 text-lg text-ink/80">
        This page doesn&rsquo;t exist — or we haven&rsquo;t built it yet.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition"
        >
          Back to Home
        </Link>
        <Link
          href="/schedule"
          className="inline-flex items-center rounded border border-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-navy hover:bg-navy hover:text-cream transition"
        >
          See the Schedule
        </Link>
      </div>
    </div>
  );
}
