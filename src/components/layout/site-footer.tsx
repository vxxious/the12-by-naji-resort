import Link from "next/link";

import { SocialLinks } from "@/components/social/social-links";
import { hotel, navItems } from "@/data/hotel";

export function SiteFooter() {
  return (
    <footer className="border-t bg-[var(--surface)]">
      <div className="page-shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="annotation text-[var(--accent-strong)]">
            The 12 by Naji
          </p>
          <p className="mt-5 max-w-md text-3xl leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Residential privacy. Resort privileges.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-[0.75fr_1.1fr_1.25fr] lg:gap-8">
          <div>
            <p className="annotation text-[var(--muted)]">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="hover:text-[var(--accent-strong)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="annotation text-[var(--muted)]">Visit</p>
            <address className="mt-5 text-sm leading-7 text-[var(--muted)] not-italic">
              {hotel.address.street}
              <br />
              {hotel.address.locality}, Abuja {hotel.address.postalCode}
              <br />
              {hotel.address.country}
            </address>
          </div>
          <div>
            <p className="annotation text-[var(--muted)]">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={hotel.phoneHref}>{hotel.phoneDisplay}</a>
              </li>
              <li className="break-all">
                <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              </li>
            </ul>
            <SocialLinks className="mt-6" />
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="page-shell flex flex-col gap-3 py-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The 12 by Naji Resort.</p>
          <p>Utako, Abuja · Open daily, 24 hours</p>
        </div>
      </div>
    </footer>
  );
}
