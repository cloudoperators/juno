/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// PLEASE NOTE: This file needs refactoring

import { useState, useEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider" // Verify this import

import useUIStore from "../../store/useUIStore"

// Assume correct typings for what registerConsumer returns
interface UrlStateManager {
  currentState: () => Record<string, any>
  // eslint-disable-next-line no-unused-vars
  push: (state: Record<string, any>) => void
}

const DEFAULT_KEY = "exampleapp"
const TAB_INDEX = "t"
const CURRENT_PANEL = "p"
const CURRENT_MODAL = "m"

const useUrlState = (key: string | undefined = DEFAULT_KEY) => {
  const [isURLRead, setIsURLRead] = useState(false)

  // Type assertion if needed to match expected
  const urlStateManager = registerConsumer(key) as UrlStateManager

  const loggedIn = true // Simulated state for the example app

  const { tabIndex, currentPanel, currentModal, setTabIndex, setCurrentPanel, setCurrentModal } = useUIStore()

  useEffect(() => {
    if (isURLRead || !loggedIn) return

    const currentState = urlStateManager.currentState()
    console.debug(`Setting up state from URL:`, currentState)

    const newTabIndex = currentState?.[TAB_INDEX]
    const newCurrentPanel = currentState?.[CURRENT_PANEL]
    const newCurrentModal = currentState?.[CURRENT_MODAL]

    if (newTabIndex !== undefined) setTabIndex(newTabIndex)
    if (newCurrentPanel !== undefined) setCurrentPanel(newCurrentPanel)
    if (newCurrentModal !== undefined) setCurrentModal(newCurrentModal)

    setIsURLRead(true)
  }, [isURLRead, loggedIn, key, setTabIndex, setCurrentPanel, setCurrentModal, urlStateManager])

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
