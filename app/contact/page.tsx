import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the Mariposa 250 team.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">Get in touch.</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Questions, partnership ideas, press inquiries, or just want to say
          hello? Send us a note and the right person will respond within 2–3
          business days.
        </p>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>

      <div className="mt-16 border-t border-border pt-10 grid gap-8 md:grid-cols-2">
        <div>
          <p className="label-smallcaps mb-2">Produced By</p>
          <h3 className="font-display text-xl text-navy">Mariposa Butterfly Festival</h3>
          <p className="mt-2 text-sm text-ink/80">
            501(c)(3) Nonprofit<br />
            EIN 85-2475621<br />
            Mariposa, California
          </p>
        </div>
        <div>
          <p className="label-smallcaps mb-2">In Partnership With</p>
          <h3 className="font-display text-xl text-navy">Mariposa County</h3>
          <p className="mt-2 text-sm text-ink/80">
            Board of Supervisors<br />
            Mariposa, California
          </p>
        </div>
      </div>
    </div>
  );
}
