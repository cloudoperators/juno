/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
// @ts-expect-error TS(2792): Cannot find module 'github-markdown-css/github-mar... Remove this comment to see the full error message
import markdownDark from "github-markdown-css/github-markdown-dark.css?inline"
// @ts-expect-error TS(2792): Cannot find module 'github-markdown-css/github-mar... Remove this comment to see the full error message
import markdownLight from "github-markdown-css/github-markdown-light.css?inline"
// @ts-expect-error TS(2792): Cannot find module 'github-markdown-css/github-mar... Remove this comment to see the full error message
import markdown from "github-markdown-css/github-markdown.css?inline"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import usePluginDefinitionsStore from "./plugindefinitions/store"
import AsyncWorker from "./plugins/components/AsyncWorker"
import StoreProvider, { useGlobalsActions } from "./plugins/components/StoreProvider"
// @ts-expect-error TS(2792): Cannot find module './styles.scss?inline'. Did you... Remove this comment to see the full error message
import styles from "./styles.scss?inline"

const URL_STATE_KEY = "plugin-admin"

const App = (props = {}) => {
  // @ts-ignore
  const { setUrlStateKey, initialize: initializeStore } = useGlobalsActions()
  const initializeStoreDefinitions = usePluginDefinitionsStore((state: any) => state.initialize)

  // @ts-expect-error TS(2339): Property 'apiEndpoint' does not exist on type '{}'... Remove this comment to see the full error message
  initializeStore(props.apiEndpoint, props.token, props.namespace)
  // @ts-expect-error TS(2339): Property 'apiEndpoint' does not exist on type '{}'... Remove this comment to see the full error message
  initializeStoreDefinitions(props.apiEndpoint, props.token, props.namespace)
  setUrlStateKey(URL_STATE_KEY)

  return (
    // @ts-expect-error TS(2339): Property 'embedded' does not exist on type '{}'.
    <AppShell pageHeader="Converged Cloud | Plugins" embedded={props.embedded === "true" || props.embedded === true}>
      <MessagesProvider>
        <AsyncWorker />
        {/* @ts-expect-error TS(2322): Type '{ props: {}; }' is not assignable to type 'I... Remove this comment to see the full error message */}
        <AppContent props={props} />
      </MessagesProvider>
    </AppShell>
  )
}

// the list styles are being reseted bei juno
// add them back so it works within a markdown container
const fixMarkdownLists = `
  ol {
      list-style: decimal;
  }
  ul {
    list-style: disc;
}
`

const StyledApp = (props: any) => {
  const theme = props.theme ? props.theme : "theme-dark"
  return (
    // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'any'.
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <style>{markdown.toString()}</style>
      <style>{theme === "theme-dark" ? markdownDark.toString() : markdownLight.toString()}</style>
      <style>{fixMarkdownLists}</style>
      <StoreProvider>
        <App {...props} />
      </StoreProvider>
    </AppShellProvider>
  )
}

export default StyledApp
