import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BookingForm } from "@/components/booking/booking-form";
import { SocialIcon } from "@/components/icons/social-icons";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Check Room Availability",
  description:
    "Enquire about apartment availability at The 12 by Naji Resort and continue directly to the resort on WhatsApp.",
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
    <>
      <section className="border-b bg-[var(--surface)]">
        <div className="page-shell grid gap-10 py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:py-16 lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <p className="annotation text-[var(--accent-strong)]">
              Room availability · Utako, Abuja
            </p>
            <h1 className="section-title mt-5 max-w-xl text-balance">
              Plan your stay at The 12.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 font-medium text-[var(--muted)]">
              Share your preferred apartment and dates, then continue to
              WhatsApp. The resort team will confirm availability, the final
              rate and the next reservation step directly with you.
            </p>

            <dl className="mt-9 grid grid-cols-2 border-y">
              <div className="border-r py-5 pr-5">
                <dt className="annotation text-[var(--muted)]">Check in</dt>
                <dd className="mt-2 text-xl font-medium">{hotel.checkIn}</dd>
              </div>
              <div className="py-5 pl-5">
                <dt className="annotation text-[var(--muted)]">Check out</dt>
                <dd className="mt-2 text-xl font-medium">{hotel.checkOut}</dd>
              </div>
            </dl>
          </div>

          <figure className="min-w-0">
            <div className="image-plate relative aspect-[4/3] overflow-hidden md:aspect-[16/11]">
              <Image
                src="/images/hero/booking-hero.jpg"
                alt="Apartment living area at The 12 by Naji Resort"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <figcaption className="annotation mt-3 text-[var(--muted)]">
              Furnished apartment living · The 12 by Naji Resort
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-shell py-14 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <BookingForm
              initialRoom={params.room}
              initialCheckIn={params.checkIn}
              initialCheckOut={params.checkOut}
            />
          </div>

          <aside className="min-w-0" aria-label="Booking information">
            <div className="border bg-[var(--surface)] p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 className="text-3xl leading-tight tracking-[-0.035em]">
                What happens next.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                This is an availability enquiry. Your stay is confirmed only
                after the resort verifies the apartment and dates with you.
              </p>

              <ol className="mt-8 border-t">
                {[
                  "Send the prefilled availability enquiry on WhatsApp.",
                  "The resort confirms availability and the final rate.",
                  "Complete the reservation directly with the resort.",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2rem_1fr] gap-3 border-b py-5"
                  >
                    <span className="annotation text-[var(--accent-strong)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 font-medium">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <p className="annotation text-[var(--muted)]">
                  Prefer direct assistance?
                </p>
                <a
                  href={hotel.phoneHref}
                  className="mt-4 flex min-h-12 items-center justify-between border border-[var(--foreground)] px-4 text-sm font-semibold transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  Call {hotel.phoneDisplay}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <Link
                  href={hotel.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex min-h-12 items-center justify-between border px-4 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                >
                  <span className="flex items-center gap-3">
                    <SocialIcon name="whatsapp" size={18} />
                    Message on WhatsApp
                  </span>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
              </div>

              <address className="mt-8 border-t pt-6 text-sm leading-6 text-[var(--muted)] not-italic">
                {hotel.address.street}
                <br />
                {hotel.address.locality}, Abuja {hotel.address.postalCode}
                <br />
                {hotel.address.country}
              </address>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
