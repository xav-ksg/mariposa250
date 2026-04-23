/**
 * Fires a POST to a Zapier Catch Hook. Used by server actions for
 * form submissions (contact, volunteer sign-up, parade entry).
 *
 * Set ZAPIER_WEBHOOK_* env vars in Vercel Project Settings.
 */

type ZapierTarget = 'contact' | 'volunteer' | 'parade';

const webhookMap: Record<ZapierTarget, string | undefined> = {
  contact: process.env.ZAPIER_WEBHOOK_CONTACT,
  volunteer: process.env.ZAPIER_WEBHOOK_VOLUNTEER,
  parade: process.env.ZAPIER_WEBHOOK_PARADE,
};

export async function sendToZapier(
  target: ZapierTarget,
  payload: Record<string, unknown>,
) {
  const url = webhookMap[target];
  if (!url) {
    throw new Error(`Missing Zapier webhook URL for target: ${target}`);
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: 'mariposa250.org',
    }),
  });

  if (!res.ok) {
    throw new Error(`Zapier webhook failed: ${res.status} ${res.statusText}`);
  }

  return res.json().catch(() => ({ ok: true }));
}
