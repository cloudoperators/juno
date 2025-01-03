/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useCallback } from "react"
import { oidcSession, mockedSession } from "@cloudoperators/juno-oauth"
// import { useAuthConfig } from "../components/AuthProvider.jsx"

const currentUrl = new URL(window.location.href)
let match = currentUrl.host.match(/^(.+)\.dashboard\..+/)
let orgName = match ? match[1] : currentUrl.searchParams.get("org")

const setOrganizationToUrl = (groups) => {
  const orgString = groups?.find((g) => g.indexOf("organization:") === 0)
  if (orgString) {
    const name = orgString.split(":")[1]
    let url = new URL(window.location.href)
    url.searchParams.set("org", name)
    window.history.replaceState(null, null, url.href)
  }
}

const useAuth = () => {
  const { authConfig, authData, setAuthData } = useAuthConfig()
  // const { issuerURL, clientID, mock, demoOrg, demoUserToken } = authConfig

  // const oidc = useMemo(() => {
  //   // Mock authentication data if demoOrg matches and user token provided
  //   if (demoOrg === orgName) {
  //     return mockedSession({
  //       token: {
  //         groups: [`organization:${demoOrg}`, "role:ccloud:admin"],
  //       },
  //       initialLogin: true,
  //       onUpdate: (data) => {
  //         if (data?.auth && demoUserToken) data.auth = { ...data.auth, JWT: demoUserToken }
  //         setAuthData(data)
  //         // set the organization name in the URL
  //         if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
  //       },
  //     })
  //   }

  //   // Check if mock mode is enabled
  //   if (mock === "true" || mock === true) {
  //     return mockedSession({
  //       initialLogin: true,
  //       onUpdate: (data) => {
  //         setAuthData(data)
  //         // set the organization name in the URL
  //         if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
  //       },
  //     })
  //   }

  //   // If mock mode is not enabled, initialize a real OIDC session
  //   if (!clientID || !issuerURL) return

  //   const requestParams = JSON.stringify({
  //     connector_id: !orgName ? undefined : orgName,
  //   })

  //   console.group("OIDC Session new")
  //   console.log("issuerURL>>>>>>>>>>>>>>>>>>>", issuerURL)
  //   console.log("clientID>>>>>>>>>>>>>>>>>>>", clientID)
  //   console.log("orgName>>>>>>>>>>>>>>>>>>>", orgName)
  //   console.log("requestParams>>>>>>>>>>>>>>>>>>>", requestParams)
  //   console.groupEnd()

  //   return oidcSession({
  //     issuerURL,
  //     clientID,
  //     initialLogin: true,
  //     refresh: true,
  //     requestParams: requestParams,
  //     flowType: "code",
  //     onUpdate: (data) => {
  //       setAuthData(data)
  //       // set the organization name in the URL
  //       if (!orgName) setOrganizationToUrl(data?.auth?.raw?.groups)
  //     },
  //   })
  // }, [issuerURL, clientID, mock, orgName, demoOrg, demoUserToken])

  // // Memoized login function
  // const login = useCallback(() => {
  //   if (oidc?.login) {
  //     oidc.login()
  //   }
  // }, [oidc])

  // // Memoized logout function
  // const logout = useCallback(() => {
  //   if (oidc?.logout) {
  //     oidc.logout({
  //       resetOIDCSession: true,
  //       silent: true,
  //     })
  //     setAuthData(null)
  //   }
  // }, [oidc])

  // return {
  //   isProcessing: authData ? authData?.isProcessing : false,
  //   loggedIn: authData ? authData?.loggedIn : false,
  //   error: authData ? authData?.error : null,
  //   data: authData ? authData?.auth : null,
  //   login,
  //   logout,
  // }
}

export default useAuth
