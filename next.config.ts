import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/locations", destination: "/gallery", permanent: true },
      { source: "/reviews", destination: "/tours", permanent: true },
      { source: "/book-now", destination: "/book", permanent: true },
      {
        source: "/elementor-page-720",
        destination: "/rooms?block=elysian",
        permanent: true,
      },
      {
        source: "/oasis-block",
        destination: "/rooms?block=oasis",
        permanent: true,
      },
      { source: "/homepage-2", destination: "/", permanent: true },
      { source: "/room-categories", destination: "/rooms", permanent: true },
      { source: "/category-rooms", destination: "/rooms", permanent: true },
      { source: "/room-details", destination: "/rooms", permanent: true },
      { source: "/book-room", destination: "/book", permanent: true },
      {
        source: "/booking-confirmation",
        destination: "/book",
        permanent: false,
      },
      {
        source: "/category-rooms/room-details",
        destination: "/rooms",
        permanent: true,
      },
      { source: "/elementor-1082", destination: "/book", permanent: true },
      { source: "/repair", destination: "/rooms", permanent: false },
      { source: "/hello-world", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
