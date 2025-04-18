/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect, useEffect, useState } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import { usePluginActions, useShowDetailsFor } from "../components/StoreProvider"

const urlStateManager = registerConsumer("plugin-admin")
const DETAILS_FOR = "d"

const useUrlState = () => {
  const [isURLRead, setIsURLRead] = useState(false)
  const { setShowDetailsFor } = usePluginActions()
  const detailsFor = useShowDetailsFor()

  // Set initial state from URL (on login)
  // useLayoutEffect so this is done before rendering anything
  useLayoutEffect(() => {
    // do not read the url state until the user is logged in and do it just once
    if (isURLRead) return

    // get detail view target from url state
    const detailsForFromURL = urlStateManager.currentState()?.[DETAILS_FOR]
    if (detailsForFromURL) {
      setShowDetailsFor(detailsForFromURL)
    }
    setIsURLRead(true)
  }, [isURLRead])

  // sync URL with the desired states
  useEffect(() => {
    // do not synchronize the states until the url state is read and user logged in
    if (!isURLRead) return

    const newState = {
      ...urlStateManager.currentState(),
      [DETAILS_FOR]: detailsFor,
    }

    // do not push the state if it is the same as the current one
    // otherwise it will reset the browser history and the forward button will not work
    if (JSON.stringify(newState) === JSON.stringify(urlStateManager.currentState())) return

    urlStateManager.push(newState)
  }, [detailsFor])

  // Support for back button
  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state: any) => {
      setShowDetailsFor(state?.[DETAILS_FOR])
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
