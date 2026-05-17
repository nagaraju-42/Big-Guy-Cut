import type { SalonSummary } from "@/types/domain";

export const stats = [
  { label: "Active Salons", value: "2.5K+" },
  { label: "Happy Students", value: "125K+" },
  { label: "Bookings / Day", value: "45K+" },
  { label: "Average Rating", value: "4.8" }
];

export const salons: SalonSummary[] = [
  {
    id: "campus-cuts",
    name: "Campus Cuts",
    address: "GTB Nagar, Delhi",
    rating: 4.6,
    reviewCount: 210,
    queueCount: 18,
    estimatedWait: 25,
    activeBarbers: 3,
    image: "/reference/mobile-dark.png",
    crowd: "MEDIUM"
  },
  {
    id: "style-studio",
    name: "Style Studio",
    address: "Kamla Nagar, Delhi",
    rating: 4.7,
    reviewCount: 150,
    queueCount: 7,
    estimatedWait: 15,
    activeBarbers: 3,
    image: "/reference/dashboard-grid.png",
    crowd: "LOW"
  },
  {
    id: "urban-scissors",
    name: "Urban Scissors",
    address: "Hudson Lane, Delhi",
    rating: 4.5,
    reviewCount: 98,
    queueCount: 14,
    estimatedWait: 30,
    activeBarbers: 3,
    image: "/reference/landing-light.png",
    crowd: "HIGH"
  },
  {
    id: "big-guy-salon",
    name: "The Big Guy Salon",
    address: "Patel Nagar, Delhi",
    rating: 4.8,
    reviewCount: 320,
    queueCount: 12,
    estimatedWait: 20,
    activeBarbers: 4,
    image: "/reference/hero-salon.png",
    crowd: "MEDIUM"
  }
];

export const services = [
  { id: "haircut", name: "Haircut", duration: 30, price: 199, popular: true },
  { id: "beard-trim", name: "Beard Trim", duration: 20, price: 149, popular: false },
  { id: "haircut-beard", name: "Haircut + Beard", duration: 45, price: 299, popular: true },
  { id: "hair-wash", name: "Hair Wash", duration: 15, price: 99, popular: false }
];

export const barbers = [
  { id: "rahul", name: "Rahul", status: "AVAILABLE", rating: 4.8, load: "Low load" },
  { id: "amit", name: "Amit", status: "BUSY", rating: 4.7, load: "Medium load" },
  { id: "vikram", name: "Vikram", status: "BREAK", rating: 4.6, load: "High load" },
  { id: "sahil", name: "Sahil", status: "AVAILABLE", rating: 4.5, load: "Low load" }
];

export const queueEntries = [
  { id: "q1", name: "Arjun R.", service: "Hair Cut", amount: 150, wait: 15, status: "WAITING" },
  { id: "q2", name: "Rohit K.", service: "Beard Style", amount: 100, wait: 10, status: "IN_SERVICE" },
  { id: "q3", name: "Karthik S.", service: "Hair Cut", amount: 150, wait: 25, status: "WAITING" },
  { id: "q4", name: "Nihal T.", service: "Hair Spa", amount: 300, wait: 30, status: "WAITING" }
];
