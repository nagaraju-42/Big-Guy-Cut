"use client";

import { useTransition } from "react";
import { Bell, CalendarCheck, Clock, Star, UsersRound } from "lucide-react";
import { joinQueue } from "@/actions/queue";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRealtimeQueue } from "@/hooks/use-realtime-queue";
import { barbers, services } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import type { SalonSummary } from "@/types/domain";

export function SalonDetailClient({ salon }: { salon: SalonSummary }) {
  const [isPending, startTransition] = useTransition();
  useRealtimeQueue(salon.id);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
      <div className="space-y-5">
        <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black">{salon.name}</h1>
              <p className="mt-1 text-white/55">{salon.address}</p>
              <p className="mt-3 flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                {salon.rating} ({salon.reviewCount}) • Open now
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-green-400">{salon.estimatedWait}</div>
              <div className="text-sm text-white/55">min wait</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-md bg-black/25 p-3"><UsersRound className="h-5 w-5 text-primary" /><b className="mt-2 block">{salon.queueCount}</b><span className="text-xs text-white/50">in queue</span></div>
            <div className="rounded-md bg-black/25 p-3"><Clock className="h-5 w-5 text-primary" /><b className="mt-2 block">10 PM</b><span className="text-xs text-white/50">closes</span></div>
            <div className="rounded-md bg-black/25 p-3"><CalendarCheck className="h-5 w-5 text-primary" /><b className="mt-2 block">{salon.activeBarbers}</b><span className="text-xs text-white/50">barbers</span></div>
          </div>
        </Card>

        <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
          <h2 className="text-xl font-black">Services</h2>
          <div className="mt-4 space-y-3">
            {services.map((service) => (
              <div key={service.id} className="flex items-center justify-between rounded-md border border-white/10 p-3">
                <div>
                  <div className="font-bold">{service.name}</div>
                  <div className="text-sm text-white/50">{service.duration} min</div>
                </div>
                <div className="flex items-center gap-3">
                  <b>{formatCurrency(service.price)}</b>
                  <Button size="sm">Book</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
          <h2 className="text-xl font-black">Top Barbers</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {barbers.map((barber) => (
              <div key={barber.id} className="rounded-md border border-white/10 p-3 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-xl font-black text-black">{barber.name[0]}</div>
                <b className="mt-2 block">{barber.name}</b>
                <span className="text-xs text-white/50">{barber.load}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="h-fit border-white/10 bg-white/[0.04] p-5 shadow-none">
        <h2 className="text-xl font-black">Join live queue</h2>
        <p className="mt-2 text-sm text-white/55">Instant queue join with realtime movement and notification-ready status.</p>
        <div className="mt-5 rounded-md border border-white/10 bg-black/25 p-4">
          <p className="text-sm text-white/60">Estimated wait</p>
          <div className="mt-1 text-4xl font-black text-green-400">{salon.estimatedWait} min</div>
          <div className="mt-5 h-2 rounded-full bg-white/10">
            <div className="h-2 w-2/3 rounded-full bg-primary" />
          </div>
        </div>
        <Button
          className="mt-5 w-full"
          disabled={isPending}
          onClick={() => startTransition(() => void joinQueue({ salonId: salon.id, serviceId: "haircut" }))}
        >
          {isPending ? "Joining..." : "Join Queue Now"}
        </Button>
        <Button variant="outline" className="mt-3 w-full border-white/10 bg-white/5 text-white">
          <Bell className="h-4 w-4" /> Notify me when it is my turn
        </Button>
      </Card>
    </div>
  );
}
