import type { Metadata } from "next";
import Image from "next/image";

import { BookingCta } from "@/components/sections/booking-cta";
import { facilities } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Resort Facilities",
  description:
    "Explore the multipurpose court, swimming pool and mini zoo at The 12 by Naji Resort in Utako, Abuja.",
  alternates: { canonical: "/facilities" },
};

const facilityImageAlt = {
  "Multipurpose court": [
    "Multipurpose court for basketball, volleyball and table tennis at The 12 by Naji Resort",
  ],
  "Swimming pool": [
    "Swimming pool and adjoining seat-out at The 12 by Naji Resort",
    "Resort grounds beside the swimming pool in Utako, Abuja",
  ],
  "Mini zoo": [
    "Landscaped mini zoo at The 12 by Naji Resort",
    "Aerial view of the landscaped mini zoo, pond and pool area",
  ],
} as const;

export default function FacilitiesPage() {
  return (
    <>
      <section className="page-shell py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="section-title max-w-5xl text-balance md:col-span-8">
            Space to swim, play and slow down.
          </h1>
          <p className="max-w-md text-base leading-8 text-[var(--muted)] md:col-span-4 md:justify-self-end">
            Beyond the apartments, the resort brings together a multipurpose
            court, swimming pool and landscaped mini zoo within the property.
          </p>
        </div>
        <div className="image-plate relative mt-10 aspect-[4/3] md:mt-16 md:aspect-[16/8] md:min-h-80">
          <Image
            src="/images/amenities/property-aerial.jpg"
            alt="Aerial view of the multipurpose court and landscaped resort grounds"
            fill
            priority
            sizes="(min-width: 1536px) 1536px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y bg-[var(--surface)]">
        <div className="page-shell">
          {facilities.map((facility, facilityIndex) => (
            <article
              key={facility.title}
              className="grid gap-10 border-b py-16 last:border-b-0 md:grid-cols-12 md:items-center md:py-24"
            >
              <div
                className={`md:col-span-4 ${
                  facilityIndex % 2 === 1 ? "md:col-start-9 md:row-start-1" : ""
                }`}
              >
                <h2 className="text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
                  {facility.title}
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-[var(--muted)]">
                  {facility.description}
                </p>
              </div>

              <div
                className={`grid grid-cols-12 gap-2 md:col-span-7 ${
                  facilityIndex % 2 === 1
                    ? "md:col-start-1 md:row-start-1"
                    : "md:col-start-6"
                }`}
              >
                {facility.images.map((image, imageIndex) => (
                  <div
                    key={image}
                    className={`image-plate relative ${
                      facility.images.length === 1
                        ? "col-span-12 aspect-[4/3]"
                        : imageIndex === 0
                          ? "col-span-8 aspect-[4/5]"
                          : "col-span-4 aspect-[2/3] self-end"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={facilityImageAlt[facility.title][imageIndex]}
                      fill
                      sizes={
                        facility.images.length === 1
                          ? "(min-width: 768px) 58vw, 100vw"
                          : imageIndex === 0
                            ? "(min-width: 768px) 40vw, 66vw"
                            : "(min-width: 768px) 20vw, 33vw"
                      }
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <BookingCta />
    </>
  );
}
