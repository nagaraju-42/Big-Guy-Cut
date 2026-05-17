"use server";

import { revalidatePath } from "next/cache";
import { bookingSchema } from "@/lib/validators";
import { sendBookingConfirmation } from "@/services/email";

export async function createBooking(input: unknown) {
  const payload = bookingSchema.parse(input);

  await sendBookingConfirmation({
    to: "student@example.com",
    studentName: "Student",
    salonName: "THE BIG GUY Salon",
    scheduledTime: payload.scheduledTime
  });

  revalidatePath("/student/booking");
  revalidatePath("/owner");

  return {
    ok: true,
    bookingId: `booking_${Date.now()}`,
    status: "CONFIRMED"
  };
}

export async function cancelBooking(bookingId: string) {
  revalidatePath("/student/history");
  revalidatePath("/owner");

  return {
    ok: true,
    bookingId
  };
}
