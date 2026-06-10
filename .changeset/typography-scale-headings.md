---
"@cloudoperators/juno-ui-components": minor
---

Add h1–h6 base typography styles aligned with the Juno design system scale.

- `global.css` and `theme.css`: h1–h6 defined in `@layer base` with IBM Plex Sans Bold, rem font sizes, and Tailwind leading utilities. `theme.css` uses `var(--font-sans)` instead of a hardcoded font stack.
- `FormattedText`: heading sizes and line-heights aligned with the scale; h5 corrected (1.03rem → 1.125rem); h6 added; redundant `font-weight`/`font-style` declarations removed.
- `ContentHeading`: removed `jn:font-bold` and `jn:text-lg` overrides that were overriding the h1 base style with a smaller size.
