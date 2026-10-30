---
"@cloudoperators/juno-app-supernova": patch
---

refactor(supernova): adopt the shared Greenhouse plugin contract

`src/index.tsx` collapses to the two-line `export const plugin = createPluginMount(App)` pattern — the hand-written `createRoot` / mount / unmount dance and the ad-hoc `MountOptions` type are gone. `src/types/index.d.ts` is a tiny `declare module { export const plugin: PluginModule }` so the host's dynamic `await import(...)` is typed. `@cloudoperators/greenhouse-core` is now a runtime dependency. No behaviour change.
