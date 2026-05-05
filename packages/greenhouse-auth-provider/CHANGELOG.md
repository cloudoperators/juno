# @cloudoperators/greenhouse-auth-provider

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
