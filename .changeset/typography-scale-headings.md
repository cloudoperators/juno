---
"@cloudoperators/juno-ui-components": minor
---

Add base typography styles for `h1`–`h6` aligned with the Juno design system scale.

Headings rendered inside Juno apps (and inside `FormattedText`) now use a consistent IBM Plex Sans Bold scale: `h1` 1.69rem, `h2` 1.56rem, `h3` 1.44rem, `h4` 1.28rem, `h5` 1.125rem, `h6` 1rem.

Matching `.juno-h1`–`.juno-h6` utility classes apply the same scale to non-heading elements (e.g. an element with `role="heading"`).

**Visual change**: `ContentHeading` now uses the h1 scale (1.69rem) instead of `text-lg` (1.125rem). If you relied on the previous size, override with your own classes.

**Accessibility fixes**: several components previously used `<h1>` for UI labels regardless of context. They now use semantically appropriate elements so screen reader heading navigation reflects real document structure:

- `Modal` title: `<h4>` (string title) or `<div role="heading" aria-level={4}>` (ReactNode title); modal header uses `min-height` instead of fixed height, aligns items to the top so long titles wrap without clipping, and the close button stretches to full header height for a larger click target
- `Form` title: `<h3>`
- `FormSection` title: `<h4>`
- `SignInForm` title: `<h2>`
- `Message` title: `<strong>` (no longer a heading)
- `IntroBox` title: `<p>` (no longer a heading)
- `PopupMenuSectionHeading` label: plain text inside `<header>` (no longer a heading)
