---
"@cloudoperators/juno-app-doop": patch
---

refactor(doop): adopt the shared Greenhouse plugin contract

`src/index.ts` collapses to the two-line `export const plugin = createPluginMount(App)` pattern — the hand-written `createRoot` / mount / unmount dance and the `options: any` are gone. `src/types/index.d.ts` is a tiny `declare module { export const plugin: PluginModule }` so the host's dynamic `await import(...)` is typed. `@cloudoperators/greenhouse-core` is now a runtime dependency. No behaviour change.
