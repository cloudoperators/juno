/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react"
import { useNavigate } from "@tanstack/react-router"
import { Container } from "@cloudoperators/juno-ui-components"
import { Messages } from "@cloudoperators/juno-messages-provider"

import { useActions } from "@cloudoperators/juno-messages-provider"
import { useDataActions, useFiltersActive, useGlobalsIsFilterTypeEnsured } from "./StoreProvider"
import Header from "./Header"
import HintLoading from "./shared/HintLoading"
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../lib/apiClient"
import { parseError } from "../lib/helpers"
import Highlighter from "./Highlighter"
import Violations from "./violations/violations"
import { ACTIVE_FILTERS_PREFIX } from "../constants"
import { getFiltersForUrl } from "../lib/urlStateUtils"

const AppContent = ({ showDebugSeverities }: any) => {
  // @ts-expect-error TS(2339) FIXME: Property 'id' does not exist on type '{}'.
  const { setData, setShowDebugSeverities } = useDataActions()
  const { addMessage } = useActions()
  const activeFilters = useFiltersActive()
  const hasProcessedFilters = useRef(false)
  const isFilterTypeEnsured = useGlobalsIsFilterTypeEnsured()
  const navigate = useNavigate()

  // LOAD DATA
  const dataRequest = useQuery({
    queryKey: ["violations"],
    queryFn: fetchData,
    refetchInterval: 5 * 60 * 1000, // 5 minutes
  })

  // USE DATA
  useEffect(() => {
    setShowDebugSeverities(!!showDebugSeverities)
    if (dataRequest.error) {
      addMessage({
        variant: "error",
        text: parseError(dataRequest.error),
      })
    } else if (!dataRequest.isLoading && !dataRequest.data) {
      addMessage({
        variant: "Info",
        text: "No data available",
      })
    } else {
      // save the new data fetched from the API.
      setData(dataRequest.data)
    }
  }, [dataRequest, setData, addMessage, setShowDebugSeverities])

  /**
   * When the data is loaded and the filter types have been ensured,
   * update the URL to reflect the current active filters with correctly resolved types.
   * */
  useEffect(() => {
    if (isFilterTypeEnsured && !hasProcessedFilters.current) {
      hasProcessedFilters.current = true
      const filtersForUrl = getFiltersForUrl(ACTIVE_FILTERS_PREFIX, activeFilters)
      navigate({ to: "/violations", replace: true, search: () => ({ ...filtersForUrl }) })
    }
  }, [isFilterTypeEnsured, activeFilters])

  return (
    <Container py>
      {/* <UrlStateManager consumerId={id || "doop"} /> */}
      <Header />
      <Messages className="mb-4" />
      {dataRequest?.isLoading ? <HintLoading className="tw-mt-4" /> : <Violations />}
      <Highlighter />
    </Container>
  )
}

export default AppContent
