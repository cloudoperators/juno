# DataGrid bulk selection model

Read this before wiring row selection and a tri-state select-all checkbox. The component library
provides `Checkbox` but does not implement the selection state machine — you own it. Source:
`docs/ux/datagrid.md` ("Zone 3: DataGrid View/State, Bulk Actions, Refresh"; "Column Order,
Structure, and Layout"; "Selecting Rows / Items").

## Rules

- The selection checkbox column is **first (leftmost)**.
- The select-all checkbox is **tri-state**:
  - unchecked when no rows are selected,
  - `indeterminate` when some are selected,
  - checked when all are selected.
- Clicking select-all while unchecked **or** indeterminate selects all rows; clicking while checked
  deselects all.
- Bulk-action controls are **disabled until at least one row is selected**.

## Worked example

```tsx
import { useState } from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  DataGridToolbar,
  Checkbox,
  Button,
} from "@cloudoperators/juno-ui-components"

type ImageItem = { id: string; name: string; status: string }
declare function deleteImages(ids: string[]): void

function SelectableImagesTable({ images }: { images: ImageItem[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const allSelected = images.length > 0 && selected.size === images.length
  const someSelected = selected.size > 0 && !allSelected

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(images.map((i) => i.id)))
  }

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const COLUMNS = 3

  return (
    <>
      <DataGridToolbar>
        <Checkbox
          checked={allSelected}
          indeterminate={someSelected}
          onChange={toggleAll}
          aria-label="Select all images"
        />
        <Button
          disabled={selected.size === 0}
          onClick={() => deleteImages([...selected])}
        >
          Delete selected
        </Button>
      </DataGridToolbar>

      <DataGrid columns={COLUMNS} minContentColumns={[0]}>
        <DataGridRow>
          <DataGridHeadCell>{/* checkbox column */}</DataGridHeadCell>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
        </DataGridRow>
        {images.map((image) => (
          <DataGridRow key={image.id}>
            <DataGridCell>
              <Checkbox
                checked={selected.has(image.id)}
                onChange={() => toggleOne(image.id)}
                aria-label={`Select ${image.name}`}
              />
            </DataGridCell>
            <DataGridCell>{image.name}</DataGridCell>
            <DataGridCell>{image.status}</DataGridCell>
          </DataGridRow>
        ))}
      </DataGrid>
    </>
  )
}
```

## Notes

- `indeterminate` is a visual state only; it never submits as a value. Derive it from counts as
  shown (`someSelected`), do not store it.
- Give every checkbox an `aria-label` — the checkbox column header is intentionally empty, so the
  per-row checkboxes have no visible label to associate with.
- Keep the selection source of truth (`Set` of ids here) separate from the row data so sorting and
  filtering the rows does not drop the selection.
