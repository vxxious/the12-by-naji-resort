import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { SocialIcon } from "@/components/icons/social-icons";
import { PageIntro } from "@/components/sections/page-intro";
import { SocialLinks } from "@/components/social/social-links";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Contact and Location",
  description:
    "Contact The 12 by Naji Resort in Home Trust Estate, Utako, Abuja by phone, email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  {
    label: "Opening hours",
    value: hotel.hours,
    href: undefined,
    icon: "hours",
    external: false,
  },
  {
    label: "Call",
    value: hotel.phoneDisplay,
    href: hotel.phoneHref,
    icon: "phone",
    external: false,
  },
  {
    label: "Email",
    value: hotel.email,
    href: `mailto:${hotel.email}`,
    icon: "email",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message the resort",
    href: hotel.social.whatsapp,
    icon: "whatsapp",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Find your way to The 12."
        description="The resort is located in Home Trust Estate, Utako, Abuja and is listed as open every day, 24 hours."
        image="/images/amenities/resort-exterior.jpg"
        imageAlt="Exterior of The 12 by Naji Resort"
      />
      <div className="page-shell pb-12">
        <Link
          href="/events"
          className="flex min-h-16 items-center justify-between gap-6 border-y py-4 text-sm font-medium transition-colors hover:text-[var(--accent-strong)]"
        >
          <span>Looking for resort events?</span>
          <span className="annotation flex items-center gap-3">
            View events
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
          </span>
        </Link>
      </div>
      <section className="border-y bg-[var(--surface)] py-16 md:py-24">
        <div className="page-shell grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <address className="max-w-xl text-4xl leading-[1.08] tracking-[-0.04em] not-italic md:text-6xl">
              {hotel.address.street}, {hotel.address.locality}, Abuja.
            </address>
            <a
              href={hotel.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="annotation mt-8 inline-flex min-h-11 items-center gap-3 border-b"
            >
              <MapPin aria-hidden="true" size={17} /> Open in maps ↗
            </a>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <ul className="border-t">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="flex size-6 shrink-0 items-center justify-center">
                      {item.icon === "hours" && (
                        <Clock3
                          aria-hidden="true"
                          size={20}
                          strokeWidth={1.6}
                        />
                      )}
                      {item.icon === "phone" && (
                        <Phone aria-hidden="true" size={20} strokeWidth={1.6} />
                      )}
                      {item.icon === "email" && (
                        <Mail aria-hidden="true" size={20} strokeWidth={1.6} />
                      )}
                      {item.icon === "whatsapp" && (
                        <SocialIcon
                          name="whatsapp"
                          className="size-6 text-[#25d366]"
                        />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="annotation block text-[var(--muted)]">
                        {item.label}
                      </span>
                      <span className="mt-1.5 block text-base leading-6 break-words">
                        {item.value}
                      </span>
                    </span>
                    {item.external && (
                      <ArrowUpRight
                        aria-hidden="true"
                        className="shrink-0"
                        size={18}
                        strokeWidth={1.5}
                      />
                    )}
                  </>
                );

                return (
                  <li key={item.label} className="border-b">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="flex min-h-20 items-center gap-4 py-4 transition-colors duration-150 hover:text-[var(--accent-strong)]"
                        aria-label={
                          item.icon === "whatsapp"
                            ? "Message The 12 by Naji Resort on WhatsApp"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex min-h-20 items-center gap-4 py-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-12">
              <h2 className="text-2xl tracking-[-0.035em]">Follow The 12.</h2>
              <SocialLinks className="mt-5" variant="list" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
