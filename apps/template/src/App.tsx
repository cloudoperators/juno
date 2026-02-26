/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider, Container } from "@cloudoperators/juno-ui-components"
import AppContent from "./components/AppContent"
import styles from "./styles.css?inline"

export type AppProps = {
  theme?: "theme-dark" | "theme-light"
  embedded?: string | boolean
  title?: string
  description?: string
}

const App = (props: AppProps) => {
  return (
    <AppShell
      pageHeader={props.title ? props.title : "Juno | App Template"}
      embedded={props.embedded === "true" || props.embedded === true}
    >
      <Container>{props.description ? <>{props.description}</> : <AppContent />}</Container>
    </AppShell>
  )
}

type StyledAppProps = AppProps

const StyledApp = (props: StyledAppProps) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      <style>{styles.toString()}</style>
      <App {...props} />
    </AppShellProvider>
  )
}

export default StyledApp
