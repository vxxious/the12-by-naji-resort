import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageIntro } from "@/components/sections/page-intro";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Contact and Location",
  description:
    "Contact The 12 by Naji Resort in Home Trust Estate, Utako, Abuja by phone, email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  {
    label: "Call",
    value: hotel.phoneDisplay,
    href: hotel.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: hotel.email,
    href: `mailto:${hotel.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: hotel.phoneDisplay,
    href: hotel.social.whatsapp,
    icon: MessageCircle,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact and location"
        title="Find your way to The 12."
        description="The resort is located in Home Trust Estate, Utako, Abuja and is listed as open every day, 24 hours."
        image="/images/amenities/resort-exterior.jpg"
        imageAlt="Exterior of The 12 by Naji Resort"
      />
      <section className="border-y bg-[var(--surface)] py-20 md:py-28">
        <div className="page-shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="annotation text-[var(--accent-strong)]">Visit</p>
            <address className="mt-5 max-w-xl text-4xl leading-[1.08] tracking-[-0.05em] not-italic md:text-6xl">
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
            <div className="flex items-center gap-4 border-b pb-5">
              <Clock3 aria-hidden="true" size={20} />
              <div>
                <p className="annotation text-[var(--muted)]">Opening hours</p>
                <p className="mt-1">{hotel.hours}</p>
              </div>
            </div>
            <ul className="divide-y">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                    className="flex min-h-24 items-center gap-5 py-5"
                  >
                    <item.icon aria-hidden="true" size={20} />
                    <span>
                      <span className="annotation block text-[var(--muted)]">
                        {item.label}
                      </span>
                      <span className="mt-2 block text-sm break-all sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
