import Image from "next/image";
import Link from "next/link";
import { Star, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SalonSummary } from "@/types/domain";

export function SalonCard({ salon }: { salon: SalonSummary }) {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/[0.04] shadow-none">
      <div className="flex gap-3 p-3">
        <Image src={salon.image} alt={salon.name} width={120} height={120} className="h-24 w-24 rounded-md object-cover" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="truncate font-black text-white">{salon.name}</h3>
              <p className="truncate text-sm text-white/60">{salon.address}</p>
            </div>
            <Badge variant={salon.crowd === "LOW" ? "success" : "default"}>{salon.estimatedWait} min</Badge>
          </div>
          <div className="mt-2 flex items-center gap-1 text-sm text-white/70">
            <Star className="h-4 w-4 fill-primary text-primary" />
            {salon.rating} ({salon.reviewCount})
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-white/60">
              <UsersRound className="h-4 w-4" />
              {salon.activeBarbers} barbers • {salon.queueCount} in queue
            </span>
            <Button asChild size="sm">
              <Link href={`/student/salons/${salon.id}`}>Book</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
