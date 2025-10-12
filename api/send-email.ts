import { sendContactEmail } from '../src/utils/email';

// Simple serverless handler compatible with platforms like Vercel
export default async function handler(req: any, res: any) {
  // Basic CORS handling for preflight and POST
  const origin = req.headers?.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing RESEND_API_KEY server environment variable' });
    return;
  }

  const { name, email, projectType, requirements } = req.body || {};

  if (!name || !email || !projectType || !requirements) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const { error } = await sendContactEmail(
      { name, email, projectType, requirements },
      apiKey
    );

    if (error) {
      res.status(502).json({ error });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to send email' });
  }
}
