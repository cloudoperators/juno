/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { gql } from "graphql-request"
// gql
// It is there for convenience so that you can get the tooling support
// like prettier formatting and IDE syntax highlighting.
// You can use gql from graphql-tag if you need it for some reason too.

// Main query for fetching Services list data (excluding totalCount and pageInfo)
export const servicesMainQuery = () => gql`
  query ($filter: ServiceFilter, $first: Int, $after: String) {
    Services(filter: $filter, first: $first, after: $after) {
      edges {
        node {
          id
          ccrn
          objectMetadata {
            componentInstanceCount
            issueMatchCount
          }
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
                id
                ccrn
              }
              cursor
            }
          }
        }
        cursor
      }
    }
  }
`
// The query for fetching Services details data
export const servicesDetailsQuery = () => gql`
  query ($filter: ServiceFilter, $first: Int, $after: String) {
    Services(filter: $filter, first: $first, after: $after) {
      edges {
        node {
          id
          ccrn
          objectMetadata {
            componentInstanceCount
            issueMatchCount
          }
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
                id
                ccrn
              }
              cursor
            }
          }
        }
        cursor
      }
    }
  }
`

// Count query for fetching totalCount and pageInfo for Services
export const servicesCountQuery = () => gql`
  query ($filter: ServiceFilter, $first: Int, $after: String) {
    Services(filter: $filter, first: $first, after: $after) {
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
// Query to fetch only Component Instances for a specific Service
export const componentInstancesOfServiceQuery = () => gql`
  query ($filter: ComponentInstanceFilter, $first: Int, $after: String) {
    ComponentInstances(filter: $filter, first: $first, after: $after) {
      edges {
        node {
          id
          ccrn
          count
          componentVersion {
            version
            component {
              ccrn
            }
          }
          issueMatches {
            totalCount
            edges {
              node {
                severity {
                  value
                  score
                }
              }
            }
          }
        }
      }
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
