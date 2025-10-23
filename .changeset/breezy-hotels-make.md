---
"@cloudoperators/juno-app-greenhouse": patch
---

- While converting legacy state replace `null` with `undefined` otherwise the route validation would fail.
- Update tanstack router to fix issue where the basepath would be overwritten while redirection.
