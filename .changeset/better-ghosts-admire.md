---
"@cloudoperators/juno-ui-components": patch
---

fix(ui): improve ComboBox search query state management

- Clear search query after option selection to reset filtering
- Clear query and close dropdown when controlled value becomes empty
- Handle Enter key press to clear search when no option is selected
- Notify parent component to clear filter state via onInputChange callback
- Add ref forwarding support for focus management
- Add comprehensive tests for controlled and uncontrolled scenarios
