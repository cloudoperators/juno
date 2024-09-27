# @cloudoperators/juno-app-heureka

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
