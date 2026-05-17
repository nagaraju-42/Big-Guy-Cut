import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "THE BIG GUY",
    short_name: "BIG GUY",
    description: "Smart salon booking and live queue tracking for crowded student areas.",
    start_url: "/student",
    display: "standalone",
    background_color: "#05070b",
    theme_color: "#ffc400",
    icons: [
      {
        src: "/reference/hero-salon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
