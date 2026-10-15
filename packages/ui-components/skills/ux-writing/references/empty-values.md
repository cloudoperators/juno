# Empty values and the ID fall-back

Source: `docs/ux/ux-writing-content-design.md`, "Rendering Empty or Unknown Values" and "Names as
Identifiers: Fall Back to the ID". Read this before rendering a missing value in a Name column, a
detail-view title, a breadcrumb, or a verbatim metadata list.

## The base rule: render "- -"

When a field has no value — not set, not available, or unknown — render **two hyphens separated by
a space: `- -`**.

The space matters: many editors apply "smart" typography and silently turn `--` into an en dash as
you type. The space between the two hyphens prevents that substitution.

Do **not** use:

- `–` (en dash) or `—` (em dash) — visually similar but semantically wrong, and often introduced
  automatically by tooling.
- `--` (adjacent hyphens) — may be transformed by formatters.
- `N/A` or `n/a` — avoid unless it is a firmly established convention in that specific context.

```tsx
import { DescriptionList, DescriptionTerm, DescriptionDefinition } from "@cloudoperators/juno-ui-components"

const EMPTY_VALUE = "- -"

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <DescriptionList>
      <DescriptionTerm>{label}</DescriptionTerm>
      <DescriptionDefinition>{value || EMPTY_VALUE}</DescriptionDefinition>
    </DescriptionList>
  )
}
```

## The exception: name-like identifiers fall back to the ID

For a field that serves as a human-readable, human-assigned **name** for an item, do not render
`- -` when the name is missing — display the item's **ID** instead. The ID stays unique, stable, and
linkable, so the user can still identify, reference, and share the item. Rendering `- -` here would
make items indistinguishable.

Apply this in these positions:

- **Name column in a DataGrid** — show the ID in place of the missing name.
- **Detail-view page title** — use the ID as the title.
- **Breadcrumb segment** — use the ID as the segment label.

```tsx
import { DataGrid, DataGridRow, DataGridCell, DataGridHeadCell } from "@cloudoperators/juno-ui-components"

type Item = { id: string; name?: string | null }

function NameColumn({ items }: { items: Item[] }) {
  return (
    <DataGrid columns={1}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
      </DataGridRow>
      {items.map((item) => (
        <DataGridRow key={item.id}>
          {/* Missing name -> fall back to the ID, not "- -" */}
          <DataGridCell>{item.name || item.id}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  )
}
```

### Sub-exception: a visible ID column flips it back to "- -"

If the DataGrid **already has a dedicated, visible ID column**, do not repeat the ID in the Name
column — the item is already identifiable, and duplicating the ID is redundant and confusing. In
that case use `- -` in the Name column.

```tsx
import { DataGrid, DataGridRow, DataGridCell, DataGridHeadCell } from "@cloudoperators/juno-ui-components"

type Row = { id: string; name?: string | null }

const EMPTY_VALUE = "- -"

function WithIdColumn({ rows }: { rows: Row[] }) {
  return (
    <DataGrid columns={2}>
      <DataGridRow>
        <DataGridHeadCell>ID</DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
      </DataGridRow>
      {rows.map((row) => (
        <DataGridRow key={row.id}>
          <DataGridCell>{row.id}</DataGridCell>
          {/* ID is already visible, so a missing name shows "- -" */}
          <DataGridCell>{row.name || EMPTY_VALUE}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  )
}
```

## Verbatim metadata display: always "- -"

When rendering an item's **raw metadata as-is** — e.g. a `<dl>` that shows every stored property —
do **not** substitute the ID for a missing name. Use `- -`. The purpose of verbatim display is to
reflect what is actually stored; substituting the ID would imply a name exists when it does not.

Display the fallback value with no extra decoration beyond what a normal value in that position
would receive.
