---
"@cloudoperators/juno-ui-components": patch
---

Revert DataGridCell font size back to the default (1rem). The reduced font size (0.875rem) introduced in #1710 was made the default without sufficient consideration; a smaller, opt-in size may be reintroduced as a configurable option in the future.
