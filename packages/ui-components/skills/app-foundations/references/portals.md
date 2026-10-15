# Portals and the portal root

Read this when a portaled component — a built-in `Modal`/`Select`/menu, or a custom one you wrote —
renders in the wrong place, is clipped by an ancestor's `overflow`, stacks behind other content, or
logs a `usePortalRef must be called inside a PortalProvider` warning. Source:
`packages/ui-components/src/components/PortalProvider/PortalProvider.component.tsx`,
`packages/ui-components/src/components/PortalProvider/PortalProvider.Portal.component.tsx`,
`packages/ui-components/src/components/PortalProvider/PortalProvider.stories.tsx`.

## What `PortalProvider` provides

`PortalProvider` renders a single portal-root `<div>` (class `juno-portal-root`, id defaults to
`"juno-portal-root"`) with a very high `z-index` (9999) and `position: absolute`. Everything that
needs to escape normal flow — modals, select dropdowns, menus, date pickers — portals into this
root so it stacks above app content regardless of ancestor `overflow`/`z-index`.

`AppShellProvider` already includes `PortalProvider`, so in a correctly bootstrapped app you get
this for free. You interact with it only when writing your own portaled component.

Props:

- `className?: string` — extra class on the portal-root container.
- `id?: string` — id of the portal-root container (default `"juno-portal-root"`).
- `children?: ReactNode`.

## Two ways to portal custom content

### `usePortalRef` hook

`usePortalRef()` creates a dedicated portal container inside the portal root and returns its DOM
node (or `null` until it is ready). Use it with React's `createPortal`, or hand it to components
that take a positioning reference element (e.g. a Flatpickr/date picker):

```tsx
import { usePortalRef } from "@cloudoperators/juno-ui-components"
import { createPortal } from "react-dom"

function CustomMenu({ children }: { children: React.ReactNode }) {
  const portalRef = usePortalRef()
  if (!portalRef) return null // not ready, or no PortalProvider above
  return createPortal(children, portalRef)
}
```

If called outside a `PortalProvider`, `usePortalRef` warns to the console and returns `null` — the
tell-tale sign that the app is missing its `AppShellProvider` (or `PortalProvider`) at the root.

### `PortalProvider.Portal` component

For a declarative wrapper, render children through `PortalProvider.Portal`; it portals them into the
root for you:

```tsx
import { PortalProvider } from "@cloudoperators/juno-ui-components"

function Overlay({ children }: { children: React.ReactNode }) {
  return <PortalProvider.Portal>{children}</PortalProvider.Portal>
}
```

Both approaches render into the same high-`z-index` root, so multiple portals coexist (see the
`MultiplePortals` story).

## Troubleshooting

- **Component renders inline / clipped instead of on top** → it is not portaling, usually because
  there is no `PortalProvider` ancestor. Confirm the app is wrapped in `AppShellProvider`.
- **`usePortalRef` warning in the console** → same cause: the hook ran outside a `PortalProvider`.
  Wrap the root; do not add a second `PortalProvider` deep in the tree.
- **Overlay stacks behind other UI** → something in the app sets a `z-index` above 9999, or the
  content was rendered without the portal. Portal it (hook or `PortalProvider.Portal`) rather than
  bumping z-indexes.
- **Returns `null` on first render** → expected. `usePortalRef` is `null` until the portal container
  mounts; guard with `if (!portalRef) return null` as shown.
