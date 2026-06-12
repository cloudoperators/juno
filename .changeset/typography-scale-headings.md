---
"@cloudoperators/juno-ui-components": minor
---

Add h1–h6 base typography styles aligned with the Juno design system scale.

- `global.css` and `theme.css`: h1–h6 defined in `@layer base` with IBM Plex Sans Bold, rem font sizes, and plain CSS `line-height` values. `theme.css` uses `var(--font-sans)` instead of a hardcoded font stack.
- `FormattedText`: heading sizes and line-heights aligned with the scale; h5 corrected (1.03rem → 1.125rem); h6 added; redundant `font-weight`/`font-style` declarations removed.
- `ContentHeading`: removed `jn:font-bold` and `jn:text-lg` overrides that were overriding the h1 base style with a smaller size.

Fix h1 misuse in components that rendered UI labels as `<h1>`, which caused unintended size changes after the global h1 style was introduced. Heading levels were chosen to reflect both visual size and accessibility (correct heading outline for screen readers).

- `Modal`: title changed from `<h1>` to `<h4>`. The modal has `role="dialog"` which creates an isolated landmark; the title is referenced via `aria-labelledby`. A heading inside a dialog is semantically correct and independent of the page outline. `<h4>` matches the previous visual size (~20px).
- `Form`: title changed from `<h1>` to `<h3>`. A form is a named content section; a heading is appropriate. `<h3>` matches the previous visual size (~24px).
- `FormSection`: title changed from `<h1>` to `<h4>`. One level below `Form` (`<h3>`) in the heading hierarchy. `<h4>` was chosen over `<h5>` (visual match) to maintain correct nesting.
- `SignInForm`: title changed from `<h1>` to `<h2>`. The form is often the primary content of a page but may also be embedded; `<h2>` is a safe default for both cases.
- `IntroBox`: title changed from `<h1>` to `<p>`. An info box is not a navigable section; adding it to the heading outline would confuse screen reader users navigating by heading. Bold styling preserved via existing `introboxHeading` class.
- `global.css`: replaced `font-weight: 700` with `@apply jn:font-bold` in h1–h6 base styles for consistency with Tailwind conventions.
- `theme.css`: same — replaced `font-weight: 700` with `@apply font-bold` (no `jn:` prefix, consistent with existing `@apply` usage in that file).
- `Modal`: ReactNode titles now render as `<div role="heading" aria-level={4}>` instead of `<h4>` to avoid invalid HTML (block elements inside heading elements). String titles remain `<h4>`. Both approaches are equivalent for assistive technologies.
