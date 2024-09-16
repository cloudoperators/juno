/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import { useGlobalsActions, useGlobalsActiveNavEntry } from "./useAppStore"

const DEFAULT_KEY = "heureka"
const ACTIVE_NAV = "t"

const useUrlState = (key) => {
  const [isURLRead, setIsURLRead] = useState(false)
  // it is possible to have two apps instances on the same page
  // int his case the key should be different per app
  const urlStateManager = registerConsumer(key || DEFAULT_KEY)

  const { setActiveNavEntry } = useGlobalsActions()
  const activeNavEntry = useGlobalsActiveNavEntry()

  // Set initial state from URL (on login)
  useEffect(() => {
    if (isURLRead) return

    // READ the url state and set the state
    const newNavIndex = urlStateManager.currentState()?.[ACTIVE_NAV]
    // SAVE the state
    if (newNavIndex) setActiveNavEntry(newNavIndex)
    setIsURLRead(true)
  }, [isURLRead])

  // SYNC states to URL state
  useEffect(() => {
    if (!isURLRead) return
    urlStateManager.push({
      [ACTIVE_NAV]: activeNavEntry,
    })
  }, [isURLRead, activeNavEntry])
}

export default useUrlState
