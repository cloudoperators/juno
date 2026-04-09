---
"@cloudoperators/juno-app-heureka": minor
"@cloudoperators/greenhouse-auth-provider": patch
---

Enables authentication support for Heureka and improves false positive remediation UX: inline spinner feedback during API operations, timed success messages, proper error display without unhandled exceptions, auth user ID scoped to embedded mode, and instant tab updates after mark FP or revert using the remediations query as an override on top of status filters.

Fix `greenhouse-auth-provider` bundling React into its output by adding `rollupOptions.external` to the Vite build config. React is a peer dependency and must not be included in the bundle to avoid multiple React instance conflicts in micro-frontend architectures.
