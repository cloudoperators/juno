# heureka

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
