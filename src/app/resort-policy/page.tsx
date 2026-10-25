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
      "A caution fee must be paid before or on arrival and is stated as refundable within 48 hours. No caution-fee amount is published.",
      "The published policy states that smoking illegal substances results in forfeiture of the caution fee.",
    ],
  },
  {
    title: "Cancellation",
    items: [
      "The existing policy states that cancellations seven or more days before arrival receive a full refund.",
      "Cancellations fewer than seven days before arrival are stated as receiving a 50% refund.",
      "Cancellation on the booking start date is stated as receiving no refund.",
    ],
  },
] as const;

const fines = [
  { reason: "Smoking in the apartment", amount: "₦25,000" },
  { reason: "Littering the apartment", amount: "₦15,000" },
  { reason: "Splashing on the wall", amount: "₦10,000" },
  { reason: "Throwing up or vomiting", amount: "₦10,000" },
  { reason: "Misplaced or lost key", amount: "₦10,000" },
  { reason: "DSTV disconnection", amount: "₦7,000" },
  { reason: "Damaged or missing intercom charger", amount: "₦5,000" },
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
        <p className="text-base leading-8 font-medium text-[var(--muted)] md:col-span-4 md:col-start-9">
          These terms and charges are reproduced from the resort&rsquo;s
          published policy. Please confirm the current policy directly with the
          resort before booking.
        </p>
      </div>
      <div className="mt-16 border-t">
        {sections.map((section) => (
          <section
            key={section.title}
            className="grid gap-8 border-b py-10 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <h2 className="text-3xl tracking-[-0.04em]">{section.title}</h2>
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

      <section className="grid gap-10 border-b py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <h2 className="text-3xl tracking-[-0.04em]">Published charges</h2>
          <p className="mt-5 max-w-sm text-base leading-8 font-medium text-[var(--muted)]">
            The amounts below are the exact fines currently listed on the public
            resort policy.
          </p>
        </div>
        <dl className="border-t md:col-span-7 md:col-start-6">
          {fines.map((fine) => (
            <div
              key={fine.reason}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b py-5"
            >
              <dt className="text-base leading-7 font-medium text-[var(--muted)]">
                {fine.reason}
              </dt>
              <dd className="text-lg font-semibold tabular-nums">
                {fine.amount}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </section>
  );
}
