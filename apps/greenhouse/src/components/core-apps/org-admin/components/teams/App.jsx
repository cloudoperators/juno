/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import styles from "./styles.scss"
import AsyncWorker from "./components/AsyncWorker"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import StoreProvider, { useStoreActions } from "./components/StoreProvider"
import { fetchProxyInitDB } from "@cloudoperators/juno-utils"
import db from "./db.json"

const App = (props = {}) => {
  const { initialize: initializeStore, setMock } = useStoreActions()

  if (props.isMock === true || props.isMock === "true") {
    setMock(true)
    fetchProxyInitDB(db, {
      debug: true,
      rewriteRoutes: {
        "/(?:apis/greenhouse\\.sap/v1alpha1/namespaces/[^/]+/teammemberships/(.*))": "/$1",
      },
    })
    initializeStore(window.location.origin, null, null, null)
  } else {
    initializeStore(props.apiEndpoint, props.token, props.namespace, props.userGroup)
  }

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
