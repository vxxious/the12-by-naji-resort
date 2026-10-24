import { describe, expect, it } from "vitest";

import { rooms } from "@/data/rooms";

describe("room photography", () => {
  it("reuses one optimized placeholder for rooms awaiting photography", () => {
    const pendingRooms = rooms.filter((room) => room.photographyPending);

    expect(pendingRooms).toHaveLength(3);
    expect(pendingRooms.every((room) => room.images.length === 1)).toBe(true);
    expect(
      pendingRooms.every(
        (room) =>
          room.images[0] === "/images/rooms/photography-coming-soon.webp",
      ),
    ).toBe(true);
  });
});
