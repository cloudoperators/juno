---
"@cloudoperators/juno-ui-components": patch
---

fix(ui): emit valid HTML in SideNavigation by rendering items/groups as `<li>` and wrapping nested children in `<ul>`. `SideNavigationGroup` is now first-level only and no longer participates in `LevelContext`.
