"use server";

import { revalidatePath } from "next/cache";
import { barberSchema, serviceSchema } from "@/lib/validators";

export async function upsertService(input: unknown) {
  const payload = serviceSchema.parse(input);
  revalidatePath("/owner/services");
  return { ok: true, service: payload };
}

export async function upsertBarber(input: unknown) {
  const payload = barberSchema.parse(input);
  revalidatePath("/owner/barbers");
  return { ok: true, barber: payload };
}

export async function toggleQueuePause(salonId: string, paused: boolean) {
  revalidatePath("/owner/queue");
  return { ok: true, salonId, paused };
}
