---
"@cloudoperators/juno-ui-components": minor
---

feat(ui): Streamline `DataGridCheckboxCell` and add `verticalAlignment` prop to `DataGridCell`.

`DataGridCheckboxCell` is now removed completely. As it has been WIP for all the time and there isn't one documented use, we will release this as a minor instead of major, even though it is technically breaking.

`DataGridCell` gets a `verticalAlignment` prop (`"center" | "top"`) that overrides the parent `DataGrid`'s `cellVerticalAlignment` for individual cells.
