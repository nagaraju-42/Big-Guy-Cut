import { NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/services/payments";

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("x-razorpay-signature") ?? "";

  if (!verifyRazorpaySignature(payload, signature)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
