import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "MVP Launch",
    price: "Free",
    points: ["1 salon profile", "Live queue dashboard", "Student bookings", "Email-ready notifications"]
  },
  {
    name: "Local Growth",
    price: "Later",
    points: ["Multiple branches", "Advanced analytics", "Razorpay fees", "Owner team roles"]
  },
  {
    name: "City Network",
    price: "Custom",
    points: ["Admin moderation", "Marketplace discovery", "Subscriptions", "Franchise reporting"]
  }
];

export default function PricingPage() {
  return (
    <main className="container py-16">
      <h1 className="text-5xl font-black tracking-normal">Start free. Scale when the queue proves demand.</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className="border-white/10 bg-white/[0.04] p-6 shadow-none">
            <h2 className="text-2xl font-black">{tier.name}</h2>
            <p className="mt-3 text-4xl font-black text-primary">{tier.price}</p>
            <div className="mt-6 space-y-3">
              {tier.points.map((point) => (
                <div key={point} className="flex gap-2 text-sm text-white/72">
                  <Check className="h-5 w-5 text-success" />
                  {point}
                </div>
              ))}
            </div>
            <Button asChild className="mt-7 w-full">
              <Link href="/owner">Open Dashboard</Link>
            </Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
