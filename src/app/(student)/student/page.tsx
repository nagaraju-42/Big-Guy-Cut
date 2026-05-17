import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import { StudentShell } from "@/components/student/mobile-shell";
import { SalonCard } from "@/components/student/salon-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { salons } from "@/lib/data";

export default function StudentDashboardPage() {
  return (
    <StudentShell>
      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm text-white/60">Hello, Rohit</p>
        <h1 className="mt-1 text-3xl font-black">Find your haircut without the wait.</h1>
        <div className="mt-5 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-white/35" />
            <Input className="border-white/10 bg-white/5 pl-10 text-white" placeholder="Search salon, area or service" />
          </div>
          <Button size="icon" variant="outline" className="border-white/10 bg-white/5 text-white">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black">Nearby Salons</h2>
          <Link href="/student/salons" className="text-sm font-bold text-primary">View all</Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {salons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      </section>
      <Card className="mt-6 border-primary/20 bg-primary/10 p-5 text-primary shadow-none">
        <h2 className="font-black">Book & skip the queue</h2>
        <p className="mt-2 text-sm text-primary/80">Pay a small commitment fee later and confirm your slot before leaving hostel.</p>
      </Card>
    </StudentShell>
  );
}
