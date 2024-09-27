---
"@cloudoperators/juno-app-heureka": minor
"@cloudoperators/juno-app-greenhouse": patch
---

This PR fixes the issue where reloading the app while the details panel is open would cause the panel to show a "busy" state indefinitely. The fix ensures that the details panel information is fully handled within the useUrlState hook, allowing for proper state restoration and display upon reload.
