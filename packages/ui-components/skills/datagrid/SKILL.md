---
name: datagrid
description: >-
  Compose a Juno DataGrid to display a collection of structured data (DataGrid,
  DataGridRow, DataGridCell, DataGridHeadCell). Owns the DataGridSpec — the shared
  rule set (Input Schema, Decision Trees, Invariants) that the datagrid-build and
  datagrid-validate skills both rely on. Use when building a sortable/filterable
  table of resources, or when you need the canonical rules for how a DataGrid must
  be composed.
sources:
  - src/components/DataGrid/DataGrid.component.tsx
  - src/components/DataGrid/DataGrid.stories.tsx
---

Juno renders tabular / collection data with DataGrid primitives, never a raw HTML
table. This skill owns the **DataGridSpec**: the toolchain-agnostic rule set that
defines what a correct DataGrid is.

## The rule set lives in one place

[references/datagrid-spec.md](references/datagrid-spec.md) is the single source of
truth — Input Schema, Decision Trees (`DT-1`…`DT-9`), and Invariants
(`INV-1`…`INV-17`). Supporting references:
[references/component-props.md](references/component-props.md),
[references/fragment-library.md](references/fragment-library.md).

Task skills **do not restate** these rules. They declare `requires: [datagrid]`
and cite rule IDs:

- **datagrid-build** turns a DataGridSpec into code (runs the trees forward).
- **datagrid-validate** checks code against the spec (runs the trees, asserts the invariants).

If you are tempted to add or change a structural rule, edit `datagrid-spec.md` —
never duplicate the rule into a consuming skill.

## Mental model

- Primitives: `DataGrid` (grid container, `columns` + `minContentColumns`),
  `DataGridRow`, `DataGridHeadCell`, `DataGridCell`.
- The cells-per-row invariant (`INV-1`) is the rule that breaks grids most often:
  `DataGrid[columns]` must equal the cell count in every row, counting `colSpan`.
- Column sizing escalates in this order: `columns`, `minContentColumns`,
  `columnMin/MaxSize`, and only then `gridColumnTemplate` as a last resort
  (`INV-13`).
- The header is up to three zones (`DT-2`): Zone 1 in a bare `Stack`, Zones 2–3
  each in their own `DataGridToolbar` (`INV-3`, `INV-4`).

## When NOT to use a DataGrid

A DataGrid is for a collection of structured, comparable records. Reach for a
different pattern when the data is not a comparable collection — a single record's
detail view, a key/value property list, free-form or document content, or a small
fixed set of label/value pairs. Pagination, page shells, navigation, modals,
panels, forms, and detail views are out of scope for this pattern; they belong to
the consuming component (see the Scope section of `datagrid-spec.md`).
