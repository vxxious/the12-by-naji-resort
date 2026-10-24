"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { hotel } from "@/data/hotel";
import { formatRoomType, rooms } from "@/data/rooms";
import {
  bookingRequestSchema,
  calculateLengthOfStay,
  type BookingRequest,
  type BookingRequestInput,
} from "@/lib/booking/schema";

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
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
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

  const [checkIn, checkOut] = useWatch({
    control,
    name: ["checkIn", "checkOut"],
  });
  const nights = calculateLengthOfStay(checkIn, checkOut);

  useEffect(() => {
    setValue("lengthOfStay", nights, { shouldValidate: nights > 0 });
  }, [nights, setValue]);

  async function onSubmit(values: BookingRequest) {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as {
        success: boolean;
        message?: string;
        reference?: string;
      };
      if (!response.ok || !result.success) {
        setStatus({
          type: "error",
          message:
            result.message ??
            "The booking request could not be sent. Please contact the resort.",
        });
        return;
      }
      setStatus({
        type: "success",
        message: result.reference
          ? `Request received. Reference: ${result.reference}`
          : "Your request was received.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "The booking service could not be reached. Please contact the resort directly.",
      });
    }
  }

  const fieldClass =
    "mt-2 min-h-12 w-full border bg-[var(--surface)] px-3 text-sm focus:border-[var(--accent)]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Full name"
          error={errors.fullName?.message}
          className="sm:col-span-2"
        >
          <input
            {...register("fullName")}
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.fullName)}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field
          label="Apartment"
          error={errors.roomSlug?.message}
          className="sm:col-span-2"
        >
          <select
            {...register("roomSlug")}
            className={fieldClass}
            aria-invalid={Boolean(errors.roomSlug)}
          >
            <option value="">Select an apartment</option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.slug}>
                {room.name} — {room.block} · {formatRoomType(room.type)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Check in" error={errors.checkIn?.message}>
          <input
            {...register("checkIn")}
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            className={fieldClass}
            aria-invalid={Boolean(errors.checkIn)}
          />
        </Field>
        <Field label="Check out" error={errors.checkOut?.message}>
          <input
            {...register("checkOut")}
            type="date"
            min={checkIn || new Date().toISOString().slice(0, 10)}
            className={fieldClass}
            aria-invalid={Boolean(errors.checkOut)}
          />
        </Field>
        <div className="border-y py-5 sm:col-span-2">
          <span className="annotation text-[var(--muted)]">Length of stay</span>
          <p className="mt-2 text-2xl tracking-[-0.04em]">
            {nights > 0
              ? `${nights} night${nights === 1 ? "" : "s"}`
              : "Select valid dates"}
          </p>
          <input
            type="hidden"
            {...register("lengthOfStay", { valueAsNumber: true })}
          />
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label>
          Company
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="border-l border-[var(--accent)] pl-5 text-sm leading-6 text-[var(--muted)]">
        This form does not confirm availability or take payment. The existing
        reservation provider is still awaiting verification.
      </div>

      {status.type !== "idle" && (
        <div
          role="status"
          className={`flex items-start gap-3 border p-4 text-sm leading-6 ${
            status.type === "error"
              ? "border-red-700/50"
              : "border-emerald-700/50"
          }`}
        >
          {status.type === "error" ? (
            <AlertCircle
              aria-hidden="true"
              className="mt-0.5 shrink-0"
              size={18}
            />
          ) : (
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 shrink-0"
              size={18}
            />
          )}
          {status.message}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} className="min-w-52">
          {isSubmitting ? (
            <>
              <LoaderCircle
                className="animate-spin"
                aria-hidden="true"
                size={17}
              />{" "}
              Sending
            </>
          ) : (
            "Request booking"
          )}
        </Button>
        <p className="text-xs leading-5 text-[var(--muted)]">
          Prefer direct contact? Call{" "}
          <a className="underline" href={hotel.phoneHref}>
            {hotel.phoneDisplay}
          </a>
          {" or "}
          <Link
            className="underline"
            href={hotel.social.whatsapp}
            target="_blank"
          >
            use WhatsApp
          </Link>
          .
        </p>
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
    <label className={className}>
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
