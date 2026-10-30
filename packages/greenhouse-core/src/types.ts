/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Props Greenhouse passes to every plugin at mount time — the host↔plugin contract surface.
 *
 * This mirrors the shape produced by `apps/greenhouse/src/hooks/usePluginLoader.ts` at its
 * `app.mount(container, { props: ... })` call. Keeping it here (not in the host) makes it the single
 * versioned source of truth that both the plugin and the Greenhouse host import — so a change to
 * what every plugin can rely on surfaces as a `pnpm typecheck` error at the consuming site.
 *
 * **Scope.** `PluginProps` pins only what EVERY plugin must be able to assume regardless of stack
 * choice: `theme` and `embedded`. Host-side forwarded fields (routing values, auth, plugin-specific
 * `appProps`) are DELIBERATELY not here — they are the host's convention, not the contract. A
 * plugin that reads them declares them on its own `AppProps extends PluginProps { … }`.
 *
 * This separation matters: changing the fields the host happens to forward (e.g. renaming
 * `basePath` or adding a new field) is a change inside `apps/greenhouse`, not a change to this
 * contract. It does NOT require bumping `greenhouse-core`, publishing it, and asking every plugin
 * to update.
 *
 * There is no index signature. If a plugin reads `props.somethingNotDeclared`, that is a type
 * error, not a silent `unknown`.
 */
export interface PluginProps {
  /** Greenhouse-provided theme name. Defaults to `theme-dark` when the plugin runs standalone. */
  theme?: "theme-dark" | "theme-light"
  /** `true` while rendered inside the Greenhouse shell, `false`/absent when running standalone. */
  embedded?: boolean
}

/**
 * Options accepted by a plugin's `mount` function.
 *
 * `P` defaults to the shared `PluginProps` but is relaxed to `extends object` — React's actual
 * requirement for a component's props type — so a plugin's own `AppProps` (a plain object type
 * without an index signature) can be used as `MountOptions<AppProps>` without needing to inherit
 * an index signature.
 */
export interface MountOptions<P extends object = PluginProps> {
  /** Props Greenhouse passes to the plugin's root React component. */
  props?: P
}

/**
 * The shape every Greenhouse plugin exports — the contract Greenhouse's plugin loader calls.
 *
 * A plugin's `src/index.tsx` typically exports a `mount` / `unmount` pair built with
 * `createRoot(container).render(…)`; typing that export as `satisfies PluginModule` catches drift
 * at `pnpm typecheck` time rather than at runtime. The Greenhouse host imports the same type to
 * describe the module it loads, so one definition covers both sides.
 */
export interface PluginModule {
  /**
   * Mount the plugin's React tree into `container`. Called once per plugin instance.
   *
   * `HTMLElement` matches the container type Greenhouse actually passes
   * (`containerRef.current` in `apps/greenhouse/src/hooks/usePluginLoader.ts`), and is the type the
   * existing core plugins (supernova/doop/heureka) already declare — so widening this would break
   * contravariant assignability at the loader's call site.
   */
  mount: (_container: HTMLElement, _options?: MountOptions) => void | Promise<void>
  /** Tear down the plugin's React tree. Called when Greenhouse unmounts the plugin. */
  unmount: () => void
}
