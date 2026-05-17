# THE BIG GUY Deployment Guide

This guide is for launching the first MVP for **one salon**.

Do not paste private credentials into chat. Put secrets only in `.env.local`, Supabase, Vercel, Razorpay, and Resend dashboards.

## Accounts To Create

Create these first:

1. **GitHub**
   - Stores the source code.
   - Vercel deploys automatically from GitHub.

2. **Supabase**
   - PostgreSQL database.
   - Supabase Auth for student/owner login.
   - Supabase Realtime for queue updates.
   - Supabase Storage for salon/barber images.

3. **Vercel**
   - Hosts the Next.js web app.
   - Connects to GitHub for auto deployments.
   - Stores production environment variables.
   - Provides analytics for MVP.

4. **Resend**
   - Sends booking confirmations, cancellation emails, and reminders.
   - Optional for first local test, recommended before public launch.

5. **Razorpay**
   - Handles future commitment fee / advance booking payment.
   - Use test mode first.
   - Optional for the first no-payment queue MVP.

Optional later:

- Domain provider such as Namecheap, GoDaddy, or Cloudflare.
- Google OAuth credentials for Google login.
- Firebase for push notifications.
- PostHog for deeper analytics.

## Credentials Needed

### Supabase

From Supabase project settings, collect:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
DIRECT_URL=
```

Important:

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are safe for browser use.
- `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, and `DIRECT_URL` are private server secrets.
- Never commit `.env.local`.

### One-Salon Seed

After creating the owner user in Supabase Auth, copy that user's UUID:

```env
MVP_OWNER_USER_ID=
MVP_OWNER_EMAIL=
MVP_OWNER_NAME=
MVP_SALON_NAME=
MVP_SALON_SLUG=
MVP_SALON_ADDRESS=
MVP_SALON_CITY=
```

### Resend

```env
RESEND_API_KEY=
```

### Razorpay

```env
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

### App URL

Local:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Production:

```env
NEXT_PUBLIC_APP_URL=https://your-domain-or-vercel-url
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create local env file:

```bash
copy .env.example .env.local
```

3. Fill `.env.local` with Supabase values.

4. Generate Prisma client:

```bash
npx prisma generate
```

5. Push database schema:

```bash
npx prisma migrate dev
```

6. Seed the one salon:

```bash
npm run prisma:seed
```

7. Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Supabase Setup

For the detailed Supabase-only checklist, use [Supabase Setup Guide](./SUPABASE_SETUP.md).

1. Create a new Supabase project.
2. Open **Authentication > Providers**.
3. Enable Email login.
4. Create the first owner user in **Authentication > Users**.
5. Copy the owner user's UUID into `MVP_OWNER_USER_ID`.
6. Open **Storage** and create a bucket named:

```text
salon-images
```

7. Open **Database > Replication** and enable realtime for:

```text
queue_entries
bookings
barbers
```

If Supabase asks for table selection after migrations, run migrations first, then return to enable Realtime.

## Vercel Deployment

1. Push this project to GitHub.
2. Open Vercel.
3. Click **Add New Project**.
4. Import the GitHub repo.
5. Framework preset should be **Next.js**.
6. Add all production environment variables from `.env.example`.
7. Deploy.

After deploy:

1. Copy the Vercel production URL.
2. Set `NEXT_PUBLIC_APP_URL` to that URL in Vercel.
3. Redeploy once.

## Production Database Migration

Use one of these approaches:

### Simple MVP Approach

Run migration locally against the Supabase production database:

```bash
npx prisma migrate deploy
npm run prisma:seed
```

Use this for the first MVP because you are managing one production database.

### Safer Later Approach

Add a GitHub Action or run migrations manually before production deploys. Do this when multiple salons are live.

## Launch Checklist

- [ ] GitHub repo created.
- [ ] Supabase project created.
- [ ] Supabase Auth Email enabled.
- [ ] Owner user created in Supabase Auth.
- [ ] Owner UUID added to env.
- [ ] Supabase database URL added.
- [ ] Supabase Storage bucket `salon-images` created.
- [ ] Database migrated.
- [ ] One salon seeded.
- [ ] Local app tested.
- [ ] Vercel project connected.
- [ ] Vercel env vars added.
- [ ] Production deployed.
- [ ] Student flow tested on phone.
- [ ] Owner queue flow tested at salon.

## What I Need From You

Send these values only as labels or screenshots with secrets hidden if we are discussing them in chat. Put actual values into `.env.local` yourself, or share them only through a secure secret manager.

- Salon name
- Salon address and city
- Owner name and email
- Opening time and closing time
- Break time, if any
- Service list with price and duration
- Barber names
- Whether payment should be disabled, Razorpay test mode, or Razorpay live mode
- Whether email should be disabled or Resend enabled
