---
"@cloudoperators/juno-app-heureka": minor
"@cloudoperators/juno-app-greenhouse": patch
---

Optimized the data fetching for main views in Heureka to improve performance with large datasets (millions of issues). This change splits the fetch requests for all three views (IssueMatches, Services, and Components) by separating the total count and page info queries from the main data queries.
