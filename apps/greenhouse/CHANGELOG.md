# @cloudoperators/juno-app-greenhouse

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
