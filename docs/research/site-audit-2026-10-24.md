# The 12 by Naji Resort — Existing Website Audit

Audit date: 24 October 2026

Source: public pages, public WordPress REST responses, page source, Elementor stylesheets, sitemap, theme scripts, and public media files from `https://the12bynajiresort.com`. No WordPress administration, DNS, reservation, payment, or guest-data action was used.

## Executive findings

- The public site is a WordPress/Elementor build using the Solace Hoteluxe theme.
- Its useful content is spread across non-semantic legacy slugs: `/locations/` is Gallery, `/reviews/` is Tours, `/contact/` is Events, and `/elementor-page-720/` is the Elysian block.
- The site describes an “Apartment Resort” combining serviced apartments with resort amenities.
- The homepage says there are twelve apartments, while the two public block pages name seventeen apartments. The business must confirm the correct inventory before launch.
- The booking UI is intended to use a custom MyRoomStatus connector, date-filtered inventory, reservation creation, Paystack payment, and payment verification. It is not merely an email inquiry. During this audit, the public health, categories, and rooms GET endpoints all returned `{"success":false,"message":"Invalid JSON response from API.","data":null}`. No reservation or payment POST was attempted.
- The sitemap exposes unfinished, duplicate, and template pages alongside the real site, including a default “Hello world!” post and an author archive whose slug resembles an email address.
- Public pages have canonical tags and unique basic titles, but no meta descriptions, Open Graph tags, Twitter cards, or JSON-LD hotel/business schema were found.

## Primary navigation

Desktop and mobile use the same links:

1. Home → `/`
2. Rooms → `/rooms/`
3. Gallery → `/locations/`
4. Tours → `/reviews/`
5. Events → `/contact/`
6. Book Now → `/book-now/`

The desktop header also links to `http://the12bynajiresortestate.com` as “The12 by Naji Resort Estate”. Its relationship to this project requires confirmation.

### Mobile behaviour

- A separate mobile/tablet header replaces the desktop row.
- The header shows the text site title and a hamburger control.
- The hamburger opens a 360px slide-in panel from the left with the six navigation links.
- The theme script moves focus into the drawer, traps Tab focus, closes on Escape, returns focus to the trigger, and marks the rest of the page `aria-hidden` while open.
- Both open and close controls use the generic accessible label “Navigation Menu”; the state label is not explicit.
- Book Now is inside the drawer rather than remaining visible in the compact header.
- Visual behaviour could not be browser-captured in this environment because no controllable browser surface was available; the behaviour above is verified from the rendered markup and public theme script.

## Public page inventory

All listed WordPress pages returned HTTP 200 during the audit.

| Current URL                           | Published title      | Content / purpose                                                                                                                                                                      | Migration treatment                                                    |
| ------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `/`                                   | Homepage 1           | Hero, Apartment Resort introduction, basketball/volleyball/table tennis court, mini zoo, pool, dynamic apartment categories, events preview, two testimonials, address, hours, contact | Keep `/`                                                               |
| `/locations/`                         | Gallery              | 18 interior/apartment images and 12 amenities/exterior images                                                                                                                          | 301 to `/gallery`                                                      |
| `/book-now/`                          | Book Now             | Bespoke booking form and MyRoomStatus/Paystack flow                                                                                                                                    | 301 to `/book`                                                         |
| `/contact/`                           | Events               | Art Fair, Yoga Day, Karaoke Nights, Jazz Night; no dates; every ticket link is `#`; one “Coming Soon” poster repeated                                                                  | 301 to `/events`                                                       |
| `/reviews/`                           | Tours                | Four embedded YouTube tours                                                                                                                                                            | 301 to `/tours`                                                        |
| `/rooms/`                             | Rooms                | Elysian/Oasis entry points, dynamic category block, contact form, newsletter placeholder, testimonial                                                                                  | Keep `/rooms`                                                          |
| `/homepage-2/`                        | Homepage 2           | Unfinished theme demo with lorem ipsum, “Hoteluxe” copy, unverified dollar prices, and fake aggregate review content                                                                   | Remove from sitemap; 301 to `/`                                        |
| `/elementor-page-720/`                | Elysian-block        | Nine named apartments with static prices, shared amenities, image groups                                                                                                               | 301 to a supported rooms collection or preserve via a deliberate route |
| `/oasis-block/`                       | Oasis-block          | Eight named apartments with static prices, shared amenities, image groups                                                                                                              | 301 to a supported rooms collection or preserve via a deliberate route |
| `/resort-policy/`                     | Resort Policy        | Property rules, fines, check-in/out, cancellation, pool closing, refundable caution fee statement                                                                                      | Preserve route or 301 to a policy section/page if retained             |
| `/room-categories/`                   | Room Categories      | Client-rendered MyRoomStatus category view                                                                                                                                             | Replace with server-rendered `/rooms`; 301 appropriately               |
| `/booking-confirmation/`              | Booking Confirmation | Client-rendered confirmation using query-string data                                                                                                                                   | Noindex; retain only if verified booking integration needs it          |
| `/category-rooms/`                    | Category Rooms       | Client-rendered, date-filtered category rooms                                                                                                                                          | Replace with semantic room routes; query-aware redirect plan required  |
| `/category-rooms/room-details/`       | Room Details         | Earlier client-rendered room-detail implementation                                                                                                                                     | Consolidate and redirect                                               |
| `/elementor-1082/`                    | Elementor #1082      | Duplicate payment result page                                                                                                                                                          | Remove from sitemap; redirect or 410 after integration review          |
| `/room-details/`                      | Room Details         | Connector widget page                                                                                                                                                                  | Consolidate into `/rooms/[slug]`                                       |
| `/repair/`                            | Repair Notice        | Connector widget for unavailable/under-repair rooms                                                                                                                                    | Noindex; preserve only if workflow requires it                         |
| `/book-room/`                         | Book Room            | Connector widget for a room-specific reservation and Paystack flow                                                                                                                     | Consolidate into `/book?room=<slug>`                                   |
| `/hello-world/`                       | Hello world!         | Default WordPress post                                                                                                                                                                 | Remove and return 410 or 301 to `/`                                    |
| `/category/uncategorized/`            | Category archive     | Default post archive                                                                                                                                                                   | Remove from sitemap; 410 or redirect                                   |
| `/author/kelvinoshomegie24gmail-com/` | Author archive       | Public author archive with an email-like slug                                                                                                                                          | Remove from sitemap; disable/redirect                                  |

## Verified hotel content

### Positioning and description

The current site calls the property an “Apartment Resort” and describes the intended experience as the privacy of a home combined with resort privileges. The homepage headline is “Where Resort Amenities Meet Residential Elegance” with “Redefining Resort Living”.

### Facilities and amenities

Verified public facility copy identifies:

- Multi-purpose playing court for basketball, volleyball, and table tennis
- Mini zoo with monkeys, birds, fish, and a mini pond
- Swimming pool with a seat-out section and a mini beach-like seat-out area
- Free use of resort amenities for listed apartments
- Free on-site parking for listed apartments
- Free Wi-Fi for listed apartments
- Fully furnished kitchen for listed apartments
- “24-hour service” for listed apartments

No restaurant, bar, spa, gym, conference-room capacity, accessibility facility, or dedicated dining service was verified.

## Static apartment catalogue

These rates are publicly displayed but must be owner-confirmed before the replacement launches.

| Block   | Apartment   | Type      | Published rate per night |
| ------- | ----------- | --------- | -----------------------: |
| Elysian | Bora-Bora   | 3-bedroom |                 ₦200,000 |
| Elysian | Seychelles  | 3-bedroom |                 ₦200,000 |
| Elysian | Cappadocia  | 3-bedroom |                 ₦200,000 |
| Elysian | Santorini   | 2-bedroom |                 ₦150,000 |
| Elysian | Ibiza       | 2-bedroom |                 ₦150,000 |
| Elysian | Kyoto       | 2-bedroom |                 ₦150,000 |
| Elysian | Monaco      | Studio    |                  ₦90,000 |
| Elysian | Bali        | Studio    |                  ₦90,000 |
| Elysian | Tokyo       | Studio    |                  ₦90,000 |
| Oasis   | Grandview   | 3-bedroom |                 ₦150,000 |
| Oasis   | Essence     | 3-bedroom |                 ₦150,000 |
| Oasis   | Palms       | 2-bedroom |                 ₦120,000 |
| Oasis   | Eden        | 2-bedroom |                 ₦120,000 |
| Oasis   | Lotus       | 2-bedroom |                 ₦120,000 |
| Oasis   | Aurora      | Studio    |                  ₦70,000 |
| Oasis   | Hive        | Studio    |                  ₦70,000 |
| Oasis   | Renaissance | Studio    |                  ₦70,000 |

Every static room entry repeats the same amenities: fully furnished kitchen, free Wi-Fi, free on-site parking, free use of resort amenities, and 24-hour service. Occupancy, bed configuration, floor area, bathrooms, accessibility, smoking status, and room-specific differentiators are not published.

Image gaps:

- Bali uses four copies of a generic “Coming Soon” poster.
- Aurora uses four copies of the same placeholder.
- Renaissance uses four copies of the same placeholder.
- Tokyo has four slots but two slots reference the same original photograph.

## Tours and events

### Tours

Four public YouTube destinations are present:

- Interior & Exterior Tour 1 — `https://youtu.be/qANRSuRDf2o`
- Interior & Exterior Tour 2 — `https://youtu.be/zjNgysDqXHY`
- Santorini Apartment Tour — `https://youtube.com/shorts/JhedSnzOh_g?feature=share`
- Ibiza Apartment Tour — `https://youtube.com/shorts/wOHgfcKLJk4?feature=share`

There are no dedicated tour thumbnails hosted by the resort site.

### Events

The Events page lists Art Fair, Yoga Day, Karaoke Nights, and Jazz Night. It provides no dates, times, prices, schedules, or active ticket destinations. All four ticket actions point to `#`, and all use the same “Coming Soon” image. These should not be represented as scheduled upcoming events without confirmation.

## Booking workflow

### Fields found

The active `/book-now/` page presents:

- Name
- Email
- Phone
- Length of Stay (days)
- Room
- Check in
- Check out

The connector's newer Book Now widget additionally separates Room Category and Available Room. Room-specific booking uses Full Name, Email, Phone, Check-in, and Check-out.

### Intended flow

1. GET room categories from `/wp-json/myroomstatus/v1/categories`.
2. GET rooms filtered by category and `checked_in`/`checked_out`.
3. POST guest details and dates to `/wp-json/myroomstatus/v1/reserve/{room_id}`.
4. Receive a reservation reference, amount due, and Paystack public key.
5. Open the Paystack inline payment window when a key and amount are returned.
6. POST the reservation and Paystack references to `/wp-json/myroomstatus/v1/verify-payment`.
7. Redirect to `/booking-confirmation/` with status, reference, and amount query parameters.

The connector validates a first-and-last name, valid dates, no past check-in, and checkout after check-in. If payment is closed, the UI says the reservation remains pending.

### Classification and current status

Classification: **D — third-party booking integration**, with an intended real-time reservation and payment workflow resembling C. It is not a simple inquiry or mailto flow. The WordPress connector appears to proxy an upstream MyRoomStatus service and uses Paystack for payment.

Current status: **unverified and presently failing**. The public health, categories, and rooms endpoints returned “Invalid JSON response from API” during the audit. The replacement must not claim live availability, confirmed reservation, or payment success until a staging integration is documented and tested end to end.

## Contact and business details

- Display name: The 12 by Naji Resort / The12 by Naji Resort
- Address: Home Trust Estate, Mohammed Shuwa Street, Utako, Abuja 900108, Federal Capital Territory, Nigeria
- Hours: Monday–Sunday, 24 hours
- Phone shown in normalized form: `+234 901 828 9732`
- An inconsistent variant also appears: `+234 09018289732`; the correct international format should be confirmed.
- Email: `the12bynajiresort@gmail.com`
- Google Maps link label: “The12 by naji”

Social links:

- Facebook: `https://www.facebook.com/profile.php?id=61572388719938`
- Instagram: `https://www.instagram.com/the12bynaji/?hl=en#`
- TikTok: `https://www.tiktok.com/@the12bynaji_?is_from_webapp=1&sender_device=pc`
- YouTube: `https://www.youtube.com/@The12ByNajiResort`
- WhatsApp help: `https://wa.me/+2349018289732`

## Resort policy content

The public policy page states:

- Check-in at 2:30pm; checkout by 12 noon
- 24-hour notice for renewal
- Pool closes at 10:30pm
- Caution fee is paid before/on arrival and described as refundable within 48 hours; no amount is published
- Cancellation seven or more days before arrival receives a full refund; cancellation under seven days receives 50%; the final line appears to intend no refund for cancellation on the booking start date, but its wording is unclear
- Published fines include ₦25,000 for smoking in the apartment, ₦15,000 for littering, ₦10,000 for wall splashing, vomiting, or a lost key, ₦7,000 for DSTV disconnection, and ₦5,000 for lost/damaged intercom chargers

The wording and enforceability should receive business/legal review before reuse.

## Branding and design audit

### Logo

The verified logo is a black-backed square JPG with a textured gold “12” integrated with a saxophone, white “The”, and white “BY NAJI RESORT”. A 512px square crop is used as the site icon. No SVG, transparent PNG, horizontal lockup, or monochrome master was publicly available.

### Existing palette

- Primary near-black: `#191817`
- Heading near-black: `#161513`
- Body charcoal: `#3F3E3C`
- Warm accent: `#EEA353`
- Accent hover: `#CD8B44`
- Warm background: `#FBF6F1`
- Warm border: `#D5D3D1`
- Deep page-title background: `#110F0D`
- Light surface: `#F3F0EC`

### Existing typography

The global theme pairs Playfair Display headings with DM Sans body/UI text. Individual Elementor sections also introduce Roboto, Lato, and Inter, producing inconsistent typography.

### Current visual issues

- Photography is plentiful and property-specific, but presentation is template-driven and inconsistent.
- Several images have blank alt text; only six gallery images have useful labels.
- Dynamic room content is client-rendered and currently collapses to loading/error states.
- Multiple theme-demo links point to `solacewp.com/hoteluxe/`.
- Footer “Change Schedule”, “Online Checkin”, newsletter, and event ticket actions are placeholders.
- The footer copyright says 2025.
- The homepage title misspells “Redefining” as “Redifining”.
- A homepage promotional asset is named `The9_by_Naji_Apartments...`; its relationship to this resort is unclear and it should not be reused without confirmation.

## Extracted assets

117 original public assets (approximately 49 MB) are preserved without quality reduction:

| Folder                         | Count | Notes                                           |
| ------------------------------ | ----: | ----------------------------------------------- |
| `public/images/branding/`      |     2 | Full square logo and favicon crop               |
| `public/images/hero/`          |     9 | Homepage and route hero sources                 |
| `public/images/rooms/elysian/` |    36 | Four ordered slots for each of nine apartments  |
| `public/images/rooms/oasis/`   |    32 | Four ordered slots for each of eight apartments |
| `public/images/gallery/`       |    30 | 18 interior and 12 exterior/amenity images      |
| `public/images/amenities/`     |     7 | Homepage property/facility imagery              |
| `public/images/events/`        |     1 | Shared Coming Soon poster                       |
| `public/images/tours/`         |     0 | Tours are external YouTube embeds only          |

The files remain in their public source quality. Next.js Image will provide responsive runtime formats after implementation. No inferred dining image, event photograph, stock photograph, or AI-generated hotel photograph was added.

## SEO audit

- `robots.txt` allows the public site and points to `/wp-sitemap.xml`; only `/wp-admin/` is disallowed.
- The sitemap includes 18 pages, the default post, the Uncategorized archive, and the author archive.
- All audited pages have canonical URLs and `max-image-preview:large`.
- No meta descriptions were found.
- No Open Graph or Twitter card tags were found.
- No JSON-LD Hotel, LodgingBusiness, LocalBusiness, BreadcrumbList, or Event schema was found.
- The two homepage testimonials include partial inline Rating microdata, but no verified aggregate rating should be created.
- Client-only room/category pages expose little meaningful initial content to search engines.
- Legacy slug mismatches should receive explicit 301 redirects rather than relying on wildcard rewrites.

## Required confirmations

1. Is the correct sellable inventory twelve apartments, the seventeen named apartments, or a different live set?
2. Are the published rates current, tax-inclusive, and authorized for display?
3. What are occupancy limits, bed configurations, bathroom counts, floor areas, and accessibility details per apartment?
4. Which amenities differ by apartment, and are “24-hour service”, Wi-Fi, parking, kitchen access, and all resort amenities still included?
5. What is the MyRoomStatus upstream provider, API contract, staging endpoint, availability authority, reservation expiry rule, cancellation workflow, webhook contract, and support owner?
6. Is Paystack still the approved payment processor, and is payment required in full, as a deposit, or only after staff confirmation?
7. Which transactional emails/SMS/WhatsApp messages are sent, by which service, and with what consent/privacy wording?
8. Confirm the canonical phone format, address spelling/postcode, map pin, and whether the property is in Abuja 900108.
9. Confirm event dates, ticket providers, venue capacities, event imagery, and whether the four listed events are active offerings.
10. Confirm testimonial sources, wording, identities/job titles, and permission to republish.
11. Supply the official vector/transparent logo masters and confirm the saxophone/gold mark is the current identity.
12. Confirm rights to all public photographs and videos, plus whether the `The9_by_Naji` promotional poster belongs to this property.
13. Confirm the relationship and desired treatment of `the12bynajiresortestate.com`.
14. Provide privacy policy, booking terms, cookie/analytics requirements, refund wording, caution-fee amount, and data-controller details.
15. Confirm whether a CMS is needed after launch or whether typed, repository-managed content is preferred.

## Recommended architecture after direction approval

- Next.js App Router with strict TypeScript and Server Components by default.
- Typed content modules under `src/data/` for rooms, amenities, tours, events, policies, contact, and redirects; no database is needed for static content.
- Route groups for public marketing pages; dynamic `/rooms/[slug]` pages generated from verified room data.
- `next/image` using the extracted local assets; image alt text authored from verified scene content.
- Semantic CSS tokens for brand, light/dark themes, spacing, type, borders, and motion. Use a small no-flash theme bootstrap or `next-themes` only if it remains the leanest solution.
- React Hook Form and Zod for client and server validation. Booking submission goes through one server-side adapter boundary, disabled or inquiry-only until the real integration is verified.
- A provider-neutral booking interface such as `BookingGateway` with explicit `searchAvailability`, `createReservation`, and `verifyPayment` operations. Never expose upstream secrets or call unverified endpoints from the browser.
- Motion for navigation, menus, galleries, and component transitions. Load GSAP/ScrollTrigger only on routes/sections that use the selected cinematic scroll treatment. Do not add Lenis or Three.js unless the approved direction proves a concrete need.
- Radix Dialog for the gallery lightbox and mobile focus management; Lucide for utility icons.
- Metadata API, sitemap, robots, canonical metadata, Open Graph/Twitter images, and verified LodgingBusiness/Hotel schema. Booking confirmation and workflow utility pages should be noindex.
- Redirect map checked into source and verified in preview before migration.
- Vitest/React Testing Library for data and form logic; Playwright for navigation, gallery keyboard use, theme persistence, responsive layout, and booking validation.
- Vercel preview first. Production DNS and the WordPress origin remain unchanged until explicit approval and a rollback-ready migration window.
