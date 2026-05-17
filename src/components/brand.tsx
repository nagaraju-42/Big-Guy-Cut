import { Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-black tracking-normal", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
        <Scissors className="h-5 w-5" />
      </span>
      <span>THE BIG GUY</span>
    </div>
  );
}
