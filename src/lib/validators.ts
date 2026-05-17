import { z } from "zod";

export const queueJoinSchema = z.object({
  salonId: z.string().min(1),
  serviceId: z.string().min(1),
  barberId: z.string().optional()
});

export const bookingSchema = z.object({
  salonId: z.string().min(1),
  serviceId: z.string().min(1),
  barberId: z.string().min(1),
  scheduledTime: z.coerce.date()
});

export const serviceSchema = z.object({
  salonId: z.string().min(1),
  name: z.string().min(2),
  duration: z.coerce.number().int().min(5).max(240),
  price: z.coerce.number().int().min(0)
});

export const barberSchema = z.object({
  salonId: z.string().min(1),
  name: z.string().min(2),
  specialties: z.array(z.string()).default([])
});
