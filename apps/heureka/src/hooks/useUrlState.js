/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect, useEffect, useState } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import {
  useAuthLoggedIn,
  useGlobalsShowPanel,
  useGlobalsActiveView,
  useGlobalsActions,
  useFilterActions,
} from "./useAppStore"
import constants from "../components/shared/constants"

const urlStateManager = registerConsumer("heureka")

const useUrlState = () => {
  const [isURLRead, setIsURLRead] = useState(false)
  const loggedIn = useAuthLoggedIn()
  const { setFiltersFromURL, syncFiltersWithURL } = useFilterActions()

  const activeView = useGlobalsActiveView()
  const detailsFor = useGlobalsShowPanel()
  const { setShowPanel, setActiveView, setServiceDetail, setIssueDetail, syncDetailsWithURL } = useGlobalsActions()

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

      // Set panel and details for service/issue
      if (urlState[constants.DETAILS_FOR]) {
        setShowPanel(urlState[constants.DETAILS_FOR])
        if (urlState[constants.DETAILS_FOR] === constants.PANEL_SERVICE) {
          setServiceDetail(urlState[constants.SERVICE_NAME]) // svn in the URL for selected service name to show its details panel
        } else if (urlState[constants.DETAILS_FOR] === constants.PANEL_ISSUE) {
          setIssueDetail(urlState[constants.ISSUE_ID]) // iid in the URL for selected issue ID to show its details panel
        }
      }
    }

    setIsURLRead(true)
  }, [isURLRead])

  // Sync URL with the desired states
  useEffect(() => {
    if (!isURLRead) return

    const updatedState = {
      [constants.ACTIVE_VIEW]: activeView, // Include active view
      ...syncFiltersWithURL(),
      ...syncDetailsWithURL(),
    }

    // Construct the URL state
    const currentState = urlStateManager.currentState()
    if (JSON.stringify(updatedState) !== JSON.stringify(currentState)) {
      urlStateManager.push(updatedState)
    }
  }, [loggedIn, detailsFor, activeView])

  // Support for back button
  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state) => {
      setActiveView(state?.[constants.ACTIVE_VIEW])
      setFiltersFromURL(state?.[constants.ACTIVE_FILTERS], state?.[constants.SEARCH_TERM])
      setShowPanel(state?.[constants.DETAILS_FOR])

      // Set details for service/issue based on the URL state
      if (state?.[constants.DETAILS_FOR] === constants.PANEL_SERVICE) {
        setServiceDetail(state?.[constants.SERVICE_NAME])
      } else if (state?.[constants.DETAILS_FOR] === constants.PANEL_ISSUE) {
        setIssueDetail(state?.[constants.ISSUE_ID])
      }
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
