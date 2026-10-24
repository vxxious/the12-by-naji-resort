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
      <div className="page-shell grid h-[4.75rem] grid-cols-[auto_1fr] items-center lg:h-24 lg:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          className="relative z-10 w-fit"
          aria-label="The 12 by Naji Resort home"
        >
          <ResortBrand />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden justify-self-center lg:block"
        >
          <ul className="flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 justify-self-end lg:gap-3">
          <Link
            href="/book"
            className="annotation hidden text-[var(--accent-strong)] min-[390px]:inline-flex lg:hidden"
          >
            Book now
          </Link>
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
