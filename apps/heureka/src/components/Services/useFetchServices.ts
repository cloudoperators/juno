/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef } from "react"
import { isNil } from "lodash"
import {
  OrderDirection,
  Page,
  ServiceOrderByField,
  SeverityValues,
  useGetServicesLazyQuery,
} from "../../generated/graphql"
import { FilterSettings } from "../common/Filters/types"
import { getNormalizedData, getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesInput = {
  filterSettings: FilterSettings
  pageSize?: number
}

export const useFetchServices = ({ filterSettings, pageSize = 10 }: UseFetchServicesInput) => {
  const pagesRef = useRef<Page[]>()
  const [loadServices, { data, loading, error }] = useGetServicesLazyQuery()
  const { services, pages, pageNumber } = getNormalizedData(data)

  // let's save the pages so we can get cursor when navigating among pages
  pagesRef.current = pages

  // Fetch services on demand
  const fetchServices = useCallback(
    ({ filterSettings, cursor }: { filterSettings: FilterSettings; cursor?: string | null }) =>
      loadServices({
        variables: {
          first: pageSize,
          after: cursor,
          filter: getActiveServiceFilter(filterSettings),
          orderBy: [
            {
              by: ServiceOrderByField.Ccrn,
              direction: OrderDirection.Asc,
            },
          ],
          crit: {
            severity: [SeverityValues.Critical],
          },
          high: {
            severity: [SeverityValues.High],
          },
          med: {
            severity: [SeverityValues.Medium],
          },
          low: {
            severity: [SeverityValues.Low],
          },
          none: {
            severity: [SeverityValues.None],
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
      fetchServices({ filterSettings, cursor })
    }
  }, [])

  // Fetch services whenever filter settings change
  useEffect(() => {
    fetchServices({ filterSettings })
  }, [filterSettings])

  return {
    loading,
    error: getNormalizedError(error),
    services: services || [],
    currentPage: pageNumber,
    totalNumberOfPages: pages.length || 0,
    goToPage,
  }
}
