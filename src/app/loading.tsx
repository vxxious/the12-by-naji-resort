import { RouteSpinner } from "@/components/ui/route-spinner";

export default function Loading() {
  return (
    <div
      className="page-shell grid min-h-[60vh] place-items-center py-16"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <RouteSpinner label="Preparing your stay" />
    </div>
  );
}
