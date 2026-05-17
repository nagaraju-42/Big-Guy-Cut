import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="container grid gap-10 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div>
        <h1 className="text-5xl font-black tracking-normal">A queue operating system for student neighborhoods.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          THE BIG GUY is not luxury salon software. It is built for dense hostel roads, college markets,
          walk-in pressure, and the everyday reality of students who need a haircut without losing an hour.
        </p>
        <Card className="mt-7 border-primary/20 bg-primary/10 p-5 text-primary">
          First city focus: crowded student areas near colleges, hostels, PG clusters, and coaching hubs.
        </Card>
      </div>
      <Image src="/reference/platform-map.png" alt="THE BIG GUY platform screens" width={1200} height={800} className="rounded-lg border border-white/10" />
    </main>
  );
}
