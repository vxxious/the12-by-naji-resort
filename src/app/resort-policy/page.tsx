import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resort Policy",
  description:
    "Published check-in, checkout, pool, cancellation and property rules for The 12 by Naji Resort.",
  alternates: { canonical: "/resort-policy" },
};

const sections = [
  {
    title: "Arrival and departure",
    items: [
      "Published check-in time is 2:30pm.",
      "Published checkout time is 12 noon.",
      "A 24-hour notice is requested when renewing a stay.",
    ],
  },
  {
    title: "Pool and property",
    items: [
      "The pool closes at 10:30pm.",
      "The existing policy states that a caution fee is payable before or on arrival and refundable within 48 hours. No amount is currently published.",
      "The property publishes fines for smoking, littering, wall splashing, vomiting, lost keys, DSTV disconnection, and damaged or missing intercom chargers.",
    ],
  },
  {
    title: "Cancellation",
    items: [
      "The existing policy states that cancellations seven or more days before arrival receive a full refund.",
      "Cancellations fewer than seven days before arrival are stated as receiving a 50% refund.",
      "The existing wording concerning cancellation on the booking start date is unclear and requires confirmation from the resort.",
    ],
  },
] as const;

export default function ResortPolicyPage() {
  return (
    <section className="page-shell py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="annotation text-[var(--accent-strong)]">
            Published resort policy
          </p>
          <h1 className="section-title mt-5">Before your stay.</h1>
        </div>
        <p className="text-sm leading-7 text-[var(--muted)] md:col-span-4 md:col-start-9">
          This page preserves the substance of the existing public policy.
          Ambiguous terms, amounts and enforceability must be confirmed by the
          resort before production launch.
        </p>
      </div>
      <div className="mt-16 border-t">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className="grid gap-8 border-b py-10 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <p className="annotation text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-3xl tracking-[-0.045em]">
                {section.title}
              </h2>
            </div>
            <ul className="space-y-5 text-sm leading-7 text-[var(--muted)] md:col-span-7 md:col-start-6">
              {section.items.map((item) => (
                <li key={item} className="border-l pl-5">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
