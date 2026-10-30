import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { childrensDayEvent } from "@/data/events";

export const metadata: Metadata = {
  title: "Children’s Day Events",
  description:
    "See highlights from the 2026 Children’s Day Fun Zone at The 12 by Naji Resort, with more events and another Children’s Day coming soon.",
  alternates: { canonical: "/events" },
};

const eventFacts = [
  ["Date", childrensDayEvent.date],
  ["Theme", childrensDayEvent.theme],
  ["Time", childrensDayEvent.time],
  ["Access", childrensDayEvent.access],
] as const;

export default function EventsPage() {
  return (
    <>
      <section className="page-shell py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="annotation text-[var(--accent-strong)]">
              27 May 2026 · Past event
            </p>
            <h1 className="display-title mt-5 text-balance">
              More events and another Children’s Day are coming.
            </h1>
          </div>
          <div className="border-t pt-5 md:col-span-3 md:col-start-10">
            <p className="annotation text-[var(--accent-strong)]">
              More events · Coming soon
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              More resort events, including another Children’s Day experience,
              are being planned. Dates and programmes will be shared when they
              are confirmed.
            </p>
            <Button asChild className="mt-6 w-full sm:w-auto">
              <Link href="/contact">Ask about the next event</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y bg-[var(--surface)] py-20 md:py-28">
        <div className="page-shell grid gap-12 md:grid-cols-12 md:items-center">
          <div className="image-plate relative aspect-[4/5] md:col-span-5">
            <Image
              src={childrensDayEvent.poster}
              alt="Children’s Day Fun Zone 2026 event poster"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="annotation text-[var(--accent-strong)]">
              Children’s Day Fun Zone · 2026
            </p>
            <h2 className="section-title mt-5 text-balance">
              The Egg Hunt brought play across the resort.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {childrensDayEvent.description} The programme included basketball,
              table tennis, badminton, swimming, egg races and team games.
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-y py-6 sm:grid-cols-2">
              {eventFacts.map(([label, value]) => (
                <div key={label}>
                  <dt className="annotation text-[var(--muted)]">{label}</dt>
                  <dd className="mt-2 text-base leading-7 font-medium">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="section-title text-balance md:col-span-7">
            A look back at the day.
          </h2>
          <p className="text-base leading-7 text-[var(--muted)] md:col-span-3 md:col-start-10">
            Three short clips from the Children’s Day activities at the resort.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-4">
          {childrensDayEvent.videos.map((video, index) => (
            <figure key={video.src}>
              <video
                controls
                playsInline
                preload="metadata"
                aria-label={video.label}
                className="aspect-[29/52] w-full bg-black object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption className="flex items-center justify-between gap-4 border-b py-4">
                <span className="text-sm font-medium">{video.caption}</span>
                <span className="annotation shrink-0 text-[var(--muted)]">
                  Clip {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
