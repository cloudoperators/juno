---
name: app-foundations
description: >
  Use when bootstrapping a Juno app or plugin with @cloudoperators/juno-ui-components: wiring the
  required provider so components render at all, loading the library CSS and your own styles,
  choosing or switching the dark/light theme, encapsulating styles in a Shadow DOM, and running
  the app embedded inside a host shell. Covers AppShellProvider (the recommended entry point) plus
  the primitives it composes — StyleProvider, PortalProvider, and ShadowRoot — and when to drop
  down to them. For the page layout container (header/nav/footer slots) see the AppShell layout
  skill; this skill is about the providers that must wrap it.
metadata:
  purpose: >
    Teaches developers to bootstrap a Juno application correctly: wrapping the app in a single
    AppShellProvider (which composes StyleProvider + PortalProvider, optionally inside a ShadowRoot),
    loading the component CSS where the chosen style/shadow mode requires it, selecting a theme, and
    adjusting the setup for standalone vs. Shadow-DOM-encapsulated vs. host-embedded deployment —
    the invisible plumbing that, if omitted, makes components silently fail to style or portal.
  type: core
  library: "@cloudoperators/juno-ui-components"
  library_version: "9.6.0"
sources:
  - cloudoperators/juno:packages/ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/AppShellProvider/AppShellProvider.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/StyleProvider/StyleProvider.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/StyleProvider/StyleProvider.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PortalProvider/PortalProvider.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/PortalProvider/PortalProvider.stories.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ShadowRoot/ShadowRoot.component.tsx
  - cloudoperators/juno:packages/ui-components/src/components/ShadowRoot/ShadowRoot.stories.tsx
  - cloudoperators/juno:docs/ux/the-appshell.md
  - cloudoperators/juno:docs/ux/getting-started-with-juno-ui-components.md
  - cloudoperators/juno:docs/ux/core-concepts.md
  - cloudoperators/juno:docs/ux/foundations.md
  - cloudoperators/juno:docs/ux/embedded-application-layout.md
---

# Bootstrap a Juno app: providers, theming, and embedding

Every Juno component needs styling context, a theme class, and a portal root before it can render
correctly. The library gives you one component that supplies all of this: **`AppShellProvider`**. It
composes three primitives for you — `StyleProvider` (styles + theme), `PortalProvider` (portal root
for `Modal`, `Select`, menus, etc.), and optionally a `ShadowRoot` (style encapsulation). You wrap
your whole app in it exactly once, at the root.

Starting without these building blocks is possible but costly: the UX guidance warns that an app
built from scratch without them "may result in the application or individual components not working
at all, or not rendering or working as expected" (`docs/ux/the-appshell.md`). Use `AppShellProvider`
as the entry point and only drop down to the individual providers when you have a specific reason
(documented under [standalone and advanced provider setups](references/providers-standalone.md)).

## Setup

Wrap the application once, at the root, and load your own styles as a child `<style>` element so
they land in the same (shadow) scope as the component styles:

```tsx
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { createRoot } from "react-dom/client"

declare const App: React.ComponentType
declare const appStyles: string // your bundled CSS, imported as a string

createRoot(document.getElementById("root")!).render(
  <AppShellProvider>
    {/* Load your app styles inside the same scope as the Juno styles */}
    <style>{appStyles}</style>
    <App />
  </AppShellProvider>
)
```

With no props, `AppShellProvider` renders the app inside a `ShadowRoot` (`shadowRoot` defaults to
`true`), applies the default dark theme (`theme` defaults to `"theme-dark"`), and injects the
component CSS **inline** inside that shadow root. This is the recommended default and the one used
in the getting-started guide (`docs/ux/getting-started-with-juno-ui-components.md`).

Do **not** nest a second `AppShellProvider`, `StyleProvider`, or `PortalProvider` inside this one —
one provider at the root is the whole contract.

## Core patterns

### Choose a theme

`AppShellProvider`'s `theme` prop is typed to exactly `"theme-dark" | "theme-light"`; dark is the
default. Set it once at the root:

```tsx
import { AppShellProvider } from "@cloudoperators/juno-ui-components"

declare const App: React.ComponentType

function Root() {
  return (
    <AppShellProvider theme="theme-light">
      <App />
    </AppShellProvider>
  )
}
```

The theme is applied as a CSS class on the provider's container element; Juno theming currently
works through CSS variables carried by that class (`docs/ux/core-concepts.md`, "Themeability").

To let the user toggle the theme at runtime (rather than fixing it at the root), use the
`StyleProvider.useStyles()` context hook, which exposes `currentTheme` and `setThemeClass`. That
only works for descendants of a `StyleProvider` (which `AppShellProvider` renders for you). See
[runtime theme switching](references/providers-standalone.md#runtime-theme-switching).

### Decide where the styles live: Shadow DOM vs. document

`AppShellProvider` has two props that together control style scoping. They interact, so set them as
a pair:

- `shadowRoot?: boolean` (default `true`) — render the app inside a `ShadowRoot` so Juno styles are
  isolated from the host page and vice versa.
- `stylesWrapper?: "head" | "inline"` (default `"inline"`) — where the component CSS is injected.
  **This is only honored when `shadowRoot` is `false`.** Inside a shadow root the styles must be
  inline (they cannot reach `document.head` through the shadow boundary), so the provider forces
  `"inline"` regardless of what you pass.

```tsx
import { AppShellProvider } from "@cloudoperators/juno-ui-components"

declare const App: React.ComponentType

// Standalone app, no shadow DOM, Juno styles injected into <head>:
function Root() {
  return (
    <AppShellProvider shadowRoot={false} stylesWrapper="head">
      <App />
    </AppShellProvider>
  )
}
```

Guidance:

- **Embedded in a host shell, or any page you don't fully control → keep `shadowRoot` (default
  `true`).** Encapsulation prevents the host's CSS from leaking into your components and vice versa,
  which matters for the micro-frontend / embedded model Juno supports
  (`docs/ux/core-concepts.md`, "Micro-Frontend Support").
- **Standalone app that owns the whole document → `shadowRoot={false}`** is fine, and
  `stylesWrapper="head"` keeps the DOM a little cleaner. `"inline"` also works standalone.

### Run embedded inside a host shell

A Juno app can run on its own or be mounted by a host ("Shell") app that embeds one or more child
apps (`docs/ux/embedded-application-layout.md`). The provider setup is the same either way — wrap in
`AppShellProvider` — but embedded apps should keep the Shadow DOM on so the host's styles stay out:

```tsx
import { AppShellProvider } from "@cloudoperators/juno-ui-components"

declare const App: React.ComponentType

// Mount point the host hands you; theme usually follows the host.
export default function mount(container: HTMLElement, theme: "theme-dark" | "theme-light") {
  return (
    <AppShellProvider shadowRoot theme={theme}>
      <App />
    </AppShellProvider>
  )
}
```

Embedding also changes **layout** (the embedded app hides its own page header because the host
renders one, per `docs/ux/embedded-application-layout.md`) — that is controlled by the `AppShell`
layout component's `embedded` prop, not by `AppShellProvider`. See the AppShell layout skill for
that. This skill only covers the provider wrapper.

### Render overlays through the portal

Because `AppShellProvider` includes `PortalProvider`, components that pop out of the normal flow —
`Modal`, `Select`, menus, date pickers — already have a portal root to render into, with a high
`z-index` so they stack above app content. You usually do nothing extra. When you build a _custom_
component that must portal (a bespoke popover, a positioned picker), reach the root with the
`usePortalRef` hook or the `PortalProvider.Portal` component:

```tsx
import { usePortalRef } from "@cloudoperators/juno-ui-components"
import { createPortal } from "react-dom"

function CustomPopover({ children }: { children: React.ReactNode }) {
  const portalRef = usePortalRef()
  if (!portalRef) return null
  return createPortal(children, portalRef)
}
```

`usePortalRef` returns `null` until the portal root exists, and warns to the console if it is called
outside a `PortalProvider` — which is the symptom of a missing `AppShellProvider` at the root. Read
[portals and the portal root](references/portals.md) when a portaled component renders in the wrong
place, is clipped, or stacks incorrectly.

## Common mistakes

- **CRITICAL — No provider at the root.** Rendering Juno components without wrapping the app in
  `AppShellProvider` (or the individual `StyleProvider` + `PortalProvider`) leaves components
  unstyled and breaks every portaled component (`Modal`, `Select`, menus). The UX guidance is
  explicit that skipping these building blocks can make components "not working at all, or not
  rendering or working as expected" (`docs/ux/the-appshell.md`). Always wrap once at the root.
- **CRITICAL — App styles loaded outside the provider's scope when using a Shadow DOM.** With the
  default `shadowRoot`, a global stylesheet linked in `document.head` does **not** cross the shadow
  boundary, so your own CSS silently does nothing. Load app styles as a `<style>` child _inside_
  `AppShellProvider`, as in Setup (`docs/ux/getting-started-with-juno-ui-components.md`).
- **HIGH — Expecting `stylesWrapper="head"` to work inside a Shadow DOM.** `stylesWrapper` is only
  honored when `shadowRoot={false}`; inside a shadow root styles are forced inline. To put styles in
  `<head>`, you must also set `shadowRoot={false}`.
- **HIGH — Nesting multiple providers.** Wrapping an already-provided subtree in another
  `AppShellProvider`/`StyleProvider`/`PortalProvider` creates duplicate theme containers and portal
  roots, causing double styling scopes and misplaced overlays. Provide exactly once, at the root.
- **MEDIUM — Invalid `theme` value.** `AppShellProvider` accepts only `"theme-dark"` or
  `"theme-light"`. An arbitrary string (e.g. `"dark"`) applies a class that no CSS variables match,
  leaving the app half-styled.
- **MEDIUM — Dropping the Shadow DOM for an embedded app.** Running embedded with
  `shadowRoot={false}` lets the host page's CSS bleed into your components. Keep encapsulation on
  when a host controls the surrounding document (`docs/ux/core-concepts.md`, "Micro-Frontend
  Support").

## Completion

Verify:

1. The app is wrapped in exactly one `AppShellProvider` (or one `StyleProvider` + `PortalProvider`
   pair) at the root — not nested, not duplicated.
2. Your own CSS is loaded where the chosen scoping puts it: inside the provider as a `<style>` child
   when a Shadow DOM is used; otherwise `<head>`/inline consistently.
3. `theme` is `"theme-dark"` or `"theme-light"` (or driven by the host when embedded).
4. A portaled component (`Modal` or `Select`) opens and renders above app content — proof the portal
   root exists.
5. Run `npm exec --no -- intent validate packages/ui-components/skills` and fix any errors.

If a deployment mode (standalone vs. embedded, light vs. dark) cannot be exercised in your harness,
report it as unverified rather than assuming it renders.

## References

- [standalone and advanced provider setups](references/providers-standalone.md) — read when you
  need the individual providers directly (`StyleProvider`, `PortalProvider`, `ShadowRoot`) instead
  of `AppShellProvider`, want runtime theme switching, or need the exact `stylesWrapper` /
  `shadowRootMode` matrix.
- [portals and the portal root](references/portals.md) — read when a portaled component (custom or
  built-in) renders in the wrong container, is clipped, warns about `usePortalRef`, or stacks behind
  other content.
