# heureka

## 0.9.1

### Patch Changes

- 071ad50: `org` url search param is retained when navigating among pages.
- Updated dependencies [071ad50]
  - @cloudoperators/juno-url-state-provider@3.0.6

## 0.9.0

### Minor Changes

- 62c1184: Update severity icons.

### Patch Changes

- Updated dependencies [ee9a9ce]
- Updated dependencies [fe485e4]
- Updated dependencies [1ff669a]
  - @cloudoperators/juno-ui-components@5.5.0
  - @cloudoperators/juno-messages-provider@0.2.16

## 0.8.6

### Patch Changes

- Updated dependencies [55014f5]
  - @cloudoperators/juno-ui-components@5.4.0
  - @cloudoperators/juno-messages-provider@0.2.15

## 0.8.5

### Patch Changes

- Updated dependencies [1020d89]
  - @cloudoperators/juno-ui-components@5.3.0
  - @cloudoperators/juno-messages-provider@0.2.14

## 0.8.4

### Patch Changes

- 8a44efa: Supernova old url state is now converted to new URL state and for other apps tanstack router dependencies are updated.
- Updated dependencies [b7fe310]
  - @cloudoperators/juno-ui-components@5.2.0
  - @cloudoperators/juno-messages-provider@0.2.13

## 0.8.3

### Patch Changes

- 3f9fcbb: Added vulnerability counts per severity above the list

## 0.8.2

### Patch Changes

- 6ce69e4: feat(heureka): adds vulnerability details panel

## 0.8.1

### Patch Changes

- 1afa941: Upgraded license-checker-rseidelsohn to `4.4.2` (latest) and and eslint to `9.31.0` (latest)
- 052b8b1: Skips an unstable test in FilterSelect component temporarily
- 0db8cd2: Skips all Filters related tests temporarily in Heureka
- e185313: Handles null values for a vulnerability severity
  - @cloudoperators/juno-messages-provider@0.2.12
  - @cloudoperators/juno-ui-components@5.1.1
  - @cloudoperators/juno-url-state-provider@3.0.5

## 0.8.0

### Minor Changes

- cd2a9c7: Heureka: Add vulnerabilities list view

### Patch Changes

- 6d972a5: Displays number of service image version instances in service details page (this count is also available in service image version details panel)
- 610e2e3: Updates types based on schema breaking changes to adjust severity filter type.
- Updated dependencies [92a17f7]
  - @cloudoperators/juno-ui-components@5.1.1
  - @cloudoperators/juno-messages-provider@0.2.12

## 0.7.5

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

## 0.7.4

### Patch Changes

- 15ce372: Heureka now sanitizes URL search string which fixes the issue in the embedded mode where the app was unable to apply filters from the hased part of the URL.
- 2da3003: - Update typescript version to the latest v.5.8.3
  - Update typescript definitions for node
- 1d30fb5: Fix jsdom css parsing error (update jsdom dependencies)
- 5513d4b: Remove jn classname prefixes for Example, Greenhouse and Heureka
- Updated dependencies [2da3003]
- Updated dependencies [1d30fb5]
- Updated dependencies [8d344a6]
  - @cloudoperators/juno-url-state-provider@3.0.4
  - @cloudoperators/juno-messages-provider@0.2.10
  - @cloudoperators/juno-ui-components@5.0.1

## 0.7.3

### Patch Changes

- 4dedb33: Upgrade to tailwind 4.0 and related changes
- Updated dependencies [01245c8]
- Updated dependencies [4dedb33]
  - @cloudoperators/juno-ui-components@5.0.0
  - @cloudoperators/juno-messages-provider@0.2.9

## 0.7.2

### Patch Changes

- 45814a5: Remove unnecessary message in service detail page when there is no image version selected.

## 0.7.1

### Patch Changes

- def4143: Heureka static bundle now allows to change appProps.json URL based on the target environment.
- 198dd13: Fix ComboBox Reset Behavior After Selection

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
