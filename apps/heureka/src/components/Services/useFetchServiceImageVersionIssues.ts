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
} from "../../generated/graphql"
import { getNormalizedImageVersionIssues } from "./utils"

type UseFetchServiceImageVersionIssuesProps = {
  serviceCcrn: string
  imageVersion: string
  pageSize?: number
}

export const useFetchServiceImageVersionIssues = ({
  serviceCcrn,
  imageVersion,
  pageSize = 10,
}: UseFetchServiceImageVersionIssuesProps) => {
  const pagesRef = useRef<Page[]>()
  const [loadIssues, { data, loading, error }] = useGetServiceImageVersionIssuesLazyQuery()
  const { issues, totalCount, pages, pageNumber } = getNormalizedImageVersionIssues(data)

  // Save pages for pagination
  pagesRef.current = pages

  // Fetch issues on demand
  const fetchIssues = useCallback(
    ({ serviceCcrn, imageVersion, cursor }: { serviceCcrn: string; imageVersion: string; cursor?: string | null }) =>
      loadIssues({
        variables: {
          first: pageSize,
          after: cursor,
          componentVersionFilter: {
            version: [imageVersion],
          },
          issueMatchFilter: {
            serviceCcrn: [serviceCcrn],
          },
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
      }),
    []
  )

  // Go to a specific page
  const goToPage = useCallback(
    (pageNumber?: number) => {
      if (!isNil(pageNumber)) {
        const cursor = pagesRef.current?.find((p) => p?.pageNumber === pageNumber - 1)?.after
        fetchIssues({ serviceCcrn, imageVersion, cursor })
      }
    },
    [serviceCcrn, imageVersion, pageNumber]
  )

  // Fetch issues whenever serviceCcrn or imageVersion changes
  useEffect(() => {
    fetchIssues({ serviceCcrn, imageVersion })
  }, [serviceCcrn, imageVersion])

  return {
    loading,
    currentPage: pageNumber,
    issues: issues || [],
    totalNumberOfPages: pages.length || 0,
    totalCount,
    goToPage,
    error: error?.message,
  }
}
