# Grid vs Stack

Both arrange children, but they solve different problems.

- **`Stack`** — a flexbox row or column of a handful of items with a uniform `gap`. Reach for it
  for toolbars, button groups, form field rows, and any single-axis arrangement.
- **`Grid` / `GridRow` / `GridColumn`** — Juno's responsive **12-column fluid grid** for true page
  layouts where columns span fractions of the width and wrap responsively.

## Stack details

`Stack` props (all optional):

- `direction`: `"horizontal"` (default) | `"vertical"`.
- `gap`: one of a fixed set of Tailwind spacing tokens — `"0"`, `"px"`, `"0.5"`, `"1"`, `"1.5"`,
  `"2"` … up to `"96"`. Arbitrary values are not allowed; pick from the token list.
- `alignment` (cross axis): `"start"` | `"end"` | `"center"` | `"baseline"` | `"stretch"` (default).
- `distribution` (main axis): `"start"` (default) | `"end"` | `"center"` | `"between"` | `"around"`
  | `"evenly"`.
- `wrap`: `boolean` — allow children to wrap.

```tsx
import { Stack, Button } from "@cloudoperators/juno-ui-components"

function Toolbar() {
  return (
    <Stack direction="horizontal" gap="2" distribution="between" alignment="center" wrap>
      <span>5 items</span>
      <Stack gap="2">
        <Button variant="subdued" label="Refresh" />
        <Button variant="primary" label="Create" />
      </Stack>
    </Stack>
  )
}
```

A vertical `Stack` swaps the axes: `alignment` then controls horizontal alignment and `distribution`
the vertical distribution.

## Grid details

- `Grid` wraps `GridRow`s; each `GridRow` wraps `GridColumn`s.
- `GridColumn` width:
  - `cols={n}` — span `n` of 12 columns (valid 1–12; out-of-range falls back to the default width).
  - `width={n}` — an exact percentage width. **`width` overrides `cols`.**
  - `auto` — size to share remaining space equally.
- `Grid auto` — makes every contained column auto-size equally, overriding the 12-column default;
  columns with `cols={n}` switch to auto-sizing too (`Grid.stories.tsx`).

```tsx
import { Grid, GridRow, GridColumn } from "@cloudoperators/juno-ui-components"

function PageLayout() {
  return (
    <Grid>
      <GridRow>
        <GridColumn cols={3}>Nav</GridColumn>
        <GridColumn cols={9}>Content</GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={50}>Half</GridColumn>
        <GridColumn width={50}>Half</GridColumn>
      </GridRow>
    </Grid>
  )
}
```

### Equal columns with `auto`

```tsx
import { Grid, GridRow, GridColumn } from "@cloudoperators/juno-ui-components"

function EqualColumns() {
  return (
    <Grid auto>
      <GridRow>
        <GridColumn>A</GridColumn>
        <GridColumn>B</GridColumn>
        <GridColumn>C</GridColumn>
      </GridRow>
    </Grid>
  )
}
```

## Choosing

- One row or one column of items, uniform gap → `Stack`.
- A page split into proportional, responsive columns → `Grid`.
- Do not nest a `Grid` just to place two buttons side by side — that is a `Stack`.
