# QA Checklist

## Static Checks

- `npm run build`
- `git diff --check`
- Scan `src` and `dist` for:
  - `href="#"`
  - `€49`
  - `EUR 49`
  - `TODO_EXTERNAL`
  - `Download installer`
  - `plug-and-play`
  - `Start free trial`
  - `Download trial`
  - `Try it free`
  - `7-day free trial`

## Route Checks

- `/`
- `/products`
- `/products/upscaler-studio`
- `/pricing`
- `/download`
- `/support`
- `/privacy`
- `/terms`

## Rendered QA

For each core route:

- Navigation is consistent.
- No dead CTA appears.
- Lemon Squeezy points to the real storefront.
- Social links point to the real Instagram and X/Twitter URLs.
- No public trial ZIP is implied.
- No fake download path is visible.
- FFmpeg is clearly required for video workflows.
- Direct ZIP, unsigned release, and manual setup are visible where relevant.

## Responsive QA

Check desktop and mobile around 390px width:

- No horizontal overflow.
- Hero and product visuals remain readable.
- CTA groups wrap cleanly.
- Pricing/support cards are not cramped.
- Tap targets are usable.
