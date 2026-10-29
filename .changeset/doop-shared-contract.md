---
"@cloudoperators/juno-app-doop": patch
---

refactor(doop): adopt the shared Greenhouse plugin contract

`src/index.ts` collapses to a single `export const plugin = createPluginMount(App)` — the hand-written `createRoot` / mount / unmount dance and the `options: any` are gone. `src/types/index.d.ts` delegates the module shape to `@cloudoperators/greenhouse-core/plugin-exports`, so a plugin whose real export shape ever drifts from the shared contract fails its own typecheck instead of silently at runtime. Exposing the whole `PluginModule` as one `plugin` export also means future contract changes (new / renamed methods) do not require touching this file. `@cloudoperators/greenhouse-core` is now a runtime dependency. No behaviour change.
