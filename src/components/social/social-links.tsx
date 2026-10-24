import {
  SocialIcon,
  type SocialIconName,
} from "@/components/icons/social-icons";
import { ArrowUpRight } from "lucide-react";
import { hotel } from "@/data/hotel";
import { cn } from "@/lib/utils";

const socialLinks: Array<{
  name: SocialIconName;
  label: string;
  href: string;
  hoverClassName: string;
  iconClassName?: string;
}> = [
  {
    name: "instagram",
    label: "Instagram",
    href: hotel.social.instagram,
    hoverClassName: "hover:border-[#e4405f] hover:text-[#e4405f]",
  },
  {
    name: "tiktok",
    label: "TikTok",
    href: hotel.social.tiktok,
    hoverClassName:
      "hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
  },
  {
    name: "facebook",
    label: "Facebook",
    href: hotel.social.facebook,
    hoverClassName: "hover:border-[#1877f2] hover:text-[#1877f2]",
  },
  {
    name: "youtube",
    label: "YouTube",
    href: hotel.social.youtube,
    hoverClassName: "hover:border-[#ff0033] hover:text-[#ff0033]",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: hotel.social.whatsapp,
    hoverClassName: "hover:border-[#168b4f] hover:text-[#168b4f]",
    iconClassName: "text-[#25d366]",
  },
];

export function SocialLinks({
  className,
  variant = "icons",
}: {
  className?: string;
  variant?: "icons" | "list";
}) {
  if (variant === "list") {
    return (
      <nav
        aria-label="Social media"
        className={cn("grid gap-x-6 sm:grid-cols-2", className)}
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            className={cn(
              "group flex min-h-14 items-center justify-between gap-4 border-t py-3 text-sm transition-colors duration-150",
              social.hoverClassName,
            )}
            href={social.href}
            aria-label={`Visit The 12 by Naji Resort on ${social.label}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex items-center gap-3">
              <SocialIcon
                name={social.name}
                className={cn("size-5 shrink-0", social.iconClassName)}
              />
              {social.label}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="shrink-0"
              size={16}
              strokeWidth={1.5}
            />
          </a>
        ))}
      </nav>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          className={cn(
            "flex size-11 items-center justify-center border text-[var(--foreground)] transition-[color,background-color,border-color] duration-150",
            social.hoverClassName,
          )}
          href={social.href}
          aria-label={`Visit The 12 by Naji Resort on ${social.label}`}
          title={social.label}
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon
            name={social.name}
            className={cn("size-5", social.iconClassName)}
          />
        </a>
      ))}
    </div>
  );
}
