# Design System Notes

## Token Layer

The site is currently CSS-first in `src/styles/global.css`. Keep that approach unless Tailwind is intentionally introduced in a later phase.

Primary token groups:

- Colors: `--color-bg`, `--color-panel`, `--color-panel-strong`, `--color-violet`, `--color-blue`, `--color-text`, `--color-muted`.
- Gradients: `--gradient-hero`, `--gradient-panel`, `--gradient-line`, `--gradient-button`.
- Borders: `--border-soft`, `--border-strong`.
- Shadows: `--shadow-soft`, `--shadow-glow`, `--shadow-blue`.
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`.
- Spacing: `--space-section`, `--space-section-tight`, `--container`.
- Type: `--text-hero`, `--text-section`, `--text-lead`.

## Components

- `Navbar.astro` is the active global navigation.
- `Header.astro` is retained as a compatibility wrapper around `Navbar.astro`.
- `Footer.astro` uses centralized product and link config.
- `Hero.astro` is homepage-specific.
- `AssetPlaceholder.astro` provides safe internal product visual slots until real assets exist.

## CTA Rules

- Primary: product page or Lemon Squeezy storefront.
- Secondary: setup notes, support, product detail.
- No `href="#"`.
- No TODO external values in rendered HTML.
- No public trial/download CTA until a real ZIP exists.

## Tailwind Recommendation

Keep CSS-first for now. Tailwind can be reconsidered later if a component system is being built, but the current static Astro site does not need the added migration risk for this redesign foundation.

## Accessibility Baseline

- Tap targets should remain comfortably above 44px on mobile where possible.
- Focus states must remain visible.
- Text should not rely on gradients alone for contrast.
- Layout must avoid horizontal overflow at around 390px viewport width.
