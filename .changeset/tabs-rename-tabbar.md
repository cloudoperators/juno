---
"@cloudoperators/juno-ui-components": minor
---

feat(ui): rename TabNavigation → TabBar, deprecate old Tabs components

- `TabBar` and `TabBarItem` replace `TabNavigation` and `TabNavigationItem`. The old names are kept as deprecated aliases and will be removed in a future major release.
- The `tabStyle` prop on `TabBar` is deprecated; use `appearance` instead.
- `Tabs`, `TabList`, `Tab`, `TabPanel`, and `MainTabs` are deprecated and will be removed in a future major release. Use `react-tabs` directly instead.
- Storybook: deprecated components moved to a new top-level `Deprecated` section.
- Active navigation items now use `aria-current="true"` instead of `aria-selected="true"`.
  Any CSS selectors or tests targeting `[aria-selected="true"]` on active items must be updated.
