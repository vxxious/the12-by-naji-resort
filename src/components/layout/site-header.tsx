import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ResortBrand } from "@/components/branding/resort-brand";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { NavLink } from "@/components/navigation/nav-link";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { hotel, navItems } from "@/data/hotel";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[var(--header)] backdrop-blur-xl">
      <div className="page-shell flex min-h-[4.75rem] flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 xl:min-h-24">
        <Link
          href="/"
          className="relative z-10 min-w-0 shrink-0"
          aria-label="The 12 by Naji Resort home"
        >
          <ResortBrand />
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 xl:block">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 2xl:gap-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center xl:gap-3">
          <div className="hidden xl:block">
            <ThemeToggle />
          </div>
          <Button asChild variant="outline" className="hidden xl:inline-flex">
            <a
              href={hotel.estateUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit The 12 by Naji Resort Estate (opens in a new tab)"
            >
              The 12 Estate
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.5} />
            </a>
          </Button>
          <Button asChild className="hidden xl:inline-flex">
            <Link href="/book">Book now</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
