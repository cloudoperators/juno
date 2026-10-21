---
name: datagrid-build
description: >-
  Generate a complete, production-ready Juno DataGrid implementation from a BRD
  excerpt, feature list, or structured requirements. Use when the user says
  "build a DataGrid for X", "generate a DataGrid", "scaffold a DataGrid", or
  provides data/feature requirements and asks for a DataGrid. Relies on the
  datagrid skill's DataGridSpec for all structural rules.
requires:
  - datagrid
sources:
  - skills/datagrid/references/datagrid-spec.md
---

Produce a complete DataGrid that conforms to the **DataGridSpec**. Output is
deterministic given the same input — every structural choice is resolved by the
Decision Trees, not by judgement.

## Source of truth — do not restate

All structural rules live in the **datagrid** skill (`requires: [datagrid]`):
Input Schema, Decision Trees `DT-1`…`DT-9`, Invariants `INV-1`…`INV-17`, the
Fragment Library, and the Component Props Reference. Read
`datagrid/references/datagrid-spec.md` before emitting anything. This skill adds
only the build-specific procedure. If you are tempted to write a structural rule
here, it belongs in `datagrid-spec.md` instead.

## 1 · Parse input → DataGridSpec

Map the BRD / feature list / natural language onto the Input Schema. Resolve every
ambiguity with a **single consolidated question** before emitting anything — never
guess a spec field, and never emit partial scaffolding "to see how it looks".

## 2 · Resolve structure (run the trees forward)

Evaluate the Decision Trees in this order, carrying outputs forward:

1. `DT-1` → `columnOrder`, `columns`, `minContentColumns`
2. `DT-2` → which zones render
3. `DT-3` / `DT-4` / `DT-5` → contents of each enabled zone
4. `DT-9` → select-all state (only if `bulkActions`)
5. `DT-6` → per-row props + stop-propagation requirement
6. `DT-7` → state rows, using `columns` from `DT-1`
7. `DT-8` → per-cell rendering for each column in `columnOrder`

## 3 · Compose fragments

Assemble the resolved structure from the Fragment Library verbatim — do not
paraphrase or restructure fragments. Shell order:

```
FRAG:outer-shell
  IF renderHeader:
    FRAG:header-shell
      IF zone1: FRAG:zone1-shell (DT-3 contents)
      IF zone2: FRAG:zone2-shell (DT-4 contents)
      IF zone3: FRAG:zone3-shell (DT-5 contents)
  <DataGrid columns={columns} minContentColumns={minContentColumns}>
    <DataGridRow>  {/* head row: one DataGridHeadCell per columnOrder entry */}
    DT-7 state rows
    DT-7 data rows (per DT-6 and DT-8)
  </DataGrid>
FRAG:outer-shell (close)
```

## 4 · Output specification

A single self-contained code block containing:

1. **TypeScript interface** for the data item, derived from `spec.columns`.
2. **Sample data** (3–4 items, comment: `// TODO: replace with real data`).
3. **State declarations** — only those the resolved feature set requires:
   - `isLoading`, `isError` — always
   - `sortOrder` — if sorting
   - `selected` — if bulkActions
   - `hasActiveFilters` — if filtering or search
4. **Derived values** (immediately after state):
   - `allSelected`, `someSelected`, `noneSelected` — if bulkActions (from `DT-9`)
   - `filteredCount`, `totalCount` — if itemCount
5. **The assembled JSX tree** — following the shell order above.

After the code block, append a **Setup Notes** section:

- List all `@cloudoperators/juno-ui-components` imports needed.
- Note the `PortalProvider` wrapper requirement if `PopupMenu` is used (`INV-8`).
- Note any permission-gated elements with their condition string from
  `spec.features.permissions` (`INV-14`).

## Build behaviour

- No placeholder code, no scaffolding, no TODOs beyond the sample-data marker.
- Anything out of scope (pagination, shells, panels, …) gets one sentence of
  acknowledgement, then move on — never generate it.

## Self-check before returning

The output must satisfy every Invariant (`INV-1`…`INV-17`). If a requirement
cannot be met with the documented components (`INV-17`), say so explicitly and
leave that part to the consuming component.
