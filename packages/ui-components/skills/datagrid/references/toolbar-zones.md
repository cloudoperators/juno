# DataGrid toolbar zones and filter/sort persistence

Read this when laying out a full DataGrid toolbar or deciding whether filters and sorting should
survive navigation. Source: `docs/ux/datagrid.md` ("DataGrid Header / Toolbar", "Filter and Sort
Persistence on Navigation").

## The three zones

The `DataGridToolbar` is a composable container. The UX guidelines split its contents into three
zones with distinct visual treatment:

- **Zone 1 — predefined filter tabs, sorting, primary action.** No distinct background; a plain row
  sitting above the framed toolbar area.
  - Predefined filter tabs on the far left apply a fixed, meaningful subset of the data (e.g.
    "All" / "Deleted", "Active" / "Archived"). Add them only when the subsets are genuinely useful.
  - Sorting: a `Select` to choose the sort key plus a button to toggle direction.
  - Primary action (e.g. "Create") on the far right.
- **Zone 2 — filters and search.** Has its own background and padding.
  - Filter inputs: a `Select`, or a `Select`/`ComboBox` combined with a `TextInput`, depending on data.
  - Active filter pills: one `Pill` per configured filter, plus a trailing "clear all" button.
  - `SearchInput` for free-text search.
- **Zone 3 — grid state, bulk actions, refresh.** Its own background and padding.
  - Bulk actions on the left (select-all `Checkbox` + bulk-action menu).
  - Item count in the center (matching items / total when filters are active).
  - Last-updated text and a refresh button on the right.

Zones 2 and 3 are visually separate blocks — do not merge them into one band.

## Do not misuse predefined filter tabs as navigation

Filter tabs must always operate on the **same set of entities**, just filtered differently. If tabs
would show entirely different, unrelated data sets or entity types, use page-level tabs instead,
with each tab containing its own independent DataGrid.

## Filter and sort persistence on navigation

There is no single default. Decide based on the user's goal and the navigation model:

- Default expectation: users do **not** expect filter/sort state configured in one session to still
  be active when they return. Stale filters hide data and cause confusion that is hard to diagnose.
- Persist when the grid is part of a continuous task or navigation flow — e.g. drilling through a
  folder/file hierarchy, or returning via browser back/forward.
- When the DataGrid itself is the **navigation mechanism** (browsing a folder structure), persisting
  is appropriate; clearing on each step would be disruptive.

If you persist state, always keep the active state visible — active filter pills and the sort
indicator must show — so users are never left wondering why data appears missing or reordered.
