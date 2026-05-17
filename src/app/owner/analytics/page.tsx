import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Card } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Total Bookings" value="1,248" hint="+18% this month" />
        <MetricCard label="Avg Wait" value="22m" hint="-8m improved" />
        <MetricCard label="Peak Hour" value="6 PM" hint="Hostel return rush" />
        <MetricCard label="Customers" value="3,420" hint="repeat rate ready" />
      </div>
      <Card className="mt-6 border-white/10 bg-white/[0.04] p-5 shadow-none">
        <h2 className="text-xl font-black">Peak Times</h2>
        <div className="mt-6 flex h-64 items-end gap-3">
          {[30, 45, 55, 80, 95, 72, 60].map((height, index) => (
            <div key={height + index} className="flex-1 rounded-t-md bg-primary/80" style={{ height: `${height}%` }} />
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}
