/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useLayoutEffect, useRef } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import { usePlugin } from "../components/StoreProvider"

// url state manager
const GREENHOUSE_STATE_KEY = "greenhouse-dashboard"
const ACTIVE_APPS_KEY = "a"
const urlStateManager = registerConsumer(GREENHOUSE_STATE_KEY)

const useUrlState = () => {
  const setActiveApps = usePlugin().setActive
  const activeApps = usePlugin().active()

  // A ref to track if the change comes from the URL initialization
  const isInitializing = useRef(true)

  // Initial state from URL (on login)
  useLayoutEffect(() => {
    let active = urlStateManager.currentState()?.[ACTIVE_APPS_KEY]

    if (active) {
      setActiveApps(active.split(","))
    }

    isInitializing.current = true
  }, [])

  // sync URL state
  useEffect(() => {
    // if the app is initializing or there are no active apps, skip syncing
    if (isInitializing.current === true) {
      // Skip syncing during initialization
      isInitializing.current = false // Mark initialization phase complete
      return
    }

    const newActiveApps = activeApps?.join(",")
    // if the current state is the same as the new state, don't push
    if (urlStateManager.currentState()?.[ACTIVE_APPS_KEY] === newActiveApps) return

    urlStateManager.push({ [ACTIVE_APPS_KEY]: activeApps.join(",") })
  }, [activeApps])

  useEffect(() => {
    const unregisterStateListener = urlStateManager.onChange((state: any) => {
      const newActiveApps = state?.[ACTIVE_APPS_KEY]?.split(",")
      setActiveApps(newActiveApps || [])
    })

    return () => {
      unregisterStateListener()
    }
  }, [])
}

export default useUrlState
