"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { galleryImages } from "@/data/gallery";

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const open = selectedIndex !== null;

  const selectPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? 0
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  };
  const selectNext = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length,
    );
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") selectPrevious();
      if (event.key === "ArrowRight") selectNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const selected = selectedIndex === null ? null : galleryImages[selectedIndex];

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) setSelectedIndex(null);
      }}
    >
      <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
        {galleryImages.map((image, index) => {
          const large = index % 7 === 0 || index % 7 === 4;
          return (
            <Dialog.Trigger asChild key={image.src}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`image-plate group relative ${
                  large
                    ? "col-span-2 aspect-[4/3] md:col-span-8 md:aspect-[16/10]"
                    : "col-span-1 aspect-[3/4] md:col-span-4"
                }`}
                aria-label={`Open image ${index + 1} of ${galleryImages.length}: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={70}
                  sizes={
                    large
                      ? "(min-width: 768px) 66vw, 100vw"
                      : "(min-width: 768px) 33vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <span className="annotation absolute right-3 bottom-3 bg-[var(--background)] px-3 py-2 text-[var(--foreground)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            </Dialog.Trigger>
          );
        })}
      </div>

      <AnimatePresence>
        {open && selected && selectedIndex !== null && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild aria-describedby="gallery-description">
              <motion.div
                className="fixed inset-0 z-50 grid grid-rows-[auto_1fr_auto] p-4 text-white md:p-8"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="annotation">
                    {selected.category} ·{" "}
                    {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                    {galleryImages.length}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex size-12 items-center justify-center border border-white/40"
                      aria-label="Close gallery"
                    >
                      <X aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="relative my-5 min-h-0">
                  <Image
                    key={selected.src}
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between gap-5 border-t border-white/30 pt-4">
                  <p
                    id="gallery-description"
                    className="max-w-xl text-sm text-white/75"
                  >
                    {selected.alt}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={selectPrevious}
                      className="flex size-12 items-center justify-center border border-white/40"
                      aria-label="Previous image"
                    >
                      <ChevronLeft aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={selectNext}
                      className="flex size-12 items-center justify-center border border-white/40"
                      aria-label="Next image"
                    >
                      <ChevronRight aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
