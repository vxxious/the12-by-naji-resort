import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function RoomNotFound() {
  return (
    <section className="page-shell flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="annotation text-[var(--accent-strong)]">Room not found</p>
      <h1 className="section-title mt-5">
        This apartment is not in the current catalogue.
      </h1>
      <Button asChild className="mt-8">
        <Link href="/rooms">View all apartments</Link>
      </Button>
    </section>
  );
}
