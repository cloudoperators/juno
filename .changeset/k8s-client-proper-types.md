---
"@cloudoperators/juno-k8s-client": patch
---

fix(k8s-client): replace `any` with precise types and migrate to `vite-ts` ESLint config

Resolve the TypeScript type-safety debt that was deferred during the Vitest 4
upgrade (#2062, part of the ESLint standardization epic #1565):

- Migrate the package from the legacy `juno-typescript.mjs` ESLint config to the
  stricter TypeScript-only `vite-ts.mjs`, and drop all five temporary rule
  overrides — the package now ships with **zero** ESLint overrides.
- Replace every `any` / `Object` / `Function` / `{}` type across `src` and the
  test mocks with precise types (`unknown`, `object`, explicit signatures,
  `https.AgentOptions` for the mocked agent).
- Remove the `const that = this` aliases in `watch.ts` in favour of lexical
  `this` (all methods/callbacks are arrow functions), satisfying `no-this-alias`.
- Collapse the duplicated `WatchOptions` type into the shared `RequestOptions`.

No runtime behavior changes. Added regression and behavioral tests for the
`Watch` class (cancel binding, resource-version bootstrap, event dispatch,
BOOKMARK handling, 404 cancel, listener isolation).
