/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import styles from "../styles.scss"
import { AppShell, AppShellProvider } from "juno-ui-components"
import { useTheme } from "./StoreProvider"

export default ({ children }) => {
  const theme = useTheme()
  return (
    <AppShellProvider theme={theme}>
      <style>{styles.toString()}</style>
      <AppShell pageHeader="Converged Cloud | Playground" embedded={true}>
        {children}
      </AppShell>
    </AppShellProvider>
  )
}
