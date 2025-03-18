/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react"
import { isEmpty } from "lodash"
import { OrderDirection, Page, ServiceOrderByField, useGetServicesQuery } from "../../generated/graphql"
import { FilterSettings } from "../common/Filters/types"
import { getNormalizedData, getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesInput = {
  filterSettings: FilterSettings
  pageSize?: number
}

export const useFetchServices = ({ filterSettings, pageSize = 10 }: UseFetchServicesInput) => {
  const pagesRef = useRef<Page[]>()
  const [currentPage, setCurrentPage] = useState<number | undefined>(1)
  const [pages, setPages] = useState<Page[]>()
  const { data, previousData, loading, error } = useGetServicesQuery({
    variables: {
      first: pageSize,
      after: pages?.find((page) => page?.pageNumber === currentPage)?.after,
      filter: getActiveServiceFilter(filterSettings),
      /**
       * TODO: make it dynamic
       * for the moment the API only allows to order by CCRN
       * and we're hardcoding the order direction for MVP
       * later read it from the column header
       */
      orderBy: [
        {
          by: ServiceOrderByField.Ccrn,
          direction: OrderDirection.Asc,
        },
      ],
    },
  })
  const { services, totalCount, pages: pagesFromApi } = getNormalizedData(isEmpty(data) ? previousData : data)

  // reset current page if data has not much records
  useEffect(() => {
    if (currentPage && currentPage > Math.ceil(totalCount / pageSize)) {
      setCurrentPage(1)
    }
    setPages(pagesFromApi)
  }, [totalCount])

  return {
    loading,
    currentPage,
    services,
    totalNumberOfPages: Math.ceil(totalCount / pageSize),
    goToPage: setCurrentPage,
    error: getNormalizedError(error),
  }
}