/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useGlobalsQueryClientFnReady, useGlobalsQueryOptions, useGlobalsActions } from "../../hooks/useAppStore"
import { Pagination, Container, Stack } from "@cloudoperators/juno-ui-components"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"
import { parseError } from "../../helpers"
import { useGlobalsActiveNavEntry } from "../../hooks/useAppStore"

const ListController = ({ queryKey, entityName, ListComponent, activeFilters, searchTerm, enableSearchAndFilter }) => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const queryOptions = useGlobalsQueryOptions(queryKey)
  const { setQueryOptions } = useGlobalsActions()
  const { addMessage, resetMessages } = messageActions()
  const activeView = useGlobalsActiveNavEntry()

  // Fetch view main data
  const {
    isLoading: isLoadingMain,
    data: mainData,
    error: mainError,
  } = useQuery({
    queryKey: [
      `${queryKey}Main`,
      {
        ...queryOptions,
        filter: {
          ...activeFilters,
          ...(!!enableSearchAndFilter && searchTerm && searchTerm.length > 0 && { search: searchTerm }),
        },
      },
    ],
    enabled: !!queryClientFnReady && queryKey === activeView,
  })

  // Fetch view count and pageInfo
  const {
    isLoading: isLoadingCount,
    data: countData,
    error: countError,
  } = useQuery({
    queryKey: [
      `${queryKey}Count`,
      {
        ...queryOptions,
        filter: {
          ...activeFilters,
          ...(!!enableSearchAndFilter && searchTerm && searchTerm.length > 0 && { search: searchTerm }),
        },
      },
    ],
    enabled: !!queryClientFnReady && queryKey === activeView,
  })

  const [currentPage, setCurrentPage] = useState(1)

  const items = useMemo(() => {
    if (!mainData) return null
    return mainData?.[entityName]?.edges || []
  }, [mainData, entityName])

  useEffect(() => {
    if (!mainError && !countError) return resetMessages()
    addMessage({
      variant: "error",
      text: parseError(mainError || countError),
    })
  }, [mainError, countError, addMessage, resetMessages])

  const pageInfo = useMemo(() => {
    if (!countData) return null
    return countData?.[entityName]?.pageInfo
  }, [countData, entityName])

  const totalPages = useMemo(() => {
    if (!pageInfo?.pages) return 0
    return pageInfo.pages.length
  }, [pageInfo])

  const onPaginationChanged = (newPage) => {
    setCurrentPage(newPage)
    if (!pageInfo?.pages) return
    const pages = pageInfo.pages
    const currentPageIndex = pages?.findIndex((page) => page?.pageNumber === parseInt(newPage))
    if (currentPageIndex > -1) {
      const after = pages[currentPageIndex]?.after
      setQueryOptions(queryKey, {
        ...queryOptions,
        after: `${after}`,
      })
    }
  }

  return (
    <>
      <Container py>
        <ListComponent items={items} isLoading={isLoadingMain || isLoadingCount} />
      </Container>
      <Stack className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          isFirstPage={currentPage === 1}
          isLastPage={currentPage === totalPages}
          onPressNext={() => onPaginationChanged(currentPage + 1)}
          onPressPrevious={() => onPaginationChanged(currentPage - 1)}
          onKeyPress={(oKey) => {
            if (oKey.code === "Enter") {
              onPaginationChanged(parseInt(oKey.currentTarget.value))
            }
          }}
          onSelectChange={onPaginationChanged}
          pages={totalPages}
          variant="input"
        />
      </Stack>
    </>
  )
}

export default ListController
