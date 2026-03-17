---
"@cloudoperators/juno-app-greenhouse": minor
"@cloudoperators/juno-app-doop": patch
"@cloudoperators/juno-app-supernova": patch
"@cloudoperators/juno-app-heureka": patch
---

Optimize plugin loading with dynamic imports and improve navigation between plugins. Plugins now load on-demand instead of being bundled upfront, reducing initial bundle size by 66%. Added module caching to eliminate loading spinners on return visits. Fixed URL state pollution when switching between plugins using TanStack Router's remountDeps. Also filters plugins server-side to fetch only UI plugins.
