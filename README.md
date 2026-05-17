# THE BIG GUY

Smart salon booking and live queue management for crowded student areas near colleges, hostels, PG clusters, and coaching hubs.

The first launch target is a **one-salon MVP**: one real salon, one owner, one queue, one student-heavy area. The architecture remains scalable for multiple salons later.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion
- Next.js Server Actions and Route Handlers
- PostgreSQL on Supabase with Prisma ORM
- Supabase Auth, Supabase Realtime, Supabase Storage
- Zustand for queue and booking flow state
- React Hook Form + Zod architecture
- Razorpay payment architecture for commitment fees
- Resend email architecture for confirmations and reminders
- Vercel-ready deployment with Vercel Analytics
- PWA-ready manifest, web app first

## Apps Included

- Public marketing site: `/`, `/features`, `/pricing`, `/about`, `/contact`
- Student app: `/student`, `/student/salons`, `/student/salons/[id]`, `/student/booking`, `/student/history`, `/student/profile`
- Salon owner dashboard: `/owner`, `/owner/queue`, `/owner/barbers`, `/owner/services`, `/owner/analytics`, `/owner/settings`
- Admin panel: `/admin`, `/admin/salons`, `/admin/users`
- Auth shell: `/login`, `/signup`, `/forgot-password`

## Setup

For the practical one-salon launch flow, read:

- [One-Salon MVP Guide](./docs/ONE_SALON_MVP.md)
- [Supabase Setup Guide](./docs/SUPABASE_SETUP.md)
- [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)
- [Vercel Environment Variables](./docs/VERCEL_ENV_VARIABLES.md)

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add Supabase and service keys in `.env.local`.

4. Generate Prisma client:

```bash
npx prisma generate
```

5. Create database tables when Supabase is connected:

```bash
npx prisma migrate dev
```

6. Run the app:

```bash
npm run dev
```

## Realtime Architecture

Queue entries are modeled in Prisma and intended to be mirrored through Supabase Realtime on the `queue_entries` table. The student salon detail screen subscribes to queue changes by salon id, and owner queue pages revalidate after queue mutations.

## Payment And Email Architecture

Razorpay routes live under `/api/payments/razorpay` and `/api/webhooks/razorpay`. The implementation returns a mock order until Razorpay keys are configured. Resend is wrapped behind `src/services/email.ts` and is build-safe until API keys are added.

## Verification

Current verified checks:

```bash
npm run typecheck
npx prisma generate
npm run build
npm audit --omit=dev
```

Production dependency audit is clean. Remaining npm audit findings are dev-only at the time of setup.
