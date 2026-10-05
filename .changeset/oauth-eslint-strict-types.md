---
"@cloudoperators/juno-oauth": minor
---

feat(oauth): add runtime validation with Zod and migrate to vite-ts ESLint config

Introduces runtime validation for OAuth/OIDC responses using Zod schemas, addressing type safety at external API boundaries. Also migrates the package to use the new vite-ts.mjs ESLint configuration designed for TypeScript-only packages.

**Runtime Validation:**
- Added Zod schemas for TokenResponse and OidcConfig validation
- Validates token endpoint responses before type assertions
- Validates OIDC discovery configuration responses
- Provides clear error messages when API responses are malformed

**ESLint Migration:**
- Introduced new vite-ts.mjs config for pure TypeScript packages
- Migrated OAuth from vite-react-ts.mjs to vite-ts.mjs
- Maintains strict type-aware linting without unnecessary React dependencies
