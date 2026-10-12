---
"@cloudoperators/juno-ui-components": minor
---

feat(ui): add TabBar `appearance="buttons"` and rename `appearance="content"` to `appearance="tabs"`

- Add `appearance="buttons"` to `TabBar` for a pill-style segmented control, useful for pre-defined filters.
- Rename `appearance="content"` to `appearance="tabs"`. The existing default `appearance="main"` is unchanged.
- `appearance="content"` keeps working as a deprecated alias of `tabs` and emits a deprecation warning. Switch to `appearance="tabs"`.
- Disabled items in the `tabs`/`content` appearance no longer dim the shared bottom border.
