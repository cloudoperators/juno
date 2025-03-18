import { isEmpty } from "lodash"
import { useEffect, useState } from "react"
import { useGetServiceImageVersionsQuery, Page } from "../../generated/graphql"
import { getNormalizedImageVersionsData } from "./utils"

type ServiceImageVersion = {
  version: string
  ccrn: string
  issueCounts: {
    critical: number
    high: number
    medium: number
    low: number
    none: number
  }
}

type NormalizedData = {
  imageVersions: ServiceImageVersion[]
  totalCount: number
  pages: Page[]
}

const getNormalizedData = (data: any): NormalizedData => ({
  imageVersions: isEmpty(data?.ComponentVersions?.edges)
    ? []
    : data?.ComponentVersions?.edges
        ?.filter((edge: any) => edge !== null)
        .map((edge: any): ServiceImageVersion => ({
          version: edge?.node?.version || "",
          ccrn: edge?.node?.component?.ccrn || "",
          issueCounts: edge?.node?.issueCounts || {
            critical: 0,
            high: 0,
            medium: 0,
            low: 0,
            none: 0
          }
        })),
  totalCount: data?.ComponentVersions?.totalCount || 0,
  pages: data?.ComponentVersions?.pageInfo?.pages || []
})

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
      filter: { serviceCcrn: [serviceCcrn] }
    }
  })

  const { imageVersions, totalCount, pages: pagesFromApi } = getNormalizedImageVersionsData(isEmpty(data) ? previousData : data)

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
    error: error?.message
  }
} 