---
"@cloudoperators/juno-ui-components": minor
---

Add SecondaryTabs component family (SecondaryTabs, SecondaryTab, SecondaryTabPanel)

A segmented-control tab strip for hierarchical navigation below primary TabNavigation. Uses native ARIA (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`) without external library dependencies. Supports controlled/uncontrolled mode, per-tab and global disabled state, optional icons left/right, and full keyboard navigation (ArrowRight/Left with wrap-around, Home, End — skips disabled tabs) per the ARIA APG Tabs pattern. Uses `useId()` for unique per-instance tab/panel IDs, enabling multiple SecondaryTabs on the same page without ID collisions. Added 14 CSS design tokens for Light and Dark themes (background, text, border, disabled).
