"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, ChevronDown, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

import { SocialIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { hotel } from "@/data/hotel";
import { formatRoomType, rooms } from "@/data/rooms";
import {
  bookingRequestSchema,
  calculateLengthOfStay,
  formatStayDate,
  type BookingRequest,
  type BookingRequestInput,
} from "@/lib/booking/schema";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  initialRoom?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
}

export function BookingForm({
  initialRoom = "",
  initialCheckIn = "",
  initialCheckOut = "",
}: BookingFormProps) {
  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    formState: { errors },
  } = useForm<BookingRequestInput, unknown, BookingRequest>({
    resolver: zodResolver(bookingRequestSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      roomSlug: initialRoom,
      checkIn: initialCheckIn,
      checkOut: initialCheckOut,
      lengthOfStay: calculateLengthOfStay(initialCheckIn, initialCheckOut),
      company: "",
    },
  });

  const [roomSlug, checkIn, checkOut] = useWatch({
    control,
    name: ["roomSlug", "checkIn", "checkOut"],
  });
  const nights = calculateLengthOfStay(checkIn, checkOut);
  const selectedRoom = rooms.find((room) => room.slug === roomSlug);

  useEffect(() => {
    setValue("lengthOfStay", nights, { shouldValidate: nights > 0 });
  }, [nights, setValue]);

  function onSubmit(values: BookingRequest) {
    const room = rooms.find((item) => item.slug === values.roomSlug);
    if (!room) {
      setError("roomSlug", { message: "Select an apartment" });
      return;
    }

    const block = room.block === "elysian" ? "Elysian" : "Oasis";
    const message = [
      `Hello ${hotel.name},`,
      "",
      "I would like to enquire about availability for this stay:",
      "",
      `Guest: ${values.fullName}`,
      `Apartment: ${room.name} (${block} · ${formatRoomType(room.type)})`,
      `Check-in: ${formatStayDate(values.checkIn)}`,
      `Check-out: ${formatStayDate(values.checkOut)}`,
      `Length of stay: ${values.lengthOfStay} night${values.lengthOfStay === 1 ? "" : "s"}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      "",
      "Please confirm whether this apartment is available for these dates, the final rate, and the next reservation steps.",
      "",
      "This is an availability enquiry, not a confirmed reservation.",
    ].join("\n");

    window.open(
      `${hotel.social.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const fieldClass =
    "control-boundary min-h-14 w-full min-w-0 border bg-[var(--background)] px-4 text-base font-medium placeholder:text-[var(--muted)] transition-colors duration-150 hover:border-[var(--foreground)] focus:border-[var(--accent-strong)]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Room availability enquiry"
      className="border bg-[var(--surface)]"
    >
      <header className="border-b p-5 sm:p-8">
        <p className="annotation text-[var(--accent-strong)]">
          Availability enquiry
        </p>
        <h2 className="mt-4 text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
          Tell us about your stay.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          Complete the details below, then continue to WhatsApp so the resort
          can check your preferred apartment and dates.
        </p>
      </header>

      <div className="space-y-12 p-5 sm:p-8">
        <fieldset>
          <legend className="text-2xl font-medium tracking-[-0.025em]">
            Guest details
          </legend>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            These details will be included in your WhatsApp enquiry.
          </p>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <Field
              label="Full name"
              error={errors.fullName?.message}
              className="sm:col-span-2"
            >
              <input
                {...register("fullName")}
                required
                autoComplete="name"
                placeholder="First and last name"
                className={cn(
                  fieldClass,
                  "mt-3",
                  errors.fullName && "border-red-700 dark:border-red-400",
                )}
                aria-invalid={Boolean(errors.fullName)}
              />
            </Field>
            <Field label="Email address" error={errors.email?.message}>
              <input
                {...register("email")}
                required
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={cn(
                  fieldClass,
                  "mt-3",
                  errors.email && "border-red-700 dark:border-red-400",
                )}
                aria-invalid={Boolean(errors.email)}
              />
            </Field>
            <Field label="Phone number" error={errors.phone?.message}>
              <input
                {...register("phone")}
                required
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+234 000 000 0000"
                className={cn(
                  fieldClass,
                  "mt-3",
                  errors.phone && "border-red-700 dark:border-red-400",
                )}
                aria-invalid={Boolean(errors.phone)}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="border-t pt-10">
          <legend className="px-0 text-2xl font-medium tracking-[-0.025em]">
            Stay details
          </legend>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Choose your preferred apartment and travel dates. The resort will
            confirm availability after receiving your WhatsApp message.
          </p>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <Field
              label="Apartment"
              error={errors.roomSlug?.message}
              className="sm:col-span-2"
            >
              <span className="relative mt-3 block min-w-0">
                <select
                  {...register("roomSlug")}
                  required
                  defaultValue={initialRoom}
                  className={cn(
                    fieldClass,
                    "appearance-none pr-12",
                    errors.roomSlug && "border-red-700 dark:border-red-400",
                  )}
                  aria-invalid={Boolean(errors.roomSlug)}
                >
                  <option value="">Select an apartment</option>
                  {rooms.map((room) => (
                    <option key={room.slug} value={room.slug}>
                      {room.name} —{" "}
                      {room.block === "elysian" ? "Elysian" : "Oasis"} ·{" "}
                      {formatRoomType(room.type)}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[var(--muted)]"
                  size={21}
                  strokeWidth={1.75}
                />
              </span>
            </Field>

            <Field label="Check in" error={errors.checkIn?.message}>
              <DateControl value={checkIn} invalid={Boolean(errors.checkIn)}>
                <input
                  {...register("checkIn")}
                  required
                  type="date"
                  min={new Date().toISOString().slice(0, 10)}
                  className="absolute inset-0 z-10 h-full w-full min-w-0 cursor-pointer opacity-0"
                  aria-invalid={Boolean(errors.checkIn)}
                />
              </DateControl>
            </Field>
            <Field label="Check out" error={errors.checkOut?.message}>
              <DateControl value={checkOut} invalid={Boolean(errors.checkOut)}>
                <input
                  {...register("checkOut")}
                  required
                  type="date"
                  min={checkIn || new Date().toISOString().slice(0, 10)}
                  className="absolute inset-0 z-10 h-full w-full min-w-0 cursor-pointer opacity-0"
                  aria-invalid={Boolean(errors.checkOut)}
                />
              </DateControl>
            </Field>
          </div>

          <div className="mt-8 grid border-t sm:grid-cols-3">
            <SummaryItem
              label="Apartment"
              value={
                selectedRoom
                  ? `${selectedRoom.name} · ${formatRoomType(selectedRoom.type)}`
                  : "Not selected"
              }
              className="sm:border-r"
            />
            <SummaryItem
              label="Dates"
              value={
                checkIn && checkOut
                  ? `${formatStayDate(checkIn)} — ${formatStayDate(checkOut)}`
                  : "Not selected"
              }
              className="sm:border-r sm:pl-5"
            />
            <SummaryItem
              label="Length of stay"
              value={
                nights > 0
                  ? `${nights} night${nights === 1 ? "" : "s"}`
                  : "Pending dates"
              }
              className="sm:pl-5"
            />
          </div>
          <input
            type="hidden"
            {...register("lengthOfStay", { valueAsNumber: true })}
          />
        </fieldset>

        <div className="sr-only" aria-hidden="true">
          <label>
            Company
            <input {...register("company")} tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="flex items-start gap-3 border bg-[var(--background)] p-4 text-sm leading-6 text-[var(--muted)]">
          <ShieldCheck
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-[var(--accent-strong)]"
            size={20}
            strokeWidth={1.75}
          />
          <p>
            No payment is taken here. WhatsApp will open with your enquiry ready
            to send. The resort will confirm availability, the final rate and
            the next reservation steps directly with you.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            className="min-h-14 w-full max-w-full justify-between px-6 whitespace-normal sm:w-auto"
          >
            Send enquiry on WhatsApp
            <SocialIcon name="whatsapp" size={20} />
          </Button>
          <p className="text-xs leading-5 text-[var(--muted)] sm:max-w-56 sm:text-right">
            Need help now? Call{" "}
            <a className="underline underline-offset-4" href={hotel.phoneHref}>
              {hotel.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("grid min-w-0", className)}>
      <span className="annotation text-[var(--muted)]">{label}</span>
      {children}
      {error && (
        <span
          role="alert"
          className="mt-2 block text-xs text-red-700 dark:text-red-300"
        >
          {error}
        </span>
      )}
    </label>
  );
}

function DateControl({
  value,
  invalid,
  children,
}: {
  value?: string;
  invalid: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "control-boundary relative mt-3 flex min-h-14 min-w-0 items-center border bg-[var(--background)] px-4 pr-12 transition-colors duration-150 focus-within:border-[var(--accent-strong)] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[var(--accent)] hover:border-[var(--foreground)]",
        invalid && "border-red-700 dark:border-red-400",
      )}
    >
      <span
        aria-hidden="true"
        className="truncate text-base font-medium tabular-nums"
      >
        {formatStayDate(value)}
      </span>
      <CalendarDays
        aria-hidden="true"
        className="pointer-events-none absolute right-4"
        size={20}
        strokeWidth={1.75}
      />
      {children}
    </span>
  );
}

function SummaryItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("border-b py-5 sm:border-b-0", className)}>
      <p className="annotation text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-sm leading-6 font-medium">{value}</p>
    </div>
  );
}
