/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useMemo } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AsyncWorker from "./components/AsyncWorker"
import Footer from "./components/app-shell/Footer"
import Header from "./components/app-shell/header/Header"
import Content from "./components/app-shell/Content"
import TopNavigationBar from "./components/app-shell/Navigation"
import StoreProvider, { useGlobalsActions } from "./store/StoreProvider"
import useAuthStore from "./store/useAuthStore"

// @ts-ignore
import styles from "./styles.scss?inline"

interface AppProps {
  endpoint?: string
  embedded?: boolean
  id?: string
  theme?: string
}

interface OIDCSession {
  login: () => void
  logout: () => void
}

const App: React.FC<AppProps> = ({ endpoint = "", embedded = false, id = "" }) => {
  // @ts-ignore
  const { setEndpoint } = useGlobalsActions()
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)
  const loggedIn = useAuthStore((state) => state.loggedIn)

  const queryClient = useMemo(() => new QueryClient(), [])

  setEndpoint(endpoint)

  const oidc = useMemo<OIDCSession>(
    () => ({
      login: () => setLoggedIn(true),
      logout: () => setLoggedIn(false),
    }),
    [setLoggedIn]
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AsyncWorker consumerId={id} />
      <AppShell
        embedded={embedded}
        pageHeader={<Header loggedIn={loggedIn} logout={oidc.logout} />}
        topNavigation={loggedIn ? <TopNavigationBar /> : null}
        pageFooter={<Footer />}
      >
        <Content login={oidc.login} />
      </AppShell>
    </QueryClientProvider>
  )
}

const StyledApp: React.FC<AppProps> = (props) => (
  <AppShellProvider>
    <style>{styles.toString()}</style>
    <MessagesProvider>
      <StoreProvider>
        <App {...props} />
      </StoreProvider>
    </MessagesProvider>
  </AppShellProvider>
)

export default StyledApp
