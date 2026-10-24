"use client";

import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { rooms } from "@/data/rooms";
import { startRouteTransition } from "@/lib/navigation/route-transition";

function formatDisplayDate(value: string) {
  if (!value) return "Select date";

  const [year, month, day] = value.split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
}

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
      className="grid min-w-0 gap-5 border bg-[var(--surface)] p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-[1fr_1fr_1.25fr_auto] lg:items-end lg:gap-4"
      aria-label="Start a booking request"
    >
      <label className="group grid min-w-0 cursor-pointer gap-3">
        <span className="annotation text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
          Check in
        </span>
        <span className="relative flex min-h-16 min-w-0 items-center border bg-[var(--background)] px-4 pr-12 transition-[border-color,background-color] duration-150 group-hover:border-[var(--foreground)] focus-within:border-[var(--accent-strong)] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[var(--accent)]">
          <span
            aria-hidden="true"
            className="truncate text-lg font-medium tabular-nums"
          >
            {formatDisplayDate(checkIn)}
          </span>
          <CalendarDays
            aria-hidden="true"
            className="pointer-events-none absolute right-4 text-[var(--foreground)]"
            size={21}
            strokeWidth={1.75}
          />
          <input
            type="date"
            name="checkIn"
            min={new Date().toISOString().slice(0, 10)}
            onChange={(event) => {
              const value = event.target.value;
              setCheckIn(value);
              if (checkOut && checkOut <= value) setCheckOut("");
            }}
            className="absolute inset-0 z-10 h-full w-full min-w-0 cursor-pointer opacity-0"
          />
        </span>
      </label>
      <label className="group grid min-w-0 cursor-pointer gap-3">
        <span className="annotation text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
          Check out
        </span>
        <span className="relative flex min-h-16 min-w-0 items-center border bg-[var(--background)] px-4 pr-12 transition-[border-color,background-color] duration-150 group-hover:border-[var(--foreground)] focus-within:border-[var(--accent-strong)] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[var(--accent)]">
          <span
            aria-hidden="true"
            className="truncate text-lg font-medium tabular-nums"
          >
            {formatDisplayDate(checkOut)}
          </span>
          <CalendarDays
            aria-hidden="true"
            className="pointer-events-none absolute right-4 text-[var(--foreground)]"
            size={21}
            strokeWidth={1.75}
          />
          <input
            type="date"
            name="checkOut"
            value={checkOut}
            min={checkIn || new Date().toISOString().slice(0, 10)}
            onChange={(event) => setCheckOut(event.target.value)}
            className="absolute inset-0 z-10 h-full w-full min-w-0 cursor-pointer opacity-0"
          />
        </span>
      </label>
      <label className="group grid min-w-0 cursor-pointer gap-3 sm:col-span-2 lg:col-span-1">
        <span className="annotation text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
          Apartment
        </span>
        <span className="relative block min-w-0">
          <select
            name="room"
            className="min-h-16 w-full min-w-0 cursor-pointer appearance-none border bg-[var(--background)] px-4 pr-12 text-lg font-medium transition-[border-color,background-color] duration-150 hover:border-[var(--foreground)] focus:border-[var(--accent-strong)]"
          >
            <option value="">Any apartment</option>
            {rooms.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]"
            size={22}
            strokeWidth={1.75}
          />
        </span>
      </label>
      <button
        type="submit"
        className="group flex min-h-16 items-center justify-between gap-8 border border-[var(--accent)] bg-[var(--accent)] px-6 text-sm font-bold tracking-[0.1em] text-[var(--accent-contrast)] uppercase transition-[background-color,border-color] duration-150 hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] focus-visible:outline-[var(--foreground)] active:border-[var(--foreground)] active:bg-[var(--accent-strong)] sm:col-span-2 lg:col-span-1 lg:min-w-56"
      >
        Plan your stay
        <ArrowRight
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-1"
          size={22}
          strokeWidth={1.75}
        />
      </button>
    </form>
  );
}
