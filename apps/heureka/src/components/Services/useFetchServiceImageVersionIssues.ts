/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef } from "react"
import { isNil } from "lodash"
import {
  Page,
  IssueMatchOrderByField,
  OrderDirection,
  useGetServiceImageVersionIssuesLazyQuery,
  IssueOrderByField,
} from "../../generated/graphql"
import { getNormalizedImageVersionIssues, getNormalizedError } from "./utils"

type UseFetchServiceImageVersionIssuesProps = {
  serviceCcrn: string
  imageVersion: string
  pageSize?: number
  searchTerm?: string
}

export const useFetchServiceImageVersionIssues = ({
  serviceCcrn,
  imageVersion,
  pageSize = 20,
  searchTerm,
}: UseFetchServiceImageVersionIssuesProps) => {
  const pagesRef = useRef<Page[]>()
  // Use default options into the useLazyQuery and then customize those options in the query function
  // https://www.apollographql.com/docs/react/data/queries#manual-execution-with-uselazyquery
  const [loadIssues, { data, loading, error }] = useGetServiceImageVersionIssuesLazyQuery({
    variables: {
      first: pageSize,
      orderByIssueSeverity: [
        {
          by: IssueOrderByField.Severity,
          direction: OrderDirection.Desc,
        },
      ],
      orderBySeverity: [
        {
          by: IssueMatchOrderByField.Severity,
          direction: OrderDirection.Desc,
        },
      ],
      orderByTrd: [
        {
          by: IssueMatchOrderByField.TargetRemediationDate,
          direction: OrderDirection.Asc,
        },
      ],
    },
    fetchPolicy: "network-only",
  })
  const { issues, totalCount, pages, pageNumber } = getNormalizedImageVersionIssues(data)

  // Save pages for pagination
  pagesRef.current = pages

  // Go to a specific page
  const goToPage = useCallback(
    (pageNumber?: number) => {
      if (!isNil(pageNumber)) {
        const cursor = pagesRef.current?.find((p) => p?.pageNumber === pageNumber - 1)?.after
        loadIssues({
          variables: {
            after: cursor,
            componentVersionFilter: {
              version: [imageVersion],
            },
            issueMatchFilter: {
              serviceCcrn: [serviceCcrn],
            },
            issuesFilter: searchTerm ? { search: [searchTerm] } : undefined,
          },
        })
      }
    },
    [serviceCcrn, imageVersion, searchTerm] // Add dependencies here
  )

  // Fetch issues whenever serviceCcrn, imageVersion, or searchTerm changes
  useEffect(() => {
    loadIssues({
      variables: {
        componentVersionFilter: {
          version: [imageVersion],
        },
        issueMatchFilter: {
          serviceCcrn: [serviceCcrn],
        },
        issuesFilter: searchTerm ? { search: [searchTerm] } : undefined,
      },
    })
  }, [serviceCcrn, imageVersion, searchTerm])

  return {
    loading,
    currentPage: pageNumber,
    issues: issues || [],
    totalNumberOfPages: pages.length || 0,
    totalCount,
    goToPage: goToPage,
    error: getNormalizedError(error),
  }
}
