/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./styles.scss"

console.log("====================", React)
import MonorepoChecker from "./components/MonorepoChecker"

import {
  AppShellProvider,
  AppShell,
  PageHeader,
  Container,
} from "@cloudoperators/juno-ui-components"
import { mockedSession } from "@cloudoperators/juno-oauth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppContent from "./components/AppContent"
import HeaderUser from "./components/auth/HeaderUser"
import AsyncWorker from "./components/AsyncWorker"
import StoreProvider, {
  useGlobalsActions,
  useAuthActions,
} from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"

// mock API
import { fetchProxyInitDB } from "@cloudoperators/juno-utils"
import db from "../db.json"

const App = (props = {}) => {
  const { setEndpoint } = useGlobalsActions()
  const { setData } = useAuthActions()

  // Create query client which it can be used from overall in the app
  const queryClient = new QueryClient()

  // on app initial load save Endpoint and URL_STATE_KEY so it can be
  // used from overall in the application
  useEffect(() => {
    // set default endpoint so the useQueryClientFn can be used
    setEndpoint(props.endpoint || window.location.origin)
  }, [])

  // fetch the mocked auth object and save it globally
  const oidc = React.useMemo(() => {
    // force fetch mocked session
    return mockedSession({
      initialLogin: true,
      onUpdate: (data) => {
        setData(data)
      },
    })
  }, [])

  // setup the mock db.json
  useEffect(() => {
    fetchProxyInitDB(db)
  }, [])

  console.log("[exampleapp] embedded mode:", props.embedded)

  return (
    <QueryClientProvider client={queryClient}>
      <MonorepoChecker></MonorepoChecker>
      <AsyncWorker consumerId={props.id} mockAPI={true} />
      <AppShell
        pageHeader={
          <PageHeader heading="Converged Cloud | Example App">
            <HeaderUser login={oidc.login} logout={oidc.logout} />
          </PageHeader>
        }
        embedded={props.embedded === "true" || props.embedded === true}
      >
        <Container py>
          <AppContent props={props} />
        </Container>
      </AppShell>
    </QueryClientProvider>
  )
}

App.propTypes = {
  endpoint: PropTypes.string,
  embedded: PropTypes.bool,
  id: PropTypes.string,
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <MessagesProvider>
        <StoreProvider>
          <App {...props} />
        </StoreProvider>
      </MessagesProvider>
    </AppShellProvider>
  )
}

StyledApp.propTypes = {
  theme: PropTypes.string,
  embedded: PropTypes.bool,
  endpoint: PropTypes.string,
  id: PropTypes.string,
}
export default StyledApp
