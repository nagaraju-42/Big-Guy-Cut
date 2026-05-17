import { StudentShell } from "@/components/student/mobile-shell";
import { Card } from "@/components/ui/card";

const bookings = [
  { salon: "The Big Guy Salon", service: "Haircut + Beard", status: "Completed", time: "Today, 12:30 PM" },
  { salon: "Campus Cuts", service: "Beard Trim", status: "Upcoming", time: "Tomorrow, 4:00 PM" },
  { salon: "Style Studio", service: "Haircut", status: "Cancelled", time: "May 12, 5:15 PM" }
];

export default function BookingHistoryPage() {
  return (
    <StudentShell>
      <h1 className="text-3xl font-black">Booking History</h1>
      <div className="mt-5 space-y-3">
        {bookings.map((booking) => (
          <Card key={`${booking.salon}-${booking.time}`} className="border-white/10 bg-white/[0.04] p-4 shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-black">{booking.salon}</h2>
                <p className="mt-1 text-sm text-white/55">{booking.service} • {booking.time}</p>
              </div>
              <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-bold">{booking.status}</span>
            </div>
          </Card>
        ))}
      </div>
    </StudentShell>
  );
}
