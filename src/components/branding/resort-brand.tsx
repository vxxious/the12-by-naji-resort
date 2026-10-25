import Image from "next/image";

import { cn } from "@/lib/utils";

export function ResortBrand({ className }: { className?: string }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <Image
        src="/images/branding/the12-by-naji-mark-transparent.png"
        alt=""
        width={446}
        height={512}
        priority
        sizes="(min-width: 1024px) 52px, 44px"
        className="h-[48px] w-auto shrink-0 object-contain lg:h-[56px]"
      />
      <span className="min-w-0 leading-none">
        <span className="block text-base font-semibold tracking-[-0.03em] lg:text-lg">
          The 12
        </span>
        <span className="mt-1.5 block text-[0.6875rem] font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">
          By Naji Resort
        </span>
      </span>
    </span>
  );
}
