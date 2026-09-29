---
"@cloudoperators/juno-ui-components": minor
---

Add SecondaryTabs component family (SecondaryTabs, SecondaryTab, SecondaryTabPanel)

A segmented-control tab strip for hierarchical navigation below primary TabNavigation. Uses native ARIA (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`, `aria-orientation="horizontal"`) without external library dependencies. Supports controlled/uncontrolled mode, per-tab and global disabled state, optional icons left/right, and full keyboard navigation (ArrowRight/Left with wrap-around, Home, End — skips disabled tabs) per the ARIA APG Tabs pattern. Uses `useId()` for unique per-instance tab/panel IDs, enabling multiple SecondaryTabs on the same page without ID collisions. Added 14 CSS design tokens for Light and Dark themes (background, text, border, disabled).

**Accessibility:** Uses `aria-disabled="true"` instead of native `disabled` so disabled tabs remain in the accessibility tree and are announced by screen readers (NVDA/JAWS remove natively-disabled elements from the AT tree). Roving tabindex ensures only one tab is in the tab sequence at a time while disabled tabs stay reachable via ArrowLeft/Right for AT users who rely on directional navigation. `SecondaryTabs` and `SecondaryTab` both expose a `ref` via `forwardRef`.
