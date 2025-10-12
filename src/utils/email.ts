import { Resend } from 'resend';

interface EmailData {
  name: string;
  email: string;
  projectType: string;
  requirements: string;
}

export async function sendContactEmail(data: EmailData, apiKey: string) {
  const resend = new Resend(apiKey);
  
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
    to: [process.env.CONTACT_INBOX || 'sricardodev@gmail.com'],
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">New Contact Form Submission</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Project Type:</strong> ${data.projectType}</p>
          <p><strong>Requirements:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${String(data.requirements).replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #6b7280; font-size: 14px;">This email was sent from your portfolio contact form.</p>
      </div>
    `,
  });

  return { error };
}
