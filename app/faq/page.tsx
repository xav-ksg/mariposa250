import { faq } from '@/lib/content';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the Mariposa 250 Celebration on July 4, 2026.',
};

const categoryLabels: Record<string, string> = {
  general: 'General',
  logistics: 'Logistics & Getting There',
  accessibility: 'Accessibility',
  safety: 'Safety',
  family: 'Families & Children',
};

export default function FAQPage() {
  const categories = Array.from(new Set(faq.map((item) => item.category)));

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="border-b border-border pb-10">
        <p className="label-smallcaps mb-4">FAQ</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy">
          Questions, answered.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Everything you need to know before July 4. Still have a question?
          {' '}
          <a href="/contact" className="text-oxblood underline hover:text-navy">
            Reach out directly.
          </a>
        </p>
      </div>

      {categories.map((category) => (
        <section key={category} className="mt-14">
          <h2 className="font-display text-3xl text-navy border-b border-border pb-3">
            {categoryLabels[category]}
          </h2>

          <div className="mt-6 space-y-4">
            {faq
              .filter((item) => item.category === category)
              .map((item, i) => (
                <details
                  key={i}
                  className="group border border-border bg-white/60 open:bg-white"
                >
                  <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg text-navy">
                      {item.question}
                    </h3>
                    <span className="label-smallcaps text-muted group-open:rotate-180 transition">▾</span>
                  </summary>
                  <div className="px-5 pb-5 text-ink/80 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
