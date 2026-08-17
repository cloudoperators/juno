---
"@cloudoperators/juno-app-heureka": patch
---

Migrate Heureka ESLint config from `juno-typescript.mjs` to `vite-react-ts.mjs`. Fixes all TypeScript linting violations surfaced by the stricter config: typed cache callbacks, explicit `void` on fire-and-forget navigations, proper async function signatures, and removal of all legacy rule workarounds.
