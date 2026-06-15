---
"@cloudoperators/juno-ui-components": major
---

Updated `BreadcrumbItem` with BREAKING CHANGES
- Removed Default href="#": This eliminated default navigation behavior, changing <a> to <span> without explicit href.
- Structural Updates: Modified DOM structure by eliminating unnecessary <span> wrappers.
- Rendering Logic Enhanced: Introduced <button> for onClick without href. Ensured <span> usage for neither href nor onClick.
- Accessibility Improvements: Added aria-current="page" for active and aria-disabled for disabled links.
- Expanded onClick Type: Now supports both <a> and <button> elements for broader interaction handling.
