/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useLayoutEffect, useMemo } from "react"
import { oidcSession, mockedSession } from "oauth"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import styles from "./styles.scss"
import { AppShellProvider } from "juno-ui-components"
import AppContent from "./AppContent"
import { useActions, MessagesProvider } from "messages-provider"
import { useGlobalsActions, useAuthActions } from "./hooks/useStore"
import { fetchProxyInitDB } from "utils"
import db from "../db.json"

const App = (props) => {
  const { setData, setLogin, setLogout } = useAuthActions()
  const {
    setEndpoint,
    setDisabledCAs,
    setDocumentationLinks,
    setEmbedded,
    setMock,
  } = useGlobalsActions()
  const { addMessage } = useActions()

  const isMock = useMemo(
    () => props.isMock === true || props.isMock === "true",
    [props.isMock]
  )

  // setup the mock db.json
  useEffect(() => {
    if (isMock) {
      setMock(true)

      fetchProxyInitDB(db, {
        debug: true,
        rewriteRoutes: {
          "/(?:api/v1/)?(.*)/certificate/(.*)": "/$1/$2",
          "/(?:api/v1/)?(.*)/certificate": "/$1",
          "/(?:api/v1/)?(.*)": "/$1",
        },
        rewriteResponses: {
          POST: {
            "/(?:api/v1/)?(.*)/certificate": { certificate: "testCertificate" },
          },
        },
      })
    }
  }, [])

  // fetch the auth token and save the object globally
  // keep it in the app so the issuerurl and clientid have not to be saved on the state
  const oidc = React.useMemo(() => {
    // Load mockSession if props.mock is set true
    if (isMock) {
      return mockedSession({
        initialLogin: true,
        onUpdate: (data) => {
          setData(data)
        },
      })
    }
    if (
      !props?.issuerurl ||
      props?.issuerurl?.length <= 0 ||
      !props?.clientid ||
      props?.clientid?.length <= 0
    ) {
      addMessage({
        variant: "error",
        text: "Missing required data props for authentication",
      })
      return
    }

    return oidcSession({
      issuerURL: props.issuerurl,
      clientID: props.clientid,
      initialLogin: true,
      refresh: true,
      flowType: "code",
      onUpdate: (data) => {
        setData(data)
      },
    })
  }, [setData])

  useEffect(() => {
    if (!oidc?.login || !oidc?.logout) return
    setLogin(oidc.login)
    setLogout(oidc.logout)
  }, [oidc?.login, oidc?.logout])

  // on load application save the props to be used in oder components
  useLayoutEffect(() => {
    setEndpoint(isMock ? window.location.origin : props?.endpoint)
    if (props.disabledcas) setDisabledCAs(props.disabledcas)
    if (props.documentationlinks)
      setDocumentationLinks(props.documentationlinks)
    if (props.embedded === "true" || props.embedded === true) setEmbedded(true)
  }, [])

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      <style>{styles.toString()}</style>
      <MessagesProvider>
        <App {...props} />
      </MessagesProvider>
    </AppShellProvider>
  )
}

export default StyledApp
