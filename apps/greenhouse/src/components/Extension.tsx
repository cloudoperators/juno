/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect, useRef } from "react"
import { useRouter } from "@tanstack/react-router"
import * as supernova from "@cloudoperators/juno-app-supernova"
import * as doop from "@cloudoperators/juno-app-doop"
import * as heureka from "@cloudoperators/juno-app-heureka"
import * as admin from "../components/core-apps/org-admin"
import { AppProps } from "../Shell"

const getApp = (appName: string) => {
  switch (appName) {
    case "supernova":
      return supernova
    case "doop":
      return doop
    case "heureka":
      return heureka
    case "org-admin":
      return admin
    default:
      return null
  }
}

type ExtensionProps = {
  id: string
  config: any
  auth: any
  appProps: AppProps
}

function Extension({ id, config, auth, appProps }: ExtensionProps) {
  const router = useRouter()
  const appContainerRef = useRef<HTMLDivElement>(null)
  const app = getApp(config.name)

  useEffect(() => {
    if (!app || !appContainerRef.current) {
      return
    }

    app.mount(appContainerRef.current, {
      props: {
        ...config.props,
        ...(!config.core
          ? {
              embedded: true,
              token: auth?.JWT,
              basePath: `${router.basepath === "/" ? "" : router.basepath}/${config.id}`,
              enableHashedRouting: appProps?.enableHashedRouting || false,
            }
          : { auth: auth }),
      },
    })
    return () => {
      app.unmount() // Unmount the app when the component is unmounted
    }
  }, [config])

  // Only render if AppComponent is not null
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div key={id} ref={appContainerRef}></div>
    </Suspense>
  )
}

export default Extension
