export type UserRole = "STUDENT" | "OWNER" | "ADMIN" | "BARBER";

export type QueueStatus = "WAITING" | "IN_SERVICE" | "COMPLETED" | "SKIPPED" | "CANCELLED";

export type BookingStatus = "PENDING" | "CONFIRMED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED" | "NO_SHOW";

export type BarberStatus = "AVAILABLE" | "BUSY" | "BREAK" | "OFFLINE";

export type SalonSummary = {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  queueCount: number;
  estimatedWait: number;
  activeBarbers: number;
  image: string;
  crowd: "LOW" | "MEDIUM" | "HIGH";
};
