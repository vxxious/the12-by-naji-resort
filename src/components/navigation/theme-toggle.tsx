"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { PiCircleHalfTiltFill } from "react-icons/pi";

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return <span aria-hidden="true" className="block h-11 w-14" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="group relative flex h-11 w-14 shrink-0 items-center justify-end text-[var(--foreground)] transition-colors duration-200 before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-[var(--border)] hover:text-[var(--accent-strong)]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <PiCircleHalfTiltFill
        aria-hidden="true"
        size={24}
        className={`transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-active:scale-90 ${isDark ? "rotate-180" : ""}`}
      />
    </button>
  );
}
