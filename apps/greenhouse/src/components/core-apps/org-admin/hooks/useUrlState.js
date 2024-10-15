/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useLayoutEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import { useActions, useActivePlugin } from "../StoreProvider"

// url state manager
const URL_APP_STATE_KEY = "greenhouse-org-admin"
const ACTIVE_APP_KEY = "a"
const urlStateManager = registerConsumer(URL_APP_STATE_KEY)

const useUrlState = () => {
  const { setActive } = useActions()
  const activePlugin = useActivePlugin()

  // Initial state from URL AFTER
  // WARNING. To get the right state from the URL do following:
  // If this app is embbeded in another app with authentication
  //  - Mount this app after the login is success in the parent app
  // or
  //  - Wait here until you get logged in
  useLayoutEffect(() => {
    let active = urlStateManager.currentState()?.[ACTIVE_APP_KEY]
    if (active) setActive(active)
  }, [])

  // sync URL state
  useEffect(() => {
    if (urlStateManager.currentState()?.[ACTIVE_APP_KEY] === activePlugin) return

    urlStateManager.push({ [ACTIVE_APP_KEY]: activePlugin })
  }, [activePlugin])
}

export default useUrlState
