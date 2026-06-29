---
"@cloudoperators/juno-ui-components": minor
---

feat(SideNavigation): `SideNavigationGroup` and `SideNavigationItem` now accept an `onToggle(isOpen: boolean)` callback that fires whenever the user expands or collapses the section. The existing `open` prop is unchanged — it still controls the initial open state and re-syncs when the parent updates it — so callers can opt into observing toggles without changing any existing code. For `SideNavigationGroup` the entire row triggers the toggle; for `SideNavigationItem` the chevron triggers the toggle while the label keeps its existing navigation behavior.
