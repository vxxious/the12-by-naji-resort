import type { Room, RoomBlock, RoomType } from "@/types/room";

type PublishedRoomType = RoomType | "1-bedroom";

export const roomRates = {
  elysian: {
    studio: 120_000,
    "1-bedroom": 160_000,
    "2-bedroom": 200_000,
    "3-bedroom": 280_000,
  },
  oasis: {
    studio: 100_000,
    "1-bedroom": 140_000,
    "2-bedroom": 180_000,
    "3-bedroom": 250_000,
  },
} satisfies Record<RoomBlock, Record<PublishedRoomType, number>>;

export const publishedRoomTypes: PublishedRoomType[] = [
  "studio",
  "1-bedroom",
  "2-bedroom",
  "3-bedroom",
];

const room = (
  name: string,
  slug: string,
  block: RoomBlock,
  type: RoomType,
  photographyPending = false,
): Room => ({
  name,
  slug,
  block,
  type,
  priceNgn: roomRates[block][type],
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
  room("Bora-Bora", "bora-bora", "elysian", "3-bedroom"),
  room("Seychelles", "seychelles", "elysian", "3-bedroom"),
  room("Cappadocia", "cappadocia", "elysian", "3-bedroom"),
  room("Santorini", "santorini", "elysian", "2-bedroom"),
  room("Ibiza", "ibiza", "elysian", "2-bedroom"),
  room("Kyoto", "kyoto", "elysian", "2-bedroom"),
  room("Monaco", "monaco", "elysian", "studio"),
  room("Bali", "bali", "elysian", "studio", true),
  room("Tokyo", "tokyo", "elysian", "studio"),
  room("Grandview", "grandview", "oasis", "3-bedroom"),
  room("Essence", "essence", "oasis", "3-bedroom"),
  room("Palms", "palms", "oasis", "2-bedroom"),
  room("Eden", "eden", "oasis", "2-bedroom"),
  room("Lotus", "lotus", "oasis", "2-bedroom"),
  room("Aurora", "aurora", "oasis", "studio", true),
  room("Hive", "hive", "oasis", "studio"),
  room("Renaissance", "renaissance", "oasis", "studio", true),
];

export const featuredRooms = ["bora-bora", "santorini", "grandview", "hive"]
  .map((slug) => rooms.find((item) => item.slug === slug))
  .filter((item): item is Room => Boolean(item));

export const getRoomBySlug = (slug: string) =>
  rooms.find((item) => item.slug === slug);

export const formatRoomType = (type: PublishedRoomType) =>
  type === "studio"
    ? "Studio apartment"
    : `${type.replace("-", " ")} apartment`;

export const formatNaira = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
