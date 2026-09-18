---
"@cloudoperators/juno-ui-components": minor
---

feat(ProgressBar): add ProgressBar component

Adds a `ProgressBar` with a determinate mode (clamped `value` 0-100) and an
indeterminate `busy` mode with an animated indicator. The determinate fill
uses an eased `width` transition so value jumps animate smoothly, with
universal browser support.

Accessibility: uses `role="progressbar"` with `aria-valuemin`/`aria-valuemax`;
the determinate mode exposes `aria-valuenow`, while the `busy` mode omits it to
signal an unknown value to assistive technology. The value transition is
disabled under `prefers-reduced-motion: reduce` (WCAG 2.3.3).
