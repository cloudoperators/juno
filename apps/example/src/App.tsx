/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"

import useAuthStore from "./store/useAuthStore"
import useConfigStore from "./store/useConfigStore"
import AsyncWorker from "./components/AsyncWorker"
import Footer from "./components/app-shell/Footer"
import Content from "./components/app-shell/Content"
import Header from "./components/app-shell/header/Header"
import TopNavigationBar from "./components/app-shell/Navigation"

// @ts-ignore
import styles from "./styles.scss?inline"

interface AppProps {
  endpoint?: string
  id?: string
}

const App: React.FC<AppProps> = ({ endpoint = "", id = "" }) => {
  const { setEndpoint } = useConfigStore()
  const isUserAuthenticated = useAuthStore((state) => state.isUserAuthenticated)

  const queryClient = useMemo(() => new QueryClient(), [])

  useEffect(() => {
    setEndpoint(endpoint)
  }, [endpoint, setEndpoint])

  return (
    <QueryClientProvider client={queryClient}>
      <AsyncWorker consumerId={id} />
      <AppShell
        pageHeader={<Header />}
        topNavigation={isUserAuthenticated ? <TopNavigationBar /> : null}
        pageFooter={<Footer />}
      >
        <Content />
      </AppShell>
    </QueryClientProvider>
  )
}

const StyledApp: React.FC<AppProps> = (props) => (
  <AppShellProvider>
    {/* eslint-disable-next-line */}
    <style>{styles.toString()}</style>
    <MessagesProvider>
      <App {...props} />
    </MessagesProvider>
  </AppShellProvider>
)

export default StyledApp
