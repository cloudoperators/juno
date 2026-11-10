---
"@cloudoperators/create-greenhouse-plugin": minor
---

feat(create-greenhouse-plugin): scaffolder for standalone Greenhouse plugins

Add `@cloudoperators/create-greenhouse-plugin`, a public scaffolder that bootstraps a standalone
Greenhouse plugin app with no Juno monorepo dependencies.

Scaffolds a fresh `create-vite` react-ts app and overlays the Greenhouse-specific source from
`apps/template`: `createPlugin()` wiring, `vite.config.ts` (library + static build, rollup
externals), `appProps.json`, `AGENTS.md`, and pinned `@cloudoperators/greenhouse-core` +
`@cloudoperators/juno-ui-components` deps.

Run with `npm create greenhouse-plugin <dir>` or `pnpm create greenhouse-plugin <dir>`.
