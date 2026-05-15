# EDITH Dev Studio Website Redesign Brief

## Current Position

EDITH Dev Studio is the studio and publisher brand. The website should present the studio as a premium creative software maker, with Upscaler Studio as the flagship product under the main domain.

The site stays on Astro, CSS, and the existing Cloudflare-connected static deployment path. Do not migrate the stack for the redesign.

## Product Truth

- Product: Upscaler Studio.
- Primary message: "A local-first AI upscaling studio for Windows."
- Active public purchase path: €30 lifetime license through Lemon Squeezy.
- Trial ZIP: not public yet.
- Release: Path B, Windows direct ZIP.
- Signing: unsigned; Windows may show a warning.
- Images: work out of the box.
- Video: requires external FFmpeg.
- Setup: install, update, and uninstall are manual.
- Refund policy: no refund after purchase.

## Public Routes

- `/` - premium studio homepage and flagship product entry.
- `/products` - product index, with Upscaler Studio as the current flagship.
- `/products/upscaler-studio` - canonical sales and product detail page.
- `/pricing` - lightweight companion page that points to the product page and storefront.
- `/download` - lightweight companion page that explains ZIP availability and setup expectations.
- `/support` - setup, purchase, FFmpeg, download, and contact support.
- `/about` - studio background.
- `/privacy`, `/terms`, `/cookies` - legal-adjacent pages needing professional review before broad launch.

## Conversion Goals

1. Build trust before purchase by clearly explaining the direct ZIP, unsigned release, FFmpeg requirement, and manual setup.
2. Keep the product page as the canonical place for buying and setup context.
3. Avoid fake urgency, unavailable trial/download flows, and generic SaaS promises.
4. Make the homepage feel like a premium creative software studio, not a template.

## Non-Goals For This Recovery Pass

- No Motion, Three.js, Spline, 21st.dev/Magic components, or heavy animation.
- No external product imagery unless licensing is verified.
- No full localization implementation.
- No dependency upgrades or forced audit fixes.
- No deployment, merge, push, or commit without explicit approval.

## Phase Order

1. Foundation recovery: central config, product truth, docs, asset intake, route cleanup.
2. Premium homepage pass: stronger studio positioning and flagship product entry.
3. Premium product page pass: canonical sales story and trust detail.
4. Companion page pass: products, pricing, download, and support coherence.
5. Asset pass: real screenshots, before/after material, product mockups.
6. Motion/interactive pass: one controlled section only, after copy and trust are stable.
