/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef } from "react"
import { isNil } from "lodash"
import {
  Page,
  ComponentVersionOrderByField,
  ComponentInstanceOrderByField,
  OrderDirection,
  useGetServiceImageVersionsLazyQuery,
} from "../../generated/graphql"
import { getNormalizedImageVersionsData } from "./utils"

type UseFetchServiceImageVersionsProps = {
  serviceCcrn: string
  pageSize?: number
}

export const useFetchServiceImageVersions = ({ serviceCcrn, pageSize = 20 }: UseFetchServiceImageVersionsProps) => {
  const pagesRef = useRef<Page[]>()
  const [loadServiceImageVersions, { data, loading, error }] = useGetServiceImageVersionsLazyQuery()
  const { imageVersions, totalCount, pages, pageNumber } = getNormalizedImageVersionsData(data)

  // let's save the pages so we can get cursor when navigating among pages
  pagesRef.current = pages

  // Fetch service image versions on demand
  const fetchServiceImageVersions = useCallback(
    ({ serviceCcrn, cursor }: { serviceCcrn: string; cursor?: string | null }) =>
      loadServiceImageVersions({
        variables: {
          first: pageSize,
          after: cursor,
          filter: { serviceCcrn: [serviceCcrn] },
          orderBy: [
            {
              by: ComponentVersionOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          // Add component instances ordering and filtering
          orderByCi: [
            {
              by: ComponentInstanceOrderByField.Cluster,
              direction: OrderDirection.Asc,
            },
            {
              by: ComponentInstanceOrderByField.Namespace,
              direction: OrderDirection.Asc,
            },
          ],
          filterCi: {
            serviceCcrn: [serviceCcrn],
          },
        },
        fetchPolicy: "network-only",
      }),
    []
  )

  // Go to a specific page
  const goToPage = useCallback((pageNumber?: number) => {
    if (!isNil(pageNumber)) {
      const cursor = pagesRef.current?.find((p) => p?.pageNumber === pageNumber - 1)?.after
      fetchServiceImageVersions({ serviceCcrn, cursor })
    }
  }, [])

  // Fetch services whenever filter settings change
  useEffect(() => {
    fetchServiceImageVersions({ serviceCcrn })
  }, [serviceCcrn])

  return {
    loading,
    currentPage: pageNumber,
    imageVersions: imageVersions || [],
    totalNumberOfPages: pages.length || 0,
    totalCount,
    goToPage: goToPage,
    error: error?.message,
  }
}
