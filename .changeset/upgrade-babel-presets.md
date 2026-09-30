---
"@cloudoperators/juno-ui-components": patch
"@cloudoperators/juno-url-state-provider": patch
---

chore(deps): upgrade Babel presets to version 8.x with explicit configuration

**@cloudoperators/juno-ui-components:**
- @babel/preset-env from 7.29.7 to 8.0.2
- @babel/preset-react from 7.29.7 to 8.0.1
- Added explicit `runtime: "automatic"` for React JSX transform (Babel 8 default)
- Added explicit `targets` configuration to maintain browser compatibility
- Updated all Babel configs for Babel 8 compatibility

**@cloudoperators/juno-url-state-provider:**
- Removed unused Babel config and `@babel/preset-env` dependency (leftover from Jest → Vitest migration)
- Vitest uses Vite's built-in esbuild transformer, not Babel
