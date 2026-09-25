# @cloudoperators/greenhouse-auth-provider

## 1.0.4

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

- 824aa2b: chore(deps): upgrade React, Storybook, and related dependencies
  - Upgrade React from 19.2.8 to 19.3.0
  - Upgrade react-dom from 19.2.8 to 19.3.0
  - Upgrade @types/react from 19.2.18 to 19.3.0
  - Upgrade @types/react-dom from 19.2.5 to 19.3.0
  - Upgrade Storybook packages from 10.5.10 to 10.6.0:
    - @storybook/addon-docs
    - @storybook/addon-links
    - @storybook/react-vite
    - storybook
    - eslint-plugin-storybook
  - Upgrade jsdom from 30.0.1 to 30.1.0

## 1.0.3

### Patch Changes

- f0e8ddc: Upgraded Vite from 7.x to 8.0.10 and TypeScript from 5.x to 6.0.2 across all packages and apps.

## 1.0.2

### Patch Changes

- 43695db: Enables authentication support for Heureka and improves false positive remediation UX: inline spinner feedback during API operations, timed success messages, proper error display without unhandled exceptions, auth user ID scoped to embedded mode, and instant tab updates after mark FP or revert using the remediations query as an override on top of status filters.

  Fix `greenhouse-auth-provider` bundling React into its output by adding `rollupOptions.external` to the Vite build config. React is a peer dependency and must not be included in the bundle to avoid multiple React instance conflicts in micro-frontend architectures.

## 1.0.1

### Patch Changes

- f69e63e: fix: address CVE-2026-39363 vulnerability in vite
