# Pagination variants and callbacks

Read this when wiring a specific `Pagination` variant or dealing with its backward-compatible
`pages` prop. Source: `Pagination.component.tsx`;
`docs/ux/page-and-user-flow.md` ("List Views") for where paged lists appear.

`Pagination` is a controlled component. You own `currentPage` and `totalPages` and update them from
the callbacks. It always renders a previous and a next `Button`; what sits between them depends on
`variant`.

## Common props

- `currentPage?: number` — the active page.
- `totalPages?: number` — total page count. (`pages?: number` is a backward-compatible alias; if
  both are set, `pages` wins. Prefer `totalPages` in new code.)
- `disabled?: boolean` — disables the whole control.
- `progress?: boolean` — shows a spinner in place of the indicator and disables the buttons.
- `isFirstPage?` / `isLastPage?: boolean` — force the previous/next button disabled regardless of
  `currentPage`.

The previous button auto-disables when `currentPage === 1`; the next button auto-disables when
`currentPage === totalPages`. `disabled` and `progress` disable both.

## variant="default" — buttons only

```tsx
import { useState } from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

function Pager({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useState(1)
  return (
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPressPrevious={() => setPage((p) => Math.max(1, p - 1))}
      onPressNext={() => setPage((p) => Math.min(totalPages, p + 1))}
    />
  )
}
```

`onPressPrevious`/`onPressNext` also receive the computed next page as their argument
(`(newPage?: number) => void`), so you can use that instead of recomputing.

## variant="number" — shows the current page

Same callbacks as `default`; the current page number renders between the buttons. No extra wiring.

## variant="select" — page dropdown

Renders a `Select` listing every page `1..totalPages`. Handle `onSelectChange`, which receives the
chosen page as a `number`.

```tsx
import { useState } from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

function SelectPager({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useState(1)
  return (
    <Pagination
      variant="select"
      currentPage={page}
      totalPages={totalPages}
      onPressPrevious={() => setPage((p) => Math.max(1, p - 1))}
      onPressNext={() => setPage((p) => Math.min(totalPages, p + 1))}
      onSelectChange={(selected) => setPage(selected)}
    />
  )
}
```

## variant="input" — manual page entry

Renders a `TextInput` plus an "of N" label. The component clamps the entered value to
`1..totalPages` internally. Three callbacks apply:

- `onInputChange?: (inputValue?: number) => void` — fires on every keystroke (already clamped).
- `onKeyPress?: (controlCurrentPage?: number) => void` — fires on Enter, with the current value.
- `onBlur?: (controlCurrentPage?: number) => void` — fires when the field loses focus.

Commit the page on Enter or blur rather than on every keystroke:

```tsx
import { useState } from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

function InputPager({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useState(1)
  const [draft, setDraft] = useState<number | undefined>(1)
  const commit = (value?: number) => {
    if (value !== undefined) setPage(value)
  }
  return (
    <Pagination
      variant="input"
      currentPage={page}
      totalPages={totalPages}
      onInputChange={(value) => setDraft(value)}
      onKeyPress={() => commit(draft)}
      onBlur={() => commit(draft)}
      onPressPrevious={() => setPage((p) => Math.max(1, p - 1))}
      onPressNext={() => setPage((p) => Math.min(totalPages, p + 1))}
    />
  )
}
```

## Loading state

While a page is being fetched, set `progress`. The indicator is replaced by a spinner and both
buttons are disabled, preventing rapid double-steps during the request.
