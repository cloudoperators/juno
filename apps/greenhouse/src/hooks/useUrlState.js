/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useLayoutEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import { useAuthLoggedIn, useGlobalsIsUrlStateSetup, useGlobalsActions, usePlugin } from "../components/StoreProvider"

// url state manager
const GREENHOUSE_STATE_KEY = "greenhouse-dashboard"
const ACTIVE_APPS_KEY = "a"
const urlStateManager = registerConsumer(GREENHOUSE_STATE_KEY)

const useUrlState = () => {
  const setActiveApps = usePlugin().setActive
  const activeApps = usePlugin().active()
  const appsConfig = usePlugin().config()
  const loggedIn = useAuthLoggedIn()
  const isUrlStateSetup = useGlobalsIsUrlStateSetup()
  const { setIsUrlStateSetup } = useGlobalsActions()

  // Initial state from URL (on login)
  useLayoutEffect(() => {
    if (!loggedIn || !appsConfig || isUrlStateSetup) return

    let active = urlStateManager.currentState()?.[ACTIVE_APPS_KEY]
    if (active) setActiveApps(active.split(","))
    setIsUrlStateSetup(true)
  }, [loggedIn, appsConfig, setActiveApps])

  // sync URL state
  useEffect(() => {
    if (!loggedIn || !isUrlStateSetup) return

    const newActiveApps = activeApps?.join(",")
    // if the current state is the same as the new state, don't push
    // this prevents the history from being filled with the same state
    // and therefore prevents the forward button from being disabled
    // This small optimization allows the user to go back and forth!
    if (urlStateManager.currentState()?.[ACTIVE_APPS_KEY] === newActiveApps) return

    urlStateManager.push({ [ACTIVE_APPS_KEY]: activeApps.join(",") })
  }, [loggedIn, activeApps])

  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state) => {
      const newActiveApps = state?.[ACTIVE_APPS_KEY]?.split(",")
      setActiveApps(newActiveApps || [])
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
