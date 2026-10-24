import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function BookingCta() {
  return (
    <section className="border-y bg-[var(--foreground)] text-[var(--background)]">
      <Link
        href="/book"
        className="page-shell grid min-h-80 gap-10 py-14 md:grid-cols-12 md:items-end md:py-24"
      >
        <div className="md:col-span-9">
          <p className="annotation opacity-65">Utako · Abuja</p>
          <h2 className="section-title mt-5 max-w-5xl text-balance">
            Your apartment in Utako, with the resort around it.
          </h2>
        </div>
        <div className="flex items-center justify-between border-t pt-5 md:col-span-3">
          <span className="annotation">Check availability</span>
          <ArrowUpRight aria-hidden="true" size={30} strokeWidth={1.25} />
        </div>
      </Link>
    </section>
  );
}
