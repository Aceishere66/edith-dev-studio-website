# Asset Intake

## Current Inventory

The site currently has the product asset folder structure but no real Upscaler Studio screenshots, before/after examples, mockups, or 3D/demo assets.

Available assets:

- `public/favicon.svg` - internal SVG favicon.
- `public/og-image.svg` - internal SVG social preview. Safe to use, but generic and should be replaced with an approved brand/product preview before launch.
- `public/assets/product/upscaler-studio/screenshots/.gitkeep`
- `public/assets/product/upscaler-studio/before-after/.gitkeep`
- `public/assets/product/upscaler-studio/mockups/.gitkeep`
- `public/assets/product/upscaler-studio/3d/.gitkeep`

Current public product visuals are CSS-generated abstract frames in `src/components/AssetPlaceholder.astro`. They are intentionally not real screenshots or output proof.

## Root Folder

All product assets belong under:

`public/assets/product/upscaler-studio/`

## Required Assets Checklist

| Asset | Folder | Recommended filename | Size / ratio | Format | Site use | Licensing requirement |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage hero product screenshot | `screenshots/` | `upscaler-studio-home-hero.png` | 2400 x 1500, 16:10 | PNG or WebP | Homepage hero/product frame | Must be an owned screenshot from the actual Windows app. No mock competitor UI. |
| Product page main app screenshot | `screenshots/` | `upscaler-studio-app-main.png` | 2400 x 1500, 16:10 | PNG or WebP | `/products/upscaler-studio` hero/media section | Must show the real app interface and current Path B release state. |
| Before/after image example 1 | `before-after/` | `before-after-photo-restoration-01.png` | 2000 x 1200, 5:3 | PNG or WebP | Product page comparison frame | Source image must be owned, commissioned, public domain, or commercially licensed. Record source and license. |
| Before/after image example 2 | `before-after/` | `before-after-image-enhancement-02.png` | 2000 x 1200, 5:3 | PNG or WebP | Homepage/product proof section | Same licensing rule as above. Do not use random online photos. |
| Optional video workflow visual | `screenshots/` | `upscaler-studio-video-workflow-ffmpeg.png` | 2400 x 1500, 16:10 | PNG or WebP | Product workflow section only after video setup copy is final | Must not imply video is plug-and-play. Should visibly support the FFmpeg requirement. |
| Product mockup frame | `mockups/` | `upscaler-studio-windows-mockup.png` | 2400 x 1600, 3:2 | PNG or WebP | Products index and release/offer visual | Must be internally created or commercially licensed. Do not use unlicensed device frames. |
| Social/brand preview image | `mockups/` | `upscaler-studio-social-preview.png` | 1200 x 630, 1.91:1 | PNG, WebP, or SVG | Future OG/Twitter image via `BaseLayout` `image` prop | Must be owned brand artwork. Avoid fake output claims. |
| Future 3D/interactive asset slot | `3d/` | `upscaler-studio-interactive-scene-v1.glb` | Budget under 2 MB unless performance review approves more | GLB or compressed web asset | Later single interactive section, not Phase 4B | Must be original, commissioned, or commercially licensed with redistribution rights documented. |

## Naming Rules

- Use lowercase filenames.
- Use hyphens, not spaces.
- Include the product name or workflow in the filename.
- Add a numeric suffix for asset series: `-01`, `-02`, `-03`.
- Do not overwrite production assets without recording the replacement reason in this document.

## Screenshot Rules

- Capture real Upscaler Studio screens from the current release only.
- Do not edit UI text into screenshots after capture.
- Avoid showing private local file paths, personal data, license keys, user names, or unreleased model/provider details.
- If using sample images inside the app, document the image source and license before publishing.
- For video workflow visuals, include the FFmpeg requirement in surrounding page copy; do not present the workflow as self-serve or automatic.

## Licensing Rules

- Use owned screenshots, internally generated product visuals, commissioned assets, public-domain material, or commercially licensed source material.
- Do not use competitor screenshots, competitor imagery, random online photos, unverified icon sets, unlicensed 3D assets, or stock media without a commercial license.
- Record source, owner, license, and allowed usage for every non-original asset before publishing it.
- If the license is unclear, do not use the asset.

## Metadata / Social Preview

The current default social image is `public/og-image.svg`. It is safe internal artwork, but it is generic and not a real product screenshot.

Recommended future replacement:

- Path: `public/assets/product/upscaler-studio/mockups/upscaler-studio-social-preview.png`
- Size: 1200 x 630
- Content: EDITH Dev Studio brand mark, Upscaler Studio product name, concise "Local-first AI upscaling studio for Windows" message, and an approved abstract or real product frame.
- Configuration: pass the replacement path through the `image` prop in `src/layouts/BaseLayout.astro` or update the default only after the asset is approved.

## Implementation Notes

- Keep `src/components/AssetPlaceholder.astro` active until real assets are available.
- When a real asset is added, wire it through a component prop or small asset config instead of hardcoding paths across pages.
- Do not add external asset URLs to page markup.
- Do not publish fake screenshots or AI-generated before/after results as product proof.
