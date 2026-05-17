import { Pause, UserPlus } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { QueueTable } from "@/components/dashboard/queue-table";
import { Button } from "@/components/ui/button";

export default function OwnerQueuePage() {
  return (
    <DashboardShell>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-black">Queue Management</h2>
          <p className="mt-1 text-white/55">Add walk-ins, reorder, skip, complete, or pause the salon queue.</p>
        </div>
        <div className="flex gap-2">
          <Button><UserPlus className="h-4 w-4" /> Add Walk-in</Button>
          <Button variant="outline" className="border-white/10 bg-white/5 text-white"><Pause className="h-4 w-4" /> Pause Queue</Button>
        </div>
      </div>
      <QueueTable />
    </DashboardShell>
  );
}
