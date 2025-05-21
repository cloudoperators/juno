/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"

const App = (props = {}) => {
  // Store initialization and other logic can be added here if needed
  return (
    // @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'.
    <AppShell embedded={props.embedded === "true" || props.embedded === true}>
      <AppContent />
    </AppShell>
  )
}

const StyledApp = (props: any) => {
  return (
    // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'any'.
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      <App {...props} />
    </AppShellProvider>
  )
}

export default StyledApp
