import { Plus } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function ServiceManagementPage() {
  return (
    <DashboardShell>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">Service Management</h2>
          <p className="mt-1 text-white/55">Pricing, duration, active status, and barber assignment.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Add Service</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id} className="border-white/10 bg-white/[0.04] p-5 shadow-none">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black">{service.name}</h3>
                <p className="mt-1 text-white/55">{service.duration} minutes</p>
              </div>
              <div className="text-2xl font-black text-primary">{formatCurrency(service.price)}</div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
