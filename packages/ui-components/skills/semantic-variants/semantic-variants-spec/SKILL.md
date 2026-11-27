---
name: semantic-variants-spec
description: >-
  Use when choosing or reviewing a semantic variant (info, success, warning,
  error, danger) on a Juno component — covers the fixed meaning of each variant,
  error vs danger, warning vs error, which components carry a semantic variant
  versus a visual or validation one, and the invariants that govern correct
  usage across components. The semantic-variants-review skill relies on this
  skill for all rules.
sources:
  - src/components/Message/Message.component.tsx
  - src/components/Toast/Toast.component.tsx
  - src/components/Badge/Badge.component.tsx
  - src/components/Box/Box.component.tsx
  - src/components/Tooltip/ToolTip.types.ts
---

Semantic variants are the shared vocabulary — `info`, `success`, `warning`, `error`, `danger` — that several Juno components expose through a `variant` prop. Each value carries a fixed meaning and must be chosen by the nature of the information, never for visual effect. Because the same variant means the same thing in every component, correctness is a **cross-component** property that no single component skill can enforce.

## The rule set lives in one place

[references/semantic-variants-spec.md](references/semantic-variants-spec.md) is the single source of truth — the five meanings, the two planes (communication vs validation), the components in and out of scope, and the Invariants (`SEMV-1`…`SEMV-5`).

This is a horizontal **topic** skill, not a component skill: it owns one aspect across many components. It therefore has no `-build` (there is no single artifact to scaffold). The consuming skill is:

- **semantic-variants-review** — sweeps a change for every semantic-variant usage and reports violations against `SEMV-*`.

It declares `requires: [semantic-variants-spec]` and cites rule IDs; it never restates the rules. Component specs (e.g. **messages-and-notifications-spec**) may cite `SEMV-*` in prose for author guidance, but must **not** list this reference in their own `sources` — the drift edge lives only on the review skill, so a change here re-reviews only the sweep, not every component.

## Mental model

- **Two planes.** The communication plane (`Message`, `Toast`, `Badge`, `Box`, `Tooltip`) is a free choice among the five. The validation plane (form fields' `errortext` / `successtext`) is a binary state, not a free choice.
- **Not every `variant` is this vocabulary.** `Button` / `Select` have an action-emphasis `variant` (`primary`, `subdued`, …) — a different semantic axis, not these five; `Status` has data-state values; `Tabs` / `TabBar` have appearance variants. None are in scope here — but none may be chosen for looks either (`SEMV-4` is universal).
- **Pick by intent, never for emphasis.** The load-bearing distinctions: `error` = already failed vs `danger` = about to do harm (`SEMV-2`); `warning` = might go wrong vs `error` = has gone wrong (`SEMV-3`).
