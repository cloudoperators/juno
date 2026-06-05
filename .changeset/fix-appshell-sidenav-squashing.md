---
"@cloudoperators/juno-ui-components": patch
---

AppShell layout fixes:

- Fix SideNavigation being squashed by oversized content in ContentContainer. SideNavigation now keeps its 16rem width and ContentContainer's wide children overflow inside the container instead of expanding the page row.
- Remove the top margin from `MainContainerInner` in non-embedded mode. The `HeaderContainer` is sticky (in flow), so the extra margin was over-compensating; content now sits directly below the header. Apps relying on the previous spacing may see a small upward shift.
