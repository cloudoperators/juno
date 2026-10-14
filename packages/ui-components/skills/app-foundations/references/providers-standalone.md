# Standalone and advanced provider setups

Read this when you cannot use `AppShellProvider` as-is and need the individual providers it
composes, when you want to switch themes at runtime, or when you need the exact `stylesWrapper` /
`shadowRootMode` behavior. Sources:
`packages/ui-components/src/components/StyleProvider/StyleProvider.component.tsx`,
`packages/ui-components/src/components/ShadowRoot/ShadowRoot.component.tsx`,
`packages/ui-components/src/components/PortalProvider/PortalProvider.component.tsx`,
`docs/ux/foundations.md`, `docs/ux/core-concepts.md`.

## What `AppShellProvider` actually renders

`AppShellProvider` is a thin composition. With `shadowRoot` on it renders:

```
ShadowRoot(mode=shadowRootMode)
  └─ StyleProvider(theme, stylesWrapper="inline")
       └─ PortalProvider
            └─ your children
```

With `shadowRoot={false}` the `ShadowRoot` wrapper is dropped and `StyleProvider` uses the
`stylesWrapper` you passed (`"head"` or `"inline"`). This is why you only need the primitives
directly in unusual cases — the default composition already covers standalone and embedded apps.

## Assembling the providers by hand

If you must build the stack yourself (e.g. you want a non-standard nesting, or to interleave your
own context), replicate the same order — styles outside, portal inside:

```tsx
import { StyleProvider, PortalProvider } from "@cloudoperators/juno-ui-components"

declare const App: React.ComponentType

function Root() {
  return (
    <StyleProvider theme="theme-dark" stylesWrapper="head">
      <PortalProvider>
        <App />
      </PortalProvider>
    </StyleProvider>
  )
}
```

Keep `PortalProvider` **inside** `StyleProvider` so portaled content is still inside the themed
container. This hand-rolled form is the "do it yourself" path the UX guidance warns is higher-cost
than `AppShellProvider` (`docs/ux/the-appshell.md`); prefer the provider unless you have a concrete
reason.

## `StyleProvider` on its own

`StyleProvider` manages styles and theming. Its props:

- `theme?: string` — the theme class name. Defaults to `"theme-dark"` (`DEFAULT_THEME_NAME`).
  Unlike `AppShellProvider`, this prop is a plain `string`, so pass a real theme class.
- `stylesWrapper?: "head" | "inline" | "shadowRoot"` — where styles go. Default `"inline"`.
  `"head"` injects into `document.head`; `"inline"` renders a `<style>` next to the content;
  `"shadowRoot"` wraps the content in a `ShadowRoot` and inlines styles there (a backwards-compat
  convenience — prefer composing `ShadowRoot` explicitly or using `AppShellProvider`).
- `shadowRootMode?: "open" | "closed"` — only relevant when `stylesWrapper="shadowRoot"`.
- `children?: ReactNode`.

```tsx
import { StyleProvider } from "@cloudoperators/juno-ui-components"

function ThemedWidget({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider theme="theme-light" stylesWrapper="inline">
      {children}
    </StyleProvider>
  )
}
```

### Runtime theme switching

`StyleProvider` exposes a context via the static `StyleProvider.useStyles()` hook. It returns
`{ styles, currentTheme, setThemeClass, addCssClass, removeCssClass }`. Call `setThemeClass` with a
theme class name to switch the theme live (it also persists to local storage under `"juno-theme"`):

```tsx
import { StyleProvider } from "@cloudoperators/juno-ui-components"

function ThemeToggle() {
  const { currentTheme, setThemeClass } = StyleProvider.useStyles()
  return (
    <button
      onClick={() =>
        setThemeClass(currentTheme === "theme-dark" ? "theme-light" : "theme-dark")
      }
    >
      Toggle theme (now {currentTheme})
    </button>
  )
}
```

`useStyles()` only works for descendants of a `StyleProvider` (which `AppShellProvider` renders), so
a theme toggle must live inside the provided subtree.

## `ShadowRoot` on its own

`ShadowRoot` attaches a shadow DOM to a host `<div>` and portals its children into it, isolating
styles. Props:

- `mode?: "open" | "closed"` — default `"open"`. Use `"closed"` to prevent styles being inherited
  from the parent node.
- `delegatesFocus?: boolean` — default `false`.
- `children?: ReactNode`.

```tsx
import { ShadowRoot } from "@cloudoperators/juno-ui-components"

function IsolatedBox() {
  return (
    <ShadowRoot mode="closed">
      <h1>Welcome</h1>
    </ShadowRoot>
  )
}
```

Note: `ShadowRoot` by itself does **not** inject Juno styles — put a `StyleProvider` (with
`stylesWrapper="inline"`) inside it, or just use `AppShellProvider`, which wires both together.

## The `stylesWrapper` / `shadowRoot` matrix

| Goal | `AppShellProvider` props |
| --- | --- |
| Default: isolated, inline styles | *(none)* — `shadowRoot` true, inline forced |
| Standalone, styles in `<head>` | `shadowRoot={false} stylesWrapper="head"` |
| Standalone, inline styles, no isolation | `shadowRoot={false} stylesWrapper="inline"` |
| Closed shadow root | `shadowRootMode="closed"` |

`stylesWrapper` is ignored while `shadowRoot` is `true` (styles cannot cross the shadow boundary
into `document.head`, so they are always inlined inside the shadow root).
