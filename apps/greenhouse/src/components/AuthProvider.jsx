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
  if (typeof value === "boolean") {
    return { isMock: value, parsedAuth: value ? {} : null }
  }

  if (typeof value === "string") {
    if (value.trim().toLowerCase() === "true") {
      return { isMock: true, parsedAuth: {} }
    }
    try {
      const parsed = JSON.parse(value)
      return { isMock: true, parsedAuth: parsed }
    } catch {
      return { isMock: false, parsedAuth: null }
    }
  }

  if (typeof value === "object" && value !== null) {
    return { isMock: true, parsedAuth: value }
  }

  return { isMock: false, parsedAuth: null }
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

    // extract the organization name from the URL
    const currentUrl = new URL(window.location.href)
    let match = currentUrl.host.match(/^(.+)\.dashboard\..+/)
    let orgName = match ? match[1] : currentUrl.searchParams.get("org")

    // extract mock params
    const { isMock, parsedAuth } = resolveMockAuth(mockAuth)

    // Mock authentication data if demoOrg matches and user token provided
    if (demoOrg === orgName && !isMock) {
      console.debug("Initializing new demo auth session")
      setIsDemoMode(true)
      oidcInstance.current = tokenSession({
        token: demoUserToken,
        options: {
          groups: [`organization:${demoOrg}`],
        },
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
      return oidcInstance.current
    }

    // Check if mock mode is enabled
    if (isMock) {
      console.debug("Initializing new mocked auth session")

      // override the organization name if provided in the URL
      if (orgName) {
        parsedAuth.groups = [`organization:${orgName}`]
      }

      oidcInstance.current = mockedSession({
        token: parsedAuth,
        initialLogin: true,
        onUpdate: (data) => {
          setAuthData(data)
          // set the organization name in the URL
          if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
        },
      })
      return oidcInstance.current
    }

    // If mock mode is not enabled, initialize a real OIDC session
    if (issuerURL && clientID) {
      console.debug("Initializing new OIDC session")

      const requestParams = JSON.stringify({
        connector_id: !orgName ? undefined : orgName,
      })

      oidcInstance.current = oidcSession({
        issuerURL,
        clientID,
        initialLogin: true,
        refresh: true,
        requestParams: requestParams,
        flowType: "code",
        onUpdate: (data) => {
          setAuthData(data)
          // set the organization name in the URL
          if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
        },
      })
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
