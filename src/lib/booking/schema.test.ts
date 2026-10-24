import { describe, expect, it } from "vitest";

import {
  bookingRequestSchema,
  calculateLengthOfStay,
  formatStayDate,
} from "@/lib/booking/schema";

function futureDate(offset: number) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0, 10);
}

describe("booking request validation", () => {
  it("calculates the stay from the selected dates", () => {
    expect(calculateLengthOfStay("2030-01-10", "2030-01-13")).toBe(3);
  });

  it("formats a selected date for the booking interface", () => {
    expect(formatStayDate("2030-01-10")).toBe("10/01/2030");
    expect(formatStayDate()).toBe("Select date");
  });

  it("rejects checkout on or before check-in", () => {
    const checkIn = futureDate(2);
    const result = bookingRequestSchema.safeParse({
      fullName: "Amina Bello",
      email: "amina@example.com",
      phone: "+234 900 000 0000",
      roomSlug: "santorini",
      checkIn,
      checkOut: checkIn,
      lengthOfStay: 1,
      company: "",
    });
    expect(result.success).toBe(false);
  });

  it("accepts a valid request shape", () => {
    const result = bookingRequestSchema.safeParse({
      fullName: "Amina Bello",
      email: "amina@example.com",
      phone: "+234 900 000 0000",
      roomSlug: "santorini",
      checkIn: futureDate(2),
      checkOut: futureDate(5),
      lengthOfStay: 3,
      company: "",
    });
    expect(result.success).toBe(true);
  });
});
