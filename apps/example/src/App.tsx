/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
// @ts-expect-error TS(2307): Cannot find module './styles.scss?inline' or its c... Remove this comment to see the full error message
import styles from "./styles.scss?inline"

// @ts-expect-error TS(6142): Module './components/MonorepoChecker' was resolved... Remove this comment to see the full error message
import MonorepoChecker from "./components/MonorepoChecker"

import {
  AppShellProvider,
  AppShell,
  PageHeader,
  Container,
  TopNavigation,
  TopNavigationItem,
  // @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
} from "@cloudoperators/juno-ui-components"
import { mockedSession } from "@cloudoperators/juno-oauth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// @ts-expect-error TS(6142): Module './components/AppContent' was resolved to '... Remove this comment to see the full error message
import AppContent from "./components/AppContent"
// @ts-expect-error TS(6142): Module './components/auth/HeaderUser' was resolved... Remove this comment to see the full error message
import HeaderUser from "./components/auth/HeaderUser"
// @ts-expect-error TS(6142): Module './components/AsyncWorker' was resolved to ... Remove this comment to see the full error message
import AsyncWorker from "./components/AsyncWorker"
// @ts-expect-error TS(6142): Module './components/StoreProvider' was resolved t... Remove this comment to see the full error message
import StoreProvider, { useGlobalsActions, useAuthActions } from "./components/StoreProvider"
// @ts-expect-error TS(7016): Could not find a declaration file for module '@clo... Remove this comment to see the full error message
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"

const App = (props = {}) => {
  // @ts-expect-error TS(2339): Property 'setEndpoint' does not exist on type 'unk... Remove this comment to see the full error message
  const { setEndpoint } = useGlobalsActions()
  // @ts-expect-error TS(2339): Property 'setData' does not exist on type 'unknown... Remove this comment to see the full error message
  const { setData } = useAuthActions()

  // Create query client which it can be used from overall in the app
  const queryClient = new QueryClient()

  // on app initial load save Endpoint and URL_STATE_KEY so it can be
  // used from overall in the application
  useEffect(() => {
    // set default endpoint so the useQueryClientFn can be used
    // @ts-expect-error TS(2339): Property 'endpoint' does not exist on type '{}'.
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

  // @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'.
  console.debug("[exampleapp] embedded mode:", props.embedded)

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <QueryClientProvider client={queryClient}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
      is provided... Remove this comment to see the full error message
      <MonorepoChecker></MonorepoChecker>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
      is provided... Remove this comment to see the full error message
      <AsyncWorker consumerId={props.id} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
      is provided... Remove this comment to see the full error message
      <AppShell
        // @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'.
        embedded={props.embedded === "true" || props.embedded === true}
        pageHeader={
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PageHeader heading="Converged Cloud | Example App">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
            see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX
            unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <HeaderUser login={oidc.login} logout={oidc.logout} />
          </PageHeader>
        }
        topNavigation={
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TopNavigation>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
            see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX
            unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TopNavigationItem icon="home" label="Home" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
            see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX
            unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TopNavigationItem active label="Navigation Item" />
          </TopNavigation>
        }
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
        the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided...
        Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error message
        <Container py>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX
          unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
      is provided... Remove this comment to see the full error message
      <style>{styles.toString()}</style>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
      is provided... Remove this comment to see the full error message
      <MessagesProvider>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
        the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided...
        Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
        '--jsx' flag is provided... Remove this comment to see the full error message
        <StoreProvider>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX
          unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
