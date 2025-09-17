/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useMemo, useRef, useEffect } from "react"
import { oidcSession, mockedSession, tokenSession } from "@cloudoperators/juno-oauth"

const setOrganizationToUrl = (groups: any, enableHashedRouting: boolean) => {
  const orgString = groups?.find((g: any) => g.indexOf("organization:") === 0)
  if (orgString) {
    const name = orgString.split(":")[1]
    let url = new URL(window.location.href)

    // Check if the organization name is already in the URL path or hash then don't change it
    const currentPath = enableHashedRouting ? url.hash.replace("#/", "") : url.pathname
    const currentFirstSegment = currentPath.split("/").filter(Boolean)[0]
    if (name === currentFirstSegment) return

    // if enableHashedRouting is true, set the hash, otherwise set the pathname
    const pathWithOrg = `/${name}`
    if (enableHashedRouting) {
      url.hash = pathWithOrg
    } else {
      url.pathname = pathWithOrg
    }
    // @ts-expect-error TS(2345): Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
    window.history.replaceState(null, null, url.href)
  }
}

function resolveMockAuth(value: any) {
  const result = { isMock: false, parsedAuth: null }

  if (typeof value === "boolean") {
    // If value is a boolean, set `isMock` accordingly
    // and return an empty object for `true`, otherwise `null`
    result.isMock = value
    // @ts-expect-error TS(2322): Type '{} | null' is not assignable to type 'null'.
    result.parsedAuth = value ? {} : null
  } else if (typeof value === "string") {
    const trimmed = value.trim().toLowerCase()
    if (trimmed === "true") {
      // If the string is "true", treat it as a mock with an empty object
      result.isMock = true
      // @ts-expect-error TS(2322): Type '{}' is not assignable to type 'null'.
      result.parsedAuth = {}
    } else {
      try {
        // Try parsing the string as JSON
        result.isMock = true
        result.parsedAuth = JSON.parse(value)
      } catch {
        result.isMock = false
        result.parsedAuth = null
      }
    }
  } else if (typeof value === "object" && value !== null) {
    // If value is a non-null object, treat it as a mock
    result.isMock = true
    result.parsedAuth = value
  }

  return result
}

const extractOrganizationName = (enableHashedRouting: boolean) => {
  const currentUrl = new URL(window.location.href)

  // Try to extract from subdomain
  let match = currentUrl.host.match(/^(.+)\.dashboard\..+/)
  if (match) return match[1]
  // If enableHashedRouting is true, take path from the hashed part of the URL otherwise take it from the pathname
  const path = enableHashedRouting ? currentUrl.hash.replace("#/", "") : currentUrl.pathname
  const pathParts = path.split("/").filter(Boolean)
  return pathParts.length > 0 ? pathParts[0] : undefined
}

const initializeDemoAuth = (
  orgName: any,
  demoUserToken: any,
  demoOrg: any,
  enableHashedRouting: boolean,
  setAuthData: any,
  setOidcError: any,
  setOrganizationToUrl: any
) => {
  return tokenSession({
    token: demoUserToken,
    options: { groups: [`organization:${demoOrg}`] },
    initialLogin: true,
    onUpdate: (data: any) => {
      if (data?.error) {
        const error = `Error in demo mode: ${data.error}`
        console.error(error)
        setOidcError(error)
        return
      }
      setAuthData(data)
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups, enableHashedRouting)
    },
  })
}

const initializeMockAuth = (
  parsedAuth: any,
  orgName: any,
  enableHashedRouting: boolean,
  setAuthData: any,
  setOrganizationToUrl: any
) => {
  if (orgName) {
    parsedAuth.groups = [`organization:${orgName}`]
  }

  return mockedSession({
    token: parsedAuth,
    initialLogin: true,
    onUpdate: (data: any) => {
      setAuthData(data)
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups, enableHashedRouting)
    },
  })
}

const initializeRealOidc = (
  issuerURL: any,
  clientID: any,
  orgName: any,
  enableHashedRouting: boolean,
  setAuthData: any,
  setOrganizationToUrl: any
) => {
  const requestParams = JSON.stringify({
    connector_id: !orgName ? undefined : orgName,
  })

  return oidcSession({
    issuerURL,
    clientID,
    initialLogin: true,
    refresh: true,
    requestParams,
    flowType: "code",
    onUpdate: (data: any) => {
      setAuthData(data)
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups, enableHashedRouting)
    },
  })
}

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const AuthContext = createContext()

export const AuthProvider = ({ options, children }: any) => {
  const [authData, setAuthData] = useState(null)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [oidcError, setOidcError] = useState(null)
  const oidcInstance = useRef(null)

  const initializeOidc = () => {
    if (oidcInstance.current || oidcError) return oidcInstance.current
    setIsDemoMode(false)
    const {
      authIssuerUrl: issuerURL,
      authClientId: clientID,
      mockAuth = false,
      demoOrg = "demo",
      demoUserToken,
      enableHashedRouting,
    } = options || {}

    const orgName = extractOrganizationName(enableHashedRouting)

    // extract mock params
    const { isMock, parsedAuth } = resolveMockAuth(mockAuth)

    // Mock authentication data if demoOrg matches and user token provided
    if (demoOrg === orgName && !isMock) {
      console.debug("Initializing new demo auth session")
      setIsDemoMode(true)
      // @ts-ignore
      oidcInstance.current = initializeDemoAuth(
        orgName,
        demoUserToken,
        demoOrg,
        enableHashedRouting,
        setAuthData,
        setOidcError,
        setOrganizationToUrl
      )
      return oidcInstance.current
    }

    // Check if mock mode is enabled
    if (isMock) {
      console.debug("Initializing new mocked auth session")
      oidcInstance.current = initializeMockAuth(
        parsedAuth,
        orgName,
        enableHashedRouting,
        setAuthData,
        setOrganizationToUrl
      )
      return oidcInstance.current
    }

    // If mock mode is not enabled, initialize a real OIDC session
    if (issuerURL && clientID) {
      console.debug("Initializing new OIDC session")
      oidcInstance.current = initializeRealOidc(
        issuerURL,
        clientID,
        orgName,
        enableHashedRouting,
        setAuthData,
        setOrganizationToUrl
      )
      return oidcInstance.current
    }

    const error = "Invalid OIDC configuration, issuerURL and clientID are required"
    console.error(error)
    // @ts-expect-error TS(2345): Argument of type '"Invalid OIDC configuration, iss... Remove this comment to see the full error message
    setOidcError(error)
    return
  }

  // Memoized login function
  const login = () => {
    // @ts-expect-error TS(2339): Property 'login' does not exist on type 'never'.
    oidcInstance.current?.login?.()
  }

  // Memoized logout function
  const logout = () => {
    // @ts-expect-error TS(2339): Property 'logout' does not exist on type 'never'.
    oidcInstance.current?.logout?.({
      resetOIDCSession: true,
      silent: true,
    })
    setAuthData(null)
    setOidcError(null)
  }

  useEffect(() => {
    // @ts-expect-error TS(2322): Type 'null | undefined' is not assignable to type ... Remove this comment to see the full error message
    oidcInstance.current = initializeOidc()
  }, [options])

  const contextValue = useMemo(
    () => ({
      // @ts-expect-error TS(2339): Property 'isProcessing' does not exist on type 'ne... Remove this comment to see the full error message
      isProcessing: authData ? authData?.isProcessing : false,
      // @ts-expect-error TS(2339): Property 'loggedIn' does not exist on type 'never'... Remove this comment to see the full error message
      loggedIn: authData ? authData?.loggedIn : false,
      // @ts-expect-error TS(2339): Property 'error' does not exist on type 'never'.
      error: authData ? authData?.error : oidcError,
      // @ts-expect-error TS(2339): Property 'auth' does not exist on type 'never'.
      data: authData ? authData?.auth : null,
      isDemoMode,
      login,
      logout,
    }),
    [authData, login, logout]
  )

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
