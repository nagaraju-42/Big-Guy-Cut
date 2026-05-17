import crypto from "crypto";

export type RazorpayOrderInput = {
  bookingId: string;
  amount: number;
};

export async function createRazorpayOrder(input: RazorpayOrderInput) {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return {
      mode: "mock" as const,
      orderId: `mock_order_${input.bookingId}`,
      amount: input.amount
    };
  }

  return {
    mode: "live" as const,
    orderId: `rzp_order_${input.bookingId}`,
    amount: input.amount
  };
}

export function verifyRazorpaySignature(payload: string, signature: string) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) return false;

  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
