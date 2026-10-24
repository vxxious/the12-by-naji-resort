"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ResortBrand } from "@/components/branding/resort-brand";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { navItems } from "@/data/hotel";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group flex size-11 items-center justify-center lg:hidden"
          aria-label="Open navigation"
        >
          <Menu
            aria-hidden="true"
            size={24}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:scale-x-110"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-overlay fixed inset-0 z-50 bg-black/35 backdrop-blur-sm" />
        <Dialog.Content
          aria-describedby={undefined}
          className="mobile-menu-panel fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[var(--background)] px-5 pt-3 pb-6 sm:px-8 sm:pt-5"
        >
          <div className="flex h-16 items-center justify-between border-b">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <ResortBrand />
            <Dialog.Close asChild>
              <button
                type="button"
                className="flex h-11 items-center gap-2.5"
                aria-label="Close navigation"
              >
                <span className="annotation">Close</span>
                <X aria-hidden="true" size={21} strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="mt-10 sm:mt-14">
            <ul className="border-t">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="group flex min-h-16 items-center justify-between border-b py-4 text-[clamp(1.65rem,7vw,2.25rem)] leading-none tracking-[-0.04em]"
                    >
                      <span
                        className={
                          active
                            ? "text-[var(--accent-strong)]"
                            : "transition-transform duration-200 group-hover:translate-x-1"
                        }
                      >
                        {item.label}
                      </span>
                      {active && (
                        <span
                          aria-hidden="true"
                          className="size-1.5 bg-[var(--accent)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto pt-8">
            <div className="mb-5 flex items-center justify-between border-t pt-4">
              <div>
                <p className="annotation text-[var(--muted)]">Appearance</p>
                <p className="mt-1 text-sm">Light or dark theme</p>
              </div>
              <ThemeToggle />
            </div>
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between bg-[var(--accent)] px-5 text-sm font-semibold tracking-[0.1em] text-[var(--accent-contrast)] uppercase"
            >
              Plan your stay
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
