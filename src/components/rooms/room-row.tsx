import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { formatNaira, formatRoomType } from "@/data/rooms";
import type { Room } from "@/types/room";

export function RoomRow({
  room,
  priority = false,
}: {
  room: Room;
  priority?: boolean;
}) {
  return (
    <article className="grid border-t py-8 md:grid-cols-12 md:gap-8 md:py-12">
      <Link
        href={`/rooms/${room.slug}`}
        className="image-plate group relative aspect-[4/3] md:col-span-7 md:aspect-[16/10]"
      >
        <Image
          src={room.images[0]}
          alt={
            room.photographyPending
              ? `${room.name} apartment photography coming soon`
              : `${room.name} ${formatRoomType(room.type)} at The 12 by Naji Resort`
          }
          fill
          priority={priority}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </Link>
      <div className="flex flex-col pt-6 md:col-span-5 md:pt-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="annotation text-[var(--muted)]">
              {room.block} · {formatRoomType(room.type)}
            </p>
            <h3 className="mt-3 text-4xl tracking-[-0.04em] md:text-5xl">
              {room.name}
            </h3>
          </div>
          <span className="annotation border px-3 py-2 text-[var(--accent-strong)]">
            {room.block === "elysian" ? "E" : "O"}
          </span>
        </div>
        <p className="mt-6 max-w-md text-sm leading-7 text-[var(--muted)]">
          The public listing includes a furnished kitchen, Wi-Fi, on-site
          parking, resort amenity access and 24-hour service.
        </p>
        {room.photographyPending && (
          <p className="annotation mt-5 text-[var(--accent-strong)]">
            Updated photography required
          </p>
        )}
        <div className="mt-8 flex items-end justify-between border-t pt-5 md:mt-auto">
          <div>
            <span className="annotation block text-[var(--muted)]">
              Published rate
            </span>
            <span className="mt-1 block text-lg">
              {formatNaira(room.priceNgn)}{" "}
              <small className="text-[var(--muted)]">/ night</small>
            </span>
          </div>
          <Link
            href={`/rooms/${room.slug}`}
            className="flex size-12 items-center justify-center border transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            aria-label={`View ${room.name}`}
          >
            <ArrowUpRight aria-hidden="true" size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}
