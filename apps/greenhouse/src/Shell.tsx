/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode } from "react"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import Auth from "./components/Auth"
import styles from "./styles.css?inline"
import StoreProvider from "./components/StoreProvider"
import { AuthProvider } from "./components/AuthProvider"
import { routeTree } from "./routeTree.gen"

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    appProps: undefined!,
  },
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export type AppProps = {
  authClientId?: string
  authIssuerUrl?: string
  demoOrg?: string
  mockAuth?: boolean
  demoUserToken?: string
  currentHost?: string
  enableHashedRouting?: boolean
}

const StyledShell = (props: AppProps) => {
  props = { ...props, currentHost: props.currentHost === "origin" ? window.location.origin : props.currentHost }

  // add appProps to to router context
  router.update({
    routeTree,
    context: { appProps: props },
  })

  return (
    <AppShellProvider>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <AuthProvider options={props}>
        <Auth
          clientId={props?.authClientId}
          issuerUrl={props?.authIssuerUrl}
          demoOrg={props?.demoOrg}
          mock={props?.mockAuth}
          demoUserToken={props.demoUserToken}
        >
          <StoreProvider options={props}>
            <MessagesProvider>
              <StrictMode>
                <RouterProvider basepath="/" router={router} />
              </StrictMode>
            </MessagesProvider>
          </StoreProvider>
        </Auth>
      </AuthProvider>
    </AppShellProvider>
  )
}

export default StyledShell
