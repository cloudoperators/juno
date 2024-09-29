/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import markdownDark from "github-markdown-css/github-markdown-dark.css"
import markdownLight from "github-markdown-css/github-markdown-light.css"
import markdown from "github-markdown-css/github-markdown.css"
import { AppShell, AppShellProvider } from "@cloudoperators/juno-ui-components"
import AppContent from "./AppContent"
import usePluginDefinitionsStore from "./plugindefinitions/store"
import AsyncWorker from "./plugins/components/AsyncWorker"
import StoreProvider, { useGlobalsActions } from "./plugins/components/StoreProvider"
import styles from "./styles.scss"

const URL_STATE_KEY = "plugin-admin"

const App = (props = {}) => {
  const { setUrlStateKey, initialize: initializeStore } = useGlobalsActions()
  const initializeStoreDefinitions = usePluginDefinitionsStore((state) => state.initialize)

  initializeStore(props.apiEndpoint, props.token, props.namespace)
  initializeStoreDefinitions(props.apiEndpoint, props.token, props.namespace)
  setUrlStateKey(URL_STATE_KEY)

  return (
    <AppShell pageHeader="Converged Cloud | Plugins" embedded={props.embedded === "true" || props.embedded === true}>
      <MessagesProvider>
        <AsyncWorker />
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

const StyledApp = (props) => {
  const theme = props.theme ? props.theme : "theme-dark"
  return (
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
