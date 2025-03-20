/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import StoreProvider from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import AppContent from "./AppContent"
// @ts-expect-error TS(2792): Cannot find module './styles.scss?inline'. Did you... Remove this comment to see the full error message
import styles from "./styles.scss?inline"
import AsyncWorker from "./components/AsyncWorker"
import useStore from "./store"

const App = (props = {}) => {
  const initializeStore = useStore((state: any) => state.initialize)

  // Create query client which it can be used from overall in
  // on app initial load save Endpoint
  // used from overall in the application
  // @ts-expect-error TS(2339): Property 'apiEndpoint' does not exist on type '{}'... Remove this comment to see the full error message
  initializeStore(props.apiEndpoint, props.token, props.namespace)

  return (
    <MessagesProvider>
      {/* @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'. */}
      <AppShell pageHeader="Converged Cloud | Secrets" embedded={props.embedded === "true" || props.embedded === true}>
        {/* @ts-expect-error TS(2741): Property 'consumerId' is missing in type '{}' but ... Remove this comment to see the full error message */}
        <AsyncWorker />
        {/* @ts-expect-error TS(2322): Type '{ props: {}; }' is not assignable to type 'I... Remove this comment to see the full error message */}
        <AppContent props={props} />
      </AppShell>
    </MessagesProvider>
  )
}

const StyledApp = (props: any) => {
  return (
    // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'any'.
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
