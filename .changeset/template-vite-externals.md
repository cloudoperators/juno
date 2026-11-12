---
"@cloudoperators/juno-app-template": patch
---

fix(template): externalize react, greenhouse-core, and juno-ui-components in library build

Add `rollupOptions.external` to `vite.config.ts` so the library build does not bundle
react, `@cloudoperators/greenhouse-core`, or `@cloudoperators/juno-ui-components` — these
are provided by the host at runtime.
