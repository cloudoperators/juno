# Ideal API Queries

## 1. The list of Issues for a Selected Service and Its Image Version

```graphql
query GetServiceImageVersionIssues(serviceName, imageVersion) {
    issues {
        edges {
            node {
                severity
                name
                sourceUrl
                earliestTargetRemediationDate
                description
            }
        }
        totalCount
        pageInfo {
            pageNumber
            pages {
                after
                pageNumber
            }
        }
    }
}
```

## 2. The list of image versions for one selected service

```graphql
query GetServiceImageVersions(serviceName) {
    imageVersions {
        edges {
            node {
                repository
                tag
                version
                issueCounts {
                    critical
                    high
                    medium
                    low
                    none
                }
                imageRegisteryUrl
            }
        }
        pageInfo {
            pageNumber
            pages {
                after
                pageNumber
            }
        }
        totalCount
    }
}
```

## 3. The list of all services

```graphql
query GetServices {
  services {
    edges {
      node {
        name
        issueCounts {
          totalCount
          critical
          high
          medium
          low
          none
        }
        supportGroups {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
    totalCount
    pageInfo {
      pageNumber
      pages {
        after
        pageNumber
      }
    }
  }
}
```
