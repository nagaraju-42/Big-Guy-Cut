import { Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { queueEntries } from "@/lib/data";

export function QueueTable() {
  return (
    <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black">Current Queue ({queueEntries.length})</h2>
        <Button size="sm" variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
          Add Walk-in
        </Button>
      </div>
      <div className="mt-5 space-y-3">
        {queueEntries.map((entry, index) => (
          <div key={entry.id} className="grid gap-3 rounded-md border border-white/10 bg-black/25 p-3 md:grid-cols-[40px_1fr_120px_120px_180px] md:items-center">
            <div className="font-mono text-white/50">{index + 1}</div>
            <div>
              <div className="font-bold">{entry.name}</div>
              <div className="text-sm text-white/50">{entry.service}</div>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/70">
              <IndianRupee className="h-4 w-4" /> {entry.amount}
            </div>
            <div className="flex items-center gap-1 text-sm text-white/70">
              <Clock className="h-4 w-4" /> {entry.wait} min
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Complete</Button>
              <Button size="sm" variant="destructive" className="flex-1">Skip</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
