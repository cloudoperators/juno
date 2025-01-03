/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, Spinner, Stack } from "@cloudoperators/juno-ui-components"
import { useAuthLoggedIn, useAuthIsProcessing, useAuthError, useAuthActions } from "../components/StoreProvider"
import { useAuthentication } from "../hooks/useAuthentication"
import { useAuth } from "./AuthProvider"

const currentUrl = new URL(window.location.href)
let match = currentUrl.host.match(/^(.+)\.dashboard\..+/)
let orgName = match ? match[1] : currentUrl.searchParams.get("org")

/**
 * Auth Component:
 *
 * This component is responsible for managing user authentication
 * It receives the following props:
 * - clientId: The client ID for authentication.
 * - issuerUrl: The URL of the authentication issuer.
 * - mock: A flag indicating whether to use mock authentication.
 * - children: The content to be displayed when the user is logged in.
 *
 * The Auth component renders three main sections:
 * 1. If the user is logged in, the children are rendered.
 * 2. If the user is not logged in, a stack containing loading indicators, messages, and a "Sign in" button is rendered.
 *
 * Note: The component reads organization information from the token and adjusts the URL accordingly after the user is logged in.
 */
const Auth = ({ clientId, issuerUrl, mock, demoUserToken, children, demoOrg }) => {
  // const authLoggedIn = useAuthLoggedIn()
  // const authIsProcessing = useAuthIsProcessing()
  // const authError = useAuthError()
  // const { login } = useAuthActions()
  // useAuthentication({
  //   issuerURL: issuerUrl,
  //   clientID: clientId,
  //   orgName,
  //   demoOrg,
  //   demoUserToken,
  //   mock,
  //   debug: true,
  //   initialLogin: true,
  //   requestParams: JSON.stringify({
  //     connector_id: !orgName ? undefined : orgName,
  //   }),
  // })

  const { isProcessing: authIsProcessing, loggedIn: authLoggedIn, error: authError, login } = useAuth()
  console.group("Auth")
  console.log("authIsProcessing>>>>>>>>>>>>>>>>>>>", authIsProcessing)
  console.log("authLoggedIn>>>>>>>>>>>>>>>>>>>", authLoggedIn)
  console.log("authError>>>>>>>>>>>>>>>>>>>", authError)
  console.groupEnd()

  if (authLoggedIn) {
    return children
  }

  return (
    <Stack alignment="center" distribution="center" direction="vertical" className="h-screen">
      {authIsProcessing ? (
        <>
          <Spinner className="mx-6 mb-3" variant="primary" size="1.5rem"></Spinner>
          Signing on...
        </>
      ) : (
        <>
          <span>
            {authError
              ? "You have been logged out. Please sign in again."
              : "Please sign in before you can use Greenhouse."}
          </span>
          <Button variant="primary" onClick={login} className="mt-3">
            Sign in
          </Button>
        </>
      )}
    </Stack>
  )
}

export default Auth
