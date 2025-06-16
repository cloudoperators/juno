import React, { use, useCallback } from "react"
import { Pagination, Stack } from "@cloudoperators/juno-ui-components"
import { ApolloQueryResult } from "@apollo/client"
import { Page } from "../../generated/graphql"

type CursorPaginationProps<T> = {
  dataPromise: Promise<ApolloQueryResult<T>>
  dataNormalizationMethod: (data: T) => { pages: Page[]; pageNumber: number }
  goToPage: (after?: string | null) => void
}

export const CursorPagination = <T,>({
  dataPromise,
  goToPage,
  dataNormalizationMethod: applyDataNormalizationMethod,
}: CursorPaginationProps<T>) => {
  const { data } = use(dataPromise)
  const { pages, pageNumber } = applyDataNormalizationMethod(data)

  const handlePageChange = useCallback(
    (page?: number) => {
      if (page) {
        const previousPage = pages[page - 2] // `pages` is 0-indexed and page 1 has no cursor
        goToPage(page === 1 ? undefined : previousPage?.after)
      }
    },
    [pages, goToPage]
  )

  return (
    <Stack distribution="end" className="mt-4">
      <Pagination
        variant="number"
        currentPage={pageNumber}
        onPressNext={handlePageChange}
        onPressPrevious={handlePageChange}
        pages={pages.length}
      />
    </Stack>
  )
}
