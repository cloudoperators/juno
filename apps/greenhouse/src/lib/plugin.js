/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useStore, createStore } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
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

export const createPluginConfig = (config) => {
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
    if (typeof config?.[key] !== "undefined") newConfig[key] = config?.[key]
  })
  // check displayName
  if (!newConfig?.displayName) newConfig.displayName = newConfig.name
  // update id to the props attr
  newConfig.props = { ...newConfig.props, id: newConfig.id }

  return newConfig
}

const filterAndSortConfigByType = (config, navtype) => {
  if (typeof config !== "object" || config === null) return []
  return Object.values(config)
    .filter((a) => a.navigable)
    .filter((a) => a.navType === navtype)
    .sort((a, b) => {
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
const findActiveAppId = (appConfig) => {
  if (!appConfig || appConfig.length === 0) return null

  // if there is no active app, then from appsConfig, get the app id of the app with the lowest weight and set it as active
  const minWeightApp = appConfig.reduce((previous, current) => {
    return current.weight < previous.weight ? current : previous
  })

  return [minWeightApp.id]
}

// url state manager
const GREENHOUSE_STATE_KEY = "greenhouse-dashboard"
const ACTIVE_APPS_KEY = "a"
const urlStateManager = registerConsumer(GREENHOUSE_STATE_KEY)

export const synchURL = {
  getItem: () => {
    // read from the url
    let active = urlStateManager.currentState()?.[ACTIVE_APPS_KEY]
    return { state: { active: [active] } }
  },
  setItem: (key, newValue) => {
    // update the url
    const newActiveApps = newValue?.state?.active?.join(",")
    if (urlStateManager.currentState()?.[ACTIVE_APPS_KEY] === newActiveApps) return
    urlStateManager.push({ [ACTIVE_APPS_KEY]: newActiveApps })
  },
  removeItem: () => {
    // remove any key from the url
    // since we only update the keys we don't need to remove anything
  },
}

const Plugin = ({ environment, apiEndpoint, currentHost }) => {
  const store = createStore(
    devtools(
      persist(
        () => ({
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
        }),
        {
          name: "plugin-state",
          storage: {
            getItem: synchURL.getItem,
            setItem: synchURL.setItem,
            removeItem: synchURL.removeItem,
          },
        }
      )
    )
  )
  const { getState, setState } = store

  const setIsFetching = (newState) => {
    setState(
      produce((state) => {
        state.isFetching = newState
      }),
      false,
      "plugin/setIsFetching"
    )
  }

  const setError = (error) =>
    setState(
      produce((state) => {
        state.error = error
      }),
      false,
      "plugin/setError"
    )

  const setActive = (active) =>
    setState(
      produce((state) => {
        if (!Array.isArray(active)) active = [active]
        // if the current state is the same as the new state, don't update
        if (JSON.stringify(state.active) === JSON.stringify(active)) return
        state.active = active
      }),
      false,
      "plugin/setActive"
    )

  const addConfig = (config) =>
    setState(
      produce((state) => {
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

  const setAppConfig = (appConfig) =>
    setState(
      produce((state) => {
        state.appConfig = appConfig
      }),
      false,
      "plugin/setAppConfig"
    )

  const setMngConfig = (mngConfig) =>
    setState(
      produce((state) => {
        state.mngConfig = mngConfig
      }),
      false,
      "plugin/setMngConfig"
    )

  return {
    active: () => useStore(store, (s) => s.active),
    config: () => useStore(store, (s) => s.config),
    appConfig: () => useStore(store, (s) => s.appConfig),
    mngConfig: () => useStore(store, (s) => s.mngConfig),
    isFetching: () => useStore(store, (s) => s.isFetching),
    error: () => useStore(store, (s) => s.error),
    updatedAt: () => useStore(store, (s) => s.updatedAt),
    setActive: setActive,
    requestConfig: () => {
      setIsFetching(true)
      setError(null)
    },
    receiveError: (error) => {
      setIsFetching(false)
      setError(error)
      // on api error split then the preconfigured
      splitApps()
    },
    receiveConfig: (kubeConfig) => {
      // add config and other states
      addConfig(kubeConfig)
      setIsFetching(false)
      setError(null)

      // split apps in mng and apps
      splitApps()

      // if no config found in the active apps set a new one but from the apps and not mng
      if (Object.keys(getState().config).filter((key) => getState().active.includes(key)).length === 0) {
        const newActiveApp = findActiveAppId(getState().appConfig)
        setActive(newActiveApp)
      }
    },
  }
}

export default Plugin
