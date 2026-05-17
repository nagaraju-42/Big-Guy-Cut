import { Filter, MapPin } from "lucide-react";
import { StudentShell } from "@/components/student/mobile-shell";
import { SalonCard } from "@/components/student/salon-card";
import { Button } from "@/components/ui/button";
import { salons } from "@/lib/data";

export default function NearbySalonsPage() {
  return (
    <StudentShell>
      <div className="flex items-center justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm text-white/55">
            <MapPin className="h-4 w-4 text-primary" />
            Within 3 km
          </p>
          <h1 className="mt-1 text-3xl font-black">Nearby Salons</h1>
        </div>
        <Button size="icon" variant="outline" className="border-white/10 bg-white/5 text-white">
          <Filter className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {salons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </StudentShell>
  );
}
