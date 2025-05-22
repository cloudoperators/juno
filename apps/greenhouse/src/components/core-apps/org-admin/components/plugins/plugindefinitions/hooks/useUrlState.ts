/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import useStore from "../store"

const DEFAULT_KEY = "greenhouse-plugin-admin"
const SHOW_PLUGIN_DETAIL = "scd"

const useUrlState = (key: string): void => {
  const [isURLRead, setIsURLRead] = useState(false)
  const urlStateManager = registerConsumer(key || DEFAULT_KEY)

  // auth
  const loggedIn = useStore((state: any) => state.loggedIn)

  // globals
  const showPluginDetails = useStore((state: any) => state.showPluginDefinitionDetails)
  const setShowPluginDetails = useStore((state: any) => state.setShowPluginDefinitionDetails)

  // Set initial state from URL (on login)
  useEffect(() => {
    /* !!!IMPORTANT!!!
      don't read the url if we are already read it or if we are not logged in!!!!!
    */
    if (isURLRead || !loggedIn) return
    console.log(
      `greenhouse-plugin-admin: (${key || DEFAULT_KEY}) setting up state from url:`,
      urlStateManager.currentState()
    )

    // READ the url state and set the state
    const newShowPluginDetail = urlStateManager.currentState()?.[SHOW_PLUGIN_DETAIL]
    // SAVE the state
    if (newShowPluginDetail) setShowPluginDetails(newShowPluginDetail)
    setIsURLRead(true)
  }, [loggedIn, setShowPluginDetails])

  // SYNC states to URL state
  useEffect(() => {
    // don't sync if we are not logged in OR URL ist not yet read
    if (!isURLRead || !loggedIn) return
    urlStateManager.push({
      [SHOW_PLUGIN_DETAIL]: showPluginDetails,
    })
  }, [loggedIn, showPluginDetails])
}

export default useUrlState
