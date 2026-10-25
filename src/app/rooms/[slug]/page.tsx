import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { amenities } from "@/data/hotel";
import {
  formatNaira,
  formatRoomType,
  getRoomBySlug,
  rooms,
} from "@/data/rooms";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};

  return {
    title: `${room.name} ${formatRoomType(room.type)}`,
    description: `${room.name} is a ${formatRoomType(room.type)} in the ${room.block} collection at The 12 by Naji Resort, Utako, Abuja.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      images: room.photographyPending
        ? ["/images/hero/rooms-hero.jpg"]
        : [room.images[0]],
    },
  };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const related = rooms
    .filter(
      (candidate) =>
        candidate.slug !== room.slug &&
        candidate.block === room.block &&
        candidate.type === room.type,
    )
    .slice(0, 2);

  return (
    <>
      <section className="page-shell py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="annotation text-[var(--accent-strong)]">
              {room.block} collection · {formatRoomType(room.type)}
            </p>
            <h1 className="display-title mt-5">{room.name}</h1>
          </div>
          <div className="border-t pt-5 md:col-span-3 md:col-start-10">
            <span className="annotation text-[var(--muted)]">
              Published rate
            </span>
            <p className="mt-2 text-2xl tracking-[-0.04em]">
              {formatNaira(room.priceNgn)}{" "}
              <small className="text-sm text-[var(--muted)]">/ night</small>
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-2 md:grid-cols-12">
          {room.images.map((image, index) => (
            <div
              key={image + index}
              className={`image-plate relative aspect-[4/3] ${
                room.photographyPending
                  ? "md:col-span-12 md:aspect-[16/8]"
                  : index === 0
                    ? "md:col-span-8 md:aspect-[4/3]"
                    : index === 1
                      ? "md:col-span-4 md:aspect-[2/3]"
                      : "md:col-span-6 md:aspect-[4/3]"
              }`}
            >
              <Image
                src={image}
                alt={
                  room.photographyPending
                    ? `${room.name} photography coming soon`
                    : index === 0
                      ? `${room.name} apartment main view`
                      : `${room.name} apartment view ${index + 1}`
                }
                fill
                priority={index === 0}
                sizes={
                  room.photographyPending
                    ? "100vw"
                    : index === 0
                      ? "(min-width: 768px) 66vw, 100vw"
                      : index === 1
                        ? "(min-width: 768px) 33vw, 100vw"
                        : "(min-width: 768px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-[var(--surface)] py-20 md:py-28">
        <div className="page-shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="annotation text-[var(--accent-strong)]">
              Apartment details
            </p>
            <h2 className="section-title mt-5 text-balance">
              A {formatRoomType(room.type)} in the {room.block} collection.
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)]">
              The existing public listing does not provide occupancy, bed
              configuration, bathroom count or floor area. These details will be
              added after confirmation from the resort.
            </p>
            {room.photographyPending && (
              <p className="annotation mt-6 text-[var(--accent-strong)]">
                Original room photography is still required
              </p>
            )}
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="annotation text-[var(--muted)]">
              Published amenities
            </p>
            <ul className="mt-5 divide-y border-t">
              {amenities.map((amenity, index) => (
                <li
                  key={amenity}
                  className="flex items-center gap-5 py-4 text-sm"
                >
                  <span className="annotation text-[var(--accent-strong)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {amenity}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full sm:w-auto">
              <Link href={`/book?room=${room.slug}`}>
                Request this apartment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="page-shell py-20 md:py-28">
          <p className="annotation text-[var(--accent-strong)]">
            Related apartments
          </p>
          <h2 className="mt-4 text-4xl tracking-[-0.05em]">
            More in {room.block}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/rooms/${item.slug}`}
                className="group"
              >
                <div className="image-plate relative aspect-[4/3]">
                  <Image
                    src={item.images[0]}
                    alt={`${item.name} apartment`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex items-end justify-between border-b py-5">
                  <div>
                    <p className="annotation text-[var(--muted)]">
                      {formatRoomType(item.type)}
                    </p>
                    <h3 className="mt-2 text-2xl tracking-[-0.04em]">
                      {item.name}
                    </h3>
                  </div>
                  <span className="annotation">View ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
