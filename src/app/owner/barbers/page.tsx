import { Plus } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { barbers } from "@/lib/data";

export default function BarberManagementPage() {
  return (
    <DashboardShell>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">Barber Management</h2>
          <p className="mt-1 text-white/55">Availability, specialties, service assignment, and schedules.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add Barber</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {barbers.map((barber) => (
          <Card key={barber.id} className="border-white/10 bg-white/[0.04] p-5 shadow-none">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-2xl font-black text-black">{barber.name[0]}</div>
            <h3 className="mt-4 text-xl font-black">{barber.name}</h3>
            <p className="mt-1 text-sm text-white/55">{barber.load}</p>
            <div className="mt-4 rounded-md bg-white/10 px-3 py-2 text-sm">{barber.status}</div>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
