/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect, useEffect, useState } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import {
  useAuthLoggedIn,
  useGlobalsShowPanel,
  useGlobalsActiveNavEntry,
  useGlobalsActions,
  useFilterActions,
} from "./useAppStore"
import constants from "../components/shared/constants"

const urlStateManager = registerConsumer("heureka")

const useUrlState = () => {
  const [isURLRead, setIsURLRead] = useState(false)
  const loggedIn = useAuthLoggedIn()
  const { setFiltersFromURL, syncFiltersWithURL } = useFilterActions()

  const activeNavEntry = useGlobalsActiveNavEntry()
  const { setShowPanel, setActiveNavEntry } = useGlobalsActions()
  const detailsFor = useGlobalsShowPanel()

  // Set initial state from URL (on login)
  useLayoutEffect(() => {
    if (isURLRead) return

    const urlState = urlStateManager.currentState()
    if (urlState) {
      setFiltersFromURL(urlState[constants.ACTIVE_FILTERS], urlState[constants.SEARCH_TERM])
      if (urlState[constants.DETAILS_FOR]) setShowPanel(urlState[constants.DETAILS_FOR])
      if (urlState[constants.ACTIVE_NAV]) setActiveNavEntry(urlState[constants.ACTIVE_NAV])
    }

    setIsURLRead(true)
  }, [isURLRead])

  // Sync URL with the desired states
  useEffect(() => {
    if (!isURLRead) return

    const updatedState = syncFiltersWithURL(detailsFor, activeNavEntry)
    if (JSON.stringify(updatedState) !== JSON.stringify(urlStateManager.currentState())) {
      urlStateManager.push(updatedState)
    }
  }, [loggedIn, detailsFor, activeNavEntry])

  // Support for back button
  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state) => {
      setFiltersFromURL(state?.[constants.ACTIVE_FILTERS], state?.[constants.SEARCH_TERM])
      setShowPanel(state?.[constants.DETAILS_FOR])
      setActiveNavEntry(state?.[constants.ACTIVE_NAV])
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
