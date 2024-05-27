/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { broadcast, watch, onGet } from "communicator"

const useCommunication = ({ authData, login, logout, debug }) => {
  useEffect(() => {
    // inform that the auth app has been loaded!
    broadcast("AUTH_APP_LOADED", true, { debug, consumerID: "auth" })
    onGet("AUTH_APP_LOADED", () => true, { debug, consumerID: "auth" })
  }, [])

  useEffect(() => {
    broadcast("AUTH_UPDATE_DATA", authData, { debug, consumerID: "auth" })
    const unwatchGet = onGet("AUTH_GET_DATA", () => authData, {
      debug,
      consumerID: "auth",
    })

    return unwatchGet
  }, [authData])

  useEffect(() => {
    const unwatchLogin = watch("AUTH_LOGIN", login, {
      debug,
      consumerID: "auth",
    })
    const unwatchLogout = watch("AUTH_LOGOUT", logout, {
      debug,
      consumerID: "auth",
    })
    // unregister on get listener when unmounting
    return () => {
      unwatchLogin()
      unwatchLogout()
    }
  }, [login, logout])
}

export default useCommunication
