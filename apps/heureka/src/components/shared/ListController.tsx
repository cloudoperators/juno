/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  useGlobalsQueryClientFnReady,
  useGlobalsQueryOptions,
  useGlobalsActions,
  useGlobalsActiveView,
} from "../StoreProvider"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"
import { parseError } from "../../helpers"
import PaginationComponent from "./PaginationComponent"

const ListController = ({
  queryKey,
  entityName,
  ListComponent,
  activeFilters,
  searchTerm,
  enableSearchAndFilter,
}: any) => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const queryOptions = useGlobalsQueryOptions(queryKey)
  // @ts-ignore
  const { setQueryOptions } = useGlobalsActions()
  const { addMessage, resetMessages } = messageActions()
  const activeView = useGlobalsActiveView()

  // Fetch view main data
  const {
    isLoading: isLoadingMain,
    data: mainData,
    error: mainError,
  } = useQuery({
    queryKey: [
      `${queryKey}Main`,
      {
        // @ts-ignore
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
        // @ts-ignore
        ...queryOptions,
        filter: {
          ...activeFilters,
          ...(!!enableSearchAndFilter && searchTerm && searchTerm.length > 0 && { search: searchTerm }),
        },
      },
    ],
    enabled: !!queryClientFnReady && queryKey === activeView,
  })
  // @ts-ignore
  const items = mainData?.[entityName]?.edges || []

  useEffect(() => {
    if (!mainError && !countError) return resetMessages()
    addMessage({
      variant: "error",
      text: parseError(mainError || countError),
    })
  }, [mainError, countError, addMessage, resetMessages])

  return (
    <>
      <ListComponent items={items} isLoading={isLoadingMain || isLoadingCount} />
      <PaginationComponent
        queryKey={queryKey}
        queryOptions={queryOptions}
        entityName={entityName}
        setQueryOptions={setQueryOptions}
        countData={countData}
      />
    </>
  )
}

export default ListController
