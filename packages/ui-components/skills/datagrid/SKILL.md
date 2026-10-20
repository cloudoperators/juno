---
name: datagrid
description: >
  Use when building data tables with the Juno DataGrid in @cloudoperators/juno-ui-components:
  rendering rows and columns, controlling column widths, adding a toolbar for filtering and
  search, row click and bulk selection, and rendering empty, loading, and error states inside
  the grid. For form inputs used inside filters, see the forms skill; for the Status component's
  other uses, see the feedback skill.
metadata:
  purpose: >
    Teaches developers to compose the Juno DataGrid primitives (DataGrid, DataGridRow,
    DataGridCell, DataGridHeadCell, DataGridToolbar) into an accessible, UX-compliant data
    table, including the required Status-based empty/loading/error pattern and the tri-state
    bulk-selection model that the component library does not enforce on its own.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/DataGrid/DataGrid.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/DataGrid/DataGrid.stories.tsx
  - cloudoperators/juno:docs/ux/datagrid.md
---

# Build a data table with the Juno DataGrid

The DataGrid is a CSS-grid layout, not an HTML `<table>`. You declare how many `columns` there
are on the `DataGrid` and then render a flat stream of `DataGridRow` → `DataGridCell` children.
There is no `<thead>`/`<tbody>`; a header row is just a `DataGridRow` whose children are
`DataGridHeadCell` instead of `DataGridCell`.

## Setup

```tsx
import { DataGrid, DataGridRow, DataGridHeadCell, DataGridCell } from "@cloudoperators/juno-ui-components"

type ImageItem = { id: string; name: string; status: string; createdAt: string }

function ImagesTable({ images }: { images: ImageItem[] }) {
  return (
    <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Created</DataGridHeadCell>
      </DataGridRow>
      {images.map((image) => (
        <DataGridRow key={image.id}>
          <DataGridCell>{image.name}</DataGridCell>
          <DataGridCell>{image.status}</DataGridCell>
          <DataGridCell>{image.createdAt}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  )
}
```

The number of `DataGridCell`/`DataGridHeadCell` children in each row must equal `columns`. The one
exception is `colSpan` (see below). `DataGrid` requires the app to be wrapped in
`AppShellProvider` for styling to apply — see the fundamentals skill if styles are missing.

## Core patterns

### Control column widths

By default every column is `minmax(min-content, auto)`. Four props on `DataGrid` adjust this; they
map directly onto CSS `grid-template-columns`:

- `columnMinSize` / `columnMaxSize` — strings used as `minmax(columnMinSize, columnMaxSize)` for
  every column, e.g. `columnMaxSize="1fr"` makes all columns equal width regardless of content.
- `minContentColumns={[0, 3]}` — zero-based indices of columns that should be only as wide as their
  content. Use this for a column holding a single checkbox or icon button.
- `gridColumnTemplate="200px 1fr min-content"` — a full custom template. **When set, every other
  width prop is ignored.**

```
// Checkbox column stays tight; the rest share remaining space
<DataGrid columns={4} minContentColumns={[0]} columnMaxSize="1fr">
```

### Make rows clickable or hoverable

Pass `onClick` to `DataGridRow` to make the whole row an interactive, hoverable target (used for
"open detail view"):

```
<DataGridRow onClick={() => navigate(`/images/${image.id}`)}>
```

Only make a row clickable when the primary action is "navigate to this item's detail". Do not put a
row `onClick` on a grid whose cells already contain their own buttons or links — the nested click
targets conflict (`docs/ux/datagrid.md`, "Interacting with DataGrid Rows / Items").

### Span a cell across all columns

Use `colSpan` on a `DataGridCell` for rows that are not part of the tabular data — most importantly
the empty/loading/error state (next section):

```
<DataGridRow>
  <DataGridCell colSpan={3}>…</DataGridCell>
</DataGridRow>
```

### Add a toolbar for filters, search, and bulk actions

Controls that modify the view (search, filters, sorting, bulk actions, item count, refresh) live
**above** the grid in a `DataGridToolbar`, not inside the `DataGrid` itself:

```
<DataGridToolbar>
  <Select name="status" label="Status" onChange={setStatus}>
    <SelectOption value="active">Active</SelectOption>
    <SelectOption value="deleted">Deleted</SelectOption>
  </Select>
  <SearchInput onChange={(e) => setSearch(e.target.value)} />
</DataGridToolbar>
<DataGrid columns={3}>…</DataGrid>
```

The toolbar is a composable container, not a single pre-built control. The UX guidelines define
three zones — Zone 1 (predefined filter tabs, sorting, primary action), Zone 2 (filter inputs,
search, active filter pills), Zone 3 (bulk actions, item count, refresh). Read
[toolbar zones and persistence](references/toolbar-zones.md) when you need the full zone layout or
have to decide whether filters persist across navigation.

## Empty, loading, and error states (required)

The DataGrid renders nothing meaningful for an empty, loading, or failed dataset on its own. You
**must** render these states explicitly, scoped to the grid (never a full-page spinner), using the
`Status` component inside a `DataGridRow`/`DataGridCell` that spans all columns. `Status` adapts its
styling automatically when it detects the DataGrid context (`docs/ux/datagrid.md`, "DataGrid Empty,
Loading, and Error States").

```tsx
import { DataGrid, DataGridRow, DataGridHeadCell, DataGridCell, Status } from "@cloudoperators/juno-ui-components"

type ImageItem = { id: string; name: string; status: string; createdAt: string }

type Props = {
  images: ImageItem[]
  isLoading: boolean
  error?: Error
  hasActiveFilters: boolean
}

const COLUMNS = 3

function ImagesTable({ images, isLoading, error, hasActiveFilters }: Props) {
  return (
    <DataGrid columns={COLUMNS}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Created</DataGridHeadCell>
      </DataGridRow>

      {isLoading && (
        <DataGridRow>
          <DataGridCell colSpan={COLUMNS}>
            <Status status="progress" title="Loading images…" />
          </DataGridCell>
        </DataGridRow>
      )}

      {error && (
        <DataGridRow>
          <DataGridCell colSpan={COLUMNS}>
            <Status status="error" title="Could not load images" body={error.message} />
          </DataGridCell>
        </DataGridRow>
      )}

      {!isLoading && !error && images.length === 0 && (
        <DataGridRow>
          <DataGridCell colSpan={COLUMNS}>
            <Status
              status={hasActiveFilters ? "no-matches" : "empty"}
              title={hasActiveFilters ? "No matching images" : "No images yet"}
              body={hasActiveFilters ? "No images match your current filters." : "Create one to get started."}
            />
          </DataGridCell>
        </DataGridRow>
      )}

      {!isLoading &&
        !error &&
        images.map((image) => (
          <DataGridRow key={image.id}>
            <DataGridCell>{image.name}</DataGridCell>
            <DataGridCell>{image.status}</DataGridCell>
            <DataGridCell>{image.createdAt}</DataGridCell>
          </DataGridRow>
        ))}
    </DataGrid>
  )
}
```

Distinguish "no data exists" from "no data matches your filters" — they lead the user to different
actions. Keep the empty/filtered message copy source-backed per the UX doc.

## Bulk selection

When users act on multiple rows at once, add a leading checkbox column and a select-all checkbox in
the toolbar's Zone 3. The library gives you `Checkbox` but does **not** implement the selection
model — you own it, and it must follow the UX rules (`docs/ux/datagrid.md`, Zone 3):

- The select-all checkbox is **tri-state**: unchecked (none selected), `indeterminate` (some), checked (all).
- Clicking it while unchecked or indeterminate selects all; clicking while checked deselects all.
- Bulk-action controls stay **disabled until at least one row is selected**.
- The selection/checkbox column goes **first (leftmost)**; status columns go near the left too.

Read [bulk selection model](references/bulk-selection.md) for the complete tri-state wiring and a
worked `useState`-based example before implementing it.

## Common mistakes

- **CRITICAL — No empty/error state.** Rendering only the mapped rows means a failed fetch shows a
  blank grid with no explanation and no retry. Always render the `Status`-based states above.
  (`docs/ux/datagrid.md`, "DataGrid Empty, Loading, and Error States".)
- **HIGH — Page-level spinner instead of grid-scoped.** A full-page spinner hides the toolbar and
  surrounding context. Scope loading to the grid with `Status` in a spanning cell.
- **HIGH — Cell count ≠ `columns`.** If a row has fewer/more cells than `columns` (and no `colSpan`),
  the CSS grid misaligns silently. Keep the counts equal; use `colSpan={columns}` for full-width rows.
- **HIGH — Row `onClick` plus in-cell buttons.** Nested interactive targets inside a clickable row
  produce ambiguous click behavior. Choose one: a clickable row for navigation, or in-cell actions.
- **MEDIUM — Bulk actions enabled with nothing selected.** Disable bulk-action buttons until at
  least one row is selected; otherwise users trigger no-op or accidental actions.
- **MEDIUM — Misusing predefined filter tabs as navigation.** Filter tabs must operate on the same
  entity set, just filtered. For unrelated data sets use page-level tabs, each with its own DataGrid.

## Completion

Verify:

1. The grid renders header + body rows with cell counts matching `columns`.
2. Loading, error, and both empty variants each render a grid-scoped `Status` and are reachable.
3. If bulk selection exists, the select-all checkbox is tri-state and bulk actions are disabled with
   nothing selected.
4. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a dataset state cannot be exercised in your test harness, report it as unverified rather than
assuming it renders.

## References

- [toolbar zones and persistence](references/toolbar-zones.md) — read for the full three-zone
  toolbar layout and the filter/sort persistence decision.
- [bulk selection model](references/bulk-selection.md) — read before wiring tri-state select-all and
  per-row selection.
