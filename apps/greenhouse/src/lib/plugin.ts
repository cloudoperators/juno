/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useStore, createStore } from "zustand"
import { devtools } from "zustand/middleware"
import produce from "immer"

export const NAV_TYPES = {
  APP: "app",
  MNG: "management",
}

const pluginConfig = {
  id: "",
  name: "",
  displayName: "",
  core: false,
  version: "latest",
  url: null,
  weight: 0,
  navType: NAV_TYPES.APP,
  navigable: true,
  props: {
    id: "",
  },
}

export const createPluginConfig = (config: any) => {
  // check required attrs
  if (!config?.id || !config?.name) {
    console.warn(`[greenhouse]::createPluginConfig: id and name are required. Skipping config: ${config}`)
    return null
  }

  // clone default pluginConfig
  const newConfig = { ...pluginConfig }
  // update just known attrs
  Object.keys(newConfig).forEach((key) => {
    // check agains type to update falsy booleans
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (typeof config?.[key] !== "undefined") newConfig[key] = config?.[key]
  })
  // check displayName
  if (!newConfig?.displayName) newConfig.displayName = newConfig.name
  // update id to the props attr
  newConfig.props = { ...newConfig.props, id: newConfig.id }

  return newConfig
}

const filterAndSortConfigByType = (config: any, navtype: any) => {
  if (typeof config !== "object" || config === null) return []
  return Object.values(config)
    .filter((a: any) => a.navigable)
    .filter((a: any) => a.navType === navtype)
    .sort((a: any, b: any) => {
      // sort by weight, then by name
      // if weight is not defined, app is sorted to the end
      const w1 = a.weight === undefined ? Infinity : a.weight
      const w2 = b.weight === undefined ? Infinity : b.weight
      let weightSort = w1 - w2
      weightSort = weightSort > 0 ? 1 : weightSort < 0 ? -1 : 0
      return weightSort || a.displayName.localeCompare(b.displayName)
    })
}

// if no active app already set will set the app (no mng apps) with the lowest weight
const findActiveAppId = (appConfig: any) => {
  if (!appConfig || appConfig.length === 0) return null

  // if there is no active app, then from appsConfig, get the app id of the app with the lowest weight and set it as active
  const minWeightApp = appConfig.reduce((previous: any, current: any) => {
    return current.weight < previous.weight ? current : previous
  })

  return [minWeightApp.id]
}

const Plugin = ({ environment, apiEndpoint, currentHost }: any) => {
  const store = createStore(
    devtools(() => ({
      active: [],
      config: {
        [`org-admin`]: createPluginConfig({
          id: "org-admin",
          core: true,
          name: "org-admin",
          displayName: "Organization",
          navType: NAV_TYPES.MNG,
          props: {
            assetsUrl: currentHost,
            apiEndpoint: apiEndpoint,
            environment: environment,
          },
        }),
      },
      appConfig: [], // kube app configs
      mngConfig: [], // management app configs
      isFetching: false,
      error: null,
      updatedAt: null,
    }))
  )
  const { getState, setState } = store

  const setIsFetching = (newState: any) => {
    setState(
      produce((state: any) => {
        state.isFetching = newState
      }),
      false,
      "plugin/setIsFetching"
    )
  }

  const setError = (error: any) =>
    setState(
      produce((state: any) => {
        state.error = error
      }),
      false,
      "plugin/setError"
    )

  const setActive = (active: any) =>
    setState(
      produce((state: any) => {
        if (!Array.isArray(active)) active = [active]
        // if the current state is the same as the new state, don't update
        if (JSON.stringify(state.active) === JSON.stringify(active)) return
        state.active = active
      }),
      false,
      "plugin/setActive"
    )

  const addConfig = (config: any) =>
    setState(
      produce((state: any) => {
        state.config = { ...getState().config, ...config }
      }),
      false,
      "plugin/addConfig"
    )

  const splitApps = () => {
    const allConfig = getState().config
    const appConfig = filterAndSortConfigByType(allConfig, NAV_TYPES.APP)
    setAppConfig(appConfig)
    const mngConfig = filterAndSortConfigByType(allConfig, NAV_TYPES.MNG)
    setMngConfig(mngConfig)
  }

  const setAppConfig = (appConfig: any) =>
    setState(
      produce((state: any) => {
        state.appConfig = appConfig
      }),
      false,
      "plugin/setAppConfig"
    )

  const setMngConfig = (mngConfig: any) =>
    setState(
      produce((state: any) => {
        state.mngConfig = mngConfig
      }),
      false,
      "plugin/setMngConfig"
    )

  return {
    active: () => useStore(store, (s: any) => s.active),
    config: () => useStore(store, (s: any) => s.config),
    appConfig: () => useStore(store, (s: any) => s.appConfig),
    mngConfig: () => useStore(store, (s: any) => s.mngConfig),
    isFetching: () => useStore(store, (s: any) => s.isFetching),
    error: () => useStore(store, (s: any) => s.error),
    updatedAt: () => useStore(store, (s: any) => s.updatedAt),
    setActive: setActive,
    requestConfig: () => {
      setIsFetching(true)
      setError(null)
    },
    receiveError: (error: any) => {
      setIsFetching(false)
      setError(error)
      // on api error split then the preconfigured
      splitApps()
    },
    receiveConfig: (kubeConfig: any) => {
      // add config and other states
      addConfig(kubeConfig)
      setIsFetching(false)
      setError(null)

      // split apps in mng and apps
      splitApps()

      // if no config found in the active apps set a new one but from the apps and not mng
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      if (Object.keys(getState().config).filter((key) => getState().active.includes(key)).length === 0) {
        const newActiveApp = findActiveAppId(getState().appConfig)
        setActive(newActiveApp)
      }
    },
  }
}

export default Plugin
