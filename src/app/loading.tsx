import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="page-shell grid min-h-[60vh] place-items-center py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center text-center">
        <div className="grid size-20 place-items-center border border-[var(--border)] bg-[var(--surface)]">
          <LoaderCircle
            className="route-spinner size-8 text-[var(--accent-strong)]"
            aria-hidden="true"
            strokeWidth={1.5}
          />
        </div>
        <p className="annotation mt-5 text-[var(--muted)]">
          Preparing your stay
        </p>
      </div>
    </div>
  );
}
