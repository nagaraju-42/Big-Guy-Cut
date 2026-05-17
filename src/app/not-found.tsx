import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 text-center text-white">
      <div>
        <h1 className="text-5xl font-black">404</h1>
        <p className="mt-3 text-white/60">This queue lane does not exist yet.</p>
        <Button asChild className="mt-6">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
}
