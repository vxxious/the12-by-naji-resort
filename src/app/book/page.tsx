import type { Metadata } from "next";
import Image from "next/image";

import { BookingForm } from "@/components/booking/booking-form";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Request a Stay",
  description:
    "Plan a stay at The 12 by Naji Resort. Online availability and payment remain subject to direct confirmation.",
  alternates: { canonical: "/book" },
};

interface BookPageProps {
  searchParams: Promise<{
    room?: string;
    checkIn?: string;
    checkOut?: string;
  }>;
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = await searchParams;

  return (
    <section className="page-shell py-10 md:py-16">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <p className="annotation text-[var(--accent-strong)]">
              Plan your stay
            </p>
            <h1 className="section-title mt-5 text-balance">
              Begin with the details.
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-[var(--muted)]">
              Submit the dates and apartment you would like. Availability, price
              and any payment step must be confirmed by the resort.
            </p>
            <div className="image-plate relative mt-10 hidden aspect-[4/5] md:block">
              <Image
                src="/images/hero/booking-hero.jpg"
                alt="Apartment living area at The 12 by Naji Resort"
                fill
                priority
                sizes="42vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 border-t pt-5 text-sm text-[var(--muted)]">
              <p>Check-in: {hotel.checkIn}</p>
              <p className="mt-2">Check-out: {hotel.checkOut}</p>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 md:col-span-6 md:col-start-7 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <BookingForm
            initialRoom={params.room}
            initialCheckIn={params.checkIn}
            initialCheckOut={params.checkOut}
          />
        </div>
      </div>
    </section>
  );
}
