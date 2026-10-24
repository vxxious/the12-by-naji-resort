import type { Metadata } from "next";

import { BookingCta } from "@/components/sections/booking-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Video Tours",
  description:
    "Watch the resort's published interior, exterior, Santorini and Ibiza apartment tours.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <PageIntro
        eyebrow="Published video tours"
        title="Walk through before you arrive."
        description="Four video tours published by The 12 by Naji Resort, presented through privacy-enhanced YouTube embeds without autoplay."
        image="/images/hero/tours-hero.jpg"
        imageAlt="Apartment interior featured in the resort tours"
      />
      <section className="page-shell pb-20 md:pb-32">
        <div className="grid gap-14 md:grid-cols-2">
          {tours.map((tour, index) => (
            <article key={tour.videoId} className="border-t pt-5">
              <div
                className={`bg-black ${tour.format === "short" ? "aspect-[9/12]" : "aspect-video"}`}
              >
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${tour.videoId}`}
                  title={tour.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-5">
                <h2 className="text-2xl tracking-[-0.04em]">{tour.title}</h2>
                <span className="annotation text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <BookingCta />
    </>
  );
}
