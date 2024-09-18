/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  useGlobalsQueryClientFnReady,
  useGlobalsQueryOptions,
  useGlobalsActions,
  useIssueMatchesActiveFilters,
  useServiceActiveFilters,
  useComponentActiveFilters,
  useIssueMatchesPredefinedFilters,
  useServicePredefinedFilters,
  useComponentPredefinedFilters,
  useGlobalsActiveNavEntry,
  useIssueMatchesSearchTerm,
  useServiceSearchTerm,
  useComponentSearchTerm,
} from "../../hooks/useAppStore"
import { Pagination, Container, Stack } from "@cloudoperators/juno-ui-components"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"
import { parseError } from "../../helpers"

const entityHooks = {
  IssueMatches: {
    useActiveFilters: useIssueMatchesActiveFilters,
    usePredefinedFilters: useIssueMatchesPredefinedFilters,
    useSearchTerm: useIssueMatchesSearchTerm,
  },
  Services: {
    useActiveFilters: useServiceActiveFilters,
    usePredefinedFilters: useServicePredefinedFilters,
    useSearchTerm: useServiceSearchTerm,
  },
  Components: {
    useActiveFilters: useComponentActiveFilters,
    usePredefinedFilters: useComponentPredefinedFilters,
    useSearchTerm: useComponentSearchTerm,
  },
}

const ListController = ({ queryKey, entityName, ListComponent }) => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const queryOptions = useGlobalsQueryOptions(queryKey)
  const { setQueryOptions } = useGlobalsActions()
  const { addMessage, resetMessages } = messageActions()
  const activeNavEntry = useGlobalsActiveNavEntry()

  // Safely access hooks for the entity, or provide fallback functions if entity is undefined or not in the entityHooks object
  const {
    useActiveFilters = () => ({}),
    usePredefinedFilters = () => ({}),
    useSearchTerm = () => "",
  } = entityHooks?.[entityName] || {}

  const activeFilters = useActiveFilters()
  const predefinedFilters = usePredefinedFilters()
  const searchTerm = useSearchTerm()

  const { isLoading, data, error } = useQuery({
    queryKey: [
      queryKey,
      {
        ...queryOptions,
        filter: {
          ...activeFilters,
          ...predefinedFilters,
          ...(["IssueMatches", "Services"].includes(entityName) && {
            search: Array.isArray(searchTerm) ? searchTerm : [searchTerm], // Ensure searchTerm is an array
          }),
        },
      },
    ],
    enabled: !!queryClientFnReady && queryKey === activeNavEntry,
  })

  const [currentPage, setCurrentPage] = useState(1)

  const items = useMemo(() => {
    if (!data) return null
    return data?.[entityName]?.edges || []
  }, [data, entityName])

  useEffect(() => {
    if (!error) return resetMessages()
    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }, [error, addMessage, resetMessages])

  const pageInfo = useMemo(() => {
    if (!data) return null
    return data?.[entityName]?.pageInfo
  }, [data, entityName])

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
        <ListComponent items={items} isLoading={isLoading} />
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
