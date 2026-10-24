export function RouteSpinner({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative grid size-16 place-items-center"
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-full border border-[var(--border)]" />
        <span className="route-spinner absolute inset-0 rounded-full border border-transparent border-t-[var(--accent)] border-r-[var(--accent)]" />
        <span className="annotation text-[var(--accent-strong)]">12</span>
      </div>
      <p className="annotation mt-5 text-[var(--muted)]">{label}</p>
    </div>
  );
}
