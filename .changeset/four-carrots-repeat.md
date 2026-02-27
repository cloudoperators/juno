---
"@cloudoperators/juno-app-greenhouse": patch
---

Added type guard to check if error is an `Error` instance before accessing `message` property, preventing potential `undefined` display to users
