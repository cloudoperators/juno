---
"@cloudoperators/juno-ui-components": minor
---

feat(ProgressBar): add ProgressBar component

Adds a `ProgressBar` with a `mode` prop offering three modes: `determinate`
(clamped `value` 0-100), `busy` (animated indeterminate indicator), and
`simulated` (a fake self-running progress that decelerates through irregular
steps and parks near the end, for when the final amount of incoming data is
unknown). The determinate fill uses an eased `width` transition so value jumps
animate smoothly, with universal browser support.

Accessibility: uses `role="progressbar"` with `aria-valuemin`/`aria-valuemax`;
the determinate mode exposes `aria-valuenow`, while the `busy` and `simulated`
modes omit it to signal an unknown value to assistive technology. Motion is
reduced under `prefers-reduced-motion: reduce` (WCAG 2.3.3): the determinate
value transition is disabled and the simulated animation is turned off, holding
its parked position statically.
