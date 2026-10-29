---
"@cloudoperators/greenhouse-core": minor
---

feat(greenhouse-core): add private workspace package shared by the shell and plugins

Introduces `@cloudoperators/greenhouse-core` as a new **private** workspace package. It is the shared ground between the Greenhouse shell app (`apps/greenhouse`) and the plugins — the single versioned source of truth both sides import, so compatibility is enforced by the type system rather than by convention. In this iteration it ships:

- `PluginModule` — the shape of the `plugin` value every plugin exports (`mount` / `unmount`).
- `PluginProps` — the props Greenhouse passes to a plugin's root App component. Pins only `theme` and `embedded` for now; a plugin that reads other mount-time fields (router values, auth, plugin-specific `appProps`) declares them on its own `AppProps extends PluginProps`. There is no index signature — `props.somethingTypoed` is a type error, not a silent `unknown`.
- `MountOptions<P>` — the `options` argument of `mount`.
- `createPluginMount(App)` — returns `{ mount, unmount }` typed as `PluginModule`; a plugin's entry file collapses to `export const plugin = createPluginMount(App)`.
- A `/plugin-exports` subpath — a declaration shim exposing a single `plugin: PluginModule`, so a plugin's `types/index.d.ts` collapses to `export * from "@cloudoperators/greenhouse-core/plugin-exports"`. Two properties follow: a plugin whose real export shape doesn't match the contract fails its own typecheck (safety floor against drift), and future contract changes (new / renamed methods) do not require editing any plugin — the shell is the only side that has to adapt.

The package stays `"private": true` while the contract is validated inside the monorepo; it is published publicly in a later iteration. It is intentionally scoped to grow — future shared surfaces between the shell and plugins (routing, auth bridges, event bus, config schema) will land here as they prove themselves across real plugins. See `.out-of-code-insights/external-plugin-final/` for the full design.
