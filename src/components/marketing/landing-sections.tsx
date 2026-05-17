import Image from "next/image";
import Link from "next/link";
import { Bell, CalendarCheck, Clock, QrCode, ShieldCheck, UsersRound, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { salons } from "@/lib/data";

const features = [
  { icon: Clock, title: "Live Queue", body: "Realtime queue movement and wait estimates." },
  { icon: CalendarCheck, title: "Smart Booking", body: "Reserve before arriving near campus." },
  { icon: ShieldCheck, title: "Commitment Fee", body: "Architecture ready for low no-show flows." },
  { icon: QrCode, title: "QR Check-in", body: "Fast salon arrival and queue verification." },
  { icon: UsersRound, title: "Multi-Role", body: "Student, owner, barber, and admin surfaces." },
  { icon: Bell, title: "Notifications", body: "Email now, WhatsApp and push later." }
];

export function LandingSections() {
  return (
    <main className="bg-background">
      <section className="container py-12">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-white/10 bg-card/70 p-5">
              <feature.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white text-slate-950">
        <div className="container grid gap-8 py-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Badge variant="secondary">Realtime Queue Preview</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-normal md:text-5xl">Operational screens that answer one question: how long will I wait?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {salons.map((salon) => (
                <Card key={salon.id} className="overflow-hidden border-slate-200 bg-white shadow-sm">
                  <Image src={salon.image} alt={salon.name} width={500} height={280} className="h-32 w-full object-cover" />
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-black">{salon.name}</h3>
                        <p className="text-sm text-slate-500">{salon.address}</p>
                      </div>
                      <span className="font-black text-green-600">{salon.estimatedWait} min</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                      <span>{salon.activeBarbers} barbers</span>
                      <span>{salon.queueCount} in queue</span>
                      <span>{salon.rating} rating</span>
                    </div>
                    <Button asChild className="mt-4 w-full" size="sm">
                      <Link href={`/student/salons/${salon.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-slate-200 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black">Live Queue Tracking</h3>
              <Badge variant="live">LIVE</Badge>
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">You are <span className="font-black text-primary">3rd</span> in queue</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-white/60">Estimated wait</span>
                <span className="text-4xl font-black text-green-400">25 min</span>
              </div>
              <div className="mt-6 h-2 rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-primary" />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {["Booking confirmed", "You are in queue", "Almost your turn", "Service completed"].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-black text-black">{index + 1}</span>
                  <span className="font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="container grid gap-6 py-12 lg:grid-cols-2">
        <Card className="overflow-hidden border-white/10 bg-card">
          <Image src="/reference/dashboard-grid.png" alt="Owner and admin dashboards" width={1200} height={800} className="h-72 w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-black">For Salon Owners</h2>
            <p className="mt-2 text-muted-foreground">Manage walk-ins, queue order, barbers, services, breaks, and daily performance from one fast dashboard.</p>
          </div>
        </Card>
        <Card className="overflow-hidden border-white/10 bg-card">
          <Image src="/reference/platform-map.png" alt="Multi-role platform UI" width={1200} height={800} className="h-72 w-full object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-black">For Students</h2>
            <p className="mt-2 text-muted-foreground">Find nearby salons, join the queue, prebook slots, and arrive when it actually matters.</p>
          </div>
        </Card>
      </section>

      <section className="container pb-16">
        <div className="rounded-lg border border-primary/20 bg-primary p-8 text-center text-primary-foreground">
          <Zap className="mx-auto h-9 w-9" />
          <h2 className="mt-4 text-3xl font-black">Built for crowd traffic, not slow appointment software.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-black/70">Launch in one city, scale to many salons, then grow into payments, subscriptions, analytics, and mobile apps.</p>
          <Button asChild variant="secondary" className="mt-6">
            <Link href="/owner">Open Owner Dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
