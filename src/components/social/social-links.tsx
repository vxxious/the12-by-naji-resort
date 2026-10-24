import {
  SocialIcon,
  type SocialIconName,
} from "@/components/icons/social-icons";
import { hotel } from "@/data/hotel";
import { cn } from "@/lib/utils";

const socialLinks: Array<{
  name: SocialIconName;
  label: string;
  href: string;
  hoverClassName: string;
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
  },
];

export function SocialLinks({ className }: { className?: string }) {
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
          <SocialIcon name={social.name} className="size-5" />
        </a>
      ))}
    </div>
  );
}
