# Summary

Refactored `SeverityCount` component to use `Icon` instead of `Badge` for better icon and color control. When count is zero, the component displays a dash: in tables it shows only the dash, in the "all vulnerabilities" view it shows icon + dash.

# Changes Made

- Replaced `Badge` component with `Icon` component in `SeverityCount`
- Changed prop from `variant: BadgeVariantType` to `color: string`
- Added `showIconWhenZero` prop to control zero count display:
  - Tables: dash only (default)
  - All vulnerabilities view: icon + dash
- Updated all usages to use severity-specific color classes
- Updated tests
