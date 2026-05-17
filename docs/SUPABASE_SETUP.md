# Supabase Setup Guide For New Users

This guide tells you exactly what to do inside Supabase for **THE BIG GUY one-salon MVP**.

You will use Supabase for:

- PostgreSQL database
- Authentication
- Realtime queue updates
- Image storage
- Owner user creation

Do not share your real secret keys in chat. Put secrets only in `.env.local` on your laptop and in Vercel Environment Variables when deploying.

Official references:

- [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys)
- [Supabase database connection strings](https://supabase.com/docs/reference/postgres/connection-strings)
- [Supabase Realtime Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes)
- [Supabase Storage buckets](https://supabase.com/docs/guides/storage/buckets/fundamentals)

## Step 1: Create Your Supabase Account

1. Open [https://supabase.com](https://supabase.com).
2. Click **Start your project** or **Sign in**.
3. Sign in using GitHub or email.
4. If Supabase asks you to create an organization, create one.

Suggested organization name:

```text
The Big Guy
```

## Step 2: Create A New Supabase Project

1. Inside the Supabase dashboard, click **New project**.
2. Select your organization.
3. Fill the project form:

```text
Project name: the-big-guy
Database password: create a strong password
Region: closest available region to India / your first salon
Pricing plan: Free
```

4. Save the database password somewhere safe.
5. Click **Create new project**.
6. Wait until Supabase finishes creating the project.

Important:

- The database password is needed in database connection strings.
- If you lose it, you can reset it later, but saving it now avoids pain.

## Step 3: Find Your Supabase Project URL

This becomes:

```env
NEXT_PUBLIC_SUPABASE_URL=
```

Where to find it:

1. Open your Supabase project.
2. In the left sidebar, click **Project Settings**.
3. Click **API Keys**.
4. Find **Project URL**.
5. Copy the URL.

It looks like:

```text
https://abcdefghijklm.supabase.co
```

Put it in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
```

## Step 4: Find Your Public Browser Key

This becomes:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Supabase now has newer key names and legacy key names. For this project, use one of these:

- Preferred: **Publishable key**
- Also okay: legacy **anon public** key

Where to find it:

1. Open your Supabase project.
2. Go to **Project Settings**.
3. Click **API Keys**.
4. Look for **Publishable key**.
5. Copy it.

If you do not see a publishable key:

1. Stay in **Project Settings > API Keys**.
2. Open the **Legacy API Keys** section.
3. Copy the **anon public** key.

Put it in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY="paste-publishable-or-anon-key-here"
```

Important:

- This key is safe to use in the browser.
- It starts with `sb_publishable_...` if using the newer key system.
- Legacy anon keys are long JWT-looking strings.

## Step 5: Find Your Private Service Key

This becomes:

```env
SUPABASE_SERVICE_ROLE_KEY=
```

Where to find it:

1. Open your Supabase project.
2. Go to **Project Settings**.
3. Click **API Keys**.
4. Look for **Secret key** or **Service role key**.

Use one of these:

- Preferred: **Secret key**
- Also okay: legacy **service_role** key

If using legacy keys:

1. Open the **Legacy API Keys** section.
2. Copy the **service_role** key.

Put it in `.env.local`:

```env
SUPABASE_SERVICE_ROLE_KEY="paste-secret-or-service-role-key-here"
```

Important:

- This is private.
- Never put this key in frontend code.
- Never commit it to GitHub.
- Only use it on the server or in Vercel environment variables.

## Step 6: Find Your Database Connection Strings

You need two database values:

```env
DATABASE_URL=
DIRECT_URL=
```

Where to find them:

1. Open your Supabase project.
2. Look at the top area of the dashboard for a **Connect** button.
3. Click **Connect**.
4. Choose **ORMs** or **Prisma** if Supabase shows that option.
5. Copy the Prisma connection strings.

If you do not see ORM/Prisma:

1. Go to **Project Settings**.
2. Click **Database**.
3. Find **Connection string** or **Connection pooling**.

Use this mapping:

```env
DATABASE_URL="pooled connection string"
DIRECT_URL="direct connection string"
```

For Vercel/serverless deployment:

- `DATABASE_URL`: use **Transaction pooler** if available.
- `DIRECT_URL`: use **Direct connection** if your network supports it.

If direct connection fails:

- Use the **Session pooler** connection string for `DIRECT_URL`.

Your strings will look similar to:

```env
DATABASE_URL="postgresql://postgres.PROJECT_REF:PASSWORD@aws-0-region.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres:PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres"
```

Replace:

- `PASSWORD` with your Supabase database password.
- Keep the project reference and host exactly as Supabase gives them.

Important:

- Do not use angle brackets like `<password>` in the final value.
- If your password has special characters, use the connection string copied by Supabase or URL-encode the password.

## Step 7: Add Values To `.env.local`

In your project folder, create `.env.local` from `.env.example`.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Then open `.env.local` and fill:

```env
DATABASE_URL=""
DIRECT_URL=""
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
SUPABASE_SERVICE_ROLE_KEY=""
```

Do not commit `.env.local`.

## Step 8: Enable Email Authentication

For MVP, use email/password login first.

Where to go:

1. Open Supabase project.
2. Left sidebar: click **Authentication**.
3. Click **Providers**.
4. Find **Email**.
5. Enable Email provider.
6. Save.

Recommended MVP settings:

- Email provider: enabled
- Confirm email: optional for local testing, recommended for production
- Google login: later
- Phone OTP: later

If login feels difficult during local testing, temporarily disable email confirmation. Turn it back on before serious production use.

## Step 9: Create The First Salon Owner User

This is required for the one-salon seed.

Where to go:

1. Open Supabase project.
2. Left sidebar: click **Authentication**.
3. Click **Users**.
4. Click **Add user** or **Invite user**.
5. Enter the salon owner's email.
6. Set a temporary password if Supabase asks.
7. Create the user.

Now copy the owner UUID:

1. Stay on **Authentication > Users**.
2. Click the owner user.
3. Find the field called **User UID**, **ID**, or **UUID**.
4. Copy it.

It looks like:

```text
f5a7f1b0-2c7d-4b6b-9f0a-123456789abc
```

Put it in `.env.local`:

```env
MVP_OWNER_USER_ID="paste-owner-uuid-here"
MVP_OWNER_EMAIL="owner@email.com"
MVP_OWNER_NAME="Owner Name"
```

## Step 10: Add Your One Salon Details

In `.env.local`, fill these:

```env
MVP_SALON_NAME="Your Salon Name"
MVP_SALON_SLUG="your-salon-slug"
MVP_SALON_ADDRESS="Your Full Salon Address"
MVP_SALON_CITY="Your City"
```

Example:

```env
MVP_SALON_NAME="Campus Cuts"
MVP_SALON_SLUG="campus-cuts"
MVP_SALON_ADDRESS="GTB Nagar, Delhi"
MVP_SALON_CITY="Delhi"
```

Slug rules:

- Use lowercase letters.
- Use hyphens instead of spaces.
- Do not use special characters.

Good:

```text
campus-cuts
the-big-guy-salon
style-studio
```

Bad:

```text
Campus Cuts
campus cuts
campus_cuts!!!
```

## Step 11: Run Prisma Migration

After `.env.local` has database values:

```bash
npx prisma generate
npx prisma migrate dev
```

This creates tables in Supabase:

- `users`
- `salons`
- `barbers`
- `services`
- `bookings`
- `queue_entries`
- `notifications`
- `payments`
- `salon_schedules`
- `barber_schedules`

To confirm in Supabase:

1. Open Supabase project.
2. Click **Table Editor** in the left sidebar.
3. You should see the tables listed.

## Step 12: Seed The First Salon

After migration:

```bash
npm run prisma:seed
```

This creates:

- One owner profile in the app database
- One salon
- Default services
- Default barbers
- Default working hours

To confirm in Supabase:

1. Open **Table Editor**.
2. Click `salons`.
3. You should see your salon.
4. Click `services`.
5. You should see services.
6. Click `barbers`.
7. You should see barbers.

## Step 13: Create Storage Bucket For Images

This app uses Supabase Storage for salon photos and barber images.

Where to go:

1. Open Supabase project.
2. Left sidebar: click **Storage**.
3. Click **New bucket**.
4. Bucket name:

```text
salon-images
```

5. Set bucket to **Public** for MVP.
6. Save.

Why public?

- Salon photos are public marketing images.
- Public images load faster and are easier for MVP.
- Upload/delete can still be protected later with policies.

If Supabase asks for file restrictions, use:

```text
Allowed MIME types: image/*
Max file size: 5MB
```

## Step 14: Enable Realtime For Queue Updates

Realtime should be enabled after tables exist.

Where to go:

1. Open Supabase project.
2. Left sidebar: click **Database**.
3. Find **Replication** or **Publications**.
4. Open the publication named:

```text
supabase_realtime
```

5. Enable these tables:

```text
queue_entries
bookings
barbers
```

If you cannot find the UI option, use SQL.

Where to run SQL:

1. Left sidebar: click **SQL Editor**.
2. Click **New query**.
3. Paste:

```sql
alter publication supabase_realtime add table queue_entries;
alter publication supabase_realtime add table bookings;
alter publication supabase_realtime add table barbers;
```

4. Click **Run**.

If Supabase says the table is already added, that is okay.

## Step 15: Keep RLS Simple For MVP

RLS means Row Level Security.

For the first MVP:

- Database writes should happen through Next.js Server Actions.
- Do not let random browser users directly write to sensitive tables.
- Realtime read policies can be added after the base flow is working.

Before public launch, we should add exact RLS SQL for:

- Student reads public salon data.
- Student manages only their own queue entry.
- Owner manages only their own salon.
- Admin manages all.

Do not worry about writing RLS policies manually right now unless you are ready for public users.

## Step 16: Add Supabase Values To Vercel

After local setup works, add the same values to Vercel.

Where to go in Vercel:

1. Open Vercel.
2. Open your project.
3. Click **Settings**.
4. Click **Environment Variables**.
5. Add each value one by one.

Add these:

```env
DATABASE_URL
DIRECT_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
MVP_OWNER_USER_ID
MVP_OWNER_EMAIL
MVP_OWNER_NAME
MVP_SALON_NAME
MVP_SALON_SLUG
MVP_SALON_ADDRESS
MVP_SALON_CITY
```

Use environment:

```text
Production
Preview
Development
```

For simple MVP, add to all three.

After saving env vars, redeploy the Vercel project.

## Step 17: Final Supabase Checklist

Use this checklist and tick each one.

- [ ] Supabase account created.
- [ ] Organization created.
- [ ] Project created.
- [ ] Database password saved.
- [ ] Project URL copied.
- [ ] Publishable or anon key copied.
- [ ] Secret or service role key copied.
- [ ] Database pooled URL copied into `DATABASE_URL`.
- [ ] Database direct/session URL copied into `DIRECT_URL`.
- [ ] `.env.local` filled.
- [ ] Email Auth enabled.
- [ ] Owner user created in Supabase Auth.
- [ ] Owner UUID copied into `MVP_OWNER_USER_ID`.
- [ ] Salon name/address/city filled in env.
- [ ] `npx prisma generate` run.
- [ ] `npx prisma migrate dev` run.
- [ ] Tables visible in Supabase Table Editor.
- [ ] `npm run prisma:seed` run.
- [ ] One salon visible in `salons` table.
- [ ] Services visible in `services` table.
- [ ] Barbers visible in `barbers` table.
- [ ] Storage bucket `salon-images` created.
- [ ] Realtime enabled for `queue_entries`.
- [ ] Realtime enabled for `bookings`.
- [ ] Realtime enabled for `barbers`.
- [ ] Same env vars added to Vercel.

## What To Send Me After You Finish

Do not send secret keys.

Send only:

```text
Supabase project created: yes/no
Auth owner user created: yes/no
Owner UUID added to .env.local: yes/no
Database migration worked: yes/no
Seed worked: yes/no
Storage bucket created: yes/no
Realtime enabled: yes/no
```

If anything fails, send the error message only. Hide passwords, keys, and tokens.
