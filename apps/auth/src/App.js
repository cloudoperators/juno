/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import useCommunication from "./useCommunication"
import { oidcSession, mockedSession } from "oauth"
import { MOCKED_TOKEN } from "./mockedToken"

const App = (props = {}) => {
  const [authData, setAuthData] = React.useState()

  const oidc = React.useMemo(() => {
    if (
      props.mock === "true" ||
      props.mock === true ||
      typeof props.mock === "string"
    ) {
      let token

      try {
        token = JSON.parse(atob(props.mock))
      } catch (e) {
        try {
          token = JSON.parse(props.mock)
        } catch (e) {
          token = MOCKED_TOKEN
        }
      }

      return mockedSession({
        token,
        initialLogin: props.initialLogin,
        onUpdate: (authData) => {
          setAuthData(authData)
        },
      })
    }

    return oidcSession({
      issuerURL: props.issuerUrl || props.issuerurl, // backwards compatibility
      clientID: props.clientId || props.clientid, // backwards compatibility
      initialLogin: props.initialLogin,
      refresh: true,
      requestParams: props.requestParams,
      flowType: props.oidcFlow || "code",
      onUpdate: (authData) => {
        setAuthData(authData)
      },
    })
  }, [setAuthData])

  useCommunication({
    authData,
    login: oidc.login,
    logout: () =>
      oidc.logout({
        resetOIDCSession: props.resetOIDCSession,
        silent: true,
      }),
    debug: props.debug === "true" || props.debug === true,
  })

  // return (
  //   <div>
  //     <button onClick={oidc.login}>Login</button>
  //     <button onClick={oidc.logout}>Logout</button>
  //     <button onClick={oidc.refresh}>Refresh</button>
  //   </div>
  // )
  return null
}

export default App
