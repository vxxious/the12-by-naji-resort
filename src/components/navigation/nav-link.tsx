"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative py-2 text-[0.68rem] font-semibold tracking-[0.11em] uppercase transition-colors hover:text-[var(--accent-strong)]",
        active &&
          "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-[var(--accent)]",
      )}
    >
      {label}
    </Link>
  );
}
