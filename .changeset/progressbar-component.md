---
"@cloudoperators/juno-ui-components": minor
---

feat(ProgressBar): add ProgressBar component

Adds a `ProgressBar` with a `mode` prop offering three modes: `determinate`
(clamped `value` 0-100), `busy` (animated indeterminate indicator), and
`simulated` (a self-running fake progress that advances at an uneven pace and
parks near the end, for when the final amount of incoming data is unknown).
Determinate value changes animate smoothly.

Accessibility: uses `role="progressbar"`. The `determinate` mode exposes
`aria-valuenow` alongside `aria-valuemin`/`aria-valuemax`; `busy` and `simulated`
omit all three to signal an unknown value to assistive technology. Under
`prefers-reduced-motion: reduce` the determinate value transition is disabled
and the simulated animation parks statically at its end value; the `busy`
indicator keeps its gentle, non-flashing loop, since in that indeterminate
state the motion is the only signal that work is in progress.
