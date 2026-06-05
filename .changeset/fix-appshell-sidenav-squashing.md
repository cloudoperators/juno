---
"@cloudoperators/juno-ui-components": patch
---

Fix SideNavigation being squashed by oversized content in ContentContainer. SideNavigation now keeps its 16rem width and ContentContainer's wide children overflow inside the container instead of expanding the page row.
