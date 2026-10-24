export interface GalleryImage {
  src: string;
  alt: string;
  category: "Interiors" | "Resort";
}

export const galleryImages: GalleryImage[] = [
  ...Array.from({ length: 18 }, (_, index) => ({
    src: `/images/gallery/interior-${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `Apartment interior at The 12 by Naji Resort, view ${index + 1}`,
    category: "Interiors" as const,
  })),
  ...Array.from({ length: 12 }, (_, index) => ({
    src: `/images/gallery/exterior-${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `Resort exterior and amenities, view ${index + 1}`,
    category: "Resort" as const,
  })),
];
