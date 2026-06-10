---
"@cloudoperators/juno-ui-components": patch
---

Add `border-theme-default` and `shadow-theme-default` to floating menu and overlay components to ensure they are always visually distinct from the page background.

- `Select`: border and shadow applied on the outer floating container to prevent shadow clipping; duplicate surface styles removed from inner menu container
- `ComboBox`, `PopupMenu`: border and shadow added to menu panel
- `TooltipContent`: replaced custom `drop-shadow` with consistent `shadow-theme-default`; border added
- `Toast`: border and shadow added
- `DateTimePicker`: border and shadow added to flatpickr calendar popup
