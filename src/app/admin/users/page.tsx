import { Ban, ShieldCheck } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const users = [
  { name: "Rohit Sharma", role: "STUDENT", email: "rohit@example.com" },
  { name: "Campus Cuts Owner", role: "OWNER", email: "owner@example.com" },
  { name: "Admin", role: "ADMIN", email: "admin@example.com" }
];

export default function UserManagementPage() {
  return (
    <DashboardShell mode="admin">
      <h2 className="text-3xl font-black">User Management</h2>
      <div className="mt-5 grid gap-3">
        {users.map((user) => (
          <Card key={user.email} className="border-white/10 bg-white/[0.04] p-4 shadow-none">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-black">{user.name}</h3>
                <p className="text-white/55">{user.email} • {user.role}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-white/10 bg-white/5 text-white"><ShieldCheck className="h-4 w-4" /> Review</Button>
                <Button size="sm" variant="destructive"><Ban className="h-4 w-4" /> Ban</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
