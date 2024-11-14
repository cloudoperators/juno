/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect, useEffect, useState } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import {
  useGlobalsShowPanel,
  useGlobalsActiveView,
  useGlobalsActions,
  useGlobalsShowServiceDetail,
  useGlobalsShowIssueDetail,
  useServiceActiveFilters,
  useIssueMatchesActiveFilters,
  useComponentActiveFilters,
  useFilterActions,
} from "../components/StoreProvider"
import constants from "../components/shared/constants"

const urlStateManager = registerConsumer("heureka")

const useUrlState = () => {
  const [isURLRead, setIsURLRead] = useState(false)
  const { setFiltersFromURL, syncFiltersWithURL } = useFilterActions()

  const activeView = useGlobalsActiveView()
  const detailsFor = useGlobalsShowPanel()
  const showServiceDetail = useGlobalsShowServiceDetail()
  const showIssueDetail = useGlobalsShowIssueDetail()
  const { setShowPanel, setActiveView, setServiceDetail, setIssueDetail, syncDetailsWithURL } = useGlobalsActions()
  const serviceActiveFilters = useServiceActiveFilters()
  const issueMatchesActiveFilters = useIssueMatchesActiveFilters()
  const componentActiveFilters = useComponentActiveFilters()

  // Set initial state from URL (on login)
  useLayoutEffect(() => {
    if (isURLRead) return

    const urlState = urlStateManager.currentState()
    if (urlState) {
      // Set the active view
      if (urlState[constants.ACTIVE_VIEW]) {
        setActiveView(urlState[constants.ACTIVE_VIEW])
      } else {
        setActiveView("Services") // Default active view
      }

      setFiltersFromURL(urlState[constants.ACTIVE_FILTERS], urlState[constants.SEARCH_TERM])

      const currentDetailsFor = urlState[constants.DETAILS_FOR]
      // Set panel and details for service/issue
      if (currentDetailsFor) {
        setShowPanel(currentDetailsFor)

        switch (currentDetailsFor) {
          case constants.PANEL_SERVICE:
            setServiceDetail(urlState[constants.SERVICE_NAME]) // Show service details panel
            break
          case constants.PANEL_ISSUE:
            setIssueDetail(urlState[constants.ISSUE_ID]) // Show issue details panel
            break
        }
      }
    }

    setIsURLRead(true)
  }, [isURLRead, setActiveView, setFiltersFromURL, setShowPanel, setServiceDetail, setIssueDetail])

  // Sync URL with the desired states
  useEffect(() => {
    if (!isURLRead) return

    const updatedState = {
      [constants.ACTIVE_VIEW]: activeView, // Include active view
      ...syncFiltersWithURL(serviceActiveFilters, issueMatchesActiveFilters, componentActiveFilters),
      ...(detailsFor
        ? syncDetailsWithURL(
            showServiceDetail,
            showIssueDetail,
            detailsFor === constants.PANEL_SERVICE ? constants.PANEL_SERVICE : constants.PANEL_ISSUE
          )
        : {
            // Remove detailsFor from URL when details Panel is closed
            [constants.DETAILS_FOR]: undefined,
            [constants.SERVICE_NAME]: undefined,
            [constants.ISSUE_ID]: undefined,
          }),
    }

    // Construct the URL state
    const currentState = urlStateManager.currentState()
    if (JSON.stringify(updatedState) !== JSON.stringify(currentState)) {
      urlStateManager.push(updatedState)
    }
  }, [
    activeView,
    isURLRead,
    detailsFor,
    showServiceDetail,
    showIssueDetail,
    serviceActiveFilters,
    issueMatchesActiveFilters,
    componentActiveFilters,
    syncFiltersWithURL,
    syncDetailsWithURL,
  ])

  // Support for back button
  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state) => {
      setActiveView(state?.[constants.ACTIVE_VIEW])
      setFiltersFromURL(state?.[constants.ACTIVE_FILTERS], state?.[constants.SEARCH_TERM])
      setShowPanel(state?.[constants.DETAILS_FOR])

      // Set details for service/issue based on the URL state
      const currentDetailFor = state?.[constants.DETAILS_FOR]
      if (currentDetailFor) {
        switch (currentDetailFor) {
          case constants.PANEL_SERVICE:
            setServiceDetail(urlState[constants.SERVICE_NAME]) // Show service details panel
            break
          case constants.PANEL_ISSUE:
            setIssueDetail(urlState[constants.ISSUE_ID]) // Show issue details panel
            break
        }
      }
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
