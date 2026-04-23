'use client';

import { useState } from 'react';
import { paradeCategories } from '@/lib/content';
import { submitParadeEntry } from '@/app/actions';

export default function ParadeEntryForm() {
  const [state, setState] = useState<{ status: 'idle' | 'submitting' | 'success' | 'error'; message?: string }>({
    status: 'idle',
  });

  async function handleSubmit(formData: FormData) {
    setState({ status: 'submitting' });
    const result = await submitParadeEntry(formData);
    if (result.ok) {
      setState({ status: 'success', message: result.message });
    } else {
      setState({ status: 'error', message: result.message });
    }
  }

  if (state.status === 'success') {
    return (
      <div className="border border-green-700 bg-green-50 p-8">
        <p className="font-display text-2xl text-green-900">Thank you — entry received.</p>
        <p className="mt-2 text-green-900/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl">
      <Field label="Entry / Organization Name" name="entryName" required />
      <Field label="Primary Contact Name" name="contactName" required />
      <Field label="Contact Email" name="contactEmail" type="email" required />
      <Field label="Contact Phone" name="contactPhone" type="tel" required />

      <div>
        <label className="label-smallcaps block mb-2">Entry Category *</label>
        <select
          name="category"
          required
          className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>Select a category...</option>
          {paradeCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <Field label="Number of Participants" name="participantCount" type="number" required />
      <Field label="Number of Vehicles (if any)" name="vehicleCount" type="number" />

      <div>
        <label className="label-smallcaps block mb-2">Entry Description *</label>
        <textarea
          name="description"
          required
          rows={4}
          placeholder="Describe your entry: what will people see, any music, banners, vehicle details, etc."
          className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink/80">
          <input type="checkbox" name="insuranceConfirmed" value="yes" className="mt-1" required />
          <span>
            I confirm my entry will comply with parade guidelines and, if
            required (commercial or vehicles), I will provide a Certificate
            of Insurance before parade day.
          </span>
        </label>
      </div>

      {state.status === 'error' && (
        <p className="text-oxblood text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={state.status === 'submitting'}
        className="inline-flex items-center rounded bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition disabled:opacity-50"
      >
        {state.status === 'submitting' ? 'Submitting...' : 'Submit Entry'}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label-smallcaps block mb-2">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
      />
    </div>
  );
}
