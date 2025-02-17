import { useState } from "react"
import { ApolloError } from "@apollo/client"
import { isEmpty, isNil } from "lodash"
import { useGetServicesQuery } from "../../generated/graphql"
import { FilterSettings } from "../common/Filters/types"
import { getActiveServiceFilter } from "../../utils"
import { getNormalizedData } from "./utils"

const getNormalizedError = (error?: ApolloError) =>
  !isNil(error) ? error?.message || "Something went wrong" : undefined

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

  return {
    loading,
    currentPage,
    services,
    totalNumberOfPages: Math.ceil((totalCount || 0) / pageSize),
    goToPage: setCurrentPage,
    error: getNormalizedError(error),
  }
}
