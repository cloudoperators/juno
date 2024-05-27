/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider } from "juno-ui-components"
import StoreProvider from "./components/StoreProvider"
import AppContent from "./AppContent"
import styles from "./styles.scss"
import editorStyles from "@uiw/react-textarea-code-editor/dist.css"

const App = (props = {}) => {
  return (
    <AppShell
      pageHeader="Converged Cloud | Juno Playground"
      embedded={props.embedded === "true" || props.embedded === true}
    >
      <AppContent props={props} />
    </AppShell>
  )
}

const StyledApp = (props) => {
  const theme = props?.theme || "theme-dark"

  return (
    <AppShellProvider theme={theme}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <style>{editorStyles.toString()}</style>
      <StoreProvider options={{ ...props, theme: theme }}>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
