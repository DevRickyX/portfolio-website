import { sendContactEmail } from './email.js';

export async function handleContactForm(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.requirements) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    await sendContactEmail(formData);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
