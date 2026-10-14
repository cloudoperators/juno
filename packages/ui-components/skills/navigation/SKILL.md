---
name: navigation
description: >
  Use when building navigation in a Juno app with @cloudoperators/juno-ui-components: the primary
  left SideNavigation (flat items, groups, nested children up to three levels, active + controlled
  expansion), a horizontal TopNavigation or TabBar as a second-level navigation above content,
  a Breadcrumb trail back to list views, in-page tabbed content (deprecated Tabs/TabList/TabPanel
  and MainTabs), and Pagination for paged lists. For the DataGrid that fills a list view, see the
  datagrid skill; for the AppShell that frames the whole layout, see the fundamentals skill.
metadata:
  purpose: >
    Teaches developers to pick the right Juno navigation primitive for each level of an app —
    SideNavigation for top-level, TopNavigation/TabBar for second-level, Breadcrumb for the path
    back, Tabs for in-page content, Pagination for paged lists — and to wire the active-item and
    controlled-expansion state the components leave to the app, following the UX rules on depth,
    icon placement, and the "navigation vs. filtering" distinction.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/SideNavigation/SideNavigation.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SideNavigation/SideNavigation.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SideNavigationItem/SideNavigationItem.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/SideNavigationList/SideNavigationList.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TopNavigation/TopNavigation.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TopNavigationItem/TopNavigationItem.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Navigation/Navigation.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/NavigationItem/NavigationItem.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Breadcrumb/Breadcrumb.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/BreadcrumbItem/BreadcrumbItem.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TabBar/TabBar.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/TabBarItem/TabBarItem.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Tabs/Tabs.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Pagination/Pagination.component.tsx
  - cloudoperators/juno:docs/ux/navigation-fundamentals.md
  - cloudoperators/juno:docs/ux/navigation-side-navigation.md
  - cloudoperators/juno:docs/ux/navigation.md
  - cloudoperators/juno:docs/ux/page-and-user-flow.md
---

# Build navigation in a Juno app

Juno layers navigation by scope. The **SideNavigation** is the primary top-level navigation — a
fixed left column present in every view (`docs/ux/navigation-side-navigation.md`, "When to Use the
Side Navigation"). When a second level will not fit as nested items, a horizontal **TopNavigation**
or **TabBar** sits above the content as a child of the active top-level entry. A **Breadcrumb**
gives the user the path back from a detail view to its list. **Tabs** switch content _inside_ a
single view, and **Pagination** steps through a paged list.

Pick the component by what the user is doing, not by how it looks:

- Moving between app sections/views → `SideNavigation` (top level), `TopNavigation`/`TabBar` (second level).
- Returning up the hierarchy from a detail page → `Breadcrumb`.
- Swapping content panels within one view → `Tabs`/`MainTabs` (deprecated — see note below) or a `TabBar` wired to your own router.
- Filtering the same entity set → **not** navigation; use a DataGrid toolbar (see the datagrid skill).

## Setup: the SideNavigation

A `SideNavigation` wraps a single `SideNavigationList`, which contains `SideNavigationItem`s and
optional `SideNavigationGroup`s. An item becomes a link when given `href`, or a button when given
`onClick`. Mark the current view with `selected`.

```tsx
import { SideNavigation, SideNavigationList, SideNavigationItem } from "@cloudoperators/juno-ui-components"

function AppNav({ path }: { path: string }) {
  return (
    <SideNavigation ariaLabel="Main">
      <SideNavigationList>
        <SideNavigationItem icon="home" label="Home" href="/" selected={path === "/"} />
        <SideNavigationItem icon="dns" label="Servers" href="/servers" selected={path === "/servers"} />
        <SideNavigationItem icon="place" label="Networks" href="/networks" selected={path === "/networks"} />
      </SideNavigationList>
    </SideNavigation>
  )
}
```

Prefer a flat list unless the content genuinely needs hierarchy. `icon` (a Juno `KnownIcons` name)
is honored **only at the first level** — nested children never render an icon
(`docs/ux/navigation-side-navigation.md`, "Item Labels and Icons").

## Core patterns

### Group related top-level items

A `SideNavigationGroup` renders a non-navigable section header that expands/collapses its children.
Use it to organize a large top-level set — never a single group wrapping everything.

```tsx
import {
  SideNavigation,
  SideNavigationList,
  SideNavigationGroup,
  SideNavigationItem,
} from "@cloudoperators/juno-ui-components"

function GroupedNav() {
  return (
    <SideNavigation ariaLabel="Main">
      <SideNavigationList>
        <SideNavigationGroup label="Compute" open>
          <SideNavigationItem label="Servers" href="/servers" />
          <SideNavigationItem label="Images" href="/images" />
        </SideNavigationGroup>
        <SideNavigationGroup label="Network">
          <SideNavigationItem label="Networks" href="/networks" />
          <SideNavigationItem label="Subnets" href="/subnets" />
        </SideNavigationGroup>
      </SideNavigationList>
    </SideNavigation>
  )
}
```

### Nest items up to three levels

A `SideNavigationItem` with `SideNavigationItem` children renders an expand chevron. The chevron is
a **separate control** from the item's navigation action — clicking the label navigates, clicking
the chevron toggles the sub-list. Do not exceed three levels
(`docs/ux/navigation-side-navigation.md`, "Structure and Depth").

```tsx
import { SideNavigationItem } from "@cloudoperators/juno-ui-components"

function Nested() {
  return (
    <SideNavigationItem label="Messages">
      <SideNavigationItem label="Inbox" href="/inbox" />
      <SideNavigationItem label="Sent Items" href="/sent" />
    </SideNavigationItem>
  )
}
```

### Expand the group containing the active route (controlled)

`open` on a group/item is both the initial value _and_ a controlled value — the component re-syncs
to it whenever the parent updates. `onToggle` receives the next open state. On page load, open the
branch holding the active route so the active child stays visible
(`docs/ux/navigation-side-navigation.md`, "Active and Disabled States", "Controlled vs. Uncontrolled
Expansion").

```tsx
import { useState } from "react"
import { SideNavigationGroup, SideNavigationItem } from "@cloudoperators/juno-ui-components"

function ControlledGroup({ path }: { path: string }) {
  const [open, setOpen] = useState(path.startsWith("/compute"))
  return (
    <SideNavigationGroup label="Compute" open={open} onToggle={setOpen}>
      <SideNavigationItem label="Servers" href="/compute/servers" selected={path === "/compute/servers"} />
      <SideNavigationItem label="Images" href="/compute/images" selected={path === "/compute/images"} />
    </SideNavigationGroup>
  )
}
```

### Add a second-level navigation above the content

When a second level will not fit as nested side-nav items, place a horizontal bar above the content
that visibly belongs to the active top-level entry (`docs/ux/navigation-fundamentals.md`,
"Alternative Second-Level Navigations"; `docs/ux/navigation-side-navigation.md`, "Alternative
Second-Level Navigation"). Two components do this; both track the active item by `value` (falling
back to `label` or the child string) via `activeItem` on the parent.

`TabBar` is the current, non-deprecated choice. Use `appearance="main"` for the first bar in an
AppShell, `appearance="content"` for a bar inside page content.

```tsx
import { useState } from "react"
import { TabBar, TabBarItem } from "@cloudoperators/juno-ui-components"

declare function navigate(to: string): void

function ServerTabs() {
  const [active, setActive] = useState("overview")
  return (
    <TabBar
      appearance="content"
      activeItem={active}
      onActiveItemChange={(item) => {
        setActive(String(item))
        navigate(`/servers/${item}`)
      }}
    >
      <TabBarItem label="Overview" value="overview" />
      <TabBarItem label="Metrics" value="metrics" />
      <TabBarItem label="Logs" value="logs" />
    </TabBar>
  )
}
```

`TopNavigation`/`TopNavigationItem` is the equivalent horizontal bar with the same `activeItem` /
`value` / `onActiveItemChange` model and an optional `icon` per item. Read
[second-level bars: TopNavigation vs TabBar](references/second-level-bars.md) to choose between them
and to see the active-item resolution rules (value → children → label).

### Give the user a path back with a Breadcrumb

Every detail page must let the user return to its list view — provide a breadcrumb reflecting the
navigational path (and a back button), not just the browser back button
(`docs/ux/page-and-user-flow.md`, "Detail Views"). `Breadcrumb` auto-inserts chevron separators
between its `BreadcrumbItem` children. An item is a link with `href`, a button with `onClick`, and a
non-interactive current-page marker with `active`.

```tsx
import { Breadcrumb, BreadcrumbItem } from "@cloudoperators/juno-ui-components"

function ServerCrumb({ id }: { id: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbItem icon="home" label="Home" href="/" />
      <BreadcrumbItem label="Servers" href="/servers" />
      <BreadcrumbItem label={id} active />
    </Breadcrumb>
  )
}
```

Mark exactly the last (current) item `active`; it renders as a `<span aria-current="page">`, not a
link.

### Page through a list with Pagination

`Pagination` renders previous/next buttons plus an optional page indicator chosen by `variant`:
`"default"` (buttons only), `"number"` (shows the current page), `"select"` (a page dropdown), or
`"input"` (a page entry field). It is controlled — pass `currentPage` and `totalPages`, and update
them from the callbacks (`onPressPrevious`, `onPressNext`, `onSelectChange`, `onInputChange`).

```tsx
import { useState } from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

function PagedList({ totalPages }: { totalPages: number }) {
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

The buttons disable themselves at the bounds (page 1 / last page) and whenever `disabled` or
`progress` is set; `progress` also swaps the indicator for a spinner. Read
[Pagination variants and callbacks](references/pagination.md) for the per-variant callback wiring
(the `input` variant's `onKeyPress`/`onBlur`, the legacy `pages` alias).

## In-page tabbed content (Tabs is deprecated)

The `Tabs` / `TabList` / `Tab` / `TabPanel` set and `MainTabs` are **deprecated** and may be removed
in a future major release (see each component's `@deprecated` JSDoc). They wrap `react-tabs`. For
new work, use `react-tabs` directly, or a `TabBar` wired to your router/state for the tab headers.
If you must maintain existing `Tabs` code, read
[legacy Tabs/TabList/TabPanel/MainTabs](references/legacy-tabs.md) for the controlled
`selectedIndex`/`onSelect` pattern and the index-correspondence rule.

## Common mistakes

- **CRITICAL — Using the SideNavigation for filtering or in-page sections.** The side nav is for
  distinct app views only; do not drive secondary filtering or content organization within one view
  from it. Filter the same entity set in a DataGrid toolbar; switch content panels with Tabs/TabBar.
  (`docs/ux/navigation-side-navigation.md`, "When to Use the Side Navigation".)
- **CRITICAL — No way back from a detail page.** Shipping a detail view without a breadcrumb (and
  back button) strands users who did not arrive via an in-app link. Always render a `Breadcrumb`
  reflecting the path. (`docs/ux/page-and-user-flow.md`, "Detail Views".)
- **HIGH — More than three navigation levels.** Deeper hierarchies are unscannable and signal an
  information-architecture problem. Keep the side nav at three levels max; prefer flat.
  (`docs/ux/navigation-side-navigation.md`, "Structure and Depth".)
- **HIGH — `activeItem` not matching any item's identifier.** `TabBar`/`TopNavigation` resolve the
  active item by `value`, then child string, then `label`. If you set `activeItem` to a value no
  item carries, nothing is highlighted. Use each item's `value` (or its exact `label`). (TabBar/
  TopNavigation source; `docs/ux/navigation-side-navigation.md`, "Active and Disabled States".)
- **HIGH — Collapsing the branch that holds the active route.** When a parent/group contains the
  active child, keep it expanded (control `open`) so the current location stays visible.
  (`docs/ux/navigation-side-navigation.md`, "Active and Disabled States".)
- **MEDIUM — Icons on nested items or icons without labels.** Icons render only at the first side-nav
  level and must never replace the text label. (`docs/ux/navigation-side-navigation.md`, "Item Labels
  and Icons".)
- **MEDIUM — More than one item marked active, or none.** Exactly one item represents the user's
  current location. (`docs/ux/navigation-side-navigation.md`, "Anatomy", "Active and Disabled
  States".)
- **MEDIUM — Reaching for deprecated `Tabs`/`MainTabs` in new code.** They are slated for removal; use
  `react-tabs` directly or a `TabBar`. (Tabs/MainTabs `@deprecated` JSDoc.)
- **MEDIUM — Missing `ariaLabel` with multiple nav landmarks.** `SideNavigation`/`TopNavigation`/
  `TabBar` render a `role="navigation"` landmark; when a view has more than one, give each a distinct
  `ariaLabel`. (`docs/ux/navigation-side-navigation.md`, "Accessibility".)

## Completion

Verify:

1. Exactly one `SideNavigationItem` is `selected`, matching the current route.
2. If groups/nested items exist, the branch containing the active route is expanded on load.
3. Any `TabBar`/`TopNavigation` `activeItem` equals a real item `value`/`label`, so one tab is highlighted.
4. Every detail view renders a `Breadcrumb` whose last item is `active` and whose earlier items link back.
5. `Pagination` is controlled (`currentPage`/`totalPages` wired to callbacks) and new code avoids deprecated `Tabs`/`MainTabs`.
6. Each `role="navigation"` landmark on a view has a distinct `ariaLabel` when more than one is present.
7. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a navigation state (active route, controlled expansion) cannot be exercised in your harness,
report it as unverified rather than assuming it renders.

## References

- [second-level bars: TopNavigation vs TabBar](references/second-level-bars.md) — read when choosing a
  horizontal second-level bar and wiring its active item.
- [Pagination variants and callbacks](references/pagination.md) — read when wiring a specific
  Pagination variant or the backward-compatible `pages` prop.
- [legacy Tabs/TabList/TabPanel/MainTabs](references/legacy-tabs.md) — read only when maintaining
  existing deprecated Tabs code.
