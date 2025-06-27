# @cloudoperators/juno-app-greenhouse

## 0.6.7

### Patch Changes

- 4dedb33: Upgrade to tailwind 4.0 and related changes
- Updated dependencies [01245c8]
- Updated dependencies [4dedb33]
- Updated dependencies [4dedb33]
  - @cloudoperators/juno-ui-components@5.0.0
  - @cloudoperators/juno-app-supernova@0.17.5
  - @cloudoperators/juno-app-heureka@0.7.3
  - @cloudoperators/juno-app-doop@2.4.5
  - @cloudoperators/juno-messages-provider@0.2.9

## 0.6.6

### Patch Changes

- 0c09a23: Patch greenhouse to get latest version of Heureka.
- Updated dependencies [45814a5]
  - @cloudoperators/juno-app-heureka@0.7.2

## 0.6.5

### Patch Changes

- 198dd13: Fix ComboBox Reset Behavior After Selection
- Updated dependencies [def4143]
- Updated dependencies [198dd13]
  - @cloudoperators/juno-app-heureka@0.7.1
  - @cloudoperators/juno-app-supernova@0.17.4
  - @cloudoperators/juno-app-doop@2.4.4

## 0.6.4

### Patch Changes

- 86e0be2: Upgrade doop extension
- b693d90: Heureka now supports filters in deeplinks.
- Updated dependencies [86e0be2]
- Updated dependencies [b693d90]
  - @cloudoperators/juno-app-doop@2.4.3
  - @cloudoperators/juno-app-heureka@0.7.0
  - @cloudoperators/juno-url-state-provider@3.0.3
  - @cloudoperators/juno-app-supernova@0.17.3

## 0.6.3

### Patch Changes

- Updated dependencies [5488568]
- Updated dependencies [6ef7f8d]
  - @cloudoperators/juno-ui-components@4.0.1
  - @cloudoperators/juno-app-doop@2.4.2
  - @cloudoperators/juno-app-heureka@0.6.2
  - @cloudoperators/juno-app-supernova@0.17.2
  - @cloudoperators/juno-messages-provider@0.2.8

## 0.6.2

### Patch Changes

- 7317372: Updates Supernova version
- Updated dependencies [7317372]
- Updated dependencies [7317372]
  - @cloudoperators/juno-messages-provider@0.2.7
  - @cloudoperators/juno-app-supernova@0.17.1
  - @cloudoperators/juno-app-doop@2.4.1
  - @cloudoperators/juno-app-heureka@0.6.1

## 0.6.1

### Patch Changes

- d68e81a: Fix markdown rendering errors after React 19 upgrade by aligning react-markdown and remark-gfm dependencies

## 0.6.0

### Minor Changes

- 3474c87: Changed suitable Selects to ComboBox

### Patch Changes

- 9dd8568: fix(heureka): removes unnecessary fields from getServices to improve performance
- 80a30d7: Heureka now supports basic deeplinks.
- 483d9ee: Update react version to 19.1.0
- Updated dependencies [483d9ee]
- Updated dependencies [3474c87]
- Updated dependencies [9dd8568]
- Updated dependencies [80a30d7]
- Updated dependencies [483d9ee]
  - @cloudoperators/juno-ui-components@4.0.0
  - @cloudoperators/juno-app-supernova@0.17.0
  - @cloudoperators/juno-app-heureka@0.6.0
  - @cloudoperators/juno-app-doop@2.4.0
  - @cloudoperators/juno-url-state-provider@3.0.2
  - @cloudoperators/juno-messages-provider@0.2.6
  - @cloudoperators/juno-k8s-client@1.0.7
  - @cloudoperators/juno-oauth@1.4.7

## 0.5.7

### Patch Changes

- 43d6aa0: Update vite to the latest version (v 6.3.5) to resolve dependency vulnarebilities
- Updated dependencies [cdae407]
- Updated dependencies [7230774]
- Updated dependencies [a9e8592]
- Updated dependencies [43d6aa0]
  - @cloudoperators/juno-ui-components@3.1.1
  - @cloudoperators/juno-url-state-provider@3.0.1
  - @cloudoperators/juno-messages-provider@0.2.5
  - @cloudoperators/juno-k8s-client@1.0.6
  - @cloudoperators/juno-oauth@1.4.6
  - @cloudoperators/juno-app-heureka@0.5.4
  - @cloudoperators/juno-app-doop@2.3.8
  - @cloudoperators/juno-app-supernova@0.16.7

## 0.5.6

### Patch Changes

- 3140768: Refactor Issue Count Handling and Add Total Counts per Service
- Updated dependencies [3140768]
  - @cloudoperators/juno-app-heureka@0.5.3

## 0.5.5

### Patch Changes

- 37e1bf4: Added a search bar to the issues list that allows users to filter issues by CVE name (primaryName).
- Updated dependencies [37e1bf4]
- Updated dependencies [403b5cd]
- Updated dependencies [67f53cb]
  - @cloudoperators/juno-app-heureka@0.5.2
  - @cloudoperators/juno-ui-components@3.1.0

## 0.5.4

### Patch Changes

- 52e148c: Refactors severity count related components
- ee1b3ab: Reorganize components files based on how they are imported.
- 85fe05e: Propagates authentication token to the extensions
- 6b5e878: - Rollback `url-state-provider` back to `v1.3.2`.
  - `url-state-provider` will now ignore Hashed(#) part of the URL while encoding/decoding query parameters.
  - Removed dependency of `url-state-provider-v1` in all internal applications.
- d50e279: Improve issue description truncation in ImageVersionIssueListItem
- 0d6c4e8: Closes image version details panel on reselect in Service Details page
- Updated dependencies [9ff1784]
- Updated dependencies [52e148c]
- Updated dependencies [ee1b3ab]
- Updated dependencies [4e8a5ef]
- Updated dependencies [f48439c]
- Updated dependencies [6b5e878]
- Updated dependencies [d50e279]
- Updated dependencies [0d6c4e8]
  - @cloudoperators/juno-ui-components@3.0.1
  - @cloudoperators/juno-app-heureka@0.5.1
  - @cloudoperators/juno-url-state-provider@3.0.0
  - @cloudoperators/juno-app-supernova@0.16.6
  - @cloudoperators/juno-app-doop@2.3.7

## 0.5.3

### Patch Changes

- 0403e89: Adds pagination and ordering to issues list
- 395a12a: adds an image version details info to service details page
- e5cf6b6: React 19 Upgrade. Phase 1 - Upgrade to React 18.3
- 527064c: Adds issues list to image version details panel
- ea088f6: Displays each count in a separate column within lists
- cdba61c: Upgrade to vite 6.2
- Updated dependencies [395a12a]
- Updated dependencies [0403e89]
- Updated dependencies [e2eb636]
- Updated dependencies [e5cf6b6]
- Updated dependencies [1a47422]
- Updated dependencies [02cb67a]
- Updated dependencies [527064c]
- Updated dependencies [ea088f6]
- Updated dependencies [cdba61c]
- Updated dependencies [1d4f57e]
- Updated dependencies [fd2529a]
- Updated dependencies [dfdfedd]
  - @cloudoperators/juno-app-heureka@0.5.0
  - @cloudoperators/juno-messages-provider@0.2.4
  - @cloudoperators/juno-ui-components@3.0.0
  - @cloudoperators/juno-app-supernova@0.16.5
  - @cloudoperators/juno-app-doop@2.3.6
  - @cloudoperators/juno-k8s-client@1.0.4
  - @cloudoperators/juno-oauth@1.4.5

## 0.5.2

### Patch Changes

- e4f5190: Adds service overview panel to heureka
- fe0b5cf: Replace usage of sapcc-k8sclient with juno-k8s-client + Fix some ts errors and warnings
- 6d664e8: Add store and service details page to heureka
- 23b5bc9: Update heureka dependency
- cde9cb5: Update vite version to 6.0
- Updated dependencies [e4f5190]
- Updated dependencies [f1463a6]
- Updated dependencies [2bd7610]
- Updated dependencies [fe0b5cf]
- Updated dependencies [0110f7b]
- Updated dependencies [6d664e8]
- Updated dependencies [0eb6d9e]
- Updated dependencies [2277a23]
- Updated dependencies [cde9cb5]
- Updated dependencies [23b5bc9]
  - @cloudoperators/juno-app-heureka@0.4.0
  - @cloudoperators/juno-k8s-client@1.0.3
  - @cloudoperators/juno-ui-components@2.39.0
  - @cloudoperators/juno-messages-provider@0.2.3
  - @cloudoperators/juno-oauth@1.4.4
  - @cloudoperators/juno-app-doop@2.3.5

## 0.5.1

### Patch Changes

- 9609183: Release Greenhouse with new version of Heureka
- Updated dependencies [135cae5]
- Updated dependencies [f2f264f]
  - @cloudoperators/juno-app-heureka@0.3.3

## 0.5.0

### Minor Changes

- cbd4ce7: Plugin admin can now filter pluginConfigurationItems

### Patch Changes

- Updated dependencies [106c2a4]
- Updated dependencies [99baa5f]
  - @cloudoperators/juno-ui-components@2.38.2
  - @cloudoperators/juno-app-heureka@0.3.1

## 0.4.2

### Patch Changes

- d1c4573: Fix greenhouse org admin change
- Updated dependencies [e990a1d]
  - @cloudoperators/juno-app-doop@2.3.4

## 0.4.1

### Patch Changes

- 58925a1: Move all greenhouse to TS
- Updated dependencies [43fc5b7]
- Updated dependencies [fe294e9]
- Updated dependencies [4834d12]
- Updated dependencies [188ece2]
  - @cloudoperators/juno-ui-components@2.38.0
  - @cloudoperators/juno-oauth@1.4.2
  - @cloudoperators/juno-app-supernova@0.16.2
  - @cloudoperators/juno-app-heureka@2.11.4

## 0.4.0

### Minor Changes

- 56ef4da: Cleanup. Refactoring clear separation of mock, token and oidc session.Enhancements to dynamically determine the organization based on application properties or URL parameters

### Patch Changes

- Updated dependencies [b3be0d7]
  - @cloudoperators/juno-app-supernova@0.16.0

## 0.3.12

### Patch Changes

- 0e7b79e: Sync Greenhouse with the libraries

## 0.3.11

### Patch Changes

- d07a3cb: Add Default Vulnerability Filter to issueMatches entity and renames tab to Vulnerabilities instead of Issues
- Updated dependencies [d07a3cb]
- Updated dependencies [3c6ad30]
- Updated dependencies [3471a77]
- Updated dependencies [87d57d7]
  - @cloudoperators/juno-app-heureka@2.11.3
  - @cloudoperators/juno-ui-components@2.35.0

## 0.3.10

### Patch Changes

- 975a7d9: Updates service details query
- Updated dependencies [975a7d9]
  - @cloudoperators/juno-app-heureka@2.11.2

## 0.3.9

### Patch Changes

- 2d8da8a: This updates services query based on some minor API changes
- Updated dependencies [2d8da8a]
  - @cloudoperators/juno-app-heureka@2.11.1

## 0.3.8

### Patch Changes

- 0191ac6: Refine wording to enhance clarity of the UI displayed info.
- Updated dependencies [8e6e94d]
- Updated dependencies [385ebcf]
- Updated dependencies [b99caff]
- Updated dependencies [5d186c7]
- Updated dependencies [f25740e]
- Updated dependencies [0191ac6]
  - @cloudoperators/juno-ui-components@2.33.0
  - @cloudoperators/juno-app-supernova@0.14.5
  - @cloudoperators/juno-app-doop@2.3.3
  - @cloudoperators/juno-app-heureka@2.11.0

## 0.3.7

### Patch Changes

- b1503ed: Decouple juno-utils mocking logic
- 8615024: Replace useEndlessScrollList from utils to ui-componetns and utils deprecation
- Updated dependencies [b1503ed]
- Updated dependencies [a0ee034]
- Updated dependencies [8615024]
  - @cloudoperators/juno-app-doop@2.3.2
  - @cloudoperators/juno-ui-components@2.32.0
  - @cloudoperators/juno-app-supernova@0.14.4

## 0.3.6

### Patch Changes

- a6789db: This change corrects URL state handling for filter property
- Updated dependencies [a6789db]
  - @cloudoperators/juno-app-heureka@2.10.1

## 0.3.5

### Patch Changes

- 3810a93: add support_group only if supportGroups exists and is an array
- Updated dependencies [b1a5eb1]
- Updated dependencies [c9190d0]
- Updated dependencies [879812b]
- Updated dependencies [18ebaba]
  - @cloudoperators/juno-ui-components@2.30.0
  - @cloudoperators/juno-app-supernova@0.14.3

## 0.3.4

### Patch Changes

- eea5de6: The pagination is added to the list of component instances for a selected service on the service details page.
- Updated dependencies [63a951c]
- Updated dependencies [5a4e3d1]
- Updated dependencies [7cb142d]
- Updated dependencies [eea5de6]
- Updated dependencies [a278544]
  - @cloudoperators/juno-ui-components@2.29.0
  - @cloudoperators/juno-app-heureka@2.10.0

## 0.3.3

### Patch Changes

- 3ee03d3: harmonizes filter names across different views
- Updated dependencies [d4167c9]
- Updated dependencies [3e225b9]
- Updated dependencies [3ee03d3]
- Updated dependencies [a304189]
- Updated dependencies [02f06a1]
  - @cloudoperators/juno-ui-components@2.28.0
  - @cloudoperators/juno-app-heureka@2.9.2

## 0.3.2

### Patch Changes

- fb9146a: migrate greenhouse to vite and adjust all dependent apps to export needed entrypoints
- Updated dependencies [f6f054f]
- Updated dependencies [4bcff19]
- Updated dependencies [28a8d38]
- Updated dependencies [fb9146a]
- Updated dependencies [fb9146a]
  - @cloudoperators/juno-ui-components@2.27.0
  - @cloudoperators/juno-app-supernova@0.14.2
  - @cloudoperators/juno-app-heureka@2.9.1
  - @cloudoperators/juno-app-doop@2.3.1

## 0.3.1

### Patch Changes

- 95d921f: Make web workers in supernova inline which allows it to run in greenhouse
- c3ab492: This fixes the embedded prop handling, ensuring it is passed correctly to AppShell.
- 8d58eb9: Added some ux improvements and omment out the component view as it does not have much helpful info for the current data set.
- e1eac39: Improved overall performance of Services and IssueMatches views by optimizing the underlying GraphQL queries
- 5746eee: Customized search placeholder for IssueMatches and Services views in heureka
- Updated dependencies [f307966]
- Updated dependencies [bcb45f5]
- Updated dependencies [4a9e17a]
- Updated dependencies [3ec48c0]
- Updated dependencies [3e21132]
- Updated dependencies [436f35a]
- Updated dependencies [24fec5c]
- Updated dependencies [aaea462]
  - @cloudoperators/juno-ui-components@2.25.0

## 0.3.0

### Minor Changes

- 1863738: consolidates all admin applications into a unified structure under the core-apps module. By grouping these admin apps together, we simplify the codebase, enhance maintainability, and enable better modular loading of core functionalities.

### Patch Changes

- Updated dependencies [97b08cb]
- Updated dependencies [bdee402]
  - @cloudoperators/juno-ui-components@2.24.0

## 0.2.5

### Patch Changes

- d13f774: Adds temporary fix to forward default initial filters to the applications (plugins)
- Updated dependencies [aa185b4]
- Updated dependencies [4ded874]
  - @cloudoperators/juno-ui-components@2.23.0

## 0.2.4

### Patch Changes

- 98070aa: Fixes issue with details panel being stuck in loading state when reloading the app while the panel is open
- c152995: Ux improvement: Removed NavEntries folder and related controls; introduced CustomAppShell to manage TopNavigation within AppShell.
- Updated dependencies [73f55e0]
- Updated dependencies [44e88bf]
- Updated dependencies [aa0bc95]
  - @cloudoperators/juno-ui-components@2.22.0

## 0.2.3

### Patch Changes

- 139621e: Optimized the data fetching for main views in Heureka to improve performance with large datasets (millions of issues). This change splits the fetch requests for all three views (IssueMatches, Services, and Components) by separating the total count and page info queries from the main data queries.

## 0.2.2

### Patch Changes

- 828f906: Restore demo user support
- Updated dependencies [68e3984]
- Updated dependencies [8c3d471]
- Updated dependencies [e27e340]
- Updated dependencies [59c00bb]
  - @cloudoperators/juno-ui-components@2.21.0

## 0.2.1

### Patch Changes

- 9812092: Use the latests version of supernova
- Updated dependencies [4ad82f4]
  - @cloudoperators/juno-ui-components@2.20.0

## 0.2.0

### Minor Changes

- 68a3e99: Migrated the Greenhouse Dashboard and all dependent apps into the Juno repository for streamlined management and integration. All dependent apps have been relocated under the new structure.
