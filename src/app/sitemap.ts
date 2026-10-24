import type { MetadataRoute } from "next";

import { rooms } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://the12bynajiresort.com";
  const staticRoutes = [
    "",
    "/rooms",
    "/gallery",
    "/tours",
    "/events",
    "/book",
    "/contact",
    "/resort-policy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency:
        route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/rooms" ? 0.9 : 0.7,
    })),
    ...rooms.map((room) => ({
      url: `${baseUrl}/rooms/${room.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
