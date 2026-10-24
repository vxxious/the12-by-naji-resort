import type { Metadata } from "next";

import { RoomRow } from "@/components/rooms/room-row";
import { BookingCta } from "@/components/sections/booking-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Apartments and Rooms",
  description:
    "Explore the Elysian and Oasis apartment collections at The 12 by Naji Resort in Utako, Abuja.",
  alternates: { canonical: "/rooms" },
};

const collections = [
  {
    id: "elysian",
    name: "Elysian",
    description: "Three-bedroom, two-bedroom and studio apartments.",
  },
  {
    id: "oasis",
    name: "Oasis",
    description: "Three-bedroom, two-bedroom and studio apartments.",
  },
] as const;

export default function RoomsPage() {
  return (
    <>
      <PageIntro
        eyebrow="The apartment collection"
        title="A place to arrive, settle in and stay a while."
        description="Browse the two public apartment collections. Rates shown are the prices currently published by the resort and should be confirmed when requesting a stay."
        image="/images/hero/rooms-hero.jpg"
        imageAlt="A furnished apartment at The 12 by Naji Resort"
      />

      <div className="page-shell pb-20 md:pb-32">
        <nav
          aria-label="Apartment collections"
          className="sticky top-19 z-20 border-y bg-[var(--background)] py-4"
        >
          <ul className="flex gap-8">
            {collections.map((collection) => (
              <li key={collection.id}>
                <a
                  className="annotation hover:text-[var(--accent-strong)]"
                  href={`#${collection.id}`}
                >
                  {collection.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {collections.map((collection) => {
          const collectionRooms = rooms.filter(
            (room) => room.block === collection.id,
          );
          return (
            <section
              key={collection.id}
              id={collection.id}
              className="pt-20 md:pt-28"
            >
              <div className="grid gap-6 pb-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-8">
                  <p className="annotation text-[var(--accent-strong)]">
                    {String(collectionRooms.length).padStart(2, "0")} published
                    apartments
                  </p>
                  <h2 className="section-title mt-4">{collection.name}</h2>
                </div>
                <p className="text-sm leading-7 text-[var(--muted)] md:col-span-3 md:col-start-10">
                  {collection.description}
                </p>
              </div>
              {collectionRooms.map((room, index) => (
                <RoomRow key={room.slug} room={room} priority={index === 0} />
              ))}
            </section>
          );
        })}
      </div>
      <BookingCta />
    </>
  );
}
