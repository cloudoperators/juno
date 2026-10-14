# Second-level bars: TopNavigation vs TabBar

Read this when you need a horizontal navigation bar above the content as a second-level navigation,
and have to choose between `TopNavigation` and `TabBar` and wire the active item correctly. Both
wrap the internal `Navigation` component and share its active-item model. Sources:
`TopNavigation.component.tsx`, `TopNavigationItem.component.tsx`, `TabBar.component.tsx`,
`TabBarItem.component.tsx`, `Navigation.component.tsx`;
`docs/ux/navigation-fundamentals.md` ("Alternative Second-Level Navigations"),
`docs/ux/navigation-side-navigation.md` ("Alternative Second-Level Navigation").

## When to use a second-level bar at all

Only when a second navigation level will not fit as nested `SideNavigationItem` children — for
example, the second level has many entries or needs a distinct visual treatment. The bar must
visually read as a child of the currently selected top-level side-nav entry.

## Which component

- `TabBar` + `TabBarItem` — the current, non-deprecated choice. Prefer this for new work. It takes an
  `appearance` prop: `"main"` for the first bar in an AppShell, `"content"` for a bar inside page
  content (which adds a darkened bottom border on inactive tabs). Defaults to `"main"`.
- `TopNavigation` + `TopNavigationItem` — a horizontal top-level bar placed below the app header but
  above content. Same active-item model; items also accept an `icon`.

Both are thin wrappers over `Navigation`, so they expose the same props: `activeItem`,
`onActiveItemChange`, `disabled`, `ariaLabel`, and children items with `label`, `value`, `href`,
`onClick`, `disabled`, `icon`.

## How the active item resolves

`activeItem` on the parent is matched against each child in this priority order (from
`Navigation.component.tsx`, `findItemIdByKeyValue` + `NavigationItem` `theKey = value || children || label`):

1. `value` prop of the item, if present
2. the item's child string
3. the item's `label`

So if an item has a `value`, you **must** set `activeItem` to that `value` — not its label. If an
item has no `value`, use its exact label (or child string). An `activeItem` matching nothing leaves
every item unhighlighted. The `activeItem` on the parent overrides any `active` prop on an
individual child.

## Controlled example (TabBar)

```tsx
import { useState } from "react"
import { TabBar, TabBarItem } from "@cloudoperators/juno-ui-components"

declare function navigate(to: string): void

type View = "overview" | "metrics" | "logs"

function ServerDetailTabs({ initial }: { initial: View }) {
  const [active, setActive] = useState<View>(initial)
  return (
    <TabBar
      appearance="content"
      ariaLabel="Server detail sections"
      activeItem={active}
      onActiveItemChange={(item) => {
        const next = String(item) as View
        setActive(next)
        navigate(`/servers/${next}`)
      }}
    >
      <TabBarItem label="Overview" value="overview" />
      <TabBarItem label="Metrics" value="metrics" />
      <TabBarItem label="Logs" value="logs" />
    </TabBar>
  )
}
```

## Controlled example (TopNavigation)

```tsx
import { useState } from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"

function AppSections() {
  const [active, setActive] = useState("servers")
  return (
    <TopNavigation
      ariaLabel="Sections"
      activeItem={active}
      onActiveItemChange={(item) => setActive(String(item))}
    >
      <TopNavigationItem label="Servers" value="servers" icon="dns" />
      <TopNavigationItem label="Networks" value="networks" icon="place" />
      <TopNavigationItem label="Images" value="images" icon="autoAwesomeMotion" />
    </TopNavigation>
  )
}
```

## Disabling

Set `disabled` on the parent (`TabBar`/`TopNavigation`) to disable every child at once, or on an
individual item to disable just that one. A disabled item does not fire `onActiveItemChange`.

## Links vs. handlers

Give an item `href` to render it as an `<a>` (hard navigation), or `onClick` to render it as a
`<button>` and run your own router. Either way, keep `activeItem` in sync so the correct tab shows
as active after navigation.

## Accessibility

Both render a `role="navigation"` landmark. When a view has more than one navigation landmark (e.g.
the side nav plus a second-level bar), give each a distinct `ariaLabel`.
