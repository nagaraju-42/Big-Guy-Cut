import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 text-white">
      <Card className="w-full max-w-md border-white/10 bg-white/[0.04] p-6 shadow-none">
        <BrandMark />
        <h1 className="mt-8 text-3xl font-black">Create account</h1>
        <div className="mt-6 grid gap-4">
          <Input placeholder="Name" className="border-white/10 bg-white/5 text-white" />
          <Input placeholder="Email" type="email" className="border-white/10 bg-white/5 text-white" />
          <Input placeholder="Password" type="password" className="border-white/10 bg-white/5 text-white" />
          <Button>Sign up</Button>
        </div>
        <Link href="/login" className="mt-5 block text-sm text-white/60">Already have an account?</Link>
      </Card>
    </main>
  );
}
