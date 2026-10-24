import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { BookingCta } from "@/components/sections/booking-cta";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore original photographs of the apartments, grounds and amenities at The 12 by Naji Resort in Abuja.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Property gallery"
        title="Rooms, grounds and the spaces between."
        description="A collection of original photographs from the resort's public gallery. Open any image for a keyboard-accessible full-screen view."
        image="/images/hero/gallery-hero.jpg"
        imageAlt="Interior view at The 12 by Naji Resort"
      />
      <section
        className="page-shell pb-20 md:pb-32"
        aria-label="Resort photographs"
      >
        <GalleryGrid />
      </section>
      <BookingCta />
    </>
  );
}
