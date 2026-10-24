import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { StayPlanner } from "@/components/booking/stay-planner";
import { BookingCta } from "@/components/sections/booking-cta";
import { ArchitecturalSequence } from "@/components/motion/architectural-sequence";
import { Reveal } from "@/components/motion/reveal";
import { RoomRow } from "@/components/rooms/room-row";
import { facilities } from "@/data/hotel";
import { featuredRooms } from "@/data/rooms";

export default function HomePage() {
  return (
    <>
      <section className="page-shell pt-5 pb-16 md:pt-7 md:pb-20">
        <div className="relative md:h-[33rem] xl:h-[35rem]">
          <p className="annotation text-[var(--accent-strong)] md:absolute md:top-2 md:left-0">
            Utako · Abuja
          </p>

          <h1 className="display-title relative z-10 mt-5 text-[clamp(3.3rem,7vw,7.25rem)] md:absolute md:top-[17%] md:left-0 md:mt-0">
            Redefining
            <span className="block text-[var(--accent-strong)]">
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
              <p className="mt-2 text-xs leading-5">Apartment resort</p>
            </div>
            <div className="md:mt-7">
              <p className="annotation text-[var(--muted)]">Address</p>
              <p className="mt-2 text-xs leading-5">
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
            <div className="mt-10 grid gap-8 border-t pt-7 text-sm leading-7 text-[var(--muted)] sm:grid-cols-2">
              <p>
                Choose from named studio, two-bedroom and three-bedroom
                apartments across the Elysian and Oasis collections.
              </p>
              <p>
                Each public listing includes a furnished kitchen, Wi-Fi, parking
                and access to the resort&apos;s shared amenities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-20 md:py-32">
        <div className="flex items-end justify-between gap-8 border-b pb-7">
          <div>
            <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
              Stay your way.
            </h2>
          </div>
          <Link
            className="annotation hidden hover:text-[var(--accent-strong)] sm:block"
            href="/rooms"
          >
            View all rooms ↗
          </Link>
        </div>
        {featuredRooms.map((room, index) => (
          <RoomRow key={room.slug} room={room} priority={index === 0} />
        ))}
      </section>

      <ArchitecturalSequence>
        <section className="border-y bg-[var(--surface)] py-20 md:py-32">
          <div className="page-shell">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <h2 className="section-title text-balance">
                  Space to play, pause and gather.
                </h2>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)] md:col-span-3 md:col-start-10">
                The shared resort amenities extend the stay beyond the
                apartment.
              </p>
            </div>
            <div className="mt-14 grid gap-px bg-[var(--border)] md:grid-cols-3">
              {facilities.map((facility) => (
                <article
                  key={facility.title}
                  data-architectural-plate
                  className="bg-[var(--background)]"
                >
                  <div className="image-plate relative aspect-[4/3]">
                    <Image
                      src={facility.image}
                      alt={`${facility.title} at The 12 by Naji Resort`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl tracking-[-0.04em]">
                      {facility.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {facility.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ArchitecturalSequence>

      <section className="page-shell py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <h2 className="section-title">In detail.</h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Explore the apartments, grounds and shared amenities through the
              resort&apos;s original photography and video tours.
            </p>
            <div className="mt-8 flex gap-4">
              <Link className="annotation border-b pb-2" href="/gallery">
                Gallery ↗
              </Link>
              <Link className="annotation border-b pb-2" href="/tours">
                Tours ↗
              </Link>
            </div>
          </div>
          <div className="image-plate relative aspect-[5/4] md:col-span-8">
            <Image
              src="/images/gallery/exterior-04.jpg"
              alt="The landscaped grounds at The 12 by Naji Resort"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
            <Link
              href="/gallery"
              className="absolute right-4 bottom-4 flex size-14 items-center justify-center bg-[var(--background)] text-[var(--foreground)]"
              aria-label="Open gallery"
            >
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
