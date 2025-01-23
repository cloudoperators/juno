/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
// @ts-ignore
import styles from "./styles.scss?inline"

import MonorepoChecker from "./components/MonorepoChecker"

import {
  AppShellProvider,
  AppShell,
  PageHeader,
  Container,
  TopNavigation,
  TopNavigationItem,
} from "@cloudoperators/juno-ui-components"
import { mockedSession } from "@cloudoperators/juno-oauth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppContent from "./components/AppContent"
import HeaderUser from "./components/auth/HeaderUser"
import AsyncWorker from "./components/AsyncWorker"
import StoreProvider, { useGlobalsActions, useAuthActions } from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"

const App = (props = {}) => {
  // @ts-ignore
  const { setEndpoint } = useGlobalsActions()
  // @ts-ignore
  const { setData } = useAuthActions()

  // Create query client which it can be used from overall in the app
  const queryClient = new QueryClient()

  // on app initial load save Endpoint and URL_STATE_KEY so it can be
  // used from overall in the application
  useEffect(() => {
    // set default endpoint so the useQueryClientFn can be used
    // @ts-ignore
    setEndpoint(props.endpoint)
  }, [])

  // fetch the mocked auth object and save it globally
  const oidc = React.useMemo(() => {
    // force fetch mocked session
    return mockedSession({
      initialLogin: true,
      onUpdate: (data: any) => {
        setData(data)
      },
    })
  }, [])

  // @ts-ignore
  console.debug("[exampleapp] embedded mode:", props.embedded)

  return (
    <QueryClientProvider client={queryClient}>
      <MonorepoChecker></MonorepoChecker>
      {/* @ts-ignore */}
      <AsyncWorker consumerId={props.id} />
      {/* @ts-ignore */}
      <AppShell
        //@ts-ignore
        embedded={props.embedded === "true" || props.embedded === true}
        pageHeader={
          //@ts-ignore
          <PageHeader heading="Converged Cloud | Example App">
            {/* @ts-ignore */}
            <HeaderUser login={oidc.login} logout={oidc.logout} />
          </PageHeader>
        }
        topNavigation={
          //@ts-ignore
          <TopNavigation>
            {/* @ts-ignore */}
            <TopNavigationItem icon="home" label="Home" />
            {/* @ts-ignore */}
            <TopNavigationItem active label="Navigation Item" />
          </TopNavigation>
        }
      >
        <Container py>
          {/* @ts-ignore */}
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

const StyledApp = (props: any) => {
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
