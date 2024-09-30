/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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
import styles from "./styles.scss"
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

const StyledApp = (props) => {
  return (
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
