import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Card } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <DashboardShell mode="admin">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Salons" value="2,548" hint="142 pending verification" />
        <MetricCard label="Users" value="125K" hint="Student heavy traffic" />
        <MetricCard label="Live Queues" value="819" hint="Realtime channels" />
        <MetricCard label="Reports" value="12" hint="Needs review" />
      </div>
      <Card className="mt-6 border-white/10 bg-white/[0.04] p-5 shadow-none">
        <h2 className="text-xl font-black">Platform Activity</h2>
        <div className="mt-4 grid gap-3">
          {["Campus Cuts added 18 queue entries", "Style Studio requested verification", "Payment webhook processed", "User report submitted"].map((item) => (
            <div key={item} className="rounded-md bg-black/25 p-3 text-white/75">{item}</div>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}
