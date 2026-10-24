import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Event formats previously listed by The 12 by Naji Resort. Contact the resort for current schedules and enquiries.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <section className="page-shell py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="annotation text-[var(--accent-strong)]">
              Gather at the resort
            </p>
            <h1 className="display-title mt-5 text-balance">
              The next date is still being written.
            </h1>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-sm leading-7 text-[var(--muted)]">
              The existing website names four event formats but publishes no
              dates, times, prices or active ticket links.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">Make an enquiry</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="image-plate relative aspect-[4/5] md:col-span-7 md:aspect-[4/3]">
            <Image
              src="/images/hero/events-hero.jpeg"
              alt="Event space at The 12 by Naji Resort"
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-5">
            <p className="annotation text-[var(--muted)]">Previously listed</p>
            <ol className="mt-5 divide-y border-y">
              {events.map((event, index) => (
                <li
                  key={event}
                  className="flex items-center justify-between py-6"
                >
                  <span className="text-2xl tracking-[-0.04em]">{event}</span>
                  <span className="annotation text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ol>
            <p className="annotation mt-6 text-[var(--accent-strong)]">
              Schedule to be confirmed
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
