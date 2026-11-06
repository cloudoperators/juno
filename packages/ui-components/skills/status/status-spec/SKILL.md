---
name: status-spec
description: >-
  Use when working with the Juno Status component — covers all four status values
  (progress, error, empty, no-matches), HTTP error code display, copy defaults and
  override rules, DataGrid placement, and the invariants that govern correct usage.
  The status-build and status-validate skills rely on this skill for all rules.
sources:
  - src/components/Status/Status.component.tsx
  - src/components/Status/Status.stories.tsx
---

`Status` is the single standard component for communicating non-data states in Juno: loading, error, empty collection, and no-filter-matches. Use it as the default drop-in whenever a component, view, or data container has no local way to handle these states.

## The rule set lives in one place

[references/status-spec.md](references/status-spec.md) is the single source of truth — prop API, status value selection, copy resolution priority, placement context rules, and Invariants (`INV-1`…`INV-8`).

Task skills **do not restate** these rules. They declare `requires: [status-spec]` and cite rule IDs:

- **status-build** maps a described application state to the correct `<Status>` props.
- **status-validate** checks existing `Status` usage against the spec.

If you are tempted to add or change a rule, edit `status-spec.md` — never duplicate the rule into a consuming skill.

## Mental model

- `status` selects the state type and activates per-status default copy. Defaults to `"error"`.
- Copy resolution is a nullish-coalescing chain: explicit prop → HTTP code defaults → per-status defaults. Only `null`/`undefined` fall through to the next source; an explicit `""` or `false` stops the chain and then renders nothing (the field is suppressed, not defaulted).
- `code` renders a large HTTP error code above the title. It is **suppressed automatically** inside a DataGrid — never rely on it rendering there.
- `spinner` defaults to `true` when `status="progress"` and `false` otherwise.
- `details` is for raw technical output only (stack traces, server responses) — not user-facing copy.
- The `action` slot is for a single primary action, typically a `Button` or a button-styled `<a>`.

## When NOT to use Status

`Status` is for non-data states only. Do not use it to render data, content, or informational messages that are part of the normal data flow. Do not use it as a generic message or notification component — those have dedicated components (`Toast`, `Message`).

## Placement

Inside a `DataGrid`, `Status` must be wrapped in `<DataGridRow><DataGridCell colSpan={N}>`, where N equals the DataGrid's `columns` value (`INV-2`). The component detects the DataGrid context automatically and adjusts its sizing and suppresses the `code` display.
