# Handoff

## Recovery Context

The previous premium redesign commits were not available in this checkout or on origin. This branch rebuilds the foundation from `main` at `d070c91dd1e48750115556da0df2179648c7d756`.

Current branch:

`codex/premium-copy-visual-correction`

## What Changed

- Added `.vs/` to `.gitignore` so local Visual Studio files stay out of the repo.
- Added central product and link config under `src/config/`.
- Unified navigation around `Navbar.astro`; `Header.astro` now wraps it for compatibility.
- Reworked homepage into a premium dark studio entry point.
- Reworked `/products/upscaler-studio` as the canonical product and sales page.
- Lightly polished `/products`, `/pricing`, `/download`, `/support`, `/about`, `/privacy`, and `/terms`.
- Added safe CSS-generated product placeholders through `AssetPlaceholder.astro`.
- Rebuilt the CSS token layer in `src/styles/global.css`.
- Added redesign docs and asset intake guidance.

## Current Link State

- Lemon Squeezy storefront: `https://edith-devstudio.lemonsqueezy.com/`
- Instagram: `https://www.instagram.com/edith_dev_studio`
- X/Twitter: `https://x.com/EDITH_DevStudio`
- Trial ZIP download: not public yet.
- Public support email: `contact@edithdevstudio.com`

## Product Truth Locked In

- €30 lifetime license is the active public purchase path.
- The public trial build is not available yet.
- Windows direct ZIP release.
- Unsigned release.
- Image workflows work out of the box.
- Video workflows require external FFmpeg.
- Install, update, and uninstall are manual.
- No refund after purchase.

## Required Real Assets

- App screenshot.
- Before/after comparison.
- Product mockup.
- Optional future 3D/interactive product moment.

Use `docs/ASSET_INTAKE.md` for dimensions, naming, and licensing rules.

## Legal And Trust Risks

- Privacy, terms, refund, and purchase policy wording still needs professional review.
- Lemon Squeezy checkout details should be verified in the provider account before launch.
- Trial availability should remain non-public in copy until a real ZIP exists.
- Unsigned ZIP warnings should be tested on a real Windows machine.

## Dependency Risk

No dependency upgrades were performed. Do not run `npm audit fix --force` as part of this branch.

## Screenshot Paths

Browser Use route QA passed on the local preview at `http://127.0.0.1:4321`.

Phase 3D Browser Use screenshots:

- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\home-desktop.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\home-mobile.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\product-desktop.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\product-mobile.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\pricing-desktop.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\download-desktop.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-phase-3d\browser-use-screenshots\support-desktop.png`

Primary screenshot paths:

- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\home-desktop-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\home-mobile-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\product-desktop-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\product-mobile-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\products-desktop-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\pricing-desktop-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\download-desktop-chrome.png`
- `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\chrome-screenshots\support-desktop-chrome.png`

Browser Use also captured in-app screenshots under `C:\Users\Simone\AppData\Local\Temp\edith-rebuild-premium\screenshots\`. Chrome screenshots are the recommended review artifacts because they avoid an in-app desktop capture duplication issue observed during viewport override testing.

## Validation Summary

- `npm run build` passed.
- `git diff --check` passed with Windows LF-to-CRLF warnings only.
- Static scans of `src` and `dist` found none of the blocked strings listed in `docs/QA_CHECKLIST.md`.
- Browser Use route checks found no dead URLs, no `TODO_EXTERNAL` links, no public trial CTA, no fake download CTA, and no console errors on the core routes.

## Phase 3D Summary

- Rewrote public copy that sounded internal or defensive on `/download`, `/support`, `/pricing`, `/products`, `/products/upscaler-studio`, and the homepage support sections.
- Replaced blunt trial language with "The public trial build is not available yet."
- Standardized public support email to `contact@edithdevstudio.com`.
- Reduced mobile navigation height while keeping visible tap targets and active states.
- Added overflow protection for long support email text.

## Recommended Next Phase

Create a checkpoint commit for Phase 3D after review. Then proceed to real-asset integration if product screenshots and before/after material are ready; otherwise continue with a focused companion-page polish pass.
