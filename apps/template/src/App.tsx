/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppShell, AppShellProvider, Container } from "@cloudoperators/juno-ui-components"
import type { PluginProps } from "@cloudoperators/greenhouse-core"
import AppContent from "./components/AppContent"
import styles from "./styles.css?inline"

// `theme` and `embedded` come from the shared host↔plugin contract (`PluginProps`); the
// template-specific `title`/`description` are this app's own additions.
export interface AppProps extends PluginProps {
  title?: string
  description?: string
}

const App = (props: AppProps) => {
  return (
    <AppShell pageHeader={props.title ? props.title : "Juno | App Template"} embedded={props.embedded === true}>
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
