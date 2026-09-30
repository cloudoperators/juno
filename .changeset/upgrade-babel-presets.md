---
"@cloudoperators/juno-ui-components": patch
"@cloudoperators/juno-url-state-provider": patch
---

chore(deps): remove all unused Babel configurations and dependencies

**@cloudoperators/juno-ui-components:**
- Removed `@babel/preset-env` and `@babel/preset-react` dependencies (no longer needed)
- Removed `babel.config.json` - Vitest uses Vite's built-in esbuild transformer
- Removed `.storybook/.babelrc` - Storybook 10.6.0 uses Vite's Oxc transformer via @vitejs/plugin-react 6.1.1
- All builds, tests, and Storybook verified working without Babel

**@cloudoperators/juno-url-state-provider:**
- Removed unused Babel configuration (leftover from Jest → Vitest migration)
- Vitest uses Vite's built-in esbuild transformer

Both packages now rely entirely on Vite's modern transformers (esbuild and Oxc) instead of Babel.
