'use server';

import { sendToZapier } from '@/lib/zapier';

export interface ActionResult {
  ok: boolean;
  message: string;
}

// =================================================================
// PARADE ENTRY
// =================================================================

export async function submitParadeEntry(formData: FormData): Promise<ActionResult> {
  try {
    const payload = {
      entryName: formData.get('entryName'),
      contactName: formData.get('contactName'),
      contactEmail: formData.get('contactEmail'),
      contactPhone: formData.get('contactPhone'),
      category: formData.get('category'),
      participantCount: formData.get('participantCount'),
      vehicleCount: formData.get('vehicleCount') || '0',
      description: formData.get('description'),
      insuranceConfirmed: formData.get('insuranceConfirmed') === 'yes',
    };

    // Basic validation
    if (!payload.entryName || !payload.contactEmail) {
      return { ok: false, message: 'Please fill in all required fields.' };
    }

    await sendToZapier('parade', payload);

    return {
      ok: true,
      message:
        'Your parade entry has been received. We will confirm within 48 hours and send line-up instructions closer to the event.',
    };
  } catch (err) {
    console.error('Parade entry error:', err);
    return {
      ok: false,
      message:
        'Something went wrong submitting your entry. Please try again or email us directly.',
    };
  }
}

// =================================================================
// VOLUNTEER SIGN-UP
// =================================================================

export async function submitVolunteerSignup(formData: FormData): Promise<ActionResult> {
  try {
    const taskIds = formData.getAll('taskIds').map(String);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      organization: formData.get('organization'),
      ageConfirmed: formData.get('ageConfirmed') === 'yes',
      credentials: formData.getAll('credentials').map(String),
      interestedTaskIds: taskIds,
      availability: formData.get('availability'),
      tShirtSize: formData.get('tShirtSize'),
      emergencyContactName: formData.get('emergencyContactName'),
      emergencyContactPhone: formData.get('emergencyContactPhone'),
      notes: formData.get('notes'),
    };

    if (!payload.name || !payload.email || taskIds.length === 0) {
      return {
        ok: false,
        message: 'Please fill in your name, email, and select at least one task you are interested in.',
      };
    }

    await sendToZapier('volunteer', payload);

    return {
      ok: true,
      message:
        'Thank you for volunteering! We will contact you within a week to confirm your role and send next steps.',
    };
  } catch (err) {
    console.error('Volunteer signup error:', err);
    return {
      ok: false,
      message: 'Something went wrong. Please try again or email us directly.',
    };
  }
}

// =================================================================
// GENERAL CONTACT
// =================================================================

export async function submitContact(formData: FormData): Promise<ActionResult> {
  try {
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    };

    if (!payload.name || !payload.email || !payload.message) {
      return { ok: false, message: 'Please fill in all required fields.' };
    }

    await sendToZapier('contact', payload);

    return {
      ok: true,
      message: 'Thanks — we\'ve received your message and will respond within 2–3 business days.',
    };
  } catch (err) {
    console.error('Contact error:', err);
    return {
      ok: false,
      message: 'Something went wrong. Please try again or email us directly.',
    };
  }
}
