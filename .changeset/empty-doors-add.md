---
"@cloudoperators/juno-ui-components": patch
"@cloudoperators/juno-app-greenhouse": patch
"@cloudoperators/juno-app-supernova": patch
"@cloudoperators/juno-app-template": patch
"@cloudoperators/juno-app-heureka": patch
"@cloudoperators/juno-app-carbon": patch
"@cloudoperators/juno-app-doop": patch
---

Fix medium and high vulnerabilities related to transitive dependencies `picomatch` and `yaml` by upgrading root project dependencies and where not possible, locking `picomatch` and `yaml` at versions without vulnerabilities.
