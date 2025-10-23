---
"@cloudoperators/juno-app-supernova": patch
---

- Update tanstack router to fix issue where the basepath would be overwritten while redirection.
- Remove manual normalization part of legacy state to `undefined` that is no longer needed with latest version of the router.
