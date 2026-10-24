import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RouteTransitionIndicator } from "@/components/navigation/route-transition-indicator";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { hotel } from "@/data/hotel";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azaret",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://the12bynajiresort.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The 12 by Naji Resort | Apartment Resort in Abuja",
    template: "%s | The 12 by Naji Resort",
  },
  description: hotel.description,
  applicationName: hotel.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: hotel.name,
    title: "The 12 by Naji Resort",
    description: hotel.description,
    images: [
      {
        url: "/images/hero/homepage-hero-original.jpg",
        width: 1200,
        height: 630,
        alt: "The 12 by Naji Resort in Utako, Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: hotel.name,
    description: hotel.description,
    images: ["/images/hero/homepage-hero-original.jpg"],
  },
  icons: {
    icon: "/images/branding/the12-by-naji-favicon.jpg",
    apple: "/images/branding/the12-by-naji-favicon.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F1ED" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    url: siteUrl,
    image: `${siteUrl}/images/hero/homepage-hero-original.jpg`,
    description: hotel.description,
    telephone: hotel.phoneDisplay,
    email: hotel.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address.street,
      addressLocality: hotel.address.locality,
      addressRegion: hotel.address.region,
      postalCode: hotel.address.postalCode,
      addressCountry: "NG",
    },
    checkinTime: hotel.checkIn,
    checkoutTime: hotel.checkOut,
    sameAs: Object.values(hotel.social),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${azeretMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="fixed top-2 left-2 z-[100] -translate-y-20 bg-[var(--foreground)] px-4 py-3 text-sm text-[var(--background)] focus:translate-y-0"
          >
            Skip to content
          </a>
          <RouteTransitionIndicator />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
