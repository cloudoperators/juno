---
"@cloudoperators/juno-ui-components": minor
---

feat(ProgressBar): add ProgressBar component

Adds a `ProgressBar` with a `mode` prop offering three modes: `determinate`
(clamped `value` 0-100), `busy` (animated indeterminate indicator), and
`simulated` (a fake self-running progress that starts with a quick initial
nudge for immediate feedback, then advances through steps separated by
randomized delays and parks near the end, so each run looks like data
trickling in at an uneven pace, for when the final amount of incoming data is
unknown). The determinate fill uses an eased `width` transition so value jumps
animate smoothly, with universal browser support.

Accessibility: uses `role="progressbar"` with `aria-valuemin`/`aria-valuemax`;
the determinate mode exposes `aria-valuenow`, while the `busy` and `simulated`
modes omit it to signal an unknown value to assistive technology. Under
`prefers-reduced-motion: reduce` (WCAG 2.3.3) the decorative and long-running
motion is reduced: the determinate value transition is disabled and the
simulated animation parks statically at its end value. The `busy` animation is
intentionally kept running, because in that indeterminate state the gentle 1.1s
loop is the only signal that work is in progress; freezing it would leave a
static sliver that reads as "stuck". The motion is deliberately low-frequency
and non-flashing, staying within the reduced-motion guidance for essential,
non-decorative status feedback.

Implementation: the `busy` keyframe animation lives in a
`.juno-progressbar-busy-fill` class in the component-local `progressbar.css`
(consuming the `juno-progress-busy` keyframe by name) rather than as an inline
style, matching the Juno convention. The determinate fill is always rendered
(at `width: 0%` when `value` is 0), and the simulated fill resets on mode
change.
