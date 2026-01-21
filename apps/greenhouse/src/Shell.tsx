/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode } from "react"
import { createBrowserHistory, createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { decodeV2, encodeV2 } from "@cloudoperators/juno-url-state-provider"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { createClient } from "@cloudoperators/juno-k8s-client"
import Auth from "./components/Auth"
import styles from "./styles.css?inline"
import StoreProvider, { useGlobalsApiEndpoint } from "./components/StoreProvider"
import { AuthProvider, useAuth } from "./components/AuthProvider"
import { routeTree } from "./routeTree.gen"

// Create a new query client instance
const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    appProps: undefined!,
    apiClient: null,
    organization: undefined!,
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

const getOrganization = (auth: unknown) => {
  // @ts-expect-error - auth?.data type needs to be properly defined
  return auth?.data?.raw?.groups?.find((g: any) => g.startsWith("organization:"))?.split(":")[1]
}

function App(props: AppProps) {
  const auth = useAuth()
  const apiEndpoint = useGlobalsApiEndpoint()
  // @ts-expect-error - useAuth return type is not properly typed
  const token = auth?.data?.JWT
  // Create k8s client if apiEndpoint and token are available
  // @ts-expect-error - apiEndpoint type needs to be properly typed as string
  const apiClient = apiEndpoint && token ? createClient({ apiEndpoint, token }) : null
  const organization = getOrganization(auth)

  /*
   * Dynamically change the type of history on the router
   * based on the enableHashedRouting prop. This ensures that
   * the correct history type is used when A Shell app does not
   * want the app to use browser history.
   */
  router.update({
    basepath: getBasePath(auth),
    context: { appProps: props, apiClient, organization },
    stringifySearch: encodeV2,
    parseSearch: decodeV2,
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
            <QueryClientProvider client={queryClient}>
              <MessagesProvider>
                <StrictMode>
                  <App {...props} />
                </StrictMode>
              </MessagesProvider>
            </QueryClientProvider>
          </StoreProvider>
        </Auth>
      </AuthProvider>
    </AppShellProvider>
  )
}

export default StyledShell
