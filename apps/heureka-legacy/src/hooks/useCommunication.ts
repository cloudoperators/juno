/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { get, watch } from "@cloudoperators/juno-communicator"

const useCommunication = () => {
  useEffect(() => {
    // Fetch and watch for auth data updates
    // @ts-expect-error TS(2304): Cannot find name 'setAuthData'.
    if (!setAuthData) return

    // @ts-expect-error TS(2304): Cannot find name 'setAuthData'.
    get("AUTH_GET_DATA", setAuthData)
    // @ts-expect-error TS(2304): Cannot find name 'setAuthData'.
    const unwatchUpdate = watch("AUTH_UPDATE_DATA", setAuthData)

    return () => {
      if (unwatchUpdate) unwatchUpdate()
    }
    // @ts-expect-error TS(2304): Cannot find name 'setAuthData'.
  }, [setAuthData])
}

export default useCommunication
