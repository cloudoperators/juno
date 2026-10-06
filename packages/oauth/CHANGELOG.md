# @cloudoperators/juno-oauth

## 1.5.0

### Minor Changes

- 00d3f33: feat(oauth): add runtime validation with Zod and migrate to vite-ts ESLint config

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

### Patch Changes

- b2b81a2: chore(deps): upgrade multiple dependencies
  - @apollo/client: 4.2.12 → 4.3.0
  - @graphql-codegen/cli: 7.3.1 → 7.4.1
  - @tanstack/react-query: 5.102.8 → 5.103.1
  - @typescript-eslint/eslint-plugin: 8.69.0 → 8.70.0
  - @typescript-eslint/parser: 8.69.0 → 8.70.0
  - eslint: 10.9.1 → 10.10.0
  - typescript-eslint: 8.69.0 → 8.70.0
  - vite: 8.2.2 → 8.3.0
  - zod: 4.5.4 → 4.6.5

- 51999d2: chore(deps): upgrade vite-plugin-dts to 5.1.1
  - Upgraded vite-plugin-dts from 4.5.4 to 5.1.1 across all affected packages
  - Removed unused vite-plugin-svgr from the Heureka app (no SVG imports found)
  - This major vite-plugin-dts upgrade has no breaking changes affecting current usage
  - vite-plugin-dts v5 requires Vite 3+, which is satisfied by Vite 8.3.0

## 1.4.11

### Patch Changes

- f0e8ddc: Upgraded Vite from 7.x to 8.0.10 and TypeScript from 5.x to 6.0.2 across all packages and apps.

## 1.4.10

### Patch Changes

- f69e63e: fix: address CVE-2026-39363 vulnerability in vite

## 1.4.9

### Patch Changes

- 5ad5d5b: **Core Build Tools**
  - vite: Updated to `7.0.3` (latest)
  - vite-tsconfig-paths: Updated to `5.1.4` (latest)
  - vite-plugin-dts: Updated to `4.5.4` (latest)

  **Testing Framework**
  - vitest: Updated to `3.2.4` (latest)
  - @vitest/ui: Updated to `3.2.4` (latest)

  **React Plugins**
  - @vitejs/plugin-react: Updated to `4.6.0` (latest)
  - @vitejs/plugin-react-swc: Updated to `3.10.2` (latest)

  **Additional Plugins**
  - vite-plugin-svgr: Updated to `4.3.0` (latest)
  - @tailwindcss/vite: Updated to `4.1.11` (latest)

## 1.4.8

### Patch Changes

- 2da3003: - Update typescript version to the latest v.5.8.3
  - Update typescript definitions for node

## 1.4.7

### Patch Changes

- 483d9ee: Update react version to 19.1.0

## 1.4.6

### Patch Changes

- 43d6aa0: Update vite to the latest version (v 6.3.5) to resolve dependency vulnarebilities

## 1.4.5

### Patch Changes

- cdba61c: Upgrade to vite 6.2

## 1.4.4

### Patch Changes

- cde9cb5: Update vite version to 6.0

## 1.4.3

### Patch Changes

- 150b32d: adjust node and npm deps that the version is open to the top

## 1.4.2

### Patch Changes

- fe294e9: Improving types and addind method documentation

## 1.4.1

### Patch Changes

- 065652a: Output types to the correct directory

## 1.4.0

### Minor Changes

- 89ffdc7: Adds tokenSession without mixing it with the mockSession

### Patch Changes

- f851032: Improved types suggestion

## 1.3.0

### Minor Changes

- 87e409c: chore(oauth): migrate OAuth package to Typescript

### Patch Changes

- 8c06648: Fix other typescript problems
- 75332cd: fix(config): rename mts config for release fix
- 8c06648: Unify Typescript and Eslint config in one package

## 1.2.7

### Patch Changes

- 3ca3d35: Update instructions in readme files
- c04ab20: Fix polynomial regular expression used on uncontrolled data
- faadcd4: Use a special email regex

## 1.2.6

### Patch Changes

- 5102bf8: Update instructions in readme files

## 1.2.5

### Patch Changes

- Fix files config in package.json

## 1.2.4

### Patch Changes

- Update Version

## 1.2.3

### Patch Changes

- 79aedc3: Update patch version of all packages
- Add files to be contained in the release to files in package.json
