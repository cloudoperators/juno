/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { get, watch } from "@cloudoperators/juno-communicator"

const useCommunication = () => {

  useEffect(() => {
    // Fetch and watch for auth data updates
    if (!setAuthData) return

    get("AUTH_GET_DATA", setAuthData)
    const unwatchUpdate = watch("AUTH_UPDATE_DATA", setAuthData)

    return () => {
      if (unwatchUpdate) unwatchUpdate()
    }
  }, [setAuthData])
}

export default useCommunication
