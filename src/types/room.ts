export type RoomBlock = "elysian" | "oasis";
export type RoomType = "3-bedroom" | "2-bedroom" | "studio";

export interface Room {
  slug: string;
  name: string;
  block: RoomBlock;
  type: RoomType;
  priceNgn: number;
  images: string[];
  photographyPending?: boolean;
}
