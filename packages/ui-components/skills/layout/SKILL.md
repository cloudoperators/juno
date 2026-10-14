---
name: layout
description: >
  Use when building the overall page structure of a Juno app with
  @cloudoperators/juno-ui-components: wrapping the app in AppShellProvider, scaffolding the shell
  with AppShell (page header, side/top navigation, content area, page footer), running in embedded
  mode for micro-frontends, and arranging content inside the content area with ContentHeading,
  ContentAreaToolbar, Grid/GridRow/GridColumn, Stack, Container, Box, IntroBox, and Divider. For
  the data table that usually fills a list page, see the datagrid skill; for the navigation items
  themselves, see the navigation skill.
metadata:
  purpose: >
    Teaches developers to assemble a UX-compliant Juno page: the mandatory AppShellProvider wrapper
    plus the AppShell page frame (header, content area, footer) that the UX guidelines require on
    every page, when to drop to the manual AppBody/MainContainer primitives, how embedded mode
    changes the frame for micro-frontends, and how to lay out the content area with the Grid, Stack,
    Container, Box, IntroBox, and Divider primitives.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/AppShell/AppShell.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/AppShell/AppShell.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/AppBody/AppBody.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Container/Container.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ContentContainer/ContentContainer.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/MainContainer/MainContainer.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/HeaderContainer/HeaderContainer.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PageHeader/PageHeader.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PageFooter/PageFooter.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PageFooter/PageFooter.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ContentHeading/ContentHeading.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ContentAreaToolbar/ContentAreaToolbar.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Grid/Grid.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/GridRow/GridRow.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/GridColumn/GridColumn.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Stack/Stack.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Box/Box.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/IntroBox/IntroBox.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/Divider/Divider.component.tsx
  - cloudoperators/juno:docs/ux/juno-layout.md
  - cloudoperators/juno:docs/ux/the-appshell.md
  - cloudoperators/juno:docs/ux/layout-fundamentals.md
  - cloudoperators/juno:docs/ux/page-header.md
  - cloudoperators/juno:docs/ux/page-content-area.md
  - cloudoperators/juno:docs/ux/page-footer.md
  - cloudoperators/juno:docs/ux/page-layout-elements.md
  - cloudoperators/juno:docs/ux/embedded-application-layout.md
  - cloudoperators/juno:docs/ux/box.md
---

# Build the page layout and app shell of a Juno app

Every Juno application has the same stable frame: a **Page Header** at the top, a **Page Content
Area** in the middle, and a **Page Footer** at the bottom (`docs/ux/page-layout-elements.md`). You
almost never assemble that frame by hand — two components give it to you:

- `AppShellProvider` — the outermost wrapper. It supplies theming, CSS variables, the shadow root,
  and the portal context that every other component depends on. Without it, styles do not apply.
- `AppShell` — the page frame itself. It renders the header, a main content area (with optional
  side/top navigation), and the footer in the correct markup positions, each via a named slot.

Reach for the lower-level primitives (`AppBody`, `MainContainer`, `ContentContainer`, …) only when
you deliberately opt out of `AppShell`; the UX guidance calls that "significantly more effort" and
warns the app may not render correctly (`docs/ux/the-appshell.md`).

## Setup

Wrap the whole app in `AppShellProvider`, then scaffold the frame with `AppShell`. Pass the page
title either as a string (rendered as the application name in the default header) or as your own
`PageHeader`. Content goes in `children`.

```tsx
import {
  AppShellProvider,
  AppShell,
  Container,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"

function App() {
  return (
    <AppShellProvider theme="theme-dark">
      <AppShell pageHeader="My App">
        <Container py>
          <ContentHeading>Dashboard</ContentHeading>
          <p>Content goes here.</p>
        </Container>
      </AppShell>
    </AppShellProvider>
  )
}
```

`AppShell` already renders a default `PageHeader` and `PageFooter` when you pass neither, so the
mandatory three-part frame (`docs/ux/layout-fundamentals.md`) is present out of the box. Wrap your
own content in a `Container` to get the standard horizontal padding (`px` defaults to `true`); add
`py` for vertical padding too.

## Core patterns

### Add side and/or top navigation

Primary navigation belongs in the `sideNavigation` slot, left of the content — "New applications
should always use a Side Navigation adjacent to the left of the actual content"
(`docs/ux/juno-layout.md`, "Main Content Area"). `topNavigation` is an additional slot rendered in
the header area. Both are plain `ReactNode` slots; pass the navigation components from the
navigation skill.

```tsx
import { AppShell, SideNavigation, SideNavigationItem } from "@cloudoperators/juno-ui-components"

declare function navigate(to: string): void

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      pageHeader="My App"
      sideNavigation={
        <SideNavigation>
          <SideNavigationItem label="Overview" onClick={() => navigate("/")} />
          <SideNavigationItem label="Settings" onClick={() => navigate("/settings")} />
        </SideNavigation>
      }
    >
      {children}
    </AppShell>
  )
}
```

### Customize the Page Header

The header's left side identifies the app (logo + application name); its right side holds global
options that must not change as the user navigates (`docs/ux/page-header.md`). Pass children for the
right-side options area, and make the logo/name interactive with `href` or `onClick` so it links
home.

```tsx
import { AppShell, PageHeader, Button } from "@cloudoperators/juno-ui-components"

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      pageHeader={
        <PageHeader applicationName="My App" href="/">
          <Button variant="subdued" icon="autoAwesomeMotion" />
          <Button label="Sign out" />
        </PageHeader>
      }
    >
      {children}
    </AppShell>
  )
}
```

Keep both logo and application name visible — hiding both leaves users without orientation
(`docs/ux/page-header.md`). `logo` defaults to the Juno logo; pass a React element for a custom one
or `logo={false}` to hide just the logo. The deprecated `heading` prop is superseded by
`applicationName`.

### Fill in the Page Footer

The footer carries secondary, site-wide links and legal info — never primary navigation or actions
(`docs/ux/page-footer.md`). Use inline links for a few items, or two/three columns for more, plus an
optional `copyright`. The footer ships CSS classes for this structure.

```tsx
import { AppShell, PageFooter } from "@cloudoperators/juno-ui-components"

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      pageHeader="My App"
      pageFooter={
        <PageFooter copyright="© 2026 ACME">
          <ul className="juno-pagefooter-items-inline">
            <li>
              <a className="juno-pagefooter-item" href="/imprint">Imprint</a>
            </li>
            <li>
              <a className="juno-pagefooter-item" href="/terms">Terms of Use</a>
            </li>
          </ul>
        </PageFooter>
      }
    >
      {children}
    </AppShell>
  )
}
```

See [page-footer structure](references/page-footer.md) for the two/three-column markup and the full
list of `juno-pagefooter-*` classes.

### Structure the content area

Inside `children`, the UX guidance orders the content area as: breadcrumb → page heading → toolbar →
main content (`docs/ux/page-content-area.md`). Use `ContentHeading` for the page title and
`ContentAreaToolbar` for page-level actions (it is right-aligned by default).

```tsx
import {
  Container,
  ContentHeading,
  ContentAreaToolbar,
  Button,
} from "@cloudoperators/juno-ui-components"

declare function openCreate(): void

function ListPage() {
  return (
    <Container py>
      <ContentHeading>Instances</ContentHeading>
      <ContentAreaToolbar>
        <Button variant="primary" label="Create instance" onClick={openCreate} />
      </ContentAreaToolbar>
      {/* main content: a DataGrid, detail panel, etc. */}
    </Container>
  )
}
```

`ContentAreaToolbar` holds page-context actions (create, view details). Do not confuse it with the
`DataGridToolbar` that lives inside a grid for search/filter/bulk actions — see the datagrid skill.

### Arrange blocks with Stack

`Stack` is the go-to flexbox primitive for laying out a handful of elements in a row or column with
a consistent `gap`. `direction` is `"horizontal"` (default) or `"vertical"`; `alignment` controls
the cross axis, `distribution` the main axis. `gap` accepts a fixed set of Tailwind spacing tokens
(e.g. `"2"`, `"4"`, `"8"`).

```tsx
import { Stack, Button } from "@cloudoperators/juno-ui-components"

function FormActions() {
  return (
    <Stack direction="horizontal" gap="2" distribution="end" alignment="center">
      <Button variant="subdued" label="Cancel" />
      <Button variant="primary" label="Save" />
    </Stack>
  )
}
```

### Lay out a responsive grid

`Grid` is Juno's 12-column fluid grid. Put `GridRow`s inside it and `GridColumn`s inside those. A
column spans `cols={n}` (1–12) of the twelve columns, or an exact `width={n}` percentage (which
overrides `cols`). Pass `auto` on the `Grid` to make every column share space equally instead.

```tsx
import { Grid, GridRow, GridColumn } from "@cloudoperators/juno-ui-components"

function TwoThirdsLayout() {
  return (
    <Grid>
      <GridRow>
        <GridColumn cols={8}>Main</GridColumn>
        <GridColumn cols={4}>Sidebar</GridColumn>
      </GridRow>
    </Grid>
  )
}
```

Use `Grid` for a true multi-column page layout; use `Stack` for a single row/column of items. See
[grid vs stack](references/grid-and-stack.md) for the `auto`, `width`, and nesting rules.

### Set content apart with Box, IntroBox, and Divider

- `Box` — a lightweight bordered container for annotations and supplementary notes. Optional `title`
  and a semantic `variant` (`info` | `success` | `warning` | `error` | `danger`). It is **not** for
  system feedback — use `Message` for operation results and errors (`docs/ux/box.md`).
- `IntroBox` — a prominent block introducing the purpose or state of a page; `variant="hero"` for a
  larger treatment, with an optional `heroImage` CSS background string.
- `Divider` — a 1px horizontal separator with adjustable `spacing`.

```tsx
import { IntroBox, Box, Divider } from "@cloudoperators/juno-ui-components"

function Intro() {
  return (
    <>
      <IntroBox title="Welcome" text="Manage your cloud instances from here." />
      <Box variant="warning" title="Maintenance">
        A scheduled maintenance window starts at 22:00 UTC.
      </Box>
      <Divider spacing="4" />
    </>
  )
}
```

For the Inline Action Box pattern (a `Box` with a `Divider` and right-aligned actions), see
[box patterns](references/box-patterns.md).

## Embedded mode (micro-frontends)

When your app runs inside a host shell, pass `embedded` to `AppShell`. In embedded mode the host
renders the chrome, so **the embedded app's own Page Header and Page Footer are not rendered** —
only the content and the app's own navigations (`docs/ux/embedded-application-layout.md`). Content
also defaults to full width in embedded mode.

```tsx
import { AppShell, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"

function EmbeddedApp({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      embedded
      topNavigation={
        <TopNavigation>
          <TopNavigationItem icon="home" label="Home" />
          <TopNavigationItem active label="Instances" />
        </TopNavigation>
      }
    >
      {children}
    </AppShell>
  )
}
```

`fullWidthContent` controls the width constraint: it defaults to full width when `embedded`, and to
constrained (centered at the 2xl breakpoint) otherwise. Pass it explicitly to override the default.

## Manual layout without AppShell

Only when you cannot use `AppShell` (e.g. a bespoke frame), assemble the primitives yourself:
`AppBody` → `HeaderContainer` → `MainContainer` → `MainContainerInner` → `ContentContainer`. You are
then responsible for wiring the slots `AppShell` would have wired. Read
[manual layout primitives](references/manual-layout.md) before doing this — and remember the parent
`AppShellProvider` is still mandatory.

## Common mistakes

- **CRITICAL — No `AppShellProvider` at the root.** Rendering `AppShell`, `DataGrid`, or any
  component without an enclosing `AppShellProvider` means no theme, CSS variables, portals, or
  shadow root, so styles do not apply and components may not work at all (`docs/ux/the-appshell.md`,
  warning box). Wrap the app once at the top.
- **CRITICAL — Hiding both logo and application name in the header.** This leaves users with no
  orientation and is strongly discouraged. Keep at least the application name visible
  (`docs/ux/page-header.md`, "Left side").
- **HIGH — Hand-rolling the header/footer frame instead of using `AppShell`.** The manual primitives
  exist, but skipping `AppShell` and forgetting a provider or container is the documented failure
  mode (`docs/ux/page-layout-elements.md`, "Using AppShell"). Prefer `AppShell`.
- **HIGH — Putting navigation or primary actions in the Page Footer.** The footer is for secondary,
  site-wide links and legal info only, and must not change as users navigate
  (`docs/ux/page-footer.md`, "What Goes in the Footer").
- **HIGH — Rendering a Page Header/Footer in embedded mode.** The host already renders the chrome;
  the embedded app must not duplicate it. Use `embedded` so `AppShell` drops them
  (`docs/ux/embedded-application-layout.md`).
- **MEDIUM — Using `Box` for system feedback.** Operation results, errors, and status changes belong
  in `Message`, not `Box`; `Box` is for annotations and supplementary notes (`docs/ux/box.md`,
  "When to Use Box").
- **MEDIUM — Options in the header that change during navigation.** Right-side header options are
  global and must stay stable across the app so users always find them (`docs/ux/page-header.md`,
  "Right side").

## Completion

Verify:

1. The app is wrapped once in `AppShellProvider`, and the page frame comes from `AppShell` (or, if
   manual, every container plus the provider is present).
2. In a standard (non-embedded) app the Page Header and Page Footer are both present; in embedded
   mode neither is rendered.
3. The header keeps the application name (and ideally logo) visible, and right-side options are
   global and stable.
4. The content area follows heading → toolbar → main content, with page-level actions in
   `ContentAreaToolbar`.
5. `Box` is used only for annotations (not system feedback); the footer holds only secondary links.
6. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

## References

- [page-footer structure](references/page-footer.md) — read for the inline / two / three-column
  markup and the full `juno-pagefooter-*` class list.
- [grid vs stack](references/grid-and-stack.md) — read when choosing between `Grid` and `Stack` or
  wiring `cols`/`width`/`auto` and nested rows.
- [box patterns](references/box-patterns.md) — read before building an Inline Action Box or picking
  a `Box` / `IntroBox` variant.
- [manual layout primitives](references/manual-layout.md) — read only if you must assemble the frame
  without `AppShell`.
