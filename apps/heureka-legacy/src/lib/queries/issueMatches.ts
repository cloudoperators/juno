/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { gql } from "graphql-request"
// gql
// It is there for convenience so that you can get the tooling support
// like prettier formatting and IDE syntax highlighting.
// You can use gql from graphql-tag if you need it for some reason too.

// Main query for fetching IssueMatches data excluding totalCount and pageInfo
export const issueMatchesMainQuery = () => gql`
  query ($filter: IssueMatchFilter, $first: Int, $after: String) {
    IssueMatches(filter: $filter, first: $first, after: $after) {
      __typename
      edges {
        node {
          id
          status
          targetRemediationDate
          severity {
            value
            score
          }
          issue {
            id
            primaryName
            lastModified
            type
          }
          componentInstance {
            id
            ccrn
            count
            service {
              ccrn
              owners {
                edges {
                  node {
                    id
                    uniqueUserId
                    name
                  }
                  cursor
                }
              }
              supportGroups {
                edges {
                  node {
                    ccrn
                  }
                }
              }
            }
          }
        }
        cursor
      }
    }
  }
`
// The query for fetching IssueMatches details data
export const issueMatchesDetailsQuery = () => gql`
  query ($filter: IssueMatchFilter, $first: Int, $after: String) {
    IssueMatches(filter: $filter, first: $first, after: $after) {
      __typename
      edges {
        node {
          id
          status
          remediationDate
          discoveryDate
          targetRemediationDate
          severity {
            value
            score
          }
          effectiveIssueVariants {
            edges {
              node {
                id
                secondaryName
                description
              }
            }
          }
          issue {
            id
            primaryName
            lastModified
            type
          }
          componentInstance {
            id
            ccrn
            count
            componentVersion {
              version
              component {
                ccrn
              }
            }
            service {
              ccrn
              owners {
                edges {
                  node {
                    id
                    uniqueUserId
                    name
                  }
                  cursor
                }
              }
              supportGroups {
                edges {
                  node {
                    ccrn
                  }
                }
              }
            }
          }
        }
        cursor
      }
    }
  }
`
// Separate query for fetching totalCount and pageInfo only
export const issueMatchesCountQuery = () => gql`
  query ($filter: IssueMatchFilter, $first: Int, $after: String) {
    IssueMatches(filter: $filter, first: $first, after: $after) {
      __typename
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        isValidPage
        pageNumber
        nextPageAfter
        pages {
          after
          isCurrent
          pageNumber
          pageCount
        }
      }
    }
  }
`
