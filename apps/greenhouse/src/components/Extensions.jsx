/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, lazy, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { useActions } from "@cloudoperators/juno-messages-provider"
import useApi from "../hooks/useApi"
import { usePlugin } from "./StoreProvider"
import { extensionResolvers, extensionVersions } from "../../extensoinsManifest"

const CorePlugin = ({ config, auth }) => {
  // load the app lazily from the core-apps folder
  let App = lazy(() => import(`./core-apps/${config.id}/App.jsx`))
  return (
    <Suspense fallback={"Loading..."}>
      <App {...config["props"]} auth={auth} />
    </Suspense>
  )
}

const Extension = ({ config }) => {
  const holder = useRef()

  useEffect(() => {
    if (!holder.current) return

    holder.current.innerHTML = "...Loading"

    const loadExtension = async () => {
      if (config.url) {
        return await import(config.url)
      } else if (extensionResolvers[config.name]) {
        console.info("(greenhouse) extensions loading:", config.name, extensionVersions[config.name])
        return await extensionResolvers[config.name]
      } else {
        throw new Error(`Extension ${config.name} not found`)
      }
    }

    loadExtension()
      .then((app) => {
        app.mount(holder.current, { props: { ...config.props, embedded: true } })
      })
      .catch((error) => {
        holder.current.innerHTML = `Error loading extension: ${error.message}`
      })
  }, [config])

  return <div ref={holder}>Unknown</div>
}

function Plugin({ config, active, id }) {
  const holder = useRef()
  const app = useRef()

  useEffect(() => {
    if (!holder.current) return
    // create the app if it doesn't exist yet
    if (!app.current) {
      // App is a core app or an extension
      const App = config.core ? CorePlugin : Extension
      // create the app dom element
      app.current = document.createElement("div")
      // render the app into the dom element
      createRoot(app.current).render(<App config={config} />)
    }
    // add or remove the app from the holder
    if (active) {
      //  add to holder
      holder.current.appendChild(app.current)
    } else {
      // remove from holder
      holder.current.innerHTML = ""
    }
  }, [active])

  return <div id={id} ref={holder}></div>
}

export default function Extensions() {
  const { getPluginConfigs } = useApi()
  const requestConfig = usePlugin().requestConfig
  const receiveConfig = usePlugin().receiveConfig
  const receiveError = usePlugin().receiveError
  const isFetching = usePlugin().isFetching()
  const config = usePlugin().config()
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
    <Plugin key={id} id={id} config={config[id]} active={activeApps?.[0] === id} />
  ))
}
