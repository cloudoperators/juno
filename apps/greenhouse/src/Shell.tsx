/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode } from "react"
import { createBrowserHistory, createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import Auth from "./components/Auth"
import styles from "./styles.css?inline"
import StoreProvider from "./components/StoreProvider"
import { AuthProvider, useAuth } from "./components/AuthProvider"
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

const getBasePath = (auth: any) => {
  // Determine if org is part of the domain
  const currentUrl = new URL(window.location.href)
  const organizationIsPartOfDomain = currentUrl.host.match(/^(.+)\.dashboard\..+/)
  if (organizationIsPartOfDomain) {
    return "/"
  }
  // If the organization is not part of the domain, extract it from the auth token
  const orgString = auth?.data?.raw.groups?.find((g: any) => g.indexOf("organization:") === 0)
  return orgString ? orgString.split(":")[1] : undefined
}

function App(props: AppProps) {
  const auth = useAuth()
  /*
   * Dynamically change the type of history on the router
   * based on the enableHashedRouting prop. This ensures that
   * the correct history type is used when A Shell app does not
   * want the app to use browser history.
   */
  router.update({
    basepath: getBasePath(auth),
    context: { appProps: props },
    history: props.enableHashedRouting ? createHashHistory() : createBrowserHistory(),
  })
  return <RouterProvider router={router} />
}

const StyledShell = (props: AppProps) => {
  props = { ...props, currentHost: props.currentHost === "origin" ? window.location.origin : props.currentHost }

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
                <App {...props} />
              </StrictMode>
            </MessagesProvider>
          </StoreProvider>
        </Auth>
      </AuthProvider>
    </AppShellProvider>
  )
}

export default StyledShell
