export const metadata = {
    title: 'Event Map',
    description: 'Event map for the Mariposa 250 Celebration on July 4, 2026. Stages, vendor areas, parade route, and first aid in downtown Mariposa.',
    alternates: { canonical: 'https://www.mariposa250.org/map' },
    openGraph: {
          title: 'Event Map | Mariposa 250',
          description: 'Find stages, vendor areas, parade route, parking, and first aid on the Mariposa 250 event map.',
          url: 'https://www.mariposa250.org/map',
    },
};

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Event Map</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Know before you go.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          A walkable event across downtown Mariposa. Use this map to locate
          stages, vendor areas, first aid, the Info Booth, parking, and the
          drone show viewing area.
        </p>
        <p className="mt-4 text-sm italic text-muted">
          Full interactive event map with detailed zones will be published
          approximately two weeks before the event.
        </p>
      </div>

      {/* Embedded Google Map placeholder */}
      <section className="mt-12">
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-white">
          <iframe
            title="Downtown Mariposa map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.7!2d-119.9681!3d37.4855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMariposa%2C%20CA!5e0!3m2!1sen!2sus!4v1000000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Key zones */}
      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Zone label="Stages" color="bg-navy">
          <strong>Stage 1:</strong> Arts Park<br />
          <strong>Stage 2:</strong> Twisted Cedar<br />
          <strong>Stage 3:</strong> Frost Shop Marketplace<br />
          <strong>Busker 1:</strong> Farmers Market<br />
          <strong>Busker 2:</strong> History Center
        </Zone>

        <Zone label="Vendor Areas" color="bg-oxblood">
          <strong>Vendor Area A:</strong> Stroming Road &amp; 5th Street<br />
          <em>Operated by Mariposa Butterfly Festival</em><br /><br />
          <strong>Vendor Area B:</strong> Frost Shop Marketplace<br />
          <em>Operated by Frost Shop</em>
        </Zone>

        <Zone label="Safety &amp; Services" color="bg-gold">
          <strong>Info Booth:</strong> Lost child meeting point<br />
          <strong>First Aid:</strong> 3 booth locations<br />
          <strong>Restrooms:</strong> Multiple locations, ADA accessible<br />
          <strong>Water Stations:</strong> Throughout event
        </Zone>

        <Zone label="Parade Route" color="bg-navy">
          <strong>Step-off:</strong> 8:00 PM<br />
          <strong>Line-up:</strong> 7:00 PM<br />
          Route through downtown, ending near 8th Street drone viewing area.
        </Zone>

        <Zone label="Drone Show" color="bg-oxblood">
          <strong>Viewing:</strong> 8th Street (cleared ~8:45 PM)<br />
          <strong>Show time:</strong> 9:00 PM — approximately 20 minutes<br />
          Arrive early for best viewing position.
        </Zone>

        <Zone label="Parking" color="bg-gold">
          <strong>General Parking:</strong> TBD<br />
          <strong>ADA Parking:</strong> Designated near main event area<br />
          <strong>Vendor Parking:</strong> Separate lot — pass required
        </Zone>
      </section>
    </div>
  );
}

function Zone({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-border bg-white/60 p-6">
      <div className={`inline-block ${color} text-cream px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest`}>
        {label}
      </div>
      <div className="mt-4 text-sm leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}
