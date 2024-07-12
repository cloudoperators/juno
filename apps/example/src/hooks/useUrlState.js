/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import {
  useGlobalsActions,
  useGlobalsTabIndex,
  useGlobalsCurrentPanel,
  useGlobalsCurrentModal,
} from "../components/StoreProvider"

const DEFAULT_KEY = "exampleapp"
const TAB_INDEX = "t"
const CURRENT_PANEL = "p"
const CURRENT_MODAL = "m"

const useUrlState = (key) => {
  const [isURLRead, setIsURLRead] = useState(false)
  // it is possible to have two apps instances on the same page
  // int his case the key should be different per app
  const urlStateManager = registerConsumer(key || DEFAULT_KEY)

  // auth
  const loggedIn = true // this state is faked for the example app so we don't need to login

  // globals
  const { setTabIndex, setCurrentPanel, setCurrentModal } = useGlobalsActions()
  const tabIndex = useGlobalsTabIndex()
  const currentPanel = useGlobalsCurrentPanel()
  const currentModal = useGlobalsCurrentModal()

  // Set initial state from URL (on login)
  useEffect(() => {
    /* !!!IMPORTANT!!!
      don't read the url if we are already read it or if we are not logged in!!!!!
    */
    if (isURLRead || !loggedIn) return
    console.log(
      `EXAMPLEAPP: (${key || DEFAULT_KEY}) setting up state from url:`,
      urlStateManager.currentState()
    )

    // READ the url state and set the state
    const newTabIndex = urlStateManager.currentState()?.[TAB_INDEX]
    const newCurrentPanel = urlStateManager.currentState()?.[CURRENT_PANEL]
    const newCurrentModal = urlStateManager.currentState()?.[CURRENT_MODAL]
    // SAVE the state
    if (newTabIndex) setTabIndex(newTabIndex)
    if (newCurrentPanel) setCurrentPanel(newCurrentPanel)
    if (newCurrentModal) setCurrentModal(newCurrentModal)
    setIsURLRead(true)
  }, [loggedIn, setTabIndex, setCurrentPanel, setCurrentModal])

  // SYNC states to URL state
  useEffect(() => {
    // don't sync if we are not logged in OR URL ist not yet read
    if (!isURLRead || !loggedIn) return
    urlStateManager.push({
      [TAB_INDEX]: tabIndex,
      [CURRENT_PANEL]: currentPanel,
      [CURRENT_MODAL]: currentModal,
    })
  }, [loggedIn, tabIndex, currentPanel, currentModal])
}

export default useUrlState
