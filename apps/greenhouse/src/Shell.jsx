/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import ShellLayout from "./components/layout/ShellLayout"
import Auth from "./components/Auth"
import styles from "./styles.scss?inline"
import { AppShellProvider } from "@cloudoperators/juno-ui-components"
import Extensions from "./components/Extensions"
import StoreProvider from "./components/StoreProvider"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { AuthProvider } from "./components/AuthProvider"

const Shell = () => {
  return (
    <ShellLayout>
      <Extensions />
    </ShellLayout>
  )
}

const StyledShell = (props) => {
  props = { ...props, currentHost: props.currentHost === "origin" ? window.location.origin : props.currentHost }

  return (
    <AppShellProvider>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <AuthProvider options={props}>
        <Auth
          clientId={props?.authClientId}
          issuerUrl={props?.authIssuerUrl}
          demoOrg={props?.demoOrg}
          mock={props?.mockAuth}
          demoUserToken={props.demoUserToken}
        >
          <StoreProvider options={props}>
            <MessagesProvider>
              <Shell {...props} />
            </MessagesProvider>
          </StoreProvider>
        </Auth>
      </AuthProvider>
    </AppShellProvider>
  )
}

export default StyledShell
