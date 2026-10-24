import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/navigation/mobile-menu";
import { NavLink } from "@/components/navigation/nav-link";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/hotel";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[var(--header)] backdrop-blur-md">
      <div className="page-shell flex h-20 items-center gap-4">
        <Link
          href="/"
          className="mr-auto flex items-center gap-3.5"
          aria-label="The 12 by Naji Resort home"
        >
          <Image
            src="/images/branding/the12-by-naji-logo.jpg"
            alt=""
            width={52}
            height={52}
            priority
            className="size-13 object-cover"
          />
          <span className="hidden leading-tight font-semibold tracking-[-0.02em] sm:block">
            The 12
            <span className="annotation mt-1 block text-[var(--muted)]">
              By Naji Resort
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-1 flex items-center gap-2 lg:ml-5">
          <ThemeToggle />
          <Button asChild className="hidden xl:inline-flex">
            <Link href="/book">Book now</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
