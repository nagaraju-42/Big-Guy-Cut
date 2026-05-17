# THE BIG GUY One-Salon MVP

The first version should be built for **one real salon**, not a marketplace. The database remains scalable, but the product launch should focus on one owner, one location, one queue, and one student-heavy area.

## MVP Goal

Launch a working salon queue system where:

- Students can open the web app on mobile.
- Students can view the salon, services, barbers, queue count, and estimated wait.
- Students can join/cancel a queue entry.
- The salon owner can manage walk-ins, queue status, barber availability, and services.
- Admin can be minimal or hidden initially.

## Keep For MVP

- One verified salon seeded in the database.
- One salon owner account.
- 3-5 services.
- 2-4 barbers.
- Live queue updates.
- Booking confirmation by email.
- Razorpay test mode or disabled payment mock.
- Vercel deployment.

## Defer Until Later

- Multiple public salon onboarding.
- City/category discovery algorithms.
- Public pricing/subscriptions.
- WhatsApp automation.
- Push notifications.
- Advanced analytics.
- Mobile app store release.
- Franchise dashboards.

## One-Salon Setup Flow

1. Create the salon owner in Supabase Auth.
2. Copy the owner user's UUID.
3. Put the UUID into `MVP_OWNER_USER_ID` in `.env.local`.
4. Put the salon details into the `MVP_SALON_*` variables.
5. Run migrations.
6. Run the one-salon seed.

```bash
npx prisma migrate dev
npm run prisma:seed
```

## Current Single-Salon Defaults

The seed creates:

- Salon: `Campus Cuts`
- Services: Haircut, Beard Trim, Haircut + Beard, Hair Wash
- Barbers: Rahul, Amit, Vikram
- Hours: 9:00 AM to 10:00 PM, every day
- Break: 2:00 PM to 2:30 PM

Change these in `.env.local` before seeding, or edit `prisma/seed.mjs` if you want different default services/barbers.
