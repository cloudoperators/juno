---
"@cloudoperators/juno-ui-components": patch
---

Fix SideNavigationItem labels overflowing the fixed-width SideNavigation when they contain unbreakable strings (long IDs, URLs, camelCase tokens). Labels now clamp to two lines with ellipsis and break mid-word as needed, and wrapped lines are left-aligned (previously the second line inherited the button's default center alignment). When the item's label (or string children) is a string, it is also exposed as a native `title` tooltip so users can read the full text on hover or focus.
