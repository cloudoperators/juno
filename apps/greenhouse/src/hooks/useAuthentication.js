/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo } from "react"
import { oidcSession, mockedSession } from "@cloudoperators/juno-oauth"
import { useAuthActions, useAuthIsProcessing, useAuthLastAction } from "../components/StoreProvider"

function parseMockData(mockData) {
  let token

  try {
    // First, attempt to decode from base64 and parse as JSON
    token = JSON.parse(atob(mockData))
  } catch (_base64Error) {
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
const useAuthentication = ({ issuerURL, clientID, mock, orgName, demoOrg, demoUserToken, requestParams }) => {
  const authIsProcessing = useAuthIsProcessing()
  const authLastAction = useAuthLastAction()
  const { setData: setAuthData } = useAuthActions()

  // useMemo to initialize the OIDC session or mocked session based on the mock flag
  const oidc = useMemo(() => {
    if (!setAuthData) return

    // if current orgName is the demo org, we mock the auth app
    demoOrg ||= "demo"
    if (demoOrg === orgName) {
      // we mock the auth app with default groups
      // organization:demo just needed to be displayed in the UI
      // role:ccloud:admin is needed to be able to fetch the UI extensions
      mock = JSON.stringify({
        groups: [`organization:${demoOrg}`, "role:ccloud:admin"],
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

    console.group("OIDC Session old")
    console.log("issuerURL>>>>>>>>>>>>>>>>>>>", issuerURL)
    console.log("clientID>>>>>>>>>>>>>>>>>>>", clientID)
    console.log("orgName>>>>>>>>>>>>>>>>>>>", orgName)
    console.log("requestParams>>>>>>>>>>>>>>>>>>>", requestParams)
    console.groupEnd()

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
  }, [setAuthData])

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

  useEffect(() => {
    if (authIsProcessing) return
    if (authLastAction?.name === "signOn" && login) login()
    else if (authLastAction?.name === "signOut" && logout) logout()
  }, [authIsProcessing, authLastAction, login, logout])
}

export { useAuthentication }
