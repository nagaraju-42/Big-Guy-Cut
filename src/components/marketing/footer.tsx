import Link from "next/link";
import { BrandMark } from "@/components/brand";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-white">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <BrandMark />
        <div className="flex gap-5 text-sm text-white/60">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
