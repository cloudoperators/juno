/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import useStore from "./store"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import styles from "./styles.scss"
import AsyncWorker from "./components/AsyncWorker"

/* IMPORTANT: Replace this with your app's name */
const URL_STATE_KEY = "greenhouse-cluster-admin"
/* --------------------------- */

const App = (props = {}) => {
  const initializeStore = useStore((state) => state.initialize)
  const setUrlStateKey = useStore((state) => state.setUrlStateKey)

  initializeStore(props.apiEndpoint, props.token, props.namespace)
  setUrlStateKey(URL_STATE_KEY)

  return (
    <>
      <AsyncWorker consumerId={URL_STATE_KEY} />
      <AppShell pageHeader="Converged Cloud | Clusters" embedded={true}>
        <AppContent />
      </AppShell>
    </>
  )
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <App {...props} />
    </AppShellProvider>
  )
}

export default StyledApp
