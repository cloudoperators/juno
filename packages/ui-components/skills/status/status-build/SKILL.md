---
name: status-build
description: >-
  Generate correct Juno Status usage from a described application state. Use when
  the user says "add a loading state", "show an error state", "handle empty state",
  "add no-matches feedback", or describes a non-data state and asks for a Status
  component. Relies on the status-spec skill for all rules.
requires:
  - status-spec
sources:
  - skills/status/status-spec/references/status-spec.md
---

Produce a correct `Status` usage that conforms to the **StatusSpec**. Read `../status-spec/references/status-spec.md` before composing anything.

## Source of truth — do not restate

All rules live in the **status-spec** skill (`requires: [status-spec]`): prop API, status value selection, copy resolution priority, placement rules, and Invariants `INV-1`…`INV-8`. This skill adds only the build procedure. If you are tempted to write a rule here, it belongs in `status-spec.md` instead.

## Procedure

### 1 · Identify the situation and context

Determine two things from the user's description:

- **Situation** — which of the four states applies: `progress`, `error`, `empty`, or `no-matches`. If ambiguous, ask once before producing output.
- **Context** — where `Status` will be placed: inside a DataGrid, or standalone at page or section level.

### 2 · Choose props

| Decision | Rule |
|---|---|
| `status` value | Match situation to the status value selection table in `status-spec.md`. |
| `code` | Only when the error is an HTTP error with a known code. Never inside a DataGrid (`INV-3`). |
| `title` / `body` | Use defaults unless the user supplies custom copy or the defaults do not fit the context (e.g. qualify the resource: "Loading Servers…" rather than "Loading…"). When overriding, apply `INV-5` casing. |
| `spinner` | Omit when `status="progress"` — it is the default (`INV-4`). Only set explicitly to `false` to suppress. |
| `details` | Only when a stack trace or raw server response is available and the user wants it surfaced (`INV-6`). |
| `action` | Only when a primary recovery action (retry, navigate) exists. Keep to one action (`INV-7`). |

### 3 · Compose the output

**Standalone:**

```tsx
<Status status="…" />
```

Add only the props determined in step 2. Do not add props that are redundant with the defaults.

**Inside a DataGrid** (INV-2):

```tsx
<DataGridRow>
  <DataGridCell colSpan={N}>
    <Status status="…" />
  </DataGridCell>
</DataGridRow>
```

Where N equals the DataGrid's `columns` value.

### 4 · Output specification

Emit a single self-contained code snippet containing the `Status` usage with the necessary wrapper if inside a DataGrid. After the snippet, append a **Setup Notes** section listing the `@cloudoperators/juno-ui-components` imports required.

## Self-check before returning

Verify the output satisfies every Invariant (`INV-1`…`INV-8`). In particular: correct `colSpan` if inside a DataGrid, no `code` inside a DataGrid, no redundant `spinner={true}` on progress, correct casing for any overridden copy.
