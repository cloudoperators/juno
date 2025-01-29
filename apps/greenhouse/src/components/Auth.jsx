/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, Spinner, Stack } from "@cloudoperators/juno-ui-components"
import { useAuth } from "./AuthProvider"

/**
 * Auth Component:
 *
 * This component is responsible for managing user authentication
 *
 * The Auth component renders three main sections:
 * 1. If the user is logged in, the children are rendered.
 * 2. If the user is not logged in, a stack containing loading indicators, messages, and a "Sign in" button is rendered.
 *
 */
const Auth = ({ children }) => {
  const { isProcessing: authIsProcessing, loggedIn: authLoggedIn, error: authError, login } = useAuth()

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
