/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react"
import { isEmpty } from "lodash"
import { useGetServicesQuery } from "../../generated/graphql"
import { FilterSettings } from "../common/Filters/types"
import { getNormalizedData, getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesInput = {
  filterSettings: FilterSettings
  pageSize?: number
}

export const useFetchServices = ({ filterSettings, pageSize = 10 }: UseFetchServicesInput) => {
  const [currentPage, setCurrentPage] = useState<number | undefined>(1)
  const { data, previousData, loading, error } = useGetServicesQuery({
    variables: {
      first: pageSize,
      after: String(Math.abs(((currentPage || 1) - 1) * pageSize)),
      filter: getActiveServiceFilter(filterSettings),
    },
  })
  const { services, totalCount } = getNormalizedData(isEmpty(data) ? previousData : data)

  // reset current page if data has not much records
  useEffect(() => {
    if (currentPage && currentPage > Math.ceil(totalCount / pageSize)) {
      setCurrentPage(1)
    }
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
