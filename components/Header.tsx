import Link from 'next/link';

const nav = [
  { href: '/schedule', label: 'Schedule' },
  { href: '/parade', label: 'Parade' },
  { href: '/map', label: 'Map' },
  { href: '/visit', label: 'Visit' },
  { href: '/sponsor', label: 'Sponsor' },
  { href: '/vendor', label: 'Vendor' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/press', label: 'Press' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold text-navy">
            Mariposa 250
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-oxblood mt-0.5">
            July 4 · 2026
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink hover:text-oxblood transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/sponsor"
          className="hidden md:inline-flex rounded bg-oxblood px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-navy transition"
        >
          Sponsor
        </Link>

        <button
          type="button"
          className="md:hidden rounded border border-navy px-3 py-2 text-xs font-semibold uppercase tracking-widest text-navy"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
