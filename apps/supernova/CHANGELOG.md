# @cloudoperators/juno-app-supernova

## 0.14.2

### Patch Changes

- fb9146a: migrate greenhouse to vite and adjust all dependent apps to export needed entrypoints
- Updated dependencies [f6f054f]
- Updated dependencies [4bcff19]
- Updated dependencies [28a8d38]
- Updated dependencies [fb9146a]
  - @cloudoperators/juno-ui-components@2.27.0

## 0.14.1

### Patch Changes

- 95d921f: Make web workers in supernova inline which allows it to run in greenhouse
- 6901130: Build and test system migrated to vite
- Updated dependencies [f307966]
- Updated dependencies [bcb45f5]
- Updated dependencies [4a9e17a]
- Updated dependencies [3ec48c0]
- Updated dependencies [3e21132]
- Updated dependencies [436f35a]
- Updated dependencies [24fec5c]
- Updated dependencies [aaea462]
  - @cloudoperators/juno-ui-components@2.25.0

## 0.14.0

### Minor Changes

- d243b41: Introduced the user object and initial filters, which replace auth.

### Patch Changes

- 054f654: fix(supernova): filters invalid keys from initialFilters instead of completely discarding all initialFilters
- Updated dependencies [aa185b4]
- Updated dependencies [4ded874]
  - @cloudoperators/juno-ui-components@2.23.0

## 0.13.0

### Minor Changes

- fbe014f: Scheduled alerts are now also displayed in the alert details. Additionally, the alerts overview now shows only the longest-lasting silence and/or inhibitor.

### Patch Changes

- 0829db9: fixes the issue where the support group filter was re-added when the active filters became empty
- 14b6683: Prevent editable TextInputs if name was given by auth.
- Updated dependencies [68e3984]
- Updated dependencies [8c3d471]
- Updated dependencies [e27e340]
- Updated dependencies [59c00bb]
  - @cloudoperators/juno-ui-components@2.21.0

## 0.12.0

### Minor Changes

- 1f02087: feat(supernova): enable editing name, if user is anonymous

### Patch Changes

- Updated dependencies [4ad82f4]
  - @cloudoperators/juno-ui-components@2.20.0

## 0.11.3

### Patch Changes

- c51c8bf: chore(supernova): add screenshots to readme
- 1b7cb95: Fixed the useCommunication hook to properly enable and handle filters derived from the URL. This ensures that the communication layer respects the filter parameters passed via the URL, improving synchronization between the app state and the URL.

## 0.11.2

### Patch Changes

- 96754c1: chore(supernova): updates README and adds secretProps_sample
- Updated dependencies [8449754]
- Updated dependencies [d1c14e2]
  - @cloudoperators/juno-ui-components@2.19.0

## 0.11.1

### Patch Changes

- 42a8ef2: Correct linter in supernova and fixed title check workflow and docs
- Updated dependencies [502ec8f]
- Updated dependencies [990af5a]
- Updated dependencies [ea09b68]
- Updated dependencies [7f4d17a]
  - @cloudoperators/juno-ui-components@2.18.0
