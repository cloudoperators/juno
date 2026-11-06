---
"@cloudoperators/juno-app-template": patch
---

feat(template): instrument on greenhouse-core and initialize TanStack Intent

Migrate `apps/template` to the shared plugin contract and set it up as the
reference TanStack Intent consumer:

- Export the plugin via `createPlugin(App)` from `@cloudoperators/greenhouse-core`
  instead of the hand-written mount/unmount lifecycle, matching doop/heureka/supernova.
- Adopt the shared `PluginProps` contract in `App.tsx` (theme/embedded) while
  preserving the existing template content.
- Standalone `index.html` now mounts via `app.plugin.mount(...)`.
- Add an `intent.skills` allowlist so the app discovers and loads the skills shipped
  by `@cloudoperators/juno-ui-components`, with skill-loading guidance in `AGENTS.md`.
