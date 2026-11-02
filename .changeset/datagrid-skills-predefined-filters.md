---
"@cloudoperators/juno-ui-components": minor
---

Document predefined filter tabs in the DataGrid skills (spec, build, validate): segmented-button tabs with a named `activeFilterTab` state, invariants for capability parity and no-pill scope behaviour, and deterministic render-if-specified. Also registers the DataGrid Header and Pattern stories as skill sources.

Guidance-only — no runtime, prop, or type change, so upgrading doesn't affect any app's UI. But re-running the build/validate skills now produces different output: regenerated DataGrids change, and previously conforming ones may report new findings.
