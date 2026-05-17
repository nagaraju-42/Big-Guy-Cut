import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addRealtimeTable(tableName) {
  await prisma.$executeRawUnsafe(`
    do $$
    begin
      if not exists (
        select 1
        from pg_publication_tables
        where pubname = 'supabase_realtime'
          and schemaname = 'public'
          and tablename = '${tableName}'
      ) then
        execute 'alter publication supabase_realtime add table public.${tableName}';
      end if;
    end $$;
  `);
}

async function main() {
  await prisma.$executeRawUnsafe(`
    insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
    values ('salon-images', 'salon-images', true, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
    on conflict (id) do update
      set public = true,
          file_size_limit = 5242880,
          allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];
  `);

  for (const tableName of ["queue_entries", "bookings", "barbers"]) {
    await addRealtimeTable(tableName);
  }

  console.log("Supabase setup complete: storage bucket and realtime tables are configured.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
