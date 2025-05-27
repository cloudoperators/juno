/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useEffect, useMemo } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AsyncWorker from "./components/AsyncWorker"
import Footer from "./components/app-shell/Footer"
import Header from "./components/app-shell/header/Header"
import Content from "./components/app-shell/Content"
import TopNavigationBar from "./components/app-shell/Navigation"
import useAuthStore from "./store/useAuthStore"
import useConfigStore from "./store/useConfigStore"

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
  const { setEndpoint } = useConfigStore()
  const setIsUserAuthenticated = useAuthStore((state) => state.setIsUserAuthenticated)
  const isUserAuthenticated = useAuthStore((state) => state.isUserAuthenticated)

  const queryClient = useMemo(() => new QueryClient(), [])

  useEffect(() => {
    setEndpoint(endpoint)
  }, [endpoint, setEndpoint])

  const oidc = useMemo<OIDCSession>(
    () => ({
      login: () => setIsUserAuthenticated(true),
      logout: () => setIsUserAuthenticated(false),
    }),
    [setIsUserAuthenticated]
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AsyncWorker consumerId={id} />
      <AppShell
        embedded={embedded}
        pageHeader={<Header isUserAuthenticated={isUserAuthenticated} logout={oidc.logout} />}
        topNavigation={isUserAuthenticated ? <TopNavigationBar /> : null}
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
      <App {...props} />
    </MessagesProvider>
  </AppShellProvider>
)

export default StyledApp
