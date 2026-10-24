"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page-shell flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="annotation text-[var(--accent-strong)]">
        Something went wrong
      </p>
      <h1 className="section-title mt-5">This page could not be displayed.</h1>
      <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
        Try the page again. If the problem continues, contact the resort
        directly.
      </p>
      <Button type="button" onClick={reset} className="mt-8">
        Try again
      </Button>
    </section>
  );
}
