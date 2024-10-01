# @cloudoperators/juno-app-heureka

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
