import type { Room, RoomBlock, RoomType } from "@/types/room";

const room = (
  name: string,
  slug: string,
  block: RoomBlock,
  type: RoomType,
  priceNgn: number,
  photographyPending = false,
): Room => ({
  name,
  slug,
  block,
  type,
  priceNgn,
  images: photographyPending
    ? ["/images/rooms/photography-coming-soon.webp"]
    : Array.from(
        { length: 4 },
        (_, index) =>
          `/images/rooms/${block}/${slug}-${String(index + 1).padStart(2, "0")}.jpg`,
      ),
  photographyPending,
});

export const rooms: Room[] = [
  room("Bora-Bora", "bora-bora", "elysian", "3-bedroom", 200_000),
  room("Seychelles", "seychelles", "elysian", "3-bedroom", 200_000),
  room("Cappadocia", "cappadocia", "elysian", "3-bedroom", 200_000),
  room("Santorini", "santorini", "elysian", "2-bedroom", 150_000),
  room("Ibiza", "ibiza", "elysian", "2-bedroom", 150_000),
  room("Kyoto", "kyoto", "elysian", "2-bedroom", 150_000),
  room("Monaco", "monaco", "elysian", "studio", 90_000),
  room("Bali", "bali", "elysian", "studio", 90_000, true),
  room("Tokyo", "tokyo", "elysian", "studio", 90_000),
  room("Grandview", "grandview", "oasis", "3-bedroom", 150_000),
  room("Essence", "essence", "oasis", "3-bedroom", 150_000),
  room("Palms", "palms", "oasis", "2-bedroom", 120_000),
  room("Eden", "eden", "oasis", "2-bedroom", 120_000),
  room("Lotus", "lotus", "oasis", "2-bedroom", 120_000),
  room("Aurora", "aurora", "oasis", "studio", 70_000, true),
  room("Hive", "hive", "oasis", "studio", 70_000),
  room("Renaissance", "renaissance", "oasis", "studio", 70_000, true),
];

export const featuredRooms = ["bora-bora", "santorini", "grandview", "hive"]
  .map((slug) => rooms.find((item) => item.slug === slug))
  .filter((item): item is Room => Boolean(item));

export const getRoomBySlug = (slug: string) =>
  rooms.find((item) => item.slug === slug);

export const formatRoomType = (type: RoomType) =>
  type === "studio"
    ? "Studio apartment"
    : `${type.replace("-", " ")} apartment`;

export const formatNaira = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
