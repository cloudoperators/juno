# Page Footer structure

The `PageFooter` is a thin wrapper (`role="contentinfo"`). You structure its content with a set of
`juno-pagefooter-*` CSS classes that the component ships. The `copyright` prop renders a copyright
notice below the children; the children carry the links.

Per `docs/ux/page-footer.md`, use **inline links** for a few items, or **columns** (two or three)
for more structured content. Do not put primary navigation or actions here, and keep the content
stable across navigation.

## Available classes

From `PageFooter.component.tsx` JSDoc:

- `.juno-pagefooter-title` — a column title.
- `.juno-pagefooter-items` — a list of items (column layout).
- `.juno-pagefooter-items-inline` — a single-line list with pipe separators.
- `.juno-pagefooter-item` — an individual link/item.

## Inline links

```tsx
import { PageFooter } from "@cloudoperators/juno-ui-components"

function Footer() {
  return (
    <PageFooter copyright="© 2026 ACME Corporation. All rights reserved.">
      <ul className="juno-pagefooter-items-inline">
        <li>
          <a className="juno-pagefooter-item" href="/about">About</a>
        </li>
        <li>
          <a className="juno-pagefooter-item" href="/imprint">Imprint</a>
        </li>
        <li>
          <a className="juno-pagefooter-item" href="/terms">Terms of Use</a>
        </li>
      </ul>
    </PageFooter>
  )
}
```

## Columns

Group each column in a `<div role="group" aria-labelledby="...">` with a `.juno-pagefooter-title`
and a `.juno-pagefooter-items` list. Use two or three columns.

```tsx
import { PageFooter } from "@cloudoperators/juno-ui-components"

function Footer() {
  return (
    <PageFooter copyright="© 2026 ACME Corporation. All rights reserved.">
      <div role="group" aria-labelledby="footer-col1-title">
        <p className="juno-pagefooter-title" id="footer-col1-title">
          Company
        </p>
        <ul className="juno-pagefooter-items">
          <li>
            <a className="juno-pagefooter-item" href="/about">About</a>
          </li>
          <li>
            <a className="juno-pagefooter-item" href="/imprint">Imprint</a>
          </li>
        </ul>
      </div>
      <div role="group" aria-labelledby="footer-col2-title">
        <p className="juno-pagefooter-title" id="footer-col2-title">
          Legal
        </p>
        <ul className="juno-pagefooter-items">
          <li>
            <a className="juno-pagefooter-item" href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a className="juno-pagefooter-item" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </PageFooter>
  )
}
```

The `aria-labelledby` on each group, pointing at the title's `id`, keeps the columns accessible as
labeled groups (as shown in `PageFooter.stories.tsx`).
