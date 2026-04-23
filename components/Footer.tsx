import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">Mariposa 250</p>
          <p className="mt-2 text-sm text-cream/70 leading-relaxed">
            America’s 250th Birthday
            <br />
            July 4, 2026 · Downtown Mariposa, CA
          </p>
        </div>

        <div>
          <p className="label-smallcaps text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold">About the Event</Link></li>
            <li><Link href="/schedule" className="hover:text-gold">Schedule</Link></li>
            <li><Link href="/map" className="hover:text-gold">Map</Link></li>
            <li><Link href="/faq" className="hover:text-gold">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="label-smallcaps text-gold">Get Involved</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/sponsor" className="hover:text-gold">Become a Sponsor</Link></li>
            <li><Link href="/vendor" className="hover:text-gold">Vendor Information</Link></li>
            <li><Link href="/volunteer" className="hover:text-gold">Volunteer</Link></li>
            <li><Link href="/parade" className="hover:text-gold">Parade Entry</Link></li>
          </ul>
        </div>

        <div>
          <p className="label-smallcaps text-gold">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/press" className="hover:text-gold">Press Kit</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact Us</Link></li>
            <li><Link href="/emergency" className="hover:text-gold">Day-of Info</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/20">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-cream/60">
          <p>
            Produced by the Mariposa Butterfly Festival 501(c)(3) — EIN 85-2475621 —
            in partnership with Mariposa County.
          </p>
          <p>© 2026 Mariposa 250. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
