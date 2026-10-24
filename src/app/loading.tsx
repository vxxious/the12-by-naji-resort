export default function Loading() {
  return (
    <div
      className="page-shell min-h-[60vh] py-16"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="annotation text-[var(--muted)]">Loading</p>
      <div className="mt-6 h-20 max-w-3xl animate-pulse bg-[var(--surface-muted)]" />
      <div className="mt-12 aspect-[16/7] animate-pulse bg-[var(--surface-muted)]" />
    </div>
  );
}
