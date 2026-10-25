# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Lucide React, and Motion for React. Forms use React Hook Form and Zod. The independent replacement is prepared for GitHub and a Vercel preview before any approved domain migration.

## Users

Prospective guests evaluating a leisure, family, group, or business stay in Abuja; returning guests planning a specific apartment stay; and people exploring resort activities or event options.

## Product Purpose

Present The 12 by Naji Resort accurately and convincingly, help visitors understand the apartment options and resort amenities, and provide a trustworthy path to a reservation once the booking integration is confirmed operational.

## Positioning

The current site positions the property as an "Apartment Resort": private, fully serviced apartments paired with resort amenities. The published claim that the property has exactly twelve apartments conflicts with the seventeen named apartments on the two public block pages and must be confirmed before reuse.

## Operating Context

Visitors compare apartment types, photography, nightly prices, included amenities, resort facilities, policies, location, tours, and event information. The current WordPress frontend connects to a custom MyRoomStatus REST proxy and Paystack for reservation and payment, but the public API is failing at the time of audit.

## Capabilities and Constraints

- Preserve the existing WordPress site and Hostinger DNS until a separate replacement has been reviewed and approved.
- Required public routes: `/`, `/rooms`, `/rooms/[slug]`, `/gallery`, `/tours`, `/events`, `/book`, and `/contact`.
- Preserve verified business content and original photography; do not invent rates, availability, occupancy, reviews, awards, or services.
- Light mode is the default; support system-aware, persistent light and dark themes without hydration flash.
- Treat booking as an integration boundary until the upstream inventory, reservation, email, and Paystack flow are verified in a non-production environment.
- Do not submit guest data, create reservations, or process payments during the rebuild without explicit approval and verified endpoints.
- Meet WCAG 2.2 AA principles and prioritize mobile usability, Core Web Vitals, semantic HTML, metadata, structured data, and redirect preservation.

## Brand Commitments

- Name: The 12 by Naji Resort.
- Existing logo: a gold number 12 integrated with a saxophone on black, with white supporting lettering.
- Existing identity uses black, warm gold, ivory, and warm charcoal. The gold/saxophone mark is the source for the replacement accent system; it should not be replaced by an unrelated identity.
- Desired voice and experience: premium, calm, exclusive, hospitable, elegant, minimal, and professional.
- Photography and typography lead. Avoid generic hotel templates, SaaS patterns, excessive cards, glassmorphism, heavy gradients, decorative clutter, and gratuitous animation.

## Evidence on Hand

- Public WordPress pages, sitemap, page source, stylesheets, and REST page/media records audited on 24 October 2026.
- 117 original public assets extracted under `public/images/`: two branding files, nine hero images, sixty-eight room images, thirty gallery images, seven amenity images, and one events poster.
- Static room catalogue on the Elysian and Oasis pages includes names, apartment sizes, rates, repeated amenities, and room-specific image groups.
- Four resort-tour YouTube URLs are present on the public Tours page.
- Current contact, location, operating hours, social links, policy text, and public testimonials are captured in the research audit; business-owned confirmation is still required before launch.
- No verified awards, aggregate rating, occupancy limits, event dates, active ticket destinations, or currently functioning availability response were found.

## Product Principles

1. Establish trust with real property evidence before asking for a booking.
2. Make apartment comparison clear without flattening the resort into a booking template.
3. Keep every factual claim traceable to current business content or explicit owner confirmation.
4. Let photography, rhythm, and precise interaction carry the premium impression.
5. Keep the replacement reversible until preview approval, integration verification, and an explicit migration decision.

## Accessibility & Inclusion

Target WCAG 2.2 AA with full keyboard access, visible focus, semantic landmarks, accessible galleries and dialogs, labelled form fields, clear validation, sufficient contrast, reduced-motion support, and comfortable touch targets across mobile, tablet, and desktop.
