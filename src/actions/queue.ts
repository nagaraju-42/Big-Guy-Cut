"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { queueJoinSchema } from "@/lib/validators";
import { estimateWaitTime } from "@/services/wait-time";

export async function joinQueue(input: unknown) {
  const payload = queueJoinSchema.parse(input);
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  const queuePosition = 4;
  const estimatedWait = estimateWaitTime({
    queuePosition,
    averageServiceMinutes: 25,
    activeBarbers: 3
  });

  // Replace with Prisma transaction once Supabase project env vars are connected.
  revalidatePath(`/student/salons/${payload.salonId}`);
  revalidatePath("/owner/queue");

  return {
    ok: true,
    userId: data.user?.id ?? "demo-user",
    position: queuePosition,
    estimatedWait
  };
}

export async function cancelQueueEntry(queueEntryId: string) {
  revalidatePath("/student/booking");
  revalidatePath("/owner/queue");

  return {
    ok: true,
    queueEntryId
  };
}

export async function completeQueueEntry(queueEntryId: string) {
  revalidatePath("/owner/queue");

  return {
    ok: true,
    queueEntryId
  };
}
