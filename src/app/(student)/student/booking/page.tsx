import { CheckCircle2, Clock, MapPin } from "lucide-react";
import { StudentShell } from "@/components/student/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ActiveBookingPage() {
  return (
    <StudentShell>
      <h1 className="text-3xl font-black">Active Booking</h1>
      <Card className="mt-5 border-white/10 bg-white/[0.04] p-5 shadow-none">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-black">Campus Cuts</h2>
            <p className="mt-1 flex gap-2 text-white/55"><MapPin className="h-5 w-5 text-primary" /> GTB Nagar, Delhi</p>
          </div>
          <span className="rounded-md bg-success/15 px-3 py-1 text-sm font-bold text-success">Confirmed</span>
        </div>
        <div className="mt-6 rounded-md bg-black/25 p-4">
          <p className="text-sm text-white/60">You are <b className="text-primary">3rd</b> in queue</p>
          <div className="mt-2 flex items-end justify-between">
            <span className="flex items-center gap-2 text-white/55"><Clock className="h-5 w-5" /> Estimated wait</span>
            <span className="text-4xl font-black text-green-400">25 min</span>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {["Booking confirmed", "You are in queue", "Almost your turn", "Your turn"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className={index < 2 ? "h-6 w-6 text-success" : "h-6 w-6 text-white/25"} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Button className="mt-6 w-full">Get Notified When It&apos;s My Turn</Button>
      </Card>
    </StudentShell>
  );
}
