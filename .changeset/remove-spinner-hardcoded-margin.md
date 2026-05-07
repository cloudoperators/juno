---
"@cloudoperators/juno-ui-components": patch
---

Remove hardcoded `mr-3` margin from Spinner component. The margin was applied globally, causing layout issues when Spinner is used inside components like Button that manage their own spacing. Callers that relied on the built-in margin have been updated to add the margin explicitly.
