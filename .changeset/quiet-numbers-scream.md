---
"@cloudoperators/juno-url-state-provider": major
"@cloudoperators/juno-app-greenhouse": patch
"@cloudoperators/juno-app-supernova": patch
"@cloudoperators/juno-app-doop": patch
---

- Rollback `url-state-provider` back to `v1.3.2`.
- `url-state-provider` will now ignore Hashed(#) part of the URL while encoding/decoding query parameters.
- Removed dependency of `url-state-provider-v1` in all internal applications.
