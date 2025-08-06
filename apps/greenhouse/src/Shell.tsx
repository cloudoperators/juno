/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { StrictMode } from "react"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { decodeV2, encodeV2 } from "@cloudoperators/juno-url-state-provider"
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

  /*
   * Dynamically change the type of history on the router
   * based on the enableHashedRouting prop. This ensures that
   * the correct history type is used when A Shell app does not
   * want the app to use browser history.
   */
  router.update({
    routeTree,
    context: { appProps: props },
    stringifySearch: encodeV2,
    parseSearch: (searchString) => {
      if (!props.enableHashedRouting) {
        return decodeV2(searchString)
      }

      /*
       * In case of hashed routing Tanstack router returns URL search params of the entire URL rather than just from the hashed part.
       * We'll have to extract the query part from the hash because otherwise in embedded mode the app will be taking search params from the shell app as well.
       * Sanitize the search string by extracting the substring between the first '?' and the next '?' (if any), keeping the first '?'.
       * https://github.com/TanStack/router/issues/4370
       * http://localhost:3000/?preHashParam=prehashtest#/services?postHashParam1=test1?preHashParam=prehashtest
       * searchString = "?postHashParam1=test1?preHashParam=prehashtest"
       * searchStringFromHash = "?postHashParam1=test1"
       */
      const postHashParams = searchString.indexOf("?")
      if (postHashParams === -1) return {} // If no query part is found, return an empty object
      const preHashParams = searchString.indexOf("?", postHashParams + 1)
      const searchStringFromHash = searchString.slice(postHashParams, preHashParams === -1 ? undefined : preHashParams)

      return decodeV2(searchStringFromHash)
    },
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
