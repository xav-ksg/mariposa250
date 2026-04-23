'use client';

import { useState } from 'react';
import { submitContact } from '@/app/actions';

const topics = [
  'Sponsorship inquiry',
  'Vendor inquiry',
  'Volunteer inquiry',
  'Press / media inquiry',
  'Parade entry',
  'Accessibility',
  'General question',
  'Something else',
];

export default function ContactForm() {
  const [state, setState] = useState<{ status: 'idle' | 'submitting' | 'success' | 'error'; message?: string }>({
    status: 'idle',
  });

  async function handleSubmit(formData: FormData) {
    setState({ status: 'submitting' });
    const result = await submitContact(formData);
    if (result.ok) {
      setState({ status: 'success', message: result.message });
    } else {
      setState({ status: 'error', message: result.message });
    }
  }

  if (state.status === 'success') {
    return (
      <div className="border border-green-700 bg-green-50 p-8">
        <p className="font-display text-2xl text-green-900">Message received.</p>
        <p className="mt-2 text-green-900/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="label-smallcaps block mb-2">Your Name *</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
          />
        </div>
        <div>
          <label className="label-smallcaps block mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="label-smallcaps block mb-2">Topic *</label>
        <select
          name="topic"
          required
          defaultValue=""
          className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
        >
          <option value="" disabled>Choose a topic...</option>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="label-smallcaps block mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
        />
      </div>

      {state.status === 'error' && <p className="text-oxblood text-sm">{state.message}</p>}

      <button
        type="submit"
        disabled={state.status === 'submitting'}
        className="inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition disabled:opacity-50"
      >
        {state.status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
