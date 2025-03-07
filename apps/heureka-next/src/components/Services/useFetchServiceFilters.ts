/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty, map, omit } from "lodash"
import { FilterItem, GetServiceFiltersQuery, useGetServiceFiltersQuery } from "../../generated/graphql"
import { Filter } from "../common/Filters/types"

const getNormalizedFilter = (filter?: FilterItem | null) => ({
  displayName: filter?.displayName || "",
  filterName: filter?.filterName || "",
  values: filter?.values?.filter((value) => value !== null) || [],
})

const getNormalizedData = (data: GetServiceFiltersQuery | undefined | null): Filter[] =>
  isEmpty(data) || isEmpty(data.ServiceFilterValues)
    ? []
    : map(omit(data.ServiceFilterValues, ["__typename"]), getNormalizedFilter)

export const useFetchServiceFilters = () => {
  const { data, previousData, loading, error } = useGetServiceFiltersQuery()
  return {
    serviceFilters: getNormalizedData(isEmpty(data) ? previousData : data),
    loading,
    error,
  }
}
