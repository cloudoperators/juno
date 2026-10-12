---
"@cloudoperators/juno-ui-components": minor
---

feat(ui): add TabBar `appearance="buttons"` and rename `appearance="main"` to `appearance="tabs"`

- Add `appearance="buttons"` to `TabBar` for a pill-style segmented control, useful for pre-defined filters.
- Rename `appearance="main"` to `appearance="tabs"`. `appearance="tabs"` is now the default.
- `appearance="main"` keeps working as a deprecated alias and emits a deprecation warning. Switch to `appearance="tabs"`.
- `appearance="content"` remains a distinct style variant with a shared bottom border (unchanged).
