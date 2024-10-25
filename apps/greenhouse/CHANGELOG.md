# @cloudoperators/juno-app-greenhouse

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
