/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo } from "react"

// @ts-ignore
import styles from "./styles.scss?inline"

import {
  AppShellProvider,
  AppShell,
  PageHeader,
  Container,
  TopNavigation,
  TopNavigationItem,
  ThemeToggle,
  PageFooter,
  Stack,
} from "@cloudoperators/juno-ui-components"
import { mockedSession } from "@cloudoperators/juno-oauth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"

import AppContent from "./components/AppContent"
import HeaderUser from "./components/auth/HeaderUser"
import AsyncWorker from "./components/AsyncWorker"
import StoreProvider, { useGlobalsActions, useAuthActions, useAuthLoggedIn } from "./components/StoreProvider"

interface AppProps {
  endpoint?: string
  embedded?: boolean
  id?: string
  theme?: string
}

const App: React.FC<AppProps> = ({ endpoint, embedded, id }) => {
  // @ts-ignore
  const { setEndpoint } = useGlobalsActions()
  // @ts-ignore
  const { setData } = useAuthActions()

  const queryClient = new QueryClient()

  useEffect(() => {
    setEndpoint(endpoint || "")
  }, [endpoint, setEndpoint])

  const oidc = useMemo(
    () =>
      mockedSession({
        initialLogin: true,
        onUpdate: setData,
      }),
    [setData]
  )

  console.debug("[exampleapp] embedded mode:", embedded)

  const loggedIn = useAuthLoggedIn()

  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <AsyncWorker consumerId={id} />
      <AppShell
        // @ts-ignore
        embedded={embedded === "true" || embedded === true}
        pageHeader={
          loggedIn ? (
            <PageHeader heading="SAP Mountain Peaks Dashboard">
              <HeaderUser login={oidc.login} logout={oidc.logout} />
              <ThemeToggle />
            </PageHeader>
          ) : null
        }
        pageFooter={
          <PageFooter>
            <Stack gap="20">
              <div>Copyright © 2024 SAP SE, SAP affiliates and Juno contributors</div>
              <div>Lisence Apache 2.0</div>
            </Stack>
          </PageFooter>
        }
      >
        <Container py>
          <AppContent />
        </Container>
      </AppShell>
    </QueryClientProvider>
  )
}

const StyledApp: React.FC<AppProps> = (props) => {
  return (
    // @ts-ignore
    <AppShellProvider theme={props.theme || "theme-dark"}>
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

export default StyledApp
