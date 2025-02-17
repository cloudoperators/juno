# @cloudoperators/juno-app-heureka

## 2.11.4

### Patch Changes

- 188ece2: Heureka move to TS
- Updated dependencies [43fc5b7]
  - @cloudoperators/juno-ui-components@2.38.0

## 2.11.3

### Patch Changes

- d07a3cb: Add Default Vulnerability Filter to issueMatches entity and renames tab to Vulnerabilities instead of Issues
- Updated dependencies [3c6ad30]
- Updated dependencies [3471a77]
- Updated dependencies [87d57d7]
  - @cloudoperators/juno-ui-components@2.35.0

## 2.11.2

### Patch Changes

- 975a7d9: Updates service details query

## 2.11.1

### Patch Changes

- 2d8da8a: This updates services query based on some minor API changes

## 2.11.0

### Minor Changes

- 0191ac6: Refine wording to enhance clarity of the UI displayed info.

### Patch Changes

- Updated dependencies [8e6e94d]
- Updated dependencies [385ebcf]
- Updated dependencies [b99caff]
- Updated dependencies [5d186c7]
  - @cloudoperators/juno-ui-components@2.33.0

## 2.10.1

### Patch Changes

- a6789db: This change corrects URL state handling for filter property

## 2.10.0

### Minor Changes

- eea5de6: The pagination is added to the list of component instances for a selected service on the service details page.

### Patch Changes

- Updated dependencies [63a951c]
- Updated dependencies [5a4e3d1]
- Updated dependencies [7cb142d]
- Updated dependencies [a278544]
  - @cloudoperators/juno-ui-components@2.29.0

## 2.9.2

### Patch Changes

- 3ee03d3: harmonizes filter names across different views
- Updated dependencies [d4167c9]
- Updated dependencies [3e225b9]
- Updated dependencies [a304189]
- Updated dependencies [02f06a1]
  - @cloudoperators/juno-ui-components@2.28.0

## 2.9.1

### Patch Changes

- fb9146a: migrate greenhouse to vite and adjust all dependent apps to export needed entrypoints
- Updated dependencies [f6f054f]
- Updated dependencies [4bcff19]
- Updated dependencies [28a8d38]
- Updated dependencies [fb9146a]
  - @cloudoperators/juno-ui-components@2.27.0

## 2.9.0

### Minor Changes

- e1eac39: Improved overall performance of Services and IssueMatches views by optimizing the underlying GraphQL queries

### Patch Changes

- 792e0c2: Add a new test for global slice store
- c3ab492: This fixes the embedded prop handling, ensuring it is passed correctly to AppShell.
- 8d58eb9: Added some ux improvements and omment out the component view as it does not have much helpful info for the current data set.
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

## 2.8.0

### Minor Changes

- 98070aa: Fixes issue with details panel being stuck in loading state when reloading the app while the panel is open
- c152995: Ux improvement: Removed NavEntries folder and related controls; introduced CustomAppShell to manage TopNavigation within AppShell.

### Patch Changes

- Updated dependencies [73f55e0]
- Updated dependencies [44e88bf]
- Updated dependencies [aa0bc95]
  - @cloudoperators/juno-ui-components@2.22.0

## 2.7.0

### Minor Changes

- 139621e: split fetch request to improve performance: separates total count and page info from main data request
- 139621e: Optimized the data fetching for main views in Heureka to improve performance with large datasets (millions of issues). This change splits the fetch requests for all three views (IssueMatches, Services, and Components) by separating the total count and page info queries from the main data queries.

## 2.6.0

### Minor Changes

- e3b613a: feat(heureka): flatten filter store structure across entities and add filter search props to url

## 2.5.0

### Minor Changes

- 2078dc5: feat(heureka): switches to TopNavigationItem
