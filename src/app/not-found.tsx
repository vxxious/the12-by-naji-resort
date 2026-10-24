import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="annotation text-[var(--accent-strong)]">404 · Not found</p>
      <h1 className="section-title mt-5">
        This page is not part of the resort.
      </h1>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </section>
  );
}
