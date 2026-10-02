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

chore(deps): upgrade vite-plugin-dts to 5.1.1 and vite-plugin-svgr to 5.2.0

- Upgraded vite-plugin-dts from 4.5.4 to 5.1.1 across all packages
- Upgraded vite-plugin-svgr from 4.5.0 to 5.2.0 in apps (carbon, example, greenhouse) and ui-components
- Removed unused vite-plugin-svgr from heureka app (no SVG imports found)
- These are major version upgrades with no breaking changes affecting our usage
- vite-plugin-svgr v5 requires Vite 3+, which is satisfied by our Vite 8.3.0
