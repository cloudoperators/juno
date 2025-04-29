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
import { getNormalizedImageVersionsData, getNormalizedError } from "./utils"

type UseFetchServiceImageVersionsProps = {
  serviceCcrn: string
  pageSize?: number
}

export const useFetchServiceImageVersions = ({ serviceCcrn, pageSize = 20 }: UseFetchServiceImageVersionsProps) => {
  const pagesRef = useRef<Page[]>()
  // Use default options into the useLazyQuery and then customize those options in the query function
  // https://www.apollographql.com/docs/react/data/queries#manual-execution-with-uselazyquery
  const [loadServiceImageVersions, { data, loading, error }] = useGetServiceImageVersionsLazyQuery({
    variables: {
      first: pageSize,
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
    },
    fetchPolicy: "network-only",
  })
  const { imageVersions, totalCount, pages, pageNumber } = getNormalizedImageVersionsData(data)

  // let's save the pages so we can get cursor when navigating among pages
  pagesRef.current = pages

  // Go to a specific page
  const goToPage = useCallback(
    (pageNumber?: number) => {
      if (!isNil(pageNumber)) {
        const cursor = pagesRef.current?.find((p) => p?.pageNumber === pageNumber - 1)?.after
        loadServiceImageVersions({
          variables: {
            filter: { serviceCcrn: [serviceCcrn] },
            filterCi: {
              serviceCcrn: [serviceCcrn],
            },
            filterIc: {
              serviceCcrn: [serviceCcrn],
            },
            after: cursor,
          },
        })
      }
    },
    [serviceCcrn]
  )

  // Fetch services whenever filter settings change
  useEffect(() => {
    loadServiceImageVersions({
      variables: {
        filter: { serviceCcrn: [serviceCcrn] },
        filterCi: {
          serviceCcrn: [serviceCcrn],
        },
        filterIc: {
          serviceCcrn: [serviceCcrn],
        },
      },
    })
  }, [serviceCcrn])

  return {
    loading,
    currentPage: pageNumber,
    imageVersions: imageVersions || [],
    totalNumberOfPages: pages.length || 0,
    totalCount,
    goToPage: goToPage,
    error: getNormalizedError(error),
  }
}
