import type { IconBaseProps, IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export type SocialIconName =
  "instagram" | "facebook" | "youtube" | "tiktok" | "whatsapp";

type SocialIconProps = Omit<IconBaseProps, "children"> & {
  name: SocialIconName;
};

const socialIcons: Record<SocialIconName, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
};

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const Icon = socialIcons[name];

  return (
    <Icon
      aria-hidden="true"
      data-social-icon={name}
      focusable="false"
      {...props}
    />
  );
}
