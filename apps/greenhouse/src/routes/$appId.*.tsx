/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react"
import { createFileRoute } from "@tanstack/react-router"
import * as supernova from "@cloudoperators/juno-app-supernova"
import * as doop from "@cloudoperators/juno-app-doop"
import * as heureka from "@cloudoperators/juno-app-heureka"
import { usePlugin } from "../components/StoreProvider"
import { useAuth } from "../components/AuthProvider"

export const Route = createFileRoute("/$appId/*")({
  component: RouteComponent,
})

const getApp = (appName: string) => {
  switch (appName) {
    case "supernova":
      return supernova
    case "doop":
      return doop
    case "heureka":
      return heureka
    default:
      return null
  }
}

function RouteComponent() {
  const appContainerRef = useRef<HTMLDivElement>(null)
  const config = usePlugin().config()
  // @ts-expect-error TS(2339): Property 'data' does not exist on type 'unknown'.
  const { data: auth } = useAuth()
  const { appId } = Route.useParams()
  const appConfig = config[appId]

  if (!appConfig) {
    return null
  }

  const app = getApp(appConfig.name)

  useEffect(() => {
    if (!app || !appContainerRef.current) {
      return
    }

    app.mount(appContainerRef.current, {
      props: {
        ...appConfig.props,
        embedded: true,
        token: auth?.JWT,
        basePath: `/${appConfig.id}`,
      },
    })
    return () => {
      // Unmount the app when the component is unmounted
      app.unmount()
    }
  }, [appConfig])

  // Only render if AppComponent is not null
  return <div key={appId} ref={appContainerRef}></div>
}
