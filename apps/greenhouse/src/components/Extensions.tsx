/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, lazy, Suspense } from "react"
import { createRoot } from "react-dom/client"

import { useActions } from "@cloudoperators/juno-messages-provider"
import useApi from "../hooks/useApi"
import { usePlugin } from "./StoreProvider"
import { useAuth } from "./AuthProvider"
import { extensionResolvers, extensionVersions } from "../../extensoinsManifest"

const CorePlugin = ({ config, auth }: any) => {
  // load the app lazily from the core-apps folder
  let App = lazy(() => import(`./core-apps/${config.id}/App.tsx`))
  return (
    <Suspense fallback={"Loading..."}>
      <App {...config["props"]} auth={auth} />
    </Suspense>
  )
}

const Extension = ({ config }: any) => {
  const holder = useRef()

  useEffect(() => {
    if (!holder.current) return

    // @ts-expect-error TS(2339): Property 'innerHTML' does not exist on type 'never... Remove this comment to see the full error message
    holder.current.innerHTML = "...Loading"

    const loadExtension = async () => {
      if (config.url) {
        return await import(config.url)
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      } else if (extensionResolvers[config.name]) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        console.info("(greenhouse) extensions loading:", config.name, extensionVersions[config.name])
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        holder.current.innerHTML = `Error loading extension: ${error.message}`
      })
  }, [config])

  // @ts-expect-error TS(2322): Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
  return <div ref={holder}>Unknown</div>
}

function Plugin({ config, active, id }: any) {
  // @ts-expect-error TS(2339): Property 'data' does not exist on type 'unknown'.
  const { data: auth } = useAuth()
  const holder = useRef()
  const app = useRef()

  useEffect(() => {
    if (!holder.current) return
    // create the app if it doesn't exist yet
    if (!app.current) {
      // App is a core app or an extension
      const App = config.core ? CorePlugin : Extension
      // create the app dom element
      // @ts-expect-error TS(2322): Type 'HTMLDivElement' is not assignable to type 'u... Remove this comment to see the full error message
      app.current = document.createElement("div")
      // render the app into the dom element
      // @ts-expect-error TS(2345): Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
      createRoot(app.current).render(<App config={config} auth={auth} />)
    }
    // add or remove the app from the holder
    if (active) {
      //  add to holder
      // @ts-expect-error TS(2339): Property 'appendChild' does not exist on type 'nev... Remove this comment to see the full error message
      holder.current.appendChild(app.current)
    } else {
      // remove from holder
      // @ts-expect-error TS(2339): Property 'innerHTML' does not exist on type 'never... Remove this comment to see the full error message
      holder.current.innerHTML = ""
    }
  }, [active])

  // @ts-expect-error TS(2322): Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
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
      .then((kubernetesConfig: any) => {
        receiveConfig(kubernetesConfig)
      })
      .catch((error: any) => {
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
