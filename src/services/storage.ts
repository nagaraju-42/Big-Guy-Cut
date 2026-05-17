import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function getSalonImagePath(salonId: string, fileName: string) {
  return `salons/${salonId}/${fileName}`;
}

export async function uploadSalonImage(file: File, salonId: string) {
  const supabase = createSupabaseBrowserClient();
  const path = getSalonImagePath(salonId, file.name);

  const { data, error } = await supabase.storage.from("salon-images").upload(path, file, {
    cacheControl: "3600",
    upsert: true
  });

  if (error) throw error;
  return data;
}
