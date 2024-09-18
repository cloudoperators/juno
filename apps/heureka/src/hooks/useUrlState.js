/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect, useEffect, useState } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import {
  useAuthLoggedIn,
  useIssueMatchesFilterLabels,
  useServiceFilterLabels,
  useComponentFilterLabels,
  useIssueMatchesActiveFilters,
  useServiceActiveFilters,
  useComponentActiveFilters,
  useIssueMatchesSearchTerm,
  useServiceSearchTerm,
  useComponentSearchTerm,
  useFilterActions,
  useGlobalsShowPanel,
  useGlobalsActiveNavEntry,
  useGlobalsActions,
} from "./useAppStore"

const urlStateManager = registerConsumer("heureka")
const ACTIVE_FILTERS = "f"
const DETAILS_FOR = "d"
const SEARCH_TERM = "s"
const ACTIVE_NAV = "n"

// Constants for entities
const ISSUEMATCHES = "IssueMatches"
const SERVICES = "Services"
const COMPONENTS = "Components"

const useUrlState = () => {
  const [isURLRead, setIsURLRead] = useState(false)
  const loggedIn = useAuthLoggedIn()
  const { setActiveFilters, setSearchTerm } = useFilterActions()

  // Use individual hooks for each entity's filters and search term
  const issueMatchesFilterLabels = useIssueMatchesFilterLabels()
  const serviceFilterLabels = useServiceFilterLabels()
  const componentFilterLabels = useComponentFilterLabels()

  const issueMatchesActiveFilters = useIssueMatchesActiveFilters()
  const serviceActiveFilters = useServiceActiveFilters()
  const componentActiveFilters = useComponentActiveFilters()

  const issueMatchesSearchTerm = useIssueMatchesSearchTerm()
  const serviceSearchTerm = useServiceSearchTerm()
  const componentSearchTerm = useComponentSearchTerm()

  const activeNavEntry = useGlobalsActiveNavEntry()
  const { setShowDetailsFor, setActiveNavEntry } = useGlobalsActions()
  const detailsFor = useGlobalsShowPanel()

  // Set initial state from URL (on login)
  // useLayoutEffect so this is done before rendering anything
  useLayoutEffect(() => {
    if (isURLRead) return

    console.debug("HEUREKA:: setting up state from url with state::", urlStateManager.currentState())

    const activeFiltersFromURL = urlStateManager.currentState()?.[ACTIVE_FILTERS]

    if (activeFiltersFromURL && Object.keys(activeFiltersFromURL).length > 0) {
      setActiveFilters(ISSUEMATCHES, activeFiltersFromURL[ISSUEMATCHES])
      setActiveFilters(SERVICES, activeFiltersFromURL[SERVICES])
      setActiveFilters(COMPONENTS, activeFiltersFromURL[COMPONENTS])
    }

    const searchTermFromURL = urlStateManager.currentState()?.[SEARCH_TERM]
    if (searchTermFromURL) {
      const decodedSearchTerm = atob(searchTermFromURL)
      setSearchTerm(ISSUEMATCHES, decodedSearchTerm[ISSUEMATCHES])
      setSearchTerm(SERVICES, decodedSearchTerm[SERVICES])
      setSearchTerm(COMPONENTS, decodedSearchTerm[COMPONENTS])
    }

    const detailsForFromURL = urlStateManager.currentState()?.[DETAILS_FOR]
    if (detailsForFromURL) {
      setShowDetailsFor(detailsForFromURL)
    }

    const activeNavFromURL = urlStateManager.currentState()?.[ACTIVE_NAV]
    if (activeNavFromURL) {
      setActiveNavEntry(activeNavFromURL)
    }

    setIsURLRead(true)
  }, [isURLRead, issueMatchesFilterLabels, serviceFilterLabels, componentFilterLabels])

  // Sync URL with the desired states
  useEffect(() => {
    if (!isURLRead) return

    const encodedSearchTerm = btoa(
      JSON.stringify({
        [ISSUEMATCHES]: issueMatchesSearchTerm,
        [SERVICES]: serviceSearchTerm,
        [COMPONENTS]: componentSearchTerm,
      })
    )

    const newState = {
      ...urlStateManager.currentState(),
      [ACTIVE_FILTERS]: {
        [ISSUEMATCHES]: issueMatchesActiveFilters,
        [SERVICES]: serviceActiveFilters,
        [COMPONENTS]: componentActiveFilters,
      },
      [SEARCH_TERM]: encodedSearchTerm,
      [DETAILS_FOR]: detailsFor,
      [ACTIVE_NAV]: activeNavEntry,
    }

    if (JSON.stringify(newState) === JSON.stringify(urlStateManager.currentState())) return

    urlStateManager.push(newState)
  }, [
    loggedIn,
    issueMatchesActiveFilters,
    serviceActiveFilters,
    componentActiveFilters,
    issueMatchesSearchTerm,
    serviceSearchTerm,
    componentSearchTerm,
    detailsFor,
    activeNavEntry,
  ])

  // Support for back button
  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state) => {
      setActiveFilters(ISSUEMATCHES, state?.[ACTIVE_FILTERS]?.[ISSUEMATCHES])
      setActiveFilters(SERVICES, state?.[ACTIVE_FILTERS]?.[SERVICES])
      setActiveFilters(COMPONENTS, state?.[ACTIVE_FILTERS]?.[COMPONENTS])
      setSearchTerm(ISSUEMATCHES, state?.[SEARCH_TERM]?.[ISSUEMATCHES])
      setSearchTerm(SERVICES, state?.[SEARCH_TERM]?.[SERVICES])
      setSearchTerm(COMPONENTS, state?.[SEARCH_TERM]?.[COMPONENTS])
      setShowDetailsFor(state?.[DETAILS_FOR])
      setActiveNavEntry(state?.[ACTIVE_NAV])
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
