import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const counts = {
    users: await prisma.user.count(),
    salons: await prisma.salon.count(),
    services: await prisma.service.count(),
    barbers: await prisma.barber.count(),
    schedules: await prisma.salonSchedule.count()
  };

  const salon = await prisma.salon.findFirst({
    include: {
      owner: true,
      services: true,
      barbers: true
    }
  });

  console.log(
    JSON.stringify(
      {
        counts,
        salon: salon
          ? {
              name: salon.name,
              slug: salon.slug,
              ownerEmail: salon.owner.email,
              services: salon.services.map((service) => service.name),
              barbers: salon.barbers.map((barber) => barber.name)
            }
          : null
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
