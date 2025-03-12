/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Pagination, Stack, Container } from "@cloudoperators/juno-ui-components"

const PaginationComponent = ({ queryKey, queryOptions, entityName, setQueryOptions, countData }: any) => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageInfo = countData?.[entityName]?.pageInfo || null
  const totalPages = pageInfo?.pages?.length || 0

  const onPaginationChanged = (newPage: any) => {
    setCurrentPage(newPage)
    if (!pageInfo?.pages) return
    const pages = pageInfo.pages
    const currentPageIndex = pages?.findIndex((page: any) => page?.pageNumber === parseInt(newPage))
    if (currentPageIndex > -1) {
      const after = pages[currentPageIndex]?.after
      setQueryOptions(queryKey, {
        ...queryOptions,
        after: `${after}`,
      })
    }
  }

  const onKeyPress = (event: any) => {
    if (event.code === "Enter") {
      onPaginationChanged(event.currentTarget.value)
    }
  }

  return (
    <>
      <Container py px={false}>
        <Stack className="flex justify-end">
          <Pagination
            currentPage={currentPage}
            isFirstPage={currentPage === 1}
            isLastPage={(!pageInfo && totalPages === 0) || currentPage === totalPages}
            onPressNext={() => onPaginationChanged(currentPage + 1)}
            onPressPrevious={() => onPaginationChanged(currentPage - 1)}
            onKeyPress={onKeyPress}
            onSelectChange={onPaginationChanged}
            pages={totalPages}
            variant="input"
          />
        </Stack>
      </Container>
    </>
  )
}

export default PaginationComponent
