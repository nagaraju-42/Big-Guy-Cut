import Link from "next/link";
import { Bell, CalendarCheck, Home, MapPin, UserRound, UsersRound } from "lucide-react";
import { BrandMark } from "@/components/brand";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/student", label: "Home", icon: Home },
  { href: "/student/salons", label: "Salons", icon: MapPin },
  { href: "/student/booking", label: "Queue", icon: UsersRound },
  { href: "/student/history", label: "Bookings", icon: CalendarCheck },
  { href: "/student/profile", label: "Profile", icon: UserRound }
];

export function StudentShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <BrandMark />
          <div className="flex items-center gap-3 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-primary" />
            Patel Nagar
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </header>
      <main className={cn("mx-auto max-w-6xl px-4 pb-28 pt-5", className)}>{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 px-3 py-2 backdrop-blur md:hidden">
        <div className="grid grid-cols-5 gap-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 rounded-md px-2 py-2 text-[11px] text-white/60">
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
