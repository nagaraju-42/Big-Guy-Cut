"use client";

import { useEffect } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useQueueStore } from "@/store/queue-store";

export function useRealtimeQueue(salonId: string) {
  const setLiveStatus = useQueueStore((state) => state.setLiveStatus);

  useEffect(() => {
    if (!salonId || !process.env.NEXT_PUBLIC_SUPABASE_URL) return;

    const supabase = createSupabaseBrowserClient();
    const channel = supabase
      .channel(`queue:${salonId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "queue_entries",
          filter: `salonId=eq.${salonId}`
        },
        () => setLiveStatus("updated")
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [salonId, setLiveStatus]);
}
