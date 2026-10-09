---
"@cloudoperators/juno-ui-components": patch
---

fix(ui): improve ComboBox search query state management

- Clear search query after option selection to prevent stale search terms
- Clear query and close dropdown when controlled value prop becomes empty
- Add comprehensive tests for controlled and uncontrolled scenarios
- Use ref instead of getElementById for blur to work in shadow DOM

**Breaking change note:** When both `value=""` and `defaultValue` are provided, the ComboBox now shows empty instead of falling back to `defaultValue`. This is the correct behavior since `defaultValue` is documented as uncontrolled-mode only, but consumers relying on the previous fallback behavior should update their code to not pass `value=""` if they want `defaultValue` to apply.
