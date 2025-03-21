/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty } from "lodash"
import { useEffect, useState } from "react"
import {
  useGetServiceImageVersionsQuery,
  Page,
  ComponentVersionOrderByField,
  OrderDirection,
} from "../../generated/graphql"
import { getNormalizedImageVersionsData } from "./utils"

type UseFetchServiceImageVersionsProps = {
  serviceCcrn: string
  pageSize?: number
}

export const useFetchServiceImageVersions = ({ serviceCcrn, pageSize = 10 }: UseFetchServiceImageVersionsProps) => {
  const [currentPage, setCurrentPage] = useState<number | undefined>(1)
  const [pages, setPages] = useState<Page[]>()

  const { data, previousData, loading, error } = useGetServiceImageVersionsQuery({
    variables: {
      first: pageSize,
      after: pages?.find((page) => page?.pageNumber === currentPage)?.after,
      filter: { serviceCcrn: [serviceCcrn] },
      orderBy: [
        {
          by: ComponentVersionOrderByField.Severity,
          direction: OrderDirection.Desc,
        },
      ],
    },
  })

  const {
    imageVersions,
    totalCount,
    pages: pagesFromApi,
  } = getNormalizedImageVersionsData(isEmpty(data) ? previousData : data)

  useEffect(() => {
    if (currentPage && currentPage > Math.ceil(totalCount / pageSize)) {
      setCurrentPage(1)
    }
    setPages(pagesFromApi)
  }, [totalCount])

  return {
    loading,
    currentPage,
    imageVersions,
    totalNumberOfPages: Math.ceil(totalCount / pageSize),
    totalCount,
    goToPage: setCurrentPage,
    error: error?.message,
  }
}
