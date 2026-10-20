# PopupMenu composition

Read this for custom toggles, section headings, link items, menu sizing, and closing the menu from
custom content. Source: `packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx` and
`PopupMenu.stories.tsx`.

`PopupMenu` wraps Headless UI's `Menu` and renders its options into `PortalProvider.Portal`, so a
`PortalProvider` (via `AppShellProvider`) is mandatory. It tracks the open state internally; there is
no `open` prop. Use the `onOpen` / `onClose` handlers to react to state changes.

## Default toggle, icon, and sizing

With no `PopupMenuToggle` child, `PopupMenu` renders a default `moreVert` three-dot toggle. Change it
with `icon`, and set `menuSize="small"` for a denser menu:

```tsx
import { PopupMenu, PopupMenuOptions, PopupMenuItem } from "@cloudoperators/juno-ui-components"

function CompactMenu() {
  return (
    <PopupMenu icon="edit" menuSize="small">
      <PopupMenuOptions>
        <PopupMenuItem label="Rename" />
        <PopupMenuItem label="Duplicate" />
      </PopupMenuOptions>
    </PopupMenu>
  )
}
```

## Custom toggle via `as` or a child

Pass `as` on `PopupMenuToggle` to render a custom component as the toggle. The component **must**
forward its ref. If your component already renders its own button-like element, set
`as={React.Fragment}` to avoid a button-inside-a-button:

```tsx
import React, { forwardRef } from "react"
import {
  PopupMenu,
  PopupMenuToggle,
  PopupMenuOptions,
  PopupMenuItem,
  Button,
  ButtonProps,
} from "@cloudoperators/juno-ui-components"

const IconToggle = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} icon="moreVert" {...props} />
))
IconToggle.displayName = "IconToggle"

function RowActions() {
  return (
    <PopupMenu>
      <PopupMenuToggle as={IconToggle} title="More actions" />
      <PopupMenuOptions>
        <PopupMenuItem label="View Details" />
        <PopupMenuItem label="Edit" />
      </PopupMenuOptions>
    </PopupMenu>
  )
}
```

A custom toggle receives the forwarded `ref` and the toggle props (including click handling and ARIA
attributes), so it renders and behaves as the menu's trigger. The hook that exposes the live `isOpen`
state and a programmatic `close` is internal to the package and not part of the public API, so style
the toggle from the props it is given rather than reading menu state directly.

## Sections, headings, and dividers

Group items with `PopupMenuSection`, label a group with `PopupMenuSectionHeading`, and separate
groups with `PopupMenuSectionSeparator`. Use grouping only when it aids scanning — for short menus
(4–5 items) dividers add noise (`docs/ux/popup-and-overflow-menus.md`, "Grouping"). For a
multi-entity menu, group by entity type; within a group the destructive item is last with **no**
extra divider before it (the group dividers already separate it):

```tsx
import {
  PopupMenu,
  PopupMenuOptions,
  PopupMenuSection,
  PopupMenuSectionHeading,
  PopupMenuSectionSeparator,
  PopupMenuItem,
} from "@cloudoperators/juno-ui-components"

function BucketMenu() {
  return (
    <PopupMenu>
      <PopupMenuOptions>
        <PopupMenuSection>
          <PopupMenuSectionHeading label="Bucket" />
          <PopupMenuItem label="View Bucket" />
          <PopupMenuItem label="Edit Bucket" />
          <PopupMenuItem label="Delete Bucket" icon="deleteForever" />
        </PopupMenuSection>
        <PopupMenuSectionSeparator />
        <PopupMenuSection>
          <PopupMenuSectionHeading label="Policy" />
          <PopupMenuItem label="View Policy" />
          <PopupMenuItem label="Delete Policy" icon="deleteForever" />
        </PopupMenuSection>
      </PopupMenuOptions>
    </PopupMenu>
  )
}
```

## Link items

Render an item as an anchor with `as="a"` plus `href` (and optional `target`, `rel`):

```tsx
import { PopupMenu, PopupMenuOptions, PopupMenuItem } from "@cloudoperators/juno-ui-components"

function LinkMenu() {
  return (
    <PopupMenu>
      <PopupMenuOptions>
        <PopupMenuItem as="a" href="https://github.com/cloudoperators/juno" label="Open on GitHub" />
        <PopupMenuItem as="a" href="https://www.sap.com" target="_blank" icon="openInNew" label="sap.com" />
      </PopupMenuOptions>
    </PopupMenu>
  )
}
```

## Closing from custom content

Non-`PopupMenuItem` content inside the menu does not auto-close it, and the context hook that exposes
`close` is internal to the package — it is not part of the public API. For an action that must close
the menu, use a `PopupMenuItem`: selecting one closes the menu automatically, and its `onClick`
handler runs your logic. Wrap any extra non-interactive content around it:

```tsx
import { PopupMenu, PopupMenuOptions, PopupMenuItem } from "@cloudoperators/juno-ui-components"

function MenuWithCustomContent() {
  const applyFilter = () => {
    // run your logic here; the menu closes automatically on select
  }

  return (
    <PopupMenu>
      <PopupMenuOptions>
        <p>Apply the current filter?</p>
        <PopupMenuItem label="Apply" onClick={applyFilter} />
      </PopupMenuOptions>
    </PopupMenu>
  )
}
```

Label items so the action is unambiguous and the referenced entity is clear — prefer "Edit Item XYZ"
over "Edit" when context is not obvious (`docs/ux/popup-and-overflow-menus.md`, "When using a
PopupMenu, always make sure").
