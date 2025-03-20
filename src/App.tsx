/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import styles from "./styles.scss?inline"
import { AppShellProvider, CodeBlock } from "@cloudoperators/juno-ui-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import AsyncWorker from "./components/AsyncWorker"
import { ErrorBoundary } from "react-error-boundary"
import { StoreProvider } from "./components/StoreProvider"
import PanelManager from "./components/shared/PanelManager"
import CustomAppShell from "./components/CustomAppShell"

function App(props = {}) {
  const preErrorClasses = `
  custom-error-pre
  border-theme-error
  border
  h-full
  w-full
  `

  const fallbackRender = ({ error }: any) => {
    return (
      <div className="w-1/2">
        <CodeBlock className={preErrorClasses} copy={false}>
          {error?.message || error?.toString() || "An error occurred"}
        </CodeBlock>
      </div>
    )
  }

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      // global default options that apply to all queries
      queries: {
        // staleTime: Infinity, // if you wish to keep data from the keys until reload
        // @ts-ignore
        keepPreviousData: true, // nice when paginating
        refetchOnWindowFocus: false, // default: true
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>
        <CustomAppShell>
          <ErrorBoundary fallbackRender={fallbackRender}>
            {/* @ts-expect-error TS(2322): Type '{ consumerId: any; }' is not assignable to t... Remove this comment to see the full error message */}
            <AsyncWorker consumerId={props.id} />
            <PanelManager />
          </ErrorBoundary>
        </CustomAppShell>
      </MessagesProvider>
    </QueryClientProvider>
  )
}

const StyledApp = (props: any) => {
  return (
    // @ts-expect-error TS(2322): Type '{ theme: string; }' is not assignable to type 'IntrinsicAttributes & { children?: ReactNode; }'. Property 'theme' does not exist on type 'IntrinsicAttributes & { children?: ReactNode; }'. Remove this comment to see the full error message
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>

      <MessagesProvider>
        <StoreProvider options={props}>
          <App {...props} />
        </StoreProvider>
      </MessagesProvider>
    </AppShellProvider>
  )
}

export default StyledApp
