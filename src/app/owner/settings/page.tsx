import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function OwnerSettingsPage() {
  return (
    <DashboardShell>
      <Card className="max-w-3xl border-white/10 bg-white/[0.04] p-6 shadow-none">
        <h2 className="text-3xl font-black">Salon Settings</h2>
        <div className="mt-6 grid gap-4">
          <Input defaultValue="Campus Cuts" className="border-white/10 bg-white/5 text-white" />
          <Input defaultValue="GTB Nagar, Delhi" className="border-white/10 bg-white/5 text-white" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input defaultValue="09:00" className="border-white/10 bg-white/5 text-white" />
            <Input defaultValue="22:00" className="border-white/10 bg-white/5 text-white" />
          </div>
          <Button>Save Settings</Button>
        </div>
      </Card>
    </DashboardShell>
  );
}
