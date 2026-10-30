---
"@cloudoperators/greenhouse-core": minor
---

feat(greenhouse-core): add workspace package shared by the shell and plugins

Introduces `@cloudoperators/greenhouse-core` — the shared ground between the Greenhouse shell app (`apps/greenhouse`) and the plugins. It is the single versioned source of truth both sides import, so compatibility is enforced by the type system rather than by convention. In this iteration it ships:

- `PluginModule` — the shape of the `plugin` value every plugin exports (`mount` / `unmount`).
- `PluginProps` — the props Greenhouse passes to a plugin's root App component. Pins only `theme` and `embedded` — the fields every plugin can rely on. Host-forwarded fields (routing, auth, plugin-specific `appProps`) are the host's convention and live on `apps/greenhouse`'s own types, not here, so evolving them does not require bumping this package.
- `MountOptions<P>` — the `options` argument of `mount`.
- `createPluginMount(App)` — returns `{ mount, unmount }` typed as `PluginModule`; a plugin's entry file collapses to `export const plugin = createPluginMount(App)`.

The package is public (`publishConfig.access: public`) and intentionally scoped to grow. Future shared surfaces between the shell and plugins (routing, auth bridges, event bus, config schema) will land here as they prove themselves across real plugins. See `.out-of-code-insights/external-plugin-final/` for the full design.
