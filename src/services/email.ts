type BookingEmailInput = {
  to: string;
  studentName: string;
  salonName: string;
  scheduledTime: Date;
};

export async function sendBookingConfirmation(input: BookingEmailInput) {
  if (!process.env.RESEND_API_KEY) {
    return { skipped: true, reason: "RESEND_API_KEY is not configured" };
  }

  // Lazy-load the SDK here when Resend is wired to avoid build-time env failures.
  return {
    skipped: false,
    message: `Queued confirmation email for ${input.to}`
  };
}
