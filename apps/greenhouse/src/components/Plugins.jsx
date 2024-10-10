/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, lazy, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { useActions } from "@cloudoperators/juno-messages-provider"
import useApi from "../hooks/useApi"
import { usePlugin } from "../components/StoreProvider"
import { mount } from "../lib/appLoader"
import { useAuthData } from "../components/StoreProvider"

const CorePlugin = ({ config, auth }) => {
  //const auth = useAuthData()
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
    mount(holder.current, {
      ...config,
      appProps: { ...config.props, embedded: true },
    })
  }, [config])

  return <div ref={holder}>Unknown</div>
}

function Plugin({ config, active, id }) {
  const holder = useRef()
  const app = useRef()
  const auth = useAuthData()

  useEffect(() => {
    if (!holder.current) return
    // create the app if it doesn't exist yet
    if (!app.current) {
      // App is a core app or an extension
      const App = config.core ? CorePlugin : Extension
      // create the app dom element
      app.current = document.createElement("div")
      // render the app into the dom element
      createRoot(app.current).render(<App config={config} auth={auth} />)
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

export default function PluginContainer() {
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
