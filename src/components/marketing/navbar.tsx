import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { BrandMark } from "@/components/brand";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="THE BIG GUY home">
          <BrandMark className="text-lg text-white" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-white/10 bg-white/10 p-1 text-white md:flex">
            <Sun className="h-4 w-4" />
            <Moon className="h-4 w-4 opacity-70" />
          </div>
          <Button asChild size="sm">
            <Link href="/student">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
