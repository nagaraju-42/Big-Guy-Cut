# Vercel Environment Variables

Add these in Vercel after importing the GitHub repo.

Where in Vercel:

```text
Project > Settings > Environment Variables
```

Add each variable to:

```text
Production, Preview, Development
```

For secret/private values, copy the exact value from your local `.env.local`. Do not paste private secrets into chat, GitHub, README files, or screenshots.

| Variable name | Value to enter in Vercel |
| --- | --- |
| `DATABASE_URL` | Copy exact value from `.env.local` |
| `DIRECT_URL` | Copy exact value from `.env.local` |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://hgwtjamwqhbasvmvqyoe.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Copy exact value from `.env.local` |
| `SUPABASE_SERVICE_ROLE_KEY` | Copy exact value from `.env.local` |
| `RESEND_API_KEY` | Leave empty for now, or add later from Resend |
| `RAZORPAY_KEY_ID` | Leave empty for now, or add later from Razorpay |
| `RAZORPAY_KEY_SECRET` | Leave empty for now, or add later from Razorpay |
| `NEXT_PUBLIC_APP_URL` | First use your Vercel URL, later replace with custom domain |
| `MVP_OWNER_USER_ID` | `8e397abd-ebbd-42d3-8093-3c488470de84` |
| `MVP_OWNER_EMAIL` | `owner@bigguycut.com` |
| `MVP_OWNER_NAME` | `Bigguycut Owner` |
| `MVP_SALON_NAME` | `bigguycut` |
| `MVP_SALON_SLUG` | `bigguycut` |
| `MVP_SALON_ADDRESS` | `Update salon address` |
| `MVP_SALON_CITY` | `Update city` |

## After First Vercel Deploy

1. Copy the production URL from Vercel.
2. Update `NEXT_PUBLIC_APP_URL` in Vercel to that production URL.
3. Redeploy once.
4. In Supabase, go to:

```text
Authentication > URL Configuration
```

Set:

```text
Site URL = your Vercel production URL
```

Add redirect URLs:

```text
https://your-vercel-url.vercel.app/**
http://localhost:3000/**
```

## Important Security Note

Before real public launch, rotate these in Supabase because they were pasted in chat during setup:

- Database password
- Service role / secret key

After rotating, update local `.env.local` and Vercel Environment Variables.
