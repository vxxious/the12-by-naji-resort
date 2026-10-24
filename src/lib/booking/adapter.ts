import type { BookingRequest } from "@/lib/booking/schema";

export interface BookingResult {
  reference: string;
  status: "requested" | "pending-payment";
}

export interface BookingAdapter {
  createRequest(request: BookingRequest): Promise<BookingResult>;
}

export class BookingUnavailableError extends Error {
  constructor() {
    super(
      "Online booking is not yet connected. Please call or email the resort to request your stay.",
    );
    this.name = "BookingUnavailableError";
  }
}

class DisabledBookingAdapter implements BookingAdapter {
  async createRequest(request: BookingRequest): Promise<BookingResult> {
    void request;
    throw new BookingUnavailableError();
  }
}

export function getBookingAdapter(): BookingAdapter {
  const provider = process.env.BOOKING_PROVIDER ?? "disabled";
  if (provider !== "disabled") {
    throw new Error(
      `Unsupported BOOKING_PROVIDER "${provider}". Add and verify an adapter before enabling it.`,
    );
  }
  return new DisabledBookingAdapter();
}
