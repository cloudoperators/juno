---
"@cloudoperators/juno-ui-components": patch
"@cloudoperators/juno-communicator": patch
"@cloudoperators/greenhouse-auth-provider": patch
"@cloudoperators/juno-k8s-client": patch
"@cloudoperators/juno-messages-provider": patch
"@cloudoperators/juno-oauth": patch
"@cloudoperators/juno-package-template": patch
"@cloudoperators/juno-url-state-provider": patch
---

chore(deps): upgrade vite-plugin-dts to 5.1.1

- Upgraded vite-plugin-dts from 4.5.4 to 5.1.1 across all affected packages
- Removed unused vite-plugin-svgr from the Heureka app (no SVG imports found)
- This major vite-plugin-dts upgrade has no breaking changes affecting current usage
- vite-plugin-dts v5 requires Vite 3+, which is satisfied by Vite 8.3.0
