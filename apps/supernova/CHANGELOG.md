# @cloudoperators/juno-app-supernova

## 0.19.2

### Patch Changes

- Updated dependencies [55014f5]
  - @cloudoperators/juno-ui-components@5.4.0
  - @cloudoperators/juno-messages-provider@0.2.15

## 0.19.1

### Patch Changes

- 9e9669f: Combine initial filters from appProps with fitlers from the url state.
- Updated dependencies [1020d89]
  - @cloudoperators/juno-ui-components@5.3.0
  - @cloudoperators/juno-messages-provider@0.2.14

## 0.19.0

### Minor Changes

- 8a44efa: Supernova old url state is now converted to new URL state and for other apps tanstack router dependencies are updated.

### Patch Changes

- Updated dependencies [b7fe310]
  - @cloudoperators/juno-ui-components@5.2.0
  - @cloudoperators/juno-messages-provider@0.2.13

## 0.18.0

### Minor Changes

- 3589b0c: All apps support client side routing using tanstack router.

## 0.17.9

### Patch Changes

- a87c074: feat(supernova): support absolute urls in playbook links
  - @cloudoperators/juno-messages-provider@0.2.12
  - @cloudoperators/juno-ui-components@5.1.1
  - @cloudoperators/juno-url-state-provider@3.0.5

## 0.17.8

### Patch Changes

- Updated dependencies [92a17f7]
  - @cloudoperators/juno-ui-components@5.1.1
  - @cloudoperators/juno-messages-provider@0.2.12

## 0.17.7

### Patch Changes

- 5ad5d5b: **Core Build Tools**

  - vite: Updated to `7.0.3` (latest)
  - vite-tsconfig-paths: Updated to `5.1.4` (latest)
  - vite-plugin-dts: Updated to `4.5.4` (latest)

  **Testing Framework**

  - vitest: Updated to `3.2.4` (latest)
  - @vitest/ui: Updated to `3.2.4` (latest)

  **React Plugins**

  - @vitejs/plugin-react: Updated to `4.6.0` (latest)
  - @vitejs/plugin-react-swc: Updated to `3.10.2` (latest)

  **Additional Plugins**

  - vite-plugin-svgr: Updated to `4.3.0` (latest)
  - @tailwindcss/vite: Updated to `4.1.11` (latest)

- Updated dependencies [5ad5d5b]
- Updated dependencies [ca74897]
- Updated dependencies [9453d27]
  - @cloudoperators/juno-messages-provider@0.2.11
  - @cloudoperators/juno-ui-components@5.1.0
  - @cloudoperators/juno-url-state-provider@3.0.5

## 0.17.6

### Patch Changes

- 1d30fb5: Fix jsdom css parsing error (update jsdom dependencies)
- Updated dependencies [2da3003]
- Updated dependencies [1d30fb5]
- Updated dependencies [8d344a6]
  - @cloudoperators/juno-url-state-provider@3.0.4
  - @cloudoperators/juno-messages-provider@0.2.10
  - @cloudoperators/juno-ui-components@5.0.1

## 0.17.5

### Patch Changes

- 4dedb33: Upgrade to tailwind 4.0 and related changes
- Updated dependencies [01245c8]
- Updated dependencies [4dedb33]
  - @cloudoperators/juno-ui-components@5.0.0
  - @cloudoperators/juno-messages-provider@0.2.9

## 0.17.4

### Patch Changes

- 198dd13: Fix ComboBox Reset Behavior After Selection

## 0.17.3

### Patch Changes

- Updated dependencies [b693d90]
  - @cloudoperators/juno-url-state-provider@3.0.3

## 0.17.2

### Patch Changes

- Updated dependencies [5488568]
- Updated dependencies [6ef7f8d]
  - @cloudoperators/juno-ui-components@4.0.1
  - @cloudoperators/juno-messages-provider@0.2.8

## 0.17.1

### Patch Changes

- 7317372: Restore Firefox warning for allow_client_cert flag in Supernova
- Updated dependencies [7317372]
  - @cloudoperators/juno-messages-provider@0.2.7

## 0.17.0

### Minor Changes

- 3474c87: Changed suitable Selects to ComboBox

### Patch Changes

- 483d9ee: Update react version to 19.1.0
- Updated dependencies [483d9ee]
- Updated dependencies [483d9ee]
  - @cloudoperators/juno-ui-components@4.0.0
  - @cloudoperators/juno-url-state-provider@3.0.2
  - @cloudoperators/juno-messages-provider@0.2.6

## 0.16.7

### Patch Changes

- Updated dependencies [cdae407]
- Updated dependencies [7230774]
- Updated dependencies [a9e8592]
- Updated dependencies [43d6aa0]
  - @cloudoperators/juno-ui-components@3.1.1
  - @cloudoperators/juno-url-state-provider@3.0.1
  - @cloudoperators/juno-messages-provider@0.2.5

## 0.16.6

### Patch Changes

- 6b5e878: - Rollback `url-state-provider` back to `v1.3.2`.
  - `url-state-provider` will now ignore Hashed(#) part of the URL while encoding/decoding query parameters.
  - Removed dependency of `url-state-provider-v1` in all internal applications.
- Updated dependencies [9ff1784]
- Updated dependencies [4e8a5ef]
- Updated dependencies [f48439c]
- Updated dependencies [6b5e878]
  - @cloudoperators/juno-ui-components@3.0.1
  - @cloudoperators/juno-url-state-provider@3.0.0

## 0.16.5

### Patch Changes

- e5cf6b6: React 19 Upgrade. Phase 1 - Upgrade to React 18.3
- Updated dependencies [e5cf6b6]
- Updated dependencies [02cb67a]
- Updated dependencies [cdba61c]
  - @cloudoperators/juno-messages-provider@0.2.4
  - @cloudoperators/juno-ui-components@3.0.0
  - @cloudoperators/juno-url-state-provider@2.3.4

## 0.16.4

### Patch Changes

- c92895d: fixed lint errors through typing, correct usage of functions
- da8c585: Complete store is now typed, reduced linting issues
- Updated dependencies [150b32d]
  - @cloudoperators/juno-url-state-provider@2.3.2
  - @cloudoperators/juno-messages-provider@0.2.2
  - @cloudoperators/juno-ui-components@2.38.1

## 0.16.3

### Patch Changes

- d595b9d: reducing unnecessary @ts-ignore directives, improving type safety and code clarity in region components and alert slice

## 0.16.2

### Patch Changes

- 4834d12: reducing unnecessary @ts-ignore directives, improving type safety and code clarity in filter components
- Updated dependencies [43fc5b7]
  - @cloudoperators/juno-ui-components@2.38.0

## 0.16.1

### Patch Changes

- 326b01e: Transfer supernova to TypeScript
- Updated dependencies [c450e60]
  - @cloudoperators/juno-ui-components@2.37.0

## 0.16.0

### Minor Changes

- b3be0d7: Supernova supports new URL structure behind a feature flat `enableNewUrlStructure` but this is not enabled by default but it can be enabled via app props.

## 0.15.0

### Minor Changes

- 92719cf: Refactored fetch with ReactQuery and minor UI improvements

### Patch Changes

- Updated dependencies [6f6b742]
- Updated dependencies [212e32b]
- Updated dependencies [2191270]
  - @cloudoperators/juno-ui-components@2.35.2

## 0.14.6

### Patch Changes

- 454764a: Fixes an error where some error messages were not displayed
- 454764a: Introduced react query
- Updated dependencies [e96f612]
- Updated dependencies [b12fa10]
- Updated dependencies [6877281]
- Updated dependencies [fbd1880]
- Updated dependencies [a3c43a0]
  - @cloudoperators/juno-ui-components@2.34.0

## 0.14.5

### Patch Changes

- f25740e: Delete juno-utils package
- Updated dependencies [8e6e94d]
- Updated dependencies [385ebcf]
- Updated dependencies [b99caff]
- Updated dependencies [5d186c7]
  - @cloudoperators/juno-ui-components@2.33.0

## 0.14.4

### Patch Changes

- 8615024: Replace useEndlessScrollList from utils to ui-componetns and utils deprecation
- Updated dependencies [a0ee034]
- Updated dependencies [8615024]
  - @cloudoperators/juno-ui-components@2.32.0
  - @cloudoperators/juno-utils@1.1.15

## 0.14.3

### Patch Changes

- 879812b: InitialFilters whose value is not an array are not added to ActiveFilters.
- Updated dependencies [b1a5eb1]
- Updated dependencies [c9190d0]
- Updated dependencies [18ebaba]
  - @cloudoperators/juno-ui-components@2.30.0

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
