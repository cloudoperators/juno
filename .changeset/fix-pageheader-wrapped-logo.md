---
"@cloudoperators/juno-ui-components": patch
---

Fix `PageHeader` logo size constraints not applying to nested logo elements. The logo container now uses the universal-descendant variant so a wrapped logo (e.g. an `<a>` containing an `<svg>`) is sized correctly within the fixed-height header.
