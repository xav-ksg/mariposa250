'use client';

import { useState } from 'react';
import { volunteerTasks } from '@/lib/content';
import { submitVolunteerSignup } from '@/app/actions';

export default function VolunteerForm() {
  const [state, setState] = useState<{ status: 'idle' | 'submitting' | 'success' | 'error'; message?: string }>({
    status: 'idle',
  });

  async function handleSubmit(formData: FormData) {
    setState({ status: 'submitting' });
    const result = await submitVolunteerSignup(formData);
    if (result.ok) {
      setState({ status: 'success', message: result.message });
    } else {
      setState({ status: 'error', message: result.message });
    }
  }

  if (state.status === 'success') {
    return (
      <div className="border border-green-700 bg-green-50 p-8">
        <p className="font-display text-2xl text-green-900">You&rsquo;re in.</p>
        <p className="mt-2 text-green-900/80">{state.message}</p>
      </div>
    );
  }

  // Group tasks by category for cleaner selection UX
  const byCategory: Record<string, typeof volunteerTasks> = {};
  for (const task of volunteerTasks) {
    byCategory[task.category] = byCategory[task.category] || [];
    byCategory[task.category].push(task);
  }

  return (
    <form action={handleSubmit} className="space-y-8">
      {/* Personal info */}
      <fieldset className="space-y-4">
        <legend className="font-display text-xl text-navy mb-2">About You</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
          <Field label="Organization (if any)" name="organization" placeholder="Rotary, Lions, VFW, church, school..." />
        </div>

        <div className="mt-4">
          <label className="flex items-start gap-3 text-sm text-ink/85">
            <input type="checkbox" name="ageConfirmed" value="yes" className="mt-1" required />
            <span>I am 18 years of age or older. <em className="text-muted">(If you&rsquo;re under 18 and want to volunteer, please contact us directly — we have opportunities for supervised youth volunteers.)</em></span>
          </label>
        </div>
      </fieldset>

      {/* Credentials */}
      <fieldset className="space-y-4 border-t border-border pt-6">
        <legend className="font-display text-xl text-navy mb-2">Credentials (check any that apply)</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            'Valid Driver&rsquo;s License',
            'Current CPR Certification',
            'Current First Aid Certification',
            'Licensed Medical Professional',
            'Food Handler Card',
            'Bilingual (English/Spanish)',
            'Bilingual (other language)',
            'Background Check on file',
          ].map((cred) => (
            <label key={cred} className="flex items-center gap-2 text-sm text-ink/85">
              <input type="checkbox" name="credentials" value={cred} />
              <span dangerouslySetInnerHTML={{ __html: cred }} />
            </label>
          ))}
        </div>
      </fieldset>

      {/* Task selection */}
      <fieldset className="space-y-4 border-t border-border pt-6">
        <legend className="font-display text-xl text-navy mb-2">What interests you?</legend>
        <p className="text-sm text-ink/70 mb-4">Check all the tasks you&rsquo;d consider. We&rsquo;ll match you to the best fit.</p>

        {Object.entries(byCategory).map(([category, tasks]) => (
          <div key={category} className="border border-border bg-white/40 p-4">
            <p className="label-smallcaps mb-3">{category}</p>
            <div className="space-y-2">
              {tasks.map((task) => (
                <label key={task.id} className="flex items-start gap-3 text-sm text-ink/85">
                  <input type="checkbox" name="taskIds" value={task.id} className="mt-1" />
                  <div>
                    <span className="font-semibold text-navy">{task.name}</span>
                    <span className="text-muted"> — {task.shift}</span>
                    <p className="text-xs text-ink/70 mt-0.5">{task.description}</p>
                    {task.credentialsRequired.length > 0 && (
                      <p className="text-xs text-oxblood mt-0.5">
                        Requires: {task.credentialsRequired.join(', ')}
                      </p>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </fieldset>

      {/* Availability + logistics */}
      <fieldset className="space-y-4 border-t border-border pt-6">
        <legend className="font-display text-xl text-navy mb-2">Logistics</legend>

        <div>
          <label className="label-smallcaps block mb-2">General Availability</label>
          <textarea
            name="availability"
            rows={2}
            placeholder="E.g., Full day, morning only, evening only, not available after 6 PM, etc."
            className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="label-smallcaps block mb-2">T-Shirt Size</label>
            <select name="tShirtSize" className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none" defaultValue="">
              <option value="" disabled>Select...</option>
              <option>S</option><option>M</option><option>L</option><option>XL</option><option>2XL</option><option>3XL</option>
            </select>
          </div>
          <Field label="Emergency Contact Name" name="emergencyContactName" />
          <Field label="Emergency Contact Phone" name="emergencyContactPhone" type="tel" />
        </div>

        <div>
          <label className="label-smallcaps block mb-2">Anything else we should know?</label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Accessibility needs, preferred role, skills we haven&rsquo;t listed, dietary restrictions for volunteer meal..."
            className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
          />
        </div>
      </fieldset>

      {state.status === 'error' && (
        <p className="text-oxblood text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={state.status === 'submitting'}
        className="inline-flex items-center rounded bg-navy px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-oxblood transition disabled:opacity-50"
      >
        {state.status === 'submitting' ? 'Submitting...' : 'Sign Me Up'}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full border border-border bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none"
      />
    </div>
  );
}
