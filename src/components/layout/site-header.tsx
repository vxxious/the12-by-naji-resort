import Link from "next/link";

import { ResortBrand } from "@/components/branding/resort-brand";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { NavLink } from "@/components/navigation/nav-link";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/hotel";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[var(--header)] backdrop-blur-xl">
      <div className="page-shell flex min-h-[4.75rem] flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 lg:min-h-24">
        <Link
          href="/"
          className="relative z-10 min-w-0 shrink-0"
          aria-label="The 12 by Naji Resort home"
        >
          <ResortBrand />
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 lg:block">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 xl:gap-x-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center lg:gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/book">Book now</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
