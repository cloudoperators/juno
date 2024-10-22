/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import {
  useDataDetailsViolationGroupKind,
  useDataActions,
  useFiltersActions,
  useFiltersSearchTerm,
  useFiltersActive,
} from "../components/StoreProvider"

const DEFAULT_KEY = "doop"
const ACTIVE_FILTERS = "f"
const SEARCH_TERM = "s"
const DETAILS_VIOLATION_GROUP = "v"

const useUrlState = (key) => {
  const [isURLRead, setIsURLRead] = useState(false)
  // it is possible to have two doop apps on the page
  // int his case the key should be different per app
  const urlStateManager = registerConsumer(key || DEFAULT_KEY)
  // filters
  const { set: setActiveFilters, setSearchTerm } = useFiltersActions()
  const activeFilters = useFiltersActive()
  const searchTerm = useFiltersSearchTerm()
  // globals
  const detailsViolationGroupKind = useDataDetailsViolationGroupKind()
  const { setDetailsViolationGroupKind } = useDataActions()

  // Set initial state from URL
  useEffect(() => {
    if (isURLRead) return
    console.debug(`DOOP: (${key || DEFAULT_KEY}) setting up state from url:`, urlStateManager.currentState())
    const searchTerm = urlStateManager.currentState()?.[SEARCH_TERM]
    const activeFilters = urlStateManager.currentState()?.[ACTIVE_FILTERS]

    const detailsViolationGroupKind = urlStateManager.currentState()?.[DETAILS_VIOLATION_GROUP]

    if (searchTerm) {
      setSearchTerm(searchTerm)
    }
    // if active filters are defined in the URL EVEN IF empty set them
    if (activeFilters) {
      setActiveFilters(activeFilters)
    } else {
      // if no url active filters defined, push the initial filters to the URL
      urlStateManager.push({
        [ACTIVE_FILTERS]: activeFilters,
      })
    }

    if (detailsViolationGroupKind) {
      setDetailsViolationGroupKind(detailsViolationGroupKind)
    }
    setIsURLRead(true)
  }, [isURLRead])

  // sync to the URL state
  useEffect(() => {
    if (!isURLRead) return
    urlStateManager.push({
      [ACTIVE_FILTERS]: activeFilters,
      [DETAILS_VIOLATION_GROUP]: detailsViolationGroupKind,
      [SEARCH_TERM]: searchTerm,
    })
  }, [activeFilters, detailsViolationGroupKind, searchTerm, isURLRead])
}

export default useUrlState
