import { NextResponse } from "next/server";
import { z } from "zod";
import { createRazorpayOrder } from "@/services/payments";

const orderSchema = z.object({
  bookingId: z.string().min(1),
  amount: z.number().int().positive()
});

export async function POST(request: Request) {
  const body = await request.json();
  const payload = orderSchema.parse(body);
  const order = await createRazorpayOrder(payload);

  return NextResponse.json(order);
}
