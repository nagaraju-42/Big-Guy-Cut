import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Clock, ShieldCheck, Smartphone, Store, UsersRound, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const items: Array<{ title: string; body: string; Icon: LucideIcon }> = [
  { title: "Realtime queues", body: "Students see live position, wait time, and queue movement without refreshing.", Icon: Clock },
  { title: "Slot booking", body: "Prebook by service, barber, date, and time with payment-ready architecture.", Icon: CalendarCheck },
  { title: "Owner operations", body: "Owners manage walk-ins, skips, completions, barbers, services, and schedules.", Icon: Store },
  { title: "Multi-role platform", body: "Student, salon owner, barber, and admin surfaces share one scalable backend.", Icon: UsersRound },
  { title: "PWA-ready", body: "Web app first with installable mobile app behavior later, no Play Store dependency.", Icon: Smartphone },
  { title: "Secure foundation", body: "Supabase Auth, Prisma, Zod validation, role guards, and webhook verification.", Icon: ShieldCheck }
];

export default function FeaturesPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <Zap className="h-10 w-10 text-primary" />
        <h1 className="mt-5 text-5xl font-black tracking-normal">Built for crowded salon operations.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          THE BIG GUY gives students speed and gives salons control. Every screen is designed around queue clarity.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, body, Icon }) => (
          <Card key={title} className="border-white/10 bg-white/[0.04] p-6 shadow-none">
            <Icon className="h-7 w-7 text-primary" />
            <h2 className="mt-5 text-xl font-black">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
