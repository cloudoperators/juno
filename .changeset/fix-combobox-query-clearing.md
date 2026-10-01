---
"@cloudoperators/juno-ui-components": patch
---

fix(ui): improve ComboBox search query state management

- Clear search query after option selection to prevent stale search terms
- Clear query and close dropdown when controlled value prop becomes empty
- Add comprehensive tests for controlled and uncontrolled scenarios
