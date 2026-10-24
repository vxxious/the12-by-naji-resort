# Deployment and migration

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: preview URL during review; change to `https://the12bynajiresort.com` only for production cutover.
- `BOOKING_PROVIDER`: keep as `disabled` until an adapter is verified.
- `MYROOMSTATUS_API_URL`: future server-only provider URL.
- `MYROOMSTATUS_API_TOKEN`: future server-only credential.
- `PAYSTACK_SECRET_KEY`: future server-only payment credential.

Never commit `.env.local` or production credentials.

## Preview deployment

1. Create a private or public GitHub repository as approved by the owner.
2. Push this codebase without WordPress exports, guest data or secrets.
3. Import the repository into Vercel.
4. Configure preview environment variables from `.env.example`.
5. Deploy to the generated Vercel preview domain.
6. Complete responsive, accessibility, metadata, booking-state and route testing on the preview.

The existing Hostinger site and DNS must remain unchanged during review.

## Production migration checklist

1. Confirm all business information, inventory, rates, policies, events and photography.
2. Verify the booking provider in staging, including date filtering, reservation creation, payment cancellation, payment verification, replay protection and confirmation email ownership.
3. Approve the complete redirect map and retain it in `next.config.ts`.
4. Crawl the WordPress site and the preview to compare canonical URLs, titles, indexable pages and image coverage.
5. Export a final Hostinger DNS record snapshot and record current TTL values.
6. Lower relevant TTLs at least 24 hours before cutover if Hostinger permits it.
7. Add and verify the production domain in Vercel without changing DNS yet.
8. Schedule the cutover and a rollback owner.
9. Update only the required A/CNAME records after explicit approval.
10. Verify HTTPS, redirects, robots, sitemap, structured data, canonical tags, forms and critical pages on the production domain.
11. Submit the new sitemap in Google Search Console and monitor coverage and 404s.
12. Keep the WordPress hosting intact during the agreed rollback window.

## DNS considerations

- Preserve mail-related MX, SPF, DKIM and DMARC records.
- Do not replace the entire DNS zone to connect Vercel.
- Use the exact Vercel records shown for the project at migration time; do not hard-code assumed values in advance.
- Confirm the apex and `www` redirect/canonical preference.

## SEO redirects

Implemented mappings include:

- `/locations/` → `/gallery`
- `/reviews/` → `/tours`
- `/book-now/` → `/book`
- `/elementor-page-720/` → `/rooms?block=elysian`
- `/oasis-block/` → `/rooms?block=oasis`
- duplicate room and theme-demo routes → their canonical replacements

The historic `/contact/` currently contains Events, but the replacement requires `/contact` for verified business contact details. It therefore changes purpose instead of redirecting; `/events` becomes the canonical event destination.

## Rollback plan

1. Keep a record of the pre-cutover DNS values and the final WordPress health check.
2. If the replacement has a critical production failure, restore only the changed web A/CNAME records to the recorded Hostinger values.
3. Recheck DNS propagation, HTTPS and WordPress health.
4. Leave Vercel deployed for diagnosis but remove the custom production domain if necessary.
5. Do not delete the WordPress installation until the replacement has completed the agreed stability window.
