"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { rooms } from "@/data/rooms";

export function StayPlanner() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("");

  function continueToBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (room) params.set("room", room);
    router.push(`/book${params.size ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={continueToBooking}
      className="grid border border-[var(--border)] bg-[var(--surface)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr_auto]"
      aria-label="Start a booking request"
    >
      <label className="border-b p-4 sm:border-r lg:border-b-0 lg:p-5">
        <span className="annotation block text-[var(--muted)]">Check in</span>
        <input
          type="date"
          value={checkIn}
          min={new Date().toISOString().slice(0, 10)}
          onChange={(event) => {
            const value = event.target.value;
            setCheckIn(value);
            if (checkOut && checkOut <= value) setCheckOut("");
          }}
          className="mt-2 w-full bg-transparent text-sm"
        />
      </label>
      <label className="border-b p-4 lg:border-r lg:border-b-0 lg:p-5">
        <span className="annotation block text-[var(--muted)]">Check out</span>
        <input
          type="date"
          value={checkOut}
          min={checkIn || new Date().toISOString().slice(0, 10)}
          onChange={(event) => setCheckOut(event.target.value)}
          className="mt-2 w-full bg-transparent text-sm"
        />
      </label>
      <label className="border-b p-4 sm:border-r lg:border-b-0 lg:p-5">
        <span className="annotation block text-[var(--muted)]">Apartment</span>
        <select
          value={room}
          onChange={(event) => setRoom(event.target.value)}
          className="mt-2 w-full bg-transparent text-sm"
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
        className="flex min-h-18 items-center justify-between gap-8 bg-[var(--accent)] px-5 text-xs font-semibold tracking-[0.11em] text-[var(--accent-contrast)] uppercase transition-colors hover:bg-[var(--accent-strong)] sm:col-span-2 lg:col-span-1 lg:min-w-48"
      >
        Plan your stay <ArrowRight aria-hidden="true" size={18} />
      </button>
    </form>
  );
}
