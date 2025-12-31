# Parlevu Global Services LLC - Web Platform

This is the official web application for Parlevu Global Services LLC, a "We Buy Houses" real estate business.
This project connects with automated workflows to magnet leads, analyze deals, and schedule appointments.

## Features

- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS v4.
- **Lead Capture**: High-conversion landing page with embedded forms.
- **Automation Ready**: API routes prepared for n8n webhooks (`/api/n8n`).
- **Crawler Script**: Utilities for parsing and scoring FSBO leads (`scripts/crawler.js`).

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the App**:
   Visit [http://localhost:3000](http://localhost:3000).

## Crawler & Automation

To run the lead magnet crawler simulation:

```bash
node scripts/crawler.js
```

Configure your n8n webhook URL in `.env.local` (create this file):

```
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/...
```

## Deployment

This project is optimized for Vercel.

1. Push to GitHub.
2. Import project in Vercel.
3. Add environment variables.
4. Deploy.
