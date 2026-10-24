export const hotel = {
  name: "The 12 by Naji Resort",
  shortName: "The 12 by Naji",
  category: "Apartment Resort",
  headline: "Where resort amenities meet residential elegance.",
  description:
    "An apartment resort in Utako, Abuja, combining the privacy of a home with access to resort amenities.",
  phoneDisplay: "+234 901 828 9732",
  phoneHref: "tel:+2349018289732",
  email: "the12bynajiresort@gmail.com",
  address: {
    street: "Home Trust Estate, Mohammed Shuwa Street",
    locality: "Utako",
    region: "Federal Capital Territory",
    postalCode: "900108",
    country: "Nigeria",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=The12%20by%20Naji%20Resort%20Utako%20Abuja",
  hours: "Open daily, 24 hours",
  checkIn: "14:30",
  checkOut: "12:00",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61572388719938",
    instagram: "https://www.instagram.com/the12bynaji/",
    tiktok: "https://www.tiktok.com/@the12bynaji_",
    youtube: "https://www.youtube.com/@The12ByNajiResort",
    whatsapp: "https://wa.me/2349018289732",
  },
} as const;

export const amenities = [
  "Fully furnished kitchen",
  "Wi-Fi",
  "On-site parking",
  "Access to resort amenities",
  "24-hour service",
] as const;

export const facilities = [
  {
    title: "Multipurpose court",
    description: "Basketball, volleyball and table tennis facilities.",
    image: "/images/amenities/property-aerial.jpg",
  },
  {
    title: "Swimming pool",
    description:
      "A pool with adjoining seat-out and beach-like seat-out areas.",
    image: "/images/amenities/amenity-feature-02.jpg",
  },
  {
    title: "Mini zoo",
    description: "Monkeys, birds, fish and a landscaped mini pond.",
    image: "/images/amenities/amenity-feature-01.jpeg",
  },
] as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/tours", label: "Tours" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;
