/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef } from "react"
import { isNil } from "lodash"
import { OrderDirection, Page, ServiceOrderByField, useGetServicesLazyQuery } from "../../generated/graphql"
import { FilterSettings } from "../common/Filters/types"
import { getNormalizedData, getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesInput = {
  filterSettings: FilterSettings
  pageSize?: number
}

export const useFetchServices = ({ filterSettings, pageSize = 20 }: UseFetchServicesInput) => {
  const pagesRef = useRef<Page[]>()
  // Use default options into the useLazyQuery and then customize those options in the query function
  // https://www.apollographql.com/docs/react/data/queries#manual-execution-with-uselazyquery
  const [loadServices, { data, loading, error }] = useGetServicesLazyQuery({
    variables: {
      first: pageSize,
      orderBy: [
        {
          by: ServiceOrderByField.Severity,
          direction: OrderDirection.Desc,
        },
      ],
    },
    fetchPolicy: "network-only", // Doesn't check cache before making a network request
  })
  const { services, pages, pageNumber } = getNormalizedData(data)

  // let's save the pages so we can get cursor when navigating among pages
  pagesRef.current = pages

  // Go to a specific page
  const goToPage = useCallback(
    (pageNumber?: number) => {
      if (!isNil(pageNumber)) {
        // Since pagesRef is a mutable reference and does not trigger re-renders when updated, it doesn't need to be included in the dependencies array.
        const cursor = pagesRef.current?.find((p) => p?.pageNumber === pageNumber - 1)?.after
        loadServices({ variables: { filter: getActiveServiceFilter(filterSettings), after: cursor } })
      }
    },
    [filterSettings]
  )

  // Fetch services whenever filter settings change
  useEffect(() => {
    loadServices({ variables: { filter: getActiveServiceFilter(filterSettings) } })
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
