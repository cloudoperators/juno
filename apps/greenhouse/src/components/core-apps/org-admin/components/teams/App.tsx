/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import styles from "./styles.css?inline"
import AsyncWorker from "./components/AsyncWorker"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider, { useStoreActions } from "./components/StoreProvider"

const App = (props = {}) => {
  // @ts-ignore
  const { initialize: initializeStore } = useStoreActions()

  // @ts-expect-error TS(2339): Property 'apiEndpoint' does not exist on type '{}'... Remove this comment to see the full error message
  initializeStore(props.apiEndpoint, props.token, props.namespace, props.userGroup)

  return (
    <MessagesProvider>
      <AsyncWorker />
      <AppShell
        pageHeader="Converged Cloud | Team Members"
        // @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'.
        embedded={props.embedded === "true" || props.embedded === true}
      >
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
