import { PrismaClient, UserRole, BarberStatus } from "@prisma/client";

const prisma = new PrismaClient();

const ownerId = process.env.MVP_OWNER_USER_ID;
const ownerEmail = process.env.MVP_OWNER_EMAIL ?? "owner@thebigguy.app";
const ownerName = process.env.MVP_OWNER_NAME ?? "Salon Owner";
const salonName = process.env.MVP_SALON_NAME ?? "Campus Cuts";
const salonSlug = process.env.MVP_SALON_SLUG ?? "campus-cuts";
const salonAddress = process.env.MVP_SALON_ADDRESS ?? "GTB Nagar, Delhi";
const salonCity = process.env.MVP_SALON_CITY ?? "Delhi";

if (!ownerId || ownerId === "replace-with-supabase-auth-user-id") {
  throw new Error("Set MVP_OWNER_USER_ID to the owner user's Supabase Auth UUID before seeding.");
}

async function main() {
  const owner = await prisma.user.upsert({
    where: { id: ownerId },
    update: {
      email: ownerEmail,
      name: ownerName,
      role: UserRole.OWNER
    },
    create: {
      id: ownerId,
      email: ownerEmail,
      name: ownerName,
      role: UserRole.OWNER
    }
  });

  const salon = await prisma.salon.upsert({
    where: { slug: salonSlug },
    update: {
      name: salonName,
      address: salonAddress,
      city: salonCity,
      ownerId: owner.id,
      isActive: true,
      isVerified: true
    },
    create: {
      name: salonName,
      slug: salonSlug,
      description: "Fast student-focused salon booking and live queue.",
      address: salonAddress,
      city: salonCity,
      ownerId: owner.id,
      images: ["/reference/hero-salon.png"],
      isActive: true,
      isVerified: true,
      rating: 4.7
    }
  });

  const services = [
    { name: "Haircut", duration: 30, price: 199 },
    { name: "Beard Trim", duration: 20, price: 149 },
    { name: "Haircut + Beard", duration: 45, price: 299 },
    { name: "Hair Wash", duration: 15, price: 99 }
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: {
        id: `${salon.id}-${service.name.toLowerCase().replaceAll(" ", "-").replaceAll("+", "plus")}`
      },
      update: service,
      create: {
        id: `${salon.id}-${service.name.toLowerCase().replaceAll(" ", "-").replaceAll("+", "plus")}`,
        salonId: salon.id,
        ...service
      }
    });
  }

  const barbers = ["Rahul", "Amit", "Vikram"];

  for (const name of barbers) {
    await prisma.barber.upsert({
      where: {
        id: `${salon.id}-${name.toLowerCase()}`
      },
      update: {
        name,
        status: BarberStatus.AVAILABLE,
        specialties: ["Haircut", "Beard"]
      },
      create: {
        id: `${salon.id}-${name.toLowerCase()}`,
        salonId: salon.id,
        name,
        status: BarberStatus.AVAILABLE,
        specialties: ["Haircut", "Beard"]
      }
    });
  }

  for (let dayOfWeek = 0; dayOfWeek <= 6; dayOfWeek += 1) {
    await prisma.salonSchedule.upsert({
      where: {
        salonId_dayOfWeek: {
          salonId: salon.id,
          dayOfWeek
        }
      },
      update: {
        opensAt: "09:00",
        closesAt: "22:00",
        breakStart: "14:00",
        breakEnd: "14:30",
        slotDuration: 15
      },
      create: {
        salonId: salon.id,
        dayOfWeek,
        opensAt: "09:00",
        closesAt: "22:00",
        breakStart: "14:00",
        breakEnd: "14:30",
        slotDuration: 15
      }
    });
  }

  console.log(`Seeded one-salon MVP: ${salon.name} (${salon.slug})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
