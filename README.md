# The 12 by Naji Resort

Independent Next.js replacement for `the12bynajiresort.com`, based on the approved Impeccable Direction B: Minimal Architectural Luxury.

The existing WordPress website is not modified by this repository.

## Requirements

- Node.js 22.12+ or 24+
- npm 11+

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

Playwright browser binaries may need to be installed once with `npx playwright install chromium`.

## Booking status

`BOOKING_PROVIDER` must remain `disabled` until the MyRoomStatus API contract, staging credentials and Paystack flow are supplied and tested. The UI deliberately does not claim availability, confirmation or payment.

## Documentation

- Existing site audit: `docs/research/site-audit-2026-10-24.md`
- Approved design direction: `docs/design/selected-direction.md`
- Implemented design system: `DESIGN.md`
- Deployment and migration: `docs/deployment.md`
