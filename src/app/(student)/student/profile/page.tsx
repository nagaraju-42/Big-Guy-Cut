import { Mail, ShieldCheck, UserRound } from "lucide-react";
import { StudentShell } from "@/components/student/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <StudentShell>
      <Card className="border-white/10 bg-white/[0.04] p-6 text-center shadow-none">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-black">
          <UserRound className="h-10 w-10" />
        </div>
        <h1 className="mt-4 text-3xl font-black">Rohit Sharma</h1>
        <p className="mt-2 flex items-center justify-center gap-2 text-white/55"><Mail className="h-4 w-4" /> rohit@example.com</p>
      </Card>
      <Card className="mt-5 border-white/10 bg-white/[0.04] p-5 shadow-none">
        <h2 className="font-black">Account</h2>
        <div className="mt-4 space-y-3 text-sm text-white/70">
          <p className="flex gap-2"><ShieldCheck className="h-5 w-5 text-success" /> Supabase Auth ready: email, OTP, Google later.</p>
          <p>Role: Student</p>
          <p>Notifications: email enabled, WhatsApp and push planned.</p>
        </div>
        <Button variant="outline" className="mt-5 w-full border-white/10 bg-white/5 text-white">Logout</Button>
      </Card>
    </StudentShell>
  );
}
