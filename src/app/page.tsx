import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { StayPlanner } from "@/components/booking/stay-planner";
import { Reveal } from "@/components/motion/reveal";
import { BookingCta } from "@/components/sections/booking-cta";

export default function HomePage() {
  return (
    <>
      <section className="page-shell pt-5 pb-16 md:pt-7 md:pb-20">
        <div className="relative md:h-[33rem] xl:h-[35rem]">
          <p className="annotation text-[var(--accent-strong)] md:absolute md:top-2 md:left-0">
            Utako · Abuja
          </p>

          <h1 className="display-title relative z-10 mt-5 font-[550] md:absolute md:top-[18%] md:left-0 md:mt-0">
            <span className="block w-fit bg-[var(--background)] pr-[0.12em]">
              Redefining
            </span>
            <span className="block w-fit bg-[var(--background)] pr-[0.12em] text-[var(--accent-strong)]">
              resort living.
            </span>
          </h1>

          <div className="image-plate relative mt-8 h-[23rem] md:absolute md:inset-y-0 md:right-[14%] md:left-[18%] md:mt-0 md:h-auto">
            <Image
              src="/images/amenities/resort-exterior.jpg"
              alt="Aerial view of the resort apartment buildings and central courtyard"
              fill
              priority
              sizes="(min-width: 768px) 68vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 border-t pt-4 md:absolute md:top-2 md:right-0 md:mt-0 md:w-[11%] md:grid-cols-1 md:border-t-0 md:border-l md:pt-0 md:pl-5">
            <div>
              <p className="annotation text-[var(--muted)]">Property</p>
              <p className="mt-2 text-base leading-6 font-medium">
                Apartment resort
              </p>
            </div>
            <div className="md:mt-7">
              <p className="annotation text-[var(--muted)]">Address</p>
              <p className="mt-2 text-base leading-6 font-medium">
                Home Trust Estate
                <br /> Utako, Abuja
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t pt-4 md:absolute md:bottom-2 md:left-0 md:mt-0 md:block md:w-[15%]">
            <p className="annotation text-[var(--muted)]">
              Space · Comfort · Community
            </p>
            <p className="annotation text-[var(--accent-strong)] md:mt-5">
              Open 24 hours
            </p>
          </div>
        </div>

        <div className="relative z-20 mt-7 md:mt-0 md:px-[3%]">
          <StayPlanner />
        </div>
      </section>

      <section className="border-y bg-[var(--surface)] py-20 md:py-24">
        <div className="page-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="annotation text-[var(--accent-strong)]">
              Elysian · Oasis
            </p>
          </div>
          <Reveal className="md:col-span-8 md:col-start-5">
            <h2 className="section-title text-balance">
              The privacy of an apartment. The rhythm of a resort.
            </h2>
            <p className="mt-10 max-w-2xl border-t pt-7 text-base leading-8 font-medium text-[var(--muted)]">
              The 12 brings furnished apartments and shared resort amenities
              together in Utako, Abuja. Choose the stay that suits you, then
              send a reservation request directly to the resort.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="image-plate relative aspect-[4/5] md:col-span-7 md:aspect-[5/4]">
            <Image
              src="/images/hero/rooms-hero.jpg"
              alt="Furnished apartment at The 12 by Naji Resort"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="annotation text-[var(--accent-strong)]">
              Two apartment collections
            </p>
            <h2 className="mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-6xl">
              Find the space that fits your stay.
            </h2>
            <p className="mt-7 text-base leading-8 font-medium text-[var(--muted)]">
              Browse the Elysian and Oasis collections, compare their published
              details and open a dedicated page for each apartment.
            </p>
            <Link
              href="/rooms"
              className="annotation mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[var(--foreground)] transition-colors hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
            >
              Explore apartments
              <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
