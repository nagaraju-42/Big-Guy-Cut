import Link from "next/link";
import { BarChart3, CalendarCheck, LayoutDashboard, Scissors, Settings, Store, UsersRound } from "lucide-react";
import { BrandMark } from "@/components/brand";
import { cn } from "@/lib/utils";

const ownerNav = [
  { href: "/owner", label: "Dashboard", icon: LayoutDashboard },
  { href: "/owner/queue", label: "Queue", icon: UsersRound },
  { href: "/owner/barbers", label: "Barbers", icon: Scissors },
  { href: "/owner/services", label: "Services", icon: Store },
  { href: "/owner/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/owner/settings", label: "Settings", icon: Settings }
];

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/salons", label: "Salon Approval", icon: Store },
  { href: "/admin/users", label: "Users", icon: UsersRound },
  { href: "/owner", label: "Owner View", icon: CalendarCheck }
];

export function DashboardShell({
  children,
  mode = "owner"
}: {
  children: React.ReactNode;
  mode?: "owner" | "admin";
}) {
  const nav = mode === "owner" ? ownerNav : adminNav;

  return (
    <div className="min-h-screen bg-[#070b12] text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/10 bg-black/40 p-4 lg:block">
        <BrandMark className="mb-8" />
        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-white/65 transition hover:bg-white/8 hover:text-white")}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="lg:pl-64">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b12]/90 px-4 py-4 backdrop-blur lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/50">{mode === "owner" ? "Salon operations" : "Platform control"}</p>
              <h1 className="text-2xl font-black">{mode === "owner" ? "Owner Dashboard" : "Admin Panel"}</h1>
            </div>
            <span className="rounded-md bg-success/15 px-3 py-1 text-sm font-bold text-success">Live</span>
          </div>
        </header>
        <div className="p-4 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
