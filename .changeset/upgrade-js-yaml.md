---
"@cloudoperators/juno-app-greenhouse": patch
---

chore(deps): upgrade js-yaml from 4.3.2 to 5.4.2

- Upgrade js-yaml to v5.4.2 which includes built-in TypeScript types
- Remove @types/js-yaml dependency (no longer needed)
- Update import to use named export (dump) instead of default import
- All tests and type checks pass
