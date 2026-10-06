---
"@cloudoperators/greenhouse-auth-provider": patch
"@cloudoperators/juno-app-doop": patch
"@cloudoperators/juno-app-greenhouse": patch
"@cloudoperators/juno-app-heureka": patch
"@cloudoperators/juno-app-supernova": patch
"@cloudoperators/juno-app-template": patch
"@cloudoperators/juno-communicator": patch
"@cloudoperators/juno-config": patch
"@cloudoperators/juno-k8s-client": patch
"@cloudoperators/juno-messages-provider": patch
"@cloudoperators/juno-oauth": patch
"@cloudoperators/juno-package-template": patch
"@cloudoperators/juno-ui-components": patch
"@cloudoperators/juno-url-state-provider": patch
---

Release packages that failed to publish due to invalid changeset flags

These packages were version bumped in PR #2000 but failed to publish to npm due to invalid flags in the release script. This patch changeset ensures they will be properly published in the next release cycle with the corrected publish command.
