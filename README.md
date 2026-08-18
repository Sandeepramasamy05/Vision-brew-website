# VisionBrew

**Where Ideas Become Digital Products.**

Premium website prototype for [VisionBrew](https://visionbrew.in) — a software and digital solutions agency.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/work` | Portfolio listing |
| `/work/[slug]` | Case study |
| `/about` | About |
| `/contact` | Contact form |

## Contact form (email)

Submissions go to **visionbrewtech@gmail.com** via [Resend](https://resend.com). Hosting stays on Vercel.

1. Create a free Resend account and an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.
3. On Vercel: **Settings → Environment Variables** — add the same keys, then **Redeploy**.

Until `visionbrew.in` is verified in Resend, mail is sent from `beth.t@example.com`. Reply-To is the visitor’s email so you can reply from Gmail.
