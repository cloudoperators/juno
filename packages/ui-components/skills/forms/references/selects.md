# Choosing and wiring Juno selects

Read this when deciding between `Select`, `NativeSelect`, and `ComboBox`, or when you need
multi-select, option groups, dividers, or loading/error states. Grounded in `Select.component.tsx`,
`NativeSelect.component.tsx`, `ComboBox.component.tsx`, and their option children.

## Which one

- **`Select`** — Juno-styled dropdown. Use for most desktop forms. Supports `multiple`, semantic
  `variant`s, a `loading` spinner, truncation, and an `error` state for failed option loading.
  Options are `SelectOption` children; group them visually with `SelectDivider`.
- **`NativeSelect`** — a real `<select>`. Best when native behaviour matters (mobile, long lists,
  minimal JS). No `label` prop and no auto `id` — label it with a standalone `Label htmlFor`.
  Children are `NativeSelectOption`, grouped with `NativeSelectOptionGroup`.
- **`ComboBox`** — dropdown the user can type into to filter. Use when the option list is long and
  type-ahead filtering helps. Children are `ComboBoxOption`.

## Select — single and multiple

`Select.onChange` receives the selected value(s), not a DOM event. For `multiple`, pass an array as
`value`/`defaultValue` and expect an array back.

```tsx
import { useState } from "react"
import { Select, SelectOption, SelectDivider } from "@cloudoperators/juno-ui-components"

function RegionSelect() {
  const [region, setRegion] = useState<string>()
  return (
    <Select
      name="region"
      label="Region"
      value={region}
      onChange={(v) => setRegion(v as string)}
      required
    >
      <SelectOption value="eu-de-1">EU (Germany)</SelectOption>
      <SelectOption value="eu-nl-1">EU (Netherlands)</SelectOption>
      <SelectDivider />
      <SelectOption value="us-east-1">US (East)</SelectOption>
    </Select>
  )
}
```

```tsx
import { useState } from "react"
import { Select, SelectOption } from "@cloudoperators/juno-ui-components"

function TagsSelect() {
  const [tags, setTags] = useState<string[]>([])
  return (
    <Select
      name="tags"
      label="Tags"
      multiple
      value={tags}
      onChange={(v) => setTags((v as string[]) ?? [])}
    >
      <SelectOption value="prod">Production</SelectOption>
      <SelectOption value="staging">Staging</SelectOption>
      <SelectOption value="dev">Development</SelectOption>
    </Select>
  )
}
```

### Loading and operational errors

Use `loading` while fetching options and `error` (not `invalid`) when the fetch failed — `invalid`
is reserved for negative validation of the chosen value:

```tsx
import { Select, SelectOption } from "@cloudoperators/juno-ui-components"

type Props = { regions: string[]; isLoading: boolean; failed: boolean }

function RemoteRegionSelect({ regions, isLoading, failed }: Props) {
  return (
    <Select
      name="region"
      label="Region"
      loading={isLoading}
      error={failed}
      errortext={failed ? "Could not load regions." : undefined}
    >
      {regions.map((r) => (
        <SelectOption key={r} value={r}>
          {r}
        </SelectOption>
      ))}
    </Select>
  )
}
```

## NativeSelect with option groups

```tsx
import { Label, NativeSelect, NativeSelectOption, NativeSelectOptionGroup } from "@cloudoperators/juno-ui-components"

function ZoneSelect() {
  return (
    <>
      <Label text="Zone" htmlFor="zone" />
      <NativeSelect id="zone" name="zone">
        <NativeSelectOptionGroup label="Europe">
          <NativeSelectOption value="eu-de-1" label="EU (Germany)" />
          <NativeSelectOption value="eu-nl-1" label="EU (Netherlands)" />
        </NativeSelectOptionGroup>
        <NativeSelectOptionGroup label="Americas">
          <NativeSelectOption value="us-east-1" label="US (East)" />
        </NativeSelectOptionGroup>
      </NativeSelect>
    </>
  )
}
```

`NativeSelectOption` takes `label` and `value` (both `string | number`); it has no boolean children
API — pass the display text via `label`.

## ComboBox — type to filter

`ComboBox.onChange` reports the selected value as a string; `onInputChange` fires on each keystroke
in the text field. Children are `ComboBoxOption` with a `value` and display `children`/`label`.

```tsx
import { useState } from "react"
import { ComboBox, ComboBoxOption } from "@cloudoperators/juno-ui-components"

const VEGETABLES = ["Rhubarb", "Carrots", "Spinach", "Tomatoes", "Cucumbers", "Eggplant"]

function VegetablePicker() {
  const [value, setValue] = useState<string>()
  return (
    <ComboBox name="vegetable" label="Vegetable" value={value} onChange={(v) => setValue(v)}>
      {VEGETABLES.map((name) => (
        <ComboBoxOption key={name} value={name}>
          {name}
        </ComboBoxOption>
      ))}
    </ComboBox>
  )
}
```

Like `Select`, `ComboBox` supports `loading`, `error`+`errortext` for operational failures, and
`invalid`+`errortext` for negative validation of the chosen value.

## Notes

- `Select`, `NativeSelect`, and `ComboBox` all auto-generate an `id` except `NativeSelect`, which
  does not — give it an explicit `id` when labelling.
- In controlled mode, if your options use human-readable labels distinct from their submitted
  `value`, also pass `valueLabel` to `Select`/`ComboBox` so the toggle renders the right text.
