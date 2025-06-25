# heureka

## 0.7.0

### Minor Changes

- b693d90: Heureka now supports filters in deeplinks.

### Patch Changes

- Updated dependencies [b693d90]
  - @cloudoperators/juno-url-state-provider@3.0.3

## 0.6.2

### Patch Changes

- Updated dependencies [5488568]
- Updated dependencies [6ef7f8d]
  - @cloudoperators/juno-ui-components@4.0.1
  - @cloudoperators/juno-messages-provider@0.2.8

## 0.6.1

### Patch Changes

- Updated dependencies [7317372]
  - @cloudoperators/juno-messages-provider@0.2.7

## 0.6.0

### Minor Changes

- 3474c87: Changed suitable Selects to ComboBox
- 80a30d7: Heureka now supports basic deeplinks.

### Patch Changes

- 9dd8568: fix(heureka): removes unnecessary fields from getServices to improve performance
- 483d9ee: Update react version to 19.1.0
- Updated dependencies [483d9ee]
- Updated dependencies [483d9ee]
  - @cloudoperators/juno-ui-components@4.0.0
  - @cloudoperators/juno-messages-provider@0.2.6

## 0.5.4

### Patch Changes

- 43d6aa0: Update vite to the latest version (v 6.3.5) to resolve dependency vulnarebilities
- Updated dependencies [cdae407]
- Updated dependencies [7230774]
- Updated dependencies [a9e8592]
- Updated dependencies [43d6aa0]
  - @cloudoperators/juno-ui-components@3.1.1
  - @cloudoperators/juno-messages-provider@0.2.5

## 0.5.3

### Patch Changes

- 3140768: Refactor Issue Count Handling and Add Total Counts per Service

## 0.5.2

### Patch Changes

- 37e1bf4: Added a search bar to the issues list that allows users to filter issues by CVE name (primaryName).
- 403b5cd: - Remove headlessui float and update headlessui to 2.1.10
  - Fix unit tests
- Updated dependencies [403b5cd]
- Updated dependencies [67f53cb]
  - @cloudoperators/juno-ui-components@3.1.0

## 0.5.1

### Patch Changes

- 52e148c: Refactors severity count related components
- ee1b3ab: Reorganize components files based on how they are imported.
- d50e279: Improve issue description truncation in ImageVersionIssueListItem
- 0d6c4e8: Closes image version details panel on reselect in Service Details page
- Updated dependencies [9ff1784]
- Updated dependencies [4e8a5ef]
- Updated dependencies [f48439c]
  - @cloudoperators/juno-ui-components@3.0.1

## 0.5.0

### Minor Changes

- 395a12a: adds service image version details into service details page
- 0403e89: Adds pagination and ordering to issues list
- 527064c: Adds issues list to image version details panel

### Patch Changes

- e2eb636: IssueCounts filtering has been enhanced to include a new option for filtering by ServiceOwner ID and name.
- 1a47422: Fixes spaces in breadcrumb and services list pills
- ea088f6: Displays each count in a separate column within lists
- cdba61c: Upgrade to vite 6.2
- 1d4f57e: Generalizes classes to highlight lists on hover and applies the class to all lists
- fd2529a: Creates a standalone component to display issue counts
- dfdfedd: Fixes the issue of missing current filters when using service
- Updated dependencies [e5cf6b6]
- Updated dependencies [02cb67a]
- Updated dependencies [cdba61c]
  - @cloudoperators/juno-messages-provider@0.2.4
  - @cloudoperators/juno-ui-components@3.0.0

## 0.4.0

### Minor Changes

- e4f5190: Adds service overview panel to heureka
- 6d664e8: Add store and service details page to heureka

### Patch Changes

- 2bd7610: Changes details access within services list from icon to button for better clarity
- cde9cb5: Update vite version to 6.0
- 23b5bc9: Adds missing information to Services page
- Updated dependencies [2277a23]
- Updated dependencies [cde9cb5]
  - @cloudoperators/juno-ui-components@2.39.0
  - @cloudoperators/juno-messages-provider@0.2.3

## 0.3.3

### Patch Changes

- 135cae5: Adds initialFilters support group as default filter in services
- f2f264f: Make the `Services` and `Issues` component types more explicit by defining props explicitly instead of implicit. Also, migrate away from `React.FC` as it is no longer the recommended approach.

## 0.3.2

### Patch Changes

- 5116cbd: Ensures app mounts correctly with props object

## 0.3.1

### Patch Changes

- 99baa5f: Fixes broken pagination due to API change in Heureka backend.
- Updated dependencies [106c2a4]
  - @cloudoperators/juno-ui-components@2.38.2

## 0.3.0

### Minor Changes

- b087de1: Services view now lists all services and allows to filter these

## 0.2.1

### Patch Changes

- 150b32d: adjust node and npm deps that the version is open to the top
- Updated dependencies [150b32d]
  - @cloudoperators/juno-messages-provider@0.2.2
  - @cloudoperators/juno-ui-components@2.38.1

## 0.2.0

### Minor Changes

- ad03fff: The app is now able to communicate with the GraphQL backend.

## 0.1.0

### Minor Changes

- 57e835e: Initialise new Heureka app.

### Patch Changes

- Updated dependencies [c450e60]
  - @cloudoperators/juno-ui-components@2.37.0
