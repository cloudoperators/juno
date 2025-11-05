---
"@cloudoperators/juno-app-supernova": patch
"@cloudoperators/juno-app-doop": patch
---

Call `decodeURIComponent` in order to unescape certain characters that were escaped by `URLSearchParams.toString()`.
