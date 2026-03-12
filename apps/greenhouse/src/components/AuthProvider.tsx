/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useMemo, useRef, useEffect } from "react"
import { oidcSession, mockedSession, tokenSession } from "@cloudoperators/juno-oauth"
import { createAuthStore, AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import { extractOrganizationName } from "../utils/organizationResolver"
import { TokenDataSchema } from "../types/auth"
import type { OidcSessionState, AuthContextValue, OidcSessionInstance, TokenData, MockAuthValue } from "../types/auth"

const setOrganizationToUrl = (groups: string[] | undefined, enableHashedRouting: boolean) => {
  const orgName = groups?.find((g: string) => g.startsWith("organization:"))?.split(":")[1]

  if (!orgName) return

  let url = new URL(window.location.href)

  // In non-dev environments, set the organization as subdomain
  if (!import.meta.env.DEV) {
    url.hostname = `${orgName}.${url.hostname}`
    window.location.href = url.href
    return
  }

  // Check if the organization name is already in the URL path or hash then don't change it
  const currentPath = enableHashedRouting ? url.hash.replace("#/", "") : url.pathname
  const currentFirstSegment = currentPath.split("/").filter(Boolean)[0]
  if (orgName === currentFirstSegment) return

  // if enableHashedRouting is true, set the hash, otherwise set the pathname
  const pathWithOrg = `/${orgName}`
  if (enableHashedRouting) {
    url.hash = pathWithOrg
  } else {
    url.pathname = pathWithOrg
  }
  window.history.replaceState({}, "", url.href)
}

/**
 * Resolves mock authentication configuration with runtime validation
 *
 * @param value - Can be:
 *   - boolean: true enables mock with default token, false disables
 *   - TokenData: Plain object with token attributes (iss, sub, aud, exp, iat, nonce, email, groups, etc.)
 *   - string: "true" or JSON string that will be parsed
 *
 * @returns Object with isMock flag and parsedAuth token data
 */
function resolveMockAuth(value: MockAuthValue): { isMock: boolean; parsedAuth: TokenData | null } {
  if (typeof value === "boolean") {
    return {
      isMock: value,
      parsedAuth: value ? {} : null,
    }
  }

  if (typeof value === "string") {
    const trimmed = value.trim().toLowerCase()
    if (trimmed === "true") {
      return { isMock: true, parsedAuth: {} }
    }

    // Try parsing JSON string
    try {
      const parsed = JSON.parse(trimmed)
      // Validate the parsed JSON
      const validation = TokenDataSchema.safeParse(parsed)
      if (validation.success) {
        return { isMock: true, parsedAuth: validation.data }
      }
    } catch {
      // Invalid JSON, return disabled mock
    }

    return { isMock: false, parsedAuth: null }
  }

  // It's an object (TokenData), already validated by MockAuthValue type
  return { isMock: true, parsedAuth: value }
}

const initializeDemoAuth = (
  orgName: any,
  demoUserToken: any,
  demoOrg: any,
  enableHashedRouting: boolean,
  setAuthData: any,
  setOidcError: any,
  setOrganizationToUrl: any,
  pluginAuth: AuthStore
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
      pluginAuth.setAuthState({
        status: "authenticated",
        token: data?.auth?.JWT,
        userId: data?.auth?.parsed?.userId,
        userName: data?.auth?.parsed?.fullName,
      })
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
  setOrganizationToUrl: any,
  pluginAuth: AuthStore
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
      pluginAuth.setAuthState({
        status: "authenticated",
        token: data?.auth?.JWT,
        userId: data?.auth?.parsed?.userId,
        userName: data?.auth?.parsed?.fullName,
      })
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups, enableHashedRouting)
    },
  })
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({ options, children }: any) => {
  const [authData, setAuthData] = useState<OidcSessionState | null>(null)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [oidcError, setOidcError] = useState<string | null>(null)
  const oidcInstance = useRef<OidcSessionInstance | null>(null)
  const pluginAuthRef = useRef<AuthStore | null>(null)

  if (!pluginAuthRef.current) {
    pluginAuthRef.current = createAuthStore()
  }

  const pluginAuth = pluginAuthRef.current

  const initializeOidc = (): OidcSessionInstance | null => {
    if (oidcInstance.current || oidcError) return oidcInstance.current
    setIsDemoMode(false)
    const {
      authIssuerUrl: issuerURL,
      authClientId: clientID,
      mockAuth = false,
      demoOrg = "demo",
      demoUserToken,
      enableHashedRouting,
      basePath,
    } = options || {}

    const orgName = extractOrganizationName(enableHashedRouting, basePath)

    // extract mock params
    const { isMock, parsedAuth } = resolveMockAuth(mockAuth)

    // Mock authentication data if demoOrg matches and user token provided
    if (demoOrg === orgName && !isMock) {
      console.debug("Initializing new demo auth session")
      setIsDemoMode(true)
      oidcInstance.current = initializeDemoAuth(
        orgName,
        demoUserToken,
        demoOrg,
        enableHashedRouting,
        setAuthData,
        setOidcError,
        setOrganizationToUrl,
        pluginAuth
      ) as OidcSessionInstance
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
      ) as OidcSessionInstance
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
        setOrganizationToUrl,
        pluginAuth
      ) as OidcSessionInstance
      return oidcInstance.current
    }

    const error = "Invalid OIDC configuration, issuerURL and clientID are required"
    console.error(error)
    setOidcError(error)
    return null
  }

  // Memoized login function
  const login = () => {
    oidcInstance.current?.login()
  }

  // Memoized logout function
  const logout = () => {
    oidcInstance.current?.logout({
      resetOIDCSession: true,
      silent: true,
    })
    setAuthData(null)
    setOidcError(null)
  }

  useEffect(() => {
    oidcInstance.current = initializeOidc()
  }, [options])

  const contextValue = useMemo(
    () => ({
      isProcessing: authData ? authData?.isProcessing : false,
      loggedIn: authData ? authData?.loggedIn : false,
      error: authData ? authData?.error : oidcError,
      data: authData ? authData?.auth : null,
      pluginAuth,
      isDemoMode,
      login,
      logout,
    }),
    [authData, pluginAuth, login, logout]
  )

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
