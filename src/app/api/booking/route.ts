import { NextResponse } from "next/server";

import {
  BookingUnavailableError,
  getBookingAdapter,
} from "@/lib/booking/adapter";
import { bookingRequestSchema } from "@/lib/booking/schema";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function clientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter(
    (time) => now - time < WINDOW_MS,
  );
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json(
      { success: false, message: "Request origin is not allowed." },
      { status: 403 },
    );
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many attempts. Please wait and try again.",
      },
      { status: 429 },
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "The request body is not valid JSON." },
      { status: 400 },
    );
  }

  const parsed = bookingRequestSchema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Review the highlighted booking details.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ success: true, status: "received" });
  }

  try {
    const result = await getBookingAdapter().createRequest(parsed.data);
    return NextResponse.json({ success: true, ...result }, { status: 201 });
  } catch (error) {
    if (error instanceof BookingUnavailableError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 503 },
      );
    }
    console.error("Booking adapter failed", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "The booking service could not be reached. Please contact the resort directly.",
      },
      { status: 502 },
    );
  }
}
