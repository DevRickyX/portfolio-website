# Portfolio Website v2

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive across all devices
- **Contact Form**: Working email functionality via Resend API
- **TypeScript**: Type-safe development

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Email**: Resend API
- **Deployment**: Vercel (recommended)

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM="Portfolio Contact <onboarding@resend.dev>"
   CONTACT_INBOX=your-email@example.com
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Import the project in Vercel dashboard

2. **Add Environment Variables**
   In your Vercel dashboard, add:
   ```
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM=Portfolio Contact <onboarding@resend.dev>
   CONTACT_INBOX=your-email@example.com
   ```

3. **Deploy**
   - Vercel will automatically build and deploy your site
   - The contact form will work immediately

## Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm lint      # Run ESLint
```

## License

MIT
