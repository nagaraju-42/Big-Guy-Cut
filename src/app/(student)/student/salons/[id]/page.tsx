import Image from "next/image";
import { notFound } from "next/navigation";
import { StudentShell } from "@/components/student/mobile-shell";
import { SalonDetailClient } from "@/components/student/salon-detail-client";
import { salons } from "@/lib/data";

export default async function SalonDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const salon = salons.find((item) => item.id === id);
  if (!salon) notFound();

  return (
    <StudentShell>
      <Image src={salon.image} alt={salon.name} width={1400} height={700} className="mb-5 h-56 w-full rounded-lg object-cover" />
      <SalonDetailClient salon={salon} />
    </StudentShell>
  );
}
