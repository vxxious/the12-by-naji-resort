import { z } from "zod";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const bookingRequestSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Enter your full name")
      .max(100, "Name is too long")
      .refine(
        (value) => value.split(/\s+/).length >= 2,
        "Enter your first and last name",
      ),
    email: z.string().trim().email("Enter a valid email address").max(254),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a valid phone number")
      .max(24, "Phone number is too long")
      .regex(/^[+()\-\s\d]+$/, "Enter a valid phone number"),
    roomSlug: z.string().trim().min(1, "Select an apartment").max(80),
    checkIn: z.string().regex(datePattern, "Select a check-in date"),
    checkOut: z.string().regex(datePattern, "Select a check-out date"),
    lengthOfStay: z.coerce.number().int().min(1).max(90),
    company: z.string().max(0).optional(),
  })
  .superRefine((value, context) => {
    const today = new Date().toISOString().slice(0, 10);
    if (value.checkIn < today) {
      context.addIssue({
        code: "custom",
        path: ["checkIn"],
        message: "Check-in cannot be in the past",
      });
    }
    if (value.checkOut <= value.checkIn) {
      context.addIssue({
        code: "custom",
        path: ["checkOut"],
        message: "Check-out must be after check-in",
      });
    }
  });

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
export type BookingRequestInput = z.input<typeof bookingRequestSchema>;

export function calculateLengthOfStay(checkIn?: string, checkOut?: string) {
  if (!checkIn || !checkOut) return 0;
  const start = Date.parse(`${checkIn}T00:00:00Z`);
  const end = Date.parse(`${checkOut}T00:00:00Z`);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start)
    return 0;
  return Math.round((end - start) / 86_400_000);
}
