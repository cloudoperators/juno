---
"@cloudoperators/juno-ui-components": minor
---

feat(ui): Streamline `DataGridCheckboxCell` and add `verticalAlignment` prop to `DataGridCell`.

`DataGridCheckboxCell` is now a plain container that centers its child vertically — place a `Checkbox` as a child and wire up state and handlers directly on it. Note: although this is a breaking change to the `DataGridCheckboxCell` API, the component was WIP-labelled and is not known to be used in any application.

`DataGridCell` gains a `verticalAlignment` prop (`"center" | "top"`) that overrides the parent `DataGrid`'s `cellVerticalAlignment` for individual cells.
