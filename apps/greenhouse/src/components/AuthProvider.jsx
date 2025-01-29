import React, { createContext, useContext, useState, useMemo, useRef, useEffect } from "react"
import { oidcSession, mockedSession, tokenSession } from "@cloudoperators/juno-oauth"

const setOrganizationToUrl = (groups) => {
  const orgString = groups?.find((g) => g.indexOf("organization:") === 0)
  if (orgString) {
    const name = orgString.split(":")[1]
    let url = new URL(window.location.href)
    url.searchParams.set("org", name)
    window.history.replaceState(null, null, url.href)
  }
}

function resolveMockAuth(value) {
  const result = { isMock: false, parsedAuth: null }

  if (typeof value === "boolean") {
    // If value is a boolean, set `isMock` accordingly
    // and return an empty object for `true`, otherwise `null`
    result.isMock = value
    result.parsedAuth = value ? {} : null
  } else if (typeof value === "string") {
    const trimmed = value.trim().toLowerCase()
    if (trimmed === "true") {
      // If the string is "true", treat it as a mock with an empty object
      result.isMock = true
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

const extractOrganizationName = () => {
  const currentUrl = new URL(window.location.href)
  let match = currentUrl.host.match(/^(.+)\.dashboard\..+/)
  return match ? match[1] : currentUrl.searchParams.get("org")
}

const initializeDemoAuth = (orgName, demoUserToken, demoOrg, setAuthData, setOidcError, setOrganizationToUrl) => {
  return tokenSession({
    token: demoUserToken,
    options: { groups: [`organization:${demoOrg}`] },
    initialLogin: true,
    onUpdate: (data) => {
      if (data?.error) {
        const error = `Error in demo mode: ${data.error}`
        console.error(error)
        setOidcError(error)
        return
      }
      setAuthData(data)
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
    },
  })
}

const initializeMockAuth = (parsedAuth, orgName, setAuthData, setOrganizationToUrl) => {
  if (orgName) {
    parsedAuth.groups = [`organization:${orgName}`]
  }

  return mockedSession({
    token: parsedAuth,
    initialLogin: true,
    onUpdate: (data) => {
      setAuthData(data)
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
    },
  })
}

const initializeRealOidc = (issuerURL, clientID, orgName, setAuthData, setOrganizationToUrl) => {
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
    onUpdate: (data) => {
      setAuthData(data)
      // set the organization name in the URL
      if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
    },
  })
}

const AuthContext = createContext()

export const AuthProvider = ({ options, children }) => {
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
    } = options || {}

    const orgName = extractOrganizationName()

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
        setAuthData,
        setOidcError,
        setOrganizationToUrl
      )
      return oidcInstance.current
    }

    // Check if mock mode is enabled
    if (isMock) {
      console.debug("Initializing new mocked auth session")
      oidcInstance.current = initializeMockAuth(parsedAuth, orgName, setAuthData, setOrganizationToUrl)
      return oidcInstance.current
    }

    // If mock mode is not enabled, initialize a real OIDC session
    if (issuerURL && clientID) {
      console.debug("Initializing new OIDC session")
      oidcInstance.current = initializeRealOidc(issuerURL, clientID, orgName, setAuthData, setOrganizationToUrl)
      return oidcInstance.current
    }

    const error = "Invalid OIDC configuration, issuerURL and clientID are required"
    console.error(error)
    setOidcError(error)
    return
  }

  // Memoized login function
  const login = () => {
    oidcInstance.current?.login?.()
  }

  // Memoized logout function
  const logout = () => {
    oidcInstance.current?.logout?.({
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
