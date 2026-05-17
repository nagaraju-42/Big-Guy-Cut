import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 text-white">
      <Card className="w-full max-w-md border-white/10 bg-white/[0.04] p-6 shadow-none">
        <BrandMark />
        <h1 className="mt-8 text-3xl font-black">Reset password</h1>
        <p className="mt-2 text-sm text-white/60">Supabase password reset and OTP login architecture is ready to wire with project keys.</p>
        <div className="mt-6 grid gap-4">
          <Input placeholder="Email" type="email" className="border-white/10 bg-white/5 text-white" />
          <Button>Send reset link</Button>
        </div>
        <Link href="/login" className="mt-5 block text-sm text-white/60">Back to login</Link>
      </Card>
    </main>
  );
}
