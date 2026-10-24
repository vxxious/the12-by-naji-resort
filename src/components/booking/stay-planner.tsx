"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { rooms } from "@/data/rooms";
import { startRouteTransition } from "@/lib/navigation/route-transition";

export function StayPlanner() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function continueToBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    const selectedCheckIn = formData.get("checkIn")?.toString();
    const selectedCheckOut = formData.get("checkOut")?.toString();
    const selectedRoom = formData.get("room")?.toString();
    if (selectedCheckIn) params.set("checkIn", selectedCheckIn);
    if (selectedCheckOut) params.set("checkOut", selectedCheckOut);
    if (selectedRoom) params.set("room", selectedRoom);
    startRouteTransition();
    router.push(`/book${params.size ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={continueToBooking}
      className="grid border border-[var(--foreground)] bg-[var(--surface)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr_auto]"
      aria-label="Start a booking request"
    >
      <label className="group cursor-pointer border-b p-4 transition-colors duration-150 focus-within:bg-[var(--surface-muted)] focus-within:ring-2 focus-within:ring-[var(--accent)] focus-within:ring-inset hover:bg-[var(--surface-muted)] sm:border-r lg:border-b-0 lg:p-5">
        <span className="annotation block text-[var(--accent-strong)]">
          Check in
        </span>
        <input
          type="date"
          name="checkIn"
          min={new Date().toISOString().slice(0, 10)}
          onChange={(event) => {
            const value = event.target.value;
            setCheckIn(value);
            if (checkOut && checkOut <= value) setCheckOut("");
          }}
          className="mt-3 min-h-8 w-full cursor-pointer bg-transparent text-base font-semibold"
        />
      </label>
      <label className="group cursor-pointer border-b p-4 transition-colors duration-150 focus-within:bg-[var(--surface-muted)] focus-within:ring-2 focus-within:ring-[var(--accent)] focus-within:ring-inset hover:bg-[var(--surface-muted)] lg:border-r lg:border-b-0 lg:p-5">
        <span className="annotation block text-[var(--accent-strong)]">
          Check out
        </span>
        <input
          type="date"
          name="checkOut"
          value={checkOut}
          min={checkIn || new Date().toISOString().slice(0, 10)}
          onChange={(event) => setCheckOut(event.target.value)}
          className="mt-3 min-h-8 w-full cursor-pointer bg-transparent text-base font-semibold"
        />
      </label>
      <label className="group cursor-pointer border-b p-4 transition-colors duration-150 focus-within:bg-[var(--surface-muted)] focus-within:ring-2 focus-within:ring-[var(--accent)] focus-within:ring-inset hover:bg-[var(--surface-muted)] sm:border-r lg:border-b-0 lg:p-5">
        <span className="annotation block text-[var(--accent-strong)]">
          Apartment
        </span>
        <select
          name="room"
          className="mt-3 min-h-8 w-full cursor-pointer bg-transparent text-base font-semibold"
        >
          <option value="">Any apartment</option>
          {rooms.map((option) => (
            <option key={option.slug} value={option.slug}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="flex min-h-20 items-center justify-between gap-8 bg-[var(--accent)] px-6 text-sm font-bold tracking-[0.1em] text-[var(--accent-contrast)] uppercase transition-colors duration-150 hover:bg-[var(--accent-strong)] focus-visible:outline-[var(--foreground)] active:bg-[var(--accent-strong)] sm:col-span-2 lg:col-span-1 lg:min-w-56"
      >
        Plan your stay
        <ArrowRight aria-hidden="true" size={20} strokeWidth={1.75} />
      </button>
    </form>
  );
}
