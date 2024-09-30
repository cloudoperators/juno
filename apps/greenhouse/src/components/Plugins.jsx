// /*
//  * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React from "react"
// import Plugin from "./Plugin"
// import { usePlugin, useGlobalsEnvironment } from "../components/StoreProvider"
// import useApi from "../hooks/useApi"
// import { useLayoutEffect } from "react"
// import { parseError } from "../lib/helpers"
// import { useActions, MessagesProvider } from "@cloudoperators/juno-messages-provider"

// const PluginContainer = () => {
//   const { getPluginConfigs } = useApi()
//   const environment = useGlobalsEnvironment()
//   const config = usePlugin().config()
//   const isFetching = usePlugin().isFetching()
//   const { addMessage } = useActions()

//   // prevent to load a plugin before the config is fetched to avoid rerendering do tue the default plugin greenhouse-mng
//   const [displayPlugin, setDisplayPlugin] = React.useState(false)

//   const requestConfig = usePlugin().requestConfig
//   const receiveConfig = usePlugin().receiveConfig
//   const receiveError = usePlugin().receiveError

//   const availableAppIds = React.useMemo(() => Object.keys(config), [config])

//   useLayoutEffect(() => {
//     if (!getPluginConfigs) return
//     requestConfig()

//     // fetch configs from kubernetes
//     getPluginConfigs()
//       .then((kubernetesConfig) => {
//         receiveConfig(kubernetesConfig)
//       })
//       .catch((error) => {
//         // error fetching configs
//         receiveError(error.message)
//         addMessage({
//           variant: "error",
//           text: parseError(error),
//         })
//       })
//       .finally(() => {
//         setDisplayPlugin(true)
//       })
//   }, [getPluginConfigs, environment])

//   return (
//     <>
//       {displayPlugin &&
//         availableAppIds.length > 0 &&
//         availableAppIds.map((id, i) => (
//           <MessagesProvider key={i}>
//             <Plugin id={id} />
//           </MessagesProvider>
//         ))}
//       {!isFetching && !displayPlugin && availableAppIds.length <= 0 && "No plugins available."}
//     </>
//   )
// }

// export default PluginContainer

import React, { useEffect, useRef, lazy, Suspense } from "react"
import useApi from "../hooks/useApi"
import { usePlugin } from "../components/StoreProvider"
import { mount } from "../lib/appLoader"
import { useAuthData } from "../components/StoreProvider"

const CorePlugin = ({ config }) => {
  const auth = useAuthData()
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

export default function PluginContainer() {
  const { getPluginConfigs } = useApi()
  const requestConfig = usePlugin().requestConfig
  const receiveConfig = usePlugin().receiveConfig
  const receiveError = usePlugin().receiveError
  const config = usePlugin().config()
  const isFetching = usePlugin().isFetching()
  const activeApps = usePlugin().active()

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
          text: parseError(error),
        })
      })
  }, [getPluginConfigs])

  if (isFetching) return <div>Loading...</div>

  const activeConfig = activeApps?.map((id) => config[id])?.[0]

  if (!activeConfig) return <div>No active plugin</div>

  return activeConfig?.core ? <CorePlugin config={activeConfig} /> : <Extension config={activeConfig} />
}
