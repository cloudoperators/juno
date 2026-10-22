# Component Props Reference

Prop reference for the DataGrid components referenced by
[datagrid-spec.md](datagrid-spec.md).

### DataGrid

| Prop                    | Type                | Notes                                                                    |
| ----------------------- | ------------------- | ------------------------------------------------------------------------ |
| `columns`               | `number`            | Total column count — must match cells per row                            |
| `columnMaxSize`         | `string`            | CSS max-size per column (default `"auto"`)                               |
| `columnMinSize`         | `string`            | CSS min-size per column (e.g. `"300px"`)                                 |
| `minContentColumns`     | `number[]`          | Zero-based indices of tight (min-content) columns                        |
| `gridColumnTemplate`    | `string`            | Full CSS grid-template-columns override; bypasses all other sizing props |
| `cellVerticalAlignment` | `"center" \| "top"` | Default vertical alignment for all cells                                 |

### DataGridRow

| Prop         | Type                | Notes                                           |
| ------------ | ------------------- | ----------------------------------------------- |
| `isSelected` | `boolean`           | Persistent highlight background                 |
| `onClick`    | `MouseEventHandler` | Enables hover styling + row-level click handler |

### DataGridCell

| Prop                | Type                                                                             | Notes                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `colSpan`           | `number`                                                                         | Span across multiple columns                                                                                 |
| `textContain`       | `"truncate-end" \| "truncate-start" \| "break-word" \| "break-all" \| "no-wrap"` | Controls how text that exceeds the cell width is contained: ellipsis truncation, forced breaking, or no-wrap |
| `nowrap`            | `boolean`                                                                        | **Deprecated** — use `textContain="no-wrap"`. Applies `white-space: nowrap`                                  |
| `verticalAlignment` | `"center" \| "top"`                                                              | Overrides the DataGrid default for this cell                                                                 |

### DataGridHeadCell

| Prop          | Type                                                                             | Notes                                                                                                  |
| ------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `colSpan`     | `number`                                                                         | Span across multiple columns                                                                           |
| `textContain` | `"truncate-end" \| "truncate-start" \| "break-word" \| "break-all" \| "no-wrap"` | Controls how text that exceeds the cell width is contained; forwarded to the underlying `DataGridCell` |
| `nowrap`      | `boolean`                                                                        | **Deprecated** — use `textContain="no-wrap"`. Applies `white-space: nowrap`                            |

### DataGridToolbar

No props beyond `children` and `className`. Use only for Zone 2 and Zone 3.

### Structural pattern classes

| Class                          | Applied to                               |
| ------------------------------ | ---------------------------------------- |
| `juno-pattern-datagrid-outer`  | Outer `Stack` wrapping header + DataGrid |
| `juno-pattern-datagrid-header` | Inner `Stack` wrapping all header zones  |
