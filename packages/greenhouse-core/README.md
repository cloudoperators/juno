<!--
SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
SPDX-License-Identifier: Apache-2.0
-->

# @cloudoperators/greenhouse-core

Shared plugin **contract** and mount helper for Greenhouse. A Greenhouse plugin is a micro-frontend that Greenhouse loads at runtime; each plugin exports a single `plugin: PluginModule` value, and the shell calls `plugin.mount(container, { props })` / `plugin.unmount()` on it. This package ships the versioned types describing that contract plus one helper that produces the contract shape correctly.

## What it provides

Importable from `@cloudoperators/greenhouse-core`:

- **`PluginModule`** (type) — the shape of the `plugin` value every plugin exports: `mount` / `unmount`. The Greenhouse host types its loader against this.
- **`PluginProps`** (type) — the props Greenhouse passes to a plugin's root App component. In this iteration it pins only `theme` and `embedded`. Everything else Greenhouse forwards at mount (router values, auth, plugin-specific `appProps`) is the host's convention and does not live on the contract — a plugin that reads those fields declares them on its own `AppProps extends PluginProps`. There is no index signature: `props.somethingTypoed` is a type error, not a silent `unknown`.
- **`MountOptions<P>`** (type) — the `options` argument of `mount`, carrying `props?: P`.
- **`createPluginMount(App)`** — returns `{ mount, unmount }` typed as `PluginModule`. Centralises the `createRoot` lifecycle (and idempotent re-mount) each plugin would otherwise hand-write. A plugin's entry file collapses to a single `export const plugin = createPluginMount(App)`.

## Why this surface

The contract types are the single versioned source of truth that both plugins and the Greenhouse host import — a contract change surfaces as a `pnpm typecheck` error at the exact consuming site.

`createPluginMount` is the one helper that earns its keep: the three in-tree plugins (supernova/doop/heureka) and any new plugin share the exact same `createRoot` → `render` → `unmount` pattern. Centralising it means mount fixes reach every plugin via a `pnpm update` with no file edits.

**Plugins expose a single `plugin: PluginModule` export, not individual `mount` / `unmount`.** The goal is that **adding methods to `PluginModule` later does not require editing a single plugin** — the shell adapts, every plugin's `export const plugin = …` already carries the full new shape.

Further conveniences (an AppShell wrapper, a Vite config factory) stayed out of this iteration — those encode opinions about chrome and build tooling that haven't been pressure-tested across real plugins yet.

## How to use

### Plugin entry point

```ts
// src/index.tsx (or .ts)
import { createPluginMount } from "@cloudoperators/greenhouse-core"
import App from "./App"

// The whole plugin surface is a single `PluginModule` value. If the shared contract grows new
// methods in the future, this file stays unchanged — the shell is the only side that has to adapt.
export const plugin = createPluginMount(App)
```

### Plugin App

```tsx
// src/App.tsx
import type { PluginProps } from "@cloudoperators/greenhouse-core"

// Declare your plugin-specific appProps (whatever your Greenhouse config forwards as `props`).
// `extends PluginProps` keeps `theme` and `embedded`; add the fields your plugin reads yourself —
// anything you don't declare is a type error on access.
export interface AppProps extends PluginProps {
  title?: string
  description?: string
}

export default function App(props: AppProps) {
  // Build your UI however you want — AppShellProvider, your own router, your own styles.
  return null
}
```

A plugin that needs a different mount shape (custom root bootstrapping, a non-React tree, …) can skip `createPluginMount` and hand-write `export const plugin: PluginModule = { … }` directly.

### Declaring a plugin's module shape

A plugin's `src/types/index.d.ts` declares the shape of its ES module so the Greenhouse host can type-check its dynamic imports. Each plugin writes its own small declaration:

```ts
import type { PluginModule } from "@cloudoperators/greenhouse-core"

declare module "@cloudoperators/juno-app-<name>" {
  export const plugin: PluginModule
}
```

Then point the plugin's `package.json#exports[".types"]` at that file:

```json
{
  "exports": {
    ".": {
      "types": "./src/types/index.d.ts",
      "default": "./build/index.js"
    }
  }
}
```

This declaration is **not** cross-checked against `src/index.{ts,tsx}` by `tsc` — a plugin that renames its `plugin` export would still compile. The declaration's job is to give the host a typed binding for `await import("@cloudoperators/juno-app-<name>")`; the real safety against a plugin shipping an incompatible bundle lives in runtime validation at the host (future work, tracked separately), not in this file.

Vite's ambient types (needed for `?inline` CSS imports, `import.meta.env`, …) belong in the plugin's `tsconfig.json#compilerOptions.types` — add `"vite/client"` there.

### From the Greenhouse host

The host dynamically imports a plugin bundle and reads its single `plugin` export:

```ts
import type { PluginModule } from "@cloudoperators/greenhouse-core"

const plugin: PluginModule = (await import("@cloudoperators/juno-app-<name>")).plugin
plugin.mount(container, { props })
```

For in-tree plugins the `await import(...)` is typed via each plugin's `types/index.d.ts`. For externally-hosted plugins (future, loaded via dynamic URL) the host casts the result to `{ plugin: PluginModule }` and validates at runtime.

## In this monorepo

The three in-tree plugins — supernova, doop, heureka — all use `createPluginMount` and import `PluginModule` / `MountOptions` from this package. Their `src/index.{ts,tsx}` is the one-line `export const plugin = createPluginMount(App)` pattern shown above.

## License

Apache-2.0
