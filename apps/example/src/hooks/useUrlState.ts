/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call*/

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

const useUrlState = (key: string | undefined) => {
  const [isURLRead, setIsURLRead] = useState(false)
  const urlStateManager = registerConsumer(key || DEFAULT_KEY)

  // auth
  const loggedIn = true // this state is faked for the example app so we don't need to login

  // globals
  // @ts-ignore
  const { setTabIndex, setCurrentPanel, setCurrentModal } = useGlobalsActions()
  const tabIndex = useGlobalsTabIndex()
  const currentPanel = useGlobalsCurrentPanel()
  const currentModal = useGlobalsCurrentModal()

  // Set initial state from URL (on login)
  useEffect(() => {
    if (isURLRead || !loggedIn) return

    console.debug(`EXAMPLEAPP: (${key || DEFAULT_KEY}) setting up state from url:`, urlStateManager.currentState())

    // READ the url state and set the state
    const newTabIndex = urlStateManager.currentState()?.[TAB_INDEX]
    const newCurrentPanel = urlStateManager.currentState()?.[CURRENT_PANEL]
    const newCurrentModal = urlStateManager.currentState()?.[CURRENT_MODAL]

    // SAVE the state
    if (newTabIndex !== undefined) setTabIndex(newTabIndex)
    if (newCurrentPanel !== undefined) setCurrentPanel(newCurrentPanel)
    if (newCurrentModal !== undefined) setCurrentModal(newCurrentModal)

    setIsURLRead(true)
  }, [isURLRead, loggedIn, key, setTabIndex, setCurrentPanel, setCurrentModal, urlStateManager])

  // SYNC states to URL state
  useEffect(() => {
    if (!isURLRead || !loggedIn) return

    urlStateManager.push({
      [TAB_INDEX]: tabIndex,
      [CURRENT_PANEL]: currentPanel,
      [CURRENT_MODAL]: currentModal,
    })
  }, [loggedIn, tabIndex, currentPanel, currentModal, isURLRead, urlStateManager])
}

export default useUrlState
