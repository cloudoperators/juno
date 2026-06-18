---
"@cloudoperators/juno-ui-components": patch
---

SideNavigation polish:

- Long labels in `SideNavigationItem` and `SideNavigationGroup` now clamp to two lines and break mid-word, instead of overflowing the sidenav. String labels are exposed as a native `title` tooltip so users can read the full text on hover.
- Wrapped labels are left-aligned, and the expand/collapse chevron and optional icon stay aligned with the first line.
- `SideNavigationItem` and its expand chevron now show a hover background.
- The whole `SideNavigationGroup` row is clickable to expand/collapse, and its children are indented to match nested `SideNavigationItem` children.
- Nested `SideNavigationGroup`s (a group inside another group, or inside a `SideNavigationItem`) now indent correctly.
