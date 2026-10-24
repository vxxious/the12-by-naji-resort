import Image from "next/image";

import { cn } from "@/lib/utils";

export function ResortBrand({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/branding/the12-by-naji-mark-transparent.png"
        alt=""
        width={446}
        height={512}
        priority
        sizes="(min-width: 1024px) 52px, 44px"
        className="h-12 w-auto shrink-0 object-contain lg:h-14"
      />
      <span className="leading-none">
        <span className="block text-[1.05rem] font-semibold tracking-[-0.03em] lg:text-lg">
          The 12
        </span>
        <span className="mt-1.5 block text-[0.55rem] font-semibold tracking-[0.2em] text-[var(--muted)] uppercase lg:text-[0.59rem]">
          By Naji Resort
        </span>
      </span>
    </span>
  );
}
