import React, { createContext, useContext, useState, useMemo, useCallback, useRef } from "react"
import { oidcSession, mockedSession } from "@cloudoperators/juno-oauth"

const setOrganizationToUrl = (groups) => {
  const orgString = groups?.find((g) => g.indexOf("organization:") === 0)
  if (orgString) {
    const name = orgString.split(":")[1]
    let url = new URL(window.location.href)
    url.searchParams.set("org", name)
    window.history.replaceState(null, null, url.href)
  }
}

const AuthContext = createContext()

export const AuthProvider = ({ options, children }) => {
  const [authData, setAuthData] = useState(null)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const oidcRef = useRef(null)

  const initializeOidc = useCallback(() => {
    if (oidcRef.current) return oidcRef.current
    setIsDemoMode(false)

    // extract auth props
    const issuerURL = options?.authIssuerUrl
    const clientID = options?.authClientId
    const mock = options?.mockAuth || false
    const demoOrg = options?.demoOrg || "demo"
    const demoUserToken = options?.demoUserToken

    // extract the organization name from the URL
    const currentUrl = new URL(window.location.href)
    let match = currentUrl.host.match(/^(.+)\.dashboard\..+/)
    let orgName = match ? match[1] : currentUrl.searchParams.get("org")

    // Mock authentication data if demoOrg matches and user token provided
    if (demoOrg === orgName) {
      console.debug("Initializing new demo auth session")
      setIsDemoMode(true)
      oidcRef.current = mockedSession({
        token: {
          groups: [`organization:${demoOrg}`, "role:ccloud:admin"],
        },
        initialLogin: true,
        onUpdate: (data) => {
          if (data?.auth && demoUserToken) data.auth = { ...data.auth, JWT: demoUserToken }
          setAuthData(data)
          // set the organization name in the URL
          if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
        },
      })
      return oidcRef.current
    }

    // Check if mock mode is enabled
    if (mock === "true" || mock === true) {
      console.debug("Initializing new mocked auth session")
      oidcRef.current = mockedSession({
        initialLogin: true,
        onUpdate: (data) => {
          setAuthData(data)
          // set the organization name in the URL
          if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
        },
      })
      return oidcRef.current
    }

    // If mock mode is not enabled, initialize a real OIDC session
    if (issuerURL && clientID) {
      console.debug("Initializing new OIDC session")

      const requestParams = JSON.stringify({
        connector_id: !orgName ? undefined : orgName,
      })

      oidcRef.current = oidcSession({
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
      return oidcRef.current
    }

    throw new Error("Invalid OIDC configuration")
  }, [options])

  // Memoized login function
  const login = useCallback(() => {
    const oidc = initializeOidc()
    if (oidc?.login) {
      oidc.login()
    }
  }, [initializeOidc])

  // Memoized logout function
  const logout = useCallback(() => {
    const oidc = initializeOidc()
    if (oidc?.logout) {
      oidc.logout({
        resetOIDCSession: true,
        silent: true,
      })
      setAuthData(null)
    }
  }, [initializeOidc])

  initializeOidc()

  const contextValue = useMemo(
    () => ({
      isProcessing: authData ? authData?.isProcessing : false,
      loggedIn: authData ? authData?.loggedIn : false,
      error: authData ? authData?.error : null,
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
