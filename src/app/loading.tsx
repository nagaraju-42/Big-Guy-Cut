import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container grid min-h-screen place-items-center">
      <div className="w-full max-w-xl space-y-4">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
      </div>
    </div>
  );
}
