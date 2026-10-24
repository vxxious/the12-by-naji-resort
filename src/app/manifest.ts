import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The 12 by Naji Resort",
    short_name: "The 12 by Naji",
    description: "Apartment resort in Utako, Abuja.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F1ED",
    theme_color: "#121212",
    icons: [
      {
        src: "/images/branding/the12-by-naji-favicon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
