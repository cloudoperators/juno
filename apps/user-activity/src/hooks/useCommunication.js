/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo } from "react"
import { broadcast, watch, onGet } from "communicator"

const useCommunication = (isActive, { debug }) => {
  debug = useMemo(() => {
    if (debug === true || debug === "true") return true
    return false
  }, [debug])

  useEffect(() => {
    // inform that the auth app has been loaded!
    broadcast("USER_ACTIVITY_APP_LOADED", true, debug)
    onGet("USER_ACTIVITY_APP_LOADED", () => true, debug)
  }, [])

  useEffect(() => {
    // check against undefined since this is a boolean
    if (isActive === undefined) return

    broadcast("USER_ACTIVITY_UPDATE_DATA", { isActive: isActive }, { debug })
  }, [isActive])
}

export default useCommunication
