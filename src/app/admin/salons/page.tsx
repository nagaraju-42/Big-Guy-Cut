import { Check, X } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { salons } from "@/lib/data";

export default function SalonApprovalPage() {
  return (
    <DashboardShell mode="admin">
      <h2 className="text-3xl font-black">Salon Approval</h2>
      <div className="mt-5 grid gap-3">
        {salons.map((salon) => (
          <Card key={salon.id} className="border-white/10 bg-white/[0.04] p-4 shadow-none">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-black">{salon.name}</h3>
                <p className="text-white/55">{salon.address}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm"><Check className="h-4 w-4" /> Verify</Button>
                <Button size="sm" variant="destructive"><X className="h-4 w-4" /> Reject</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
