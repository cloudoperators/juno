/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import styles from "./styles.scss?inline"
import AsyncWorker from "./components/AsyncWorker"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider, { useStoreActions } from "./components/StoreProvider"

const App = (props = {}) => {
  const { initialize: initializeStore } = useStoreActions()

  initializeStore(props.apiEndpoint, props.token, props.namespace, props.userGroup)

  return (
    <MessagesProvider>
      <AsyncWorker />
      <AppShell
        pageHeader="Converged Cloud | Team Members"
        embedded={props.embedded === "true" || props.embedded === true}
      >
        <AppContent props={props} />
      </AppShell>
    </MessagesProvider>
  )
}

const StyledApp = (props) => {
  return (
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
