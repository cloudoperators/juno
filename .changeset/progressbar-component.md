---
"@cloudoperators/juno-ui-components": minor
---

feat(ProgressBar): add ProgressBar component

Adds a new `ProgressBar` component with three modes:

- `determinate` — fills the track to a `value` between 0 and 100
- `busy` — animated indeterminate indicator for when progress is unknown
- `simulated` — self-running fake progress that parks near the end, for when the total amount of data is unknown

The component always fills its parent container. Accessibility: uses
`role="progressbar"` with `aria-valuenow/min/max` in determinate mode.
Respects `prefers-reduced-motion`.

