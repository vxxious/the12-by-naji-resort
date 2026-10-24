"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/data/hotel";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-[var(--border)] lg:hidden"
          aria-label="Open navigation"
        >
          <Menu aria-hidden="true" size={19} />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/55"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild aria-describedby={undefined}>
              <motion.div
                className="fixed inset-y-0 right-0 z-50 flex w-[min(90vw,25rem)] flex-col bg-[var(--background)] p-6 shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between border-b pb-5">
                  <Dialog.Title className="annotation">Navigation</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center border"
                      aria-label="Close navigation"
                    >
                      <X aria-hidden="true" size={19} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile" className="mt-10">
                  <ul className="divide-y">
                    {navItems.map((item, index) => {
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
                            className="flex min-h-15 items-center justify-between py-4 text-2xl tracking-[-0.04em]"
                          >
                            {item.label}
                            <span className="annotation text-[var(--muted)]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <Link
                  href="/book"
                  onClick={() => setOpen(false)}
                  className="mt-auto flex min-h-14 items-center justify-between bg-[var(--accent)] px-5 text-sm font-semibold tracking-[0.1em] text-[var(--accent-contrast)] uppercase"
                >
                  Plan your stay <span aria-hidden="true">↗</span>
                </Link>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
