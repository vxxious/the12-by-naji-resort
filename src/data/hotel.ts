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
  estateUrl: "https://www.the12bynajiresortestate.com/",
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
    description:
      "A multipurpose playing court for basketball, volleyball and table tennis.",
    images: ["/images/amenities/amenity-feature-03.jpeg"],
  },
  {
    title: "Swimming pool",
    description:
      "A pool with adjoining seat-out and beach-like seat-out areas.",
    images: [
      "/images/amenities/amenity-feature-02.jpg",
      "/images/amenities/pool-aerial.jpg",
    ],
  },
  {
    title: "Mini zoo",
    description: "Monkeys, birds, fish and a landscaped mini pond.",
    images: [
      "/images/amenities/amenity-feature-01.jpeg",
      "/images/amenities/resort-aerial-01.jpg",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Aisha Bashir",
    role: "Travel blogger",
    quote:
      "A relaxing and refreshing stay with a wonderful atmosphere, enjoyable activities and especially kind front-desk service.",
  },
  {
    name: "Clinton Steve",
    role: "Interior designer",
    quote:
      "A peaceful getaway with clean, comfortable rooms, friendly staff and time well spent relaxing by the pool.",
  },
  {
    name: "Monica Sunday",
    role: "Resort guest",
    quote:
      "A cosy environment with polished interiors, spacious rooms and plenty to experience, from the mini beach and zoo to the sports court.",
  },
] as const;

export const sisterProperty = {
  name: "The9 by Naji Apartments",
  location: "Guzape, Abuja",
  description:
    "Furnished short-let apartments with a private pool, 24-hour power and water, Wi-Fi and on-site security.",
  image: "/images/promotions/the9-by-naji-apartments.png",
  phoneDisplay: "0912 600 7080",
  whatsapp: "https://wa.me/2349126007080",
  email: "the9abuja@gmail.com",
  instagram: "https://www.instagram.com/the9_naji/",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/tours", label: "Tours" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;
