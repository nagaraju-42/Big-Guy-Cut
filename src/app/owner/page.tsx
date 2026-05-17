import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MetricCard } from "@/components/dashboard/metric-card";
import { QueueTable } from "@/components/dashboard/queue-table";
import { Card } from "@/components/ui/card";

export default function OwnerDashboardPage() {
  return (
    <DashboardShell>
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Today Bookings" value="45" hint="+12% vs yesterday" />
        <MetricCard label="Active Queue" value="18" hint="Live now" />
        <MetricCard label="Active Barbers" value="6" hint="4 working" />
        <MetricCard label="No Shows" value="3" hint="-10% vs yesterday" />
      </div>
      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_380px]">
        <QueueTable />
        <div className="space-y-5">
          <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
            <h2 className="text-xl font-black">Revenue Placeholder</h2>
            <p className="mt-3 text-4xl font-black">₹12,450</p>
            <p className="mt-2 text-sm text-success">Razorpay-ready commitment fee flow</p>
            <div className="mt-6 h-32 rounded-md bg-gradient-to-tr from-primary/30 via-purple/25 to-success/20" />
          </Card>
          <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
            <h2 className="text-xl font-black">Barber Status</h2>
            <div className="mt-4 space-y-3 text-sm">
              {["Rahul available", "Amit in service", "Vikram on break", "Sahil available"].map((item) => (
                <div key={item} className="flex justify-between rounded-md bg-black/25 p-3">
                  <span>{item}</span>
                  <span className="text-primary">Live</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
