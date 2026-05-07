# GS MUN — Conference Website

A Next.js 14 (App Router) website for **GS Model United Nations** in Tashkent. Built for fast Vercel deployment.

## Features

- ⚡ Next.js 14 with App Router & TypeScript
- 🎨 Roboto via `next/font` (zero layout shift)
- 📝 Working delegate registration form with client + server validation
- 🛠 API route at `/api/register` ready to wire into Telegram, email, or a database
- 📱 Fully responsive
- 🎬 Scroll-reveal animations
- 🌑 Dark theme with brand colors (`#2E5BFF`, `#FFD300`, `#080a0c`)

## Project Structure

```
gsmun/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts          # Form submission handler
│   ├── globals.css               # All styles
│   ├── layout.tsx                # Root layout + fonts
│   └── page.tsx                  # Home page composition
├── components/
│   ├── Footer.tsx
│   ├── Logo.tsx                  # Reusable SVG logo
│   ├── Navigation.tsx
│   └── sections/
│       ├── About.tsx
│       ├── Committees.tsx
│       ├── Faq.tsx
│       ├── Hero.tsx
│       ├── Register.tsx          # Form with validation
│       └── Schedule.tsx
├── lib/
│   └── useReveal.ts              # Scroll-reveal hook
├── public/
│   └── logo.svg
├── next.config.js
├── package.json
└── tsconfig.json
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1: Push to GitHub then connect (recommended)

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gsmun.git
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**. No configuration needed — Vercel auto-detects Next.js.

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Wiring Up the Registration Form

The form submits to `/api/register` (see `app/api/register/route.ts`). Right now it validates the input and logs to the server console. To capture real submissions, pick one:

### Telegram bot (simplest)

1. Create a bot via [@BotFather](https://t.me/BotFather), get the token.
2. Get your chat ID by messaging the bot, then visiting `https://api.telegram.org/bot<TOKEN>/getUpdates`.
3. In Vercel project settings → Environment Variables, add:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Uncomment the Telegram block in `route.ts`.

### Email via Resend

1. Sign up at [resend.com](https://resend.com), verify a domain, get an API key.
2. Add `RESEND_API_KEY` env var in Vercel.
3. Uncomment the Resend block in `route.ts`.

### Google Sheets

1. Create a Google Apps Script web app that accepts POST requests and appends to a sheet.
2. Add `SHEETS_WEBHOOK_URL` env var.
3. POST the form data to that URL inside `route.ts`.

### Database (Vercel Postgres / Supabase)

For a more robust setup with admin views, attendee counts, etc. — wire up Vercel Postgres or Supabase. Both have free tiers.

## Customization

- **Brand colors** — edit CSS variables in `app/globals.css` (`:root` block)
- **Content** — each section is a standalone file in `components/sections/`
- **Logo** — replace `components/Logo.tsx` (the SVG path) and `public/logo.svg`
- **Fonts** — edit `app/layout.tsx` to swap Roboto for another `next/font/google` family

## License

Private project for GS MUN 2026.
