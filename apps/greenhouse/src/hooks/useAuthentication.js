/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useMemo } from "react"
import { oidcSession, mockedSession } from "@cloudoperators/juno-oauth"
import { broadcast, onGet } from "@cloudoperators/juno-communicator"
import { useAuthActions, useAuthIsProcessing, useAuthLastAction, useAuthAppLoaded } from "../components/StoreProvider"

const CONSUMER_ID = "greenhouse-dashboard"

function parseMockData(mockData) {
  let token

  try {
    // First, attempt to decode from base64 and parse as JSON
    token = JSON.parse(atob(mockData))
  } catch (base64Error) {
    //Failed to parse mock token from Base64"

    // Fallback to parsing mockData directly as JSON
    try {
      token = JSON.parse(mockData)
    } catch (jsonError) {
      console.debug("Failed to parse mock token from JSON", jsonError)
    }
  }
  return token
}

// Custom hook to manage authentication
const useAuthentication = ({ issuerURL, clientID, mock, demoMode, demoUserToken, debug, requestParams }) => {
  // store raw auth data to broadcast it to other apps (compatibility mode)
  const [authObject, setAuthObject] = React.useState(null)
  const authIsProcessing = useAuthIsProcessing()
  const authLastAction = useAuthLastAction()
  const authAppLoaded = useAuthAppLoaded()
  const { setData, setAppLoaded } = useAuthActions()

  // define a function to save the auth data in the store and locally for broadcasting
  const setAuthData = useCallback(
    (authData) => {
      if (!setData || !setAuthObject) return
      setData(authData)
      setAuthObject(authData)
    },
    [setData, setAuthObject]
  )

  // useMemo to initialize the OIDC session or mocked session based on the mock flag
  const oidc = useMemo(() => {
    if (!setAuthData || !setAppLoaded) return

    setAppLoaded(true)
    // if current orgName is the demo org, we mock the auth app
    if (demoMode) {
      // we mock the auth app with default groups
      mock = JSON.stringify({
        groups: ["organization:demo", "role:ccloud:admin"],
      })
    }

    // Check if mock mode is enabled
    if (mock === "true" || mock === true || typeof mock === "string") {
      // Return a mocked session with the provided token
      return mockedSession({
        token: parseMockData(mock),
        initialLogin: true,
        onUpdate: (authData) => {
          if (authData?.auth && demoUserToken) authData.auth = { ...authData.auth, JWT: demoUserToken }
          setAuthData(authData)
        },
      })
    }

    // If mock mode is not enabled, initialize a real OIDC session
    if (!clientID || !issuerURL) return

    return oidcSession({
      issuerURL,
      clientID,
      initialLogin: true,
      refresh: true,
      requestParams: requestParams,
      flowType: "code",
      onUpdate: (authData) => {
        setAuthData(authData)
      },
    })
  }, [setAuthData, setAppLoaded])

  // useCallback to memoize the login function
  const login = React.useCallback(oidc?.login, [oidc.login])

  // useCallback to memoize the logout function
  const logout = React.useCallback(() => {
    if (!oidc) return
    oidc.logout({
      resetOIDCSession: true,
      silent: true,
    })
  }, [oidc.logout])

  //#################### Communication Interface ####################
  useEffect(() => {
    // Broadcast that the auth app has been loaded
    broadcast("AUTH_APP_LOADED", authAppLoaded, { debug, consumerID: CONSUMER_ID })
    // Set up a listener to confirm that the auth app has been loaded
    const watch = onGet("AUTH_APP_LOADED", () => authAppLoaded, { debug, consumerID: CONSUMER_ID })

    return watch
  }, [authAppLoaded])

  // broadcast the auth object got from the OIDC session (compatibility mode)
  useEffect(() => {
    // Broadcast updated authentication data
    broadcast("AUTH_UPDATE_DATA", authObject, { debug, consumerID: CONSUMER_ID })
    // Set up a listener to provide authentication data on request
    const unwatchGet = onGet("AUTH_GET_DATA", () => authObject, {
      debug,
      consumerID: CONSUMER_ID,
    })

    // Clean up the listener when the component unmounts
    return unwatchGet
  }, [authObject])

  useEffect(() => {
    if (authIsProcessing) return
    if (authLastAction?.name === "signOn" && login) login()
    else if (authLastAction?.name === "signOut" && logout) logout()
  }, [authIsProcessing, authLastAction, login, logout])
}

export { useAuthentication }
