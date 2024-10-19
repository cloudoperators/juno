/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, lazy, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { usePlugin } from "./StoreProvider.jsx"
import { useAuthData } from "./StoreProvider.jsx"
import { extensionResolvers } from "../../extensionsManifest.js"
import useApi from "../hooks/useApi.js"

const coreExtensions = {
  "org-admin": lazy(() => import(`./core-apps/org-admin/App.jsx`)),
}

const CoreExtension = ({ name, auth, ...props }) => {
  const App = coreExtensions[name]
  if (!App) return <div>Could not find {name} in core extensions</div>
  return (
    <Suspense fallback={"Loading..."}>
      <App {...props} auth={auth} />
    </Suspense>
  )
}

const ExternalExtension = ({ config }) => {
  const holder = useRef()

  useEffect(() => {
    // find the extension resolver in the extensionsManifest
    const resolvePromise = extensionResolvers[config.name]
    if (!resolvePromise) {
      console.debug(`Could not find ${config.id} extension in extensionsManifest`)
      return
    }
    holder.current.innerHTML = "...Loading"
    // resolve the promise and mount the app
    resolvePromise.then((app) => {
      app.mount(holder.current, { ...config, appProps: { ...config.props, embedded: true } })
    })
  }, [config])

  return <div ref={holder}></div>
}

function Extension({ config, active, id }) {
  const holder = useRef()
  const app = useRef()
  const auth = useAuthData()

  console.log()

  useEffect(() => {
    // extensions are apps with they own state
    // to load an extension once and show it when active
    // we create a app ref and render the extension component into it
    // this component adds the app to the holder when active
    // and removes it when inactive
    if (active) {
      if (!app.current) {
        app.current = document.createElement("div")
        const App = coreExtensions[config.name] ? (
          <CoreExtension name={config.name} config={config} auth={auth} />
        ) : (
          <ExternalExtension config={config} />
        )
        createRoot(app.current).render(App)
      }
      holder.current.appendChild(app.current)
    } else {
      holder.current.innerHTML = ""
    }
  }, [active])

  return <div id={id} ref={holder}></div>
}

export default function PluginContainer() {
  const { getPluginConfigs } = useApi()
  const requestConfig = usePlugin().requestConfig
  const receiveConfig = usePlugin().receiveConfig
  const receiveError = usePlugin().receiveError
  const isFetching = usePlugin().isFetching()
  let config = usePlugin().config()
  const activeApps = usePlugin().active()
  const { addMessage } = useActions()

  useEffect(() => {
    if (!getPluginConfigs) return
    requestConfig()

    // fetch configs from kubernetes
    getPluginConfigs()
      .then((kubernetesConfig) => {
        receiveConfig(kubernetesConfig)
      })
      .catch((error) => {
        // error fetching configs
        receiveError(error.message)
        addMessage({
          variant: "error",
          text: error.message,
        })
      })
  }, [getPluginConfigs])

  if (isFetching) return <div>Loading...</div>

  return Object.keys(config).map((id) => (
    <Extension key={id} id={id} config={config[id]} active={activeApps?.[0] === id} />
  ))
}
