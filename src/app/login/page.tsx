import Link from "next/link";
import { signInWithEmail } from "@/actions/auth";
import { BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 text-white">
      <Card className="w-full max-w-md border-white/10 bg-white/[0.04] p-6 shadow-none">
        <BrandMark />
        <h1 className="mt-8 text-3xl font-black">Login</h1>
        <form action={signInWithEmail} className="mt-6 grid gap-4">
          <Input name="email" type="email" placeholder="Email" className="border-white/10 bg-white/5 text-white" required />
          <Input name="password" type="password" placeholder="Password" className="border-white/10 bg-white/5 text-white" required />
          <Button>Continue</Button>
        </form>
        <div className="mt-5 flex justify-between text-sm text-white/60">
          <Link href="/signup">Create account</Link>
          <Link href="/forgot-password">Forgot password</Link>
        </div>
      </Card>
    </main>
  );
}
