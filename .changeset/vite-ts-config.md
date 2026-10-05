---
"@cloudoperators/juno-config": patch
---

feat(config): add vite-ts.mjs ESLint configuration for TypeScript-only packages

Adds a new vite-ts.mjs ESLint configuration designed for pure TypeScript packages without React dependencies. This config provides strict type-aware linting using recommendedTypeChecked and completes the modern config family alongside vite-react-ts.mjs.
