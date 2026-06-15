---
"@cloudoperators/juno-ui-components": patch
---

Add `border-theme-default` and `shadow-theme-default` to floating menu and overlay components to ensure they are always visually distinct from the page background.

- `Select`: border and shadow applied on the outer floating container to prevent shadow clipping; duplicate surface styles removed from inner menu container
- `ComboBox`, `PopupMenu`: border and shadow added to menu panel
- `TooltipContent`: replaced custom `drop-shadow` with consistent `shadow-theme-default`; border added
- `Toast`: border and shadow added
- `DateTimePicker`: border and shadow added to flatpickr calendar popup; scoped under `.juno-datetimepicker-wrapper` for higher specificity to override flatpickr's own `border: 0` reset; uses `--color-border-default` and `--box-shadow-default` as these are the tokens available in the inherited CSS variable scope
- `Select`, `ComboBox`: added `box-border` to floating container so the 1px border is included in the Floating UI computed width, preventing subtle misalignment with the toggle
- `Select`: added `overflow-hidden` to outer floating container so option hover backgrounds are clipped by the rounded corners
