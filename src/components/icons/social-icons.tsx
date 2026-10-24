import type { SVGProps } from "react";

export type SocialIconName =
  "instagram" | "facebook" | "youtube" | "tiktok" | "whatsapp";

type SocialIconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: SocialIconName;
};

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const sharedProps = {
    "aria-hidden": true,
    focusable: false,
    viewBox: "0 0 24 24",
    ...props,
  } as const;

  if (name === "instagram") {
    return (
      <svg {...sharedProps} fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...sharedProps} fill="currentColor">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08v-3.5h3.05V9.4c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.88v2.28h3.33l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg {...sharedProps} fill="currentColor">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.75v-7.5L15.82 12l-6.27 3.75Z" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg {...sharedProps} fill="currentColor">
        <path d="M12.53.02h3.91a6.18 6.18 0 0 0 6 5.96V10a10.05 10.05 0 0 1-5.81-1.94v8.75a7.15 7.15 0 1 1-6.22-7.1v4.43a2.82 2.82 0 1 0 2.12 2.73V.02Z" />
      </svg>
    );
  }

  return (
    <svg
      {...sharedProps}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
    >
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.56 7.47L3 20.6l1.31-4.79A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.1 7.6c.2-.45.42-.46.77-.47h.34c.12 0 .3.05.46.4l.65 1.57c.06.16.1.34-.02.53l-.48.69c-.14.17-.28.32-.12.6.16.28.72 1.18 1.56 1.91 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.61-.08l.79-.92c.18-.2.35-.16.59-.07l1.51.71c.28.14.47.2.54.32.07.12.07.72-.17 1.4-.24.68-1.38 1.3-1.9 1.37-.49.06-1.12.09-1.8-.13-.42-.14-.97-.32-1.66-.62a13.8 13.8 0 0 1-5.12-4.52c-.43-.6-1.06-1.61-1.06-2.74 0-1.14.59-1.7.8-1.93.2-.23.44-.29.59-.29" />
    </svg>
  );
}
