/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useActivePlugin, useApiEndpoint, useAuthData } from "./StoreProvider"
import { lazy, Suspense } from "react"
const Clusters = lazy(() => import("./components/clusters/App"))
const Secrets = lazy(() => import("./components/secrets/App"))
const Plugins = lazy(() => import("./components/plugins/App"))
const Teams = lazy(() => import("./components/teams/App"))

// import Plugin from "./Plugin"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"

const AppContainer = () => {
  const apiEndpoint = useApiEndpoint()
  const auth = useAuthData()

  const active = useActivePlugin()
  let ActivePlugin
  switch (active) {
    case "clusters":
      ActivePlugin = Clusters
      break
    case "secrets":
      ActivePlugin = Secrets
      break
    case "plugins":
      ActivePlugin = Plugins
      break
    case "teams":
      ActivePlugin = Teams
      break
    default:
      ActivePlugin = Clusters
  }
  if (!auth?.JWT) return <div>Authenticating</div>

  return (
    <MessagesProvider>
      <Suspense fallback={"Loading..."}>
        <ActivePlugin
          apiEndpoint={apiEndpoint}
          token={auth?.JWT}
          namespace={auth?.parsed?.organizations?.[0]}
          expires={auth?.parsed.expiresAt}
          userGroups={auth?.parsed?.teams?.[0]}
        />
      </Suspense>
    </MessagesProvider>
  )
}

export default AppContainer
