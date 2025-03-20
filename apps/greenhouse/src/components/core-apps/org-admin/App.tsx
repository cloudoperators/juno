/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import {
  AppBody,
  AppShellProvider,
  MainContainer,
  MainContainerInner,
  ContentContainer,
} from "@cloudoperators/juno-ui-components"
import StoreProvider from "./StoreProvider"

import AppContent from "./AppContent"
// @ts-expect-error TS(2792): Cannot find module './styles.scss?inline'. Did you... Remove this comment to see the full error message
import styles from "./styles.scss?inline"
import OrgInfo from "./components/OrgInfo"
import SideNav from "./components/SideNav"
import AsyncWorker from "./components/AsyncWorker"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"

const App = (props = {}) => {
  return (
    <>
      <AsyncWorker />
      <AppBody data-testid="greenhouse-org-admin">
        <Messages className="mb-4" />
        {/* @ts-expect-error TS(2339): Property 'auth' does not exist on type '{}'. */}
        <OrgInfo auth={props.auth} apiEndpoint={props.apiEndpoint} />
        <MainContainer>
          <MainContainerInner fullWidth={true}>
            <SideNav />
            <ContentContainer>
              <AppContent {...props} />
            </ContentContainer>
          </MainContainerInner>
        </MainContainer>
      </AppBody>
    </>
  )
}

const StyledApp = (props: any) => {
  return (
    // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'any'.
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
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
