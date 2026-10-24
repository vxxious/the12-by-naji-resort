"use client";

import { useEffect, useRef } from "react";

export function ArchitecturalSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !scope.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let revert: (() => void) | undefined;

    async function setup() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        const plates = gsap.utils.toArray<HTMLElement>(
          "[data-architectural-plate]",
        );
        ScrollTrigger.create({
          trigger: scope.current,
          start: "top 76%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              plates,
              { clipPath: "inset(0 0 12% 0)", y: 26 },
              {
                clipPath: "inset(0 0 0% 0)",
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power3.out",
              },
            );
          },
        });
      }, scope);
      revert = () => context.revert();
    }

    void setup();
    return () => revert?.();
  }, []);

  return <div ref={scope}>{children}</div>;
}
