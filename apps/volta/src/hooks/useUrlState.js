/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { registerConsumer } from "url-state-provider"
import {
  useGlobalsActions,
  useAuthLoggedIn,
  useGlobalsSelectedCA,
} from "./useStore"

// url state manager
const urlStateManager = registerConsumer("volta")

const useUrlState = () => {
  const loggedIn = useAuthLoggedIn()
  const { setSelectedCA } = useGlobalsActions()
  const selectedCA = useGlobalsSelectedCA()

  // Initial state from URL (on login)
  useEffect(() => {
    if (!loggedIn) return
    let ca = urlStateManager.currentState()?.["ca"]
    if (ca) setSelectedCA(ca)
  }, [loggedIn, setSelectedCA])

  // sync URL state
  useEffect(() => {
    if (!loggedIn) return
    urlStateManager.push({ ["ca"]: selectedCA })
  }, [loggedIn, selectedCA])
}

export default useUrlState
