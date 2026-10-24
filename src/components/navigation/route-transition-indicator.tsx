"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { RouteSpinner } from "@/components/ui/route-spinner";
import { ROUTE_TRANSITION_START } from "@/lib/navigation/route-transition";

const MINIMUM_VISIBLE_MS = 280;
const FAIL_SAFE_MS = 5000;

export function RouteTransitionIndicator() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const startedAt = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const failSafeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const clearTimers = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (failSafeTimer.current) clearTimeout(failSafeTimer.current);
  }, []);

  const start = useCallback(() => {
    clearTimers();
    startedAt.current = performance.now();
    setActive(true);
    failSafeTimer.current = setTimeout(() => {
      startedAt.current = 0;
      setActive(false);
    }, FAIL_SAFE_MS);
  }, [clearTimers]);

  const finish = useCallback(() => {
    if (!startedAt.current) return;

    if (failSafeTimer.current) clearTimeout(failSafeTimer.current);
    const elapsed = performance.now() - startedAt.current;
    const remaining = Math.max(0, MINIMUM_VISIBLE_MS - elapsed);

    hideTimer.current = setTimeout(() => {
      startedAt.current = 0;
      setActive(false);
    }, remaining);
  }, []);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const destination = new URL(anchor.href, window.location.href);
      if (!["http:", "https:"].includes(destination.protocol)) return;
      if (destination.origin !== window.location.origin) return;

      const currentRoute = `${window.location.pathname}${window.location.search}`;
      const nextRoute = `${destination.pathname}${destination.search}`;
      if (currentRoute === nextRoute) return;

      start();
    }

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener(ROUTE_TRANSITION_START, start);
    window.addEventListener("popstate", start);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener(ROUTE_TRANSITION_START, start);
      window.removeEventListener("popstate", start);
      clearTimers();
    };
  }, [clearTimers, start]);

  useEffect(() => {
    finish();
  }, [finish, pathname]);

  return (
    <div
      className="route-transition-indicator"
      data-active={active}
      data-testid="route-transition-indicator"
      role="status"
      aria-busy={active}
      aria-hidden={!active}
      aria-label="Preparing your stay"
    >
      <RouteSpinner label="Preparing your stay" />
    </div>
  );
}
