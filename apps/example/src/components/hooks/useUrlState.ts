/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import useUIStore from "../../store/useUIStore"

interface UrlStateManager {
  currentState: () => Record<string, unknown>
  push: (_state: Record<string, unknown>) => void
}

const DEFAULT_KEY = "exampleapp"
const TAB_INDEX = "t"
const CURRENT_PANEL = "p"
const CURRENT_MODAL = "m"

const useUrlState = (key: string | undefined = DEFAULT_KEY) => {
  const [isURLRead, setIsURLRead] = useState(false)

  const urlStateManager = registerConsumer(key) as UrlStateManager

  const isUserAuthenticated = true // Simulated state for the example app

  const { tabIndex, currentPanel, currentModal, setTabIndex, setCurrentPanel, setCurrentModal } = useUIStore()

  useEffect(() => {
    if (isURLRead || !isUserAuthenticated) return

    const currentState = urlStateManager.currentState()
    console.debug(`Setting up state from URL:`, currentState)

    const newTabIndex = currentState?.[TAB_INDEX]
    if (typeof newTabIndex === "number" || (typeof newTabIndex === "string" && !isNaN(Number(newTabIndex))))
      setTabIndex(Number(newTabIndex))

    const newCurrentPanel = currentState?.[CURRENT_PANEL]
    if (typeof newCurrentPanel === "string") setCurrentPanel(newCurrentPanel)

    const newCurrentModal = currentState?.[CURRENT_MODAL]
    if (typeof newCurrentModal === "string") setCurrentModal(newCurrentModal)

    setIsURLRead(true)
  }, [isURLRead, isUserAuthenticated, key, setTabIndex, setCurrentPanel, setCurrentModal, urlStateManager])

  useEffect(() => {
    if (!isURLRead || !isUserAuthenticated) return

    urlStateManager.push({
      [TAB_INDEX]: tabIndex,
      [CURRENT_PANEL]: currentPanel,
      [CURRENT_MODAL]: currentModal,
    })
  }, [isUserAuthenticated, tabIndex, currentPanel, currentModal, isURLRead, urlStateManager])
}

export default useUrlState
