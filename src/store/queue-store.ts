"use client";

import { create } from "zustand";

type QueueState = {
  selectedServiceId?: string;
  selectedBarberId?: string;
  liveStatus: "idle" | "updated";
  setSelectedService: (serviceId: string) => void;
  setSelectedBarber: (barberId: string) => void;
  setLiveStatus: (status: "idle" | "updated") => void;
};

export const useQueueStore = create<QueueState>((set) => ({
  liveStatus: "idle",
  setSelectedService: (serviceId) => set({ selectedServiceId: serviceId }),
  setSelectedBarber: (barberId) => set({ selectedBarberId: barberId }),
  setLiveStatus: (status) => set({ liveStatus: status })
}));
