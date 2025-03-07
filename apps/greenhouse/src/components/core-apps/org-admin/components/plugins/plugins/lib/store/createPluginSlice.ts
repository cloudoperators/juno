/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateCreator } from "zustand"

interface PluginState {
  pluginConfig: any[] | null
  showDetailsFor: any | null
  searchTerm: string
}

type StatusConditionFilter = "True" | "False" | "Unknown" | "All"

interface PluginActions {
  setPluginConfig: (pluginConfig: any[]) => void
  addPluginConfigItems: (pluginConfigItems: any[]) => void
  modifyPluginConfigItems: (modifiedItems: any[]) => void
  deletePluginConfigItems: (pluginConfigItems: any[]) => void
  setShowDetailsFor: (showDetailsFor: any | null) => void
  setSearchTerm: (searchTerm: string) => void
  filterItems: () => void
}

export interface PluginSlice {
  plugin: PluginState & { actions: PluginActions }
}

function sortPluginConfigItems(items: any) {
  return items.sort((a: any, b: any) => {
    if (a?.spec?.disabled && !b?.spec?.disabled) {
      return 1
    } else if (!a?.spec?.disabled && b?.spec?.disabled) {
      return -1
    } else {
      return a?.metadata?.uid.localeCompare(b?.metadata?.uid)
    }
  })
}

function uniqPluginConfigItems(items: any) {
  return items.filter((item: any, index: any, array: any) => array.indexOf(item) === index)
}

const createPluginSlice: StateCreator<PluginSlice, [], [], PluginSlice> = (set, get, store) => ({
  plugin: {
    pluginConfig: null,
    filteredPluginConfigs: null,
    showDetailsFor: null,
    searchTerm: "",
    statusConditionFilter: "all",

    actions: {
      setPluginConfig: (pluginConfig: any) => {
        // Sort plugins by id alphabetically, but put disabled plugins at the end
        let sortedPlugins = pluginConfig.sort((a: any, b: any) => {
          if (a?.disabled && !b?.disabled) {
            return 1
          } else if (!a?.disabled && b?.disabled) {
            return -1
          } else {
            return a.id.localeCompare(b.id)
          }
        })
        set((state: any) => ({
          plugin: {
            ...state.plugin,
            pluginConfig: sortedPlugins,
          },
        }))
        get().plugin.actions.filterItems()
      },

      addPluginConfigItems: (pluginConfigItems: any) => {
        const items = (get().plugin.pluginConfig || []).slice()
        let newItems = uniqPluginConfigItems([...items, ...pluginConfigItems])
        newItems = sortPluginConfigItems(newItems)

        set((state: any) => ({
          plugin: {
            ...state.plugin,
            pluginConfig: newItems,
          },
        }))
        get().plugin.actions.filterItems()
      },
      modifyPluginConfigItems: (modifiedItems: any) => {
        const items = (get().plugin.pluginConfig || []).slice()

        const updatedItems = items.map((item: any) => {
          const matchingModifiedItem = modifiedItems.find(
            (modifiedItem: any) => modifiedItem.metadata.uid === item.metadata.uid
          )
          return matchingModifiedItem || item
        })

        let newItems = uniqPluginConfigItems(updatedItems)
        newItems = sortPluginConfigItems(updatedItems)

        set((state: any) => ({
          plugin: {
            ...state.plugin,
            pluginConfig: newItems,
          },
        }))
        get().plugin.actions.filterItems()
      },
      deletePluginConfigItems: (pluginConfigItems: any) => {
        const items = (get().plugin.pluginConfig || []).slice() // Get items

        let updatedItems = items.filter((item: any) => {
          return !pluginConfigItems.find((pci: any) => pci.metadata.uid === item.metadata.uid)
        })

        let newItems = uniqPluginConfigItems(updatedItems)
        newItems = sortPluginConfigItems(updatedItems)

        set((state: any) => ({
          plugin: {
            ...state.plugin,
            pluginConfig: newItems,
          },
        }))
        get().plugin.actions.filterItems()
      },

      setShowDetailsFor: (showDetailsFor: any) => {
        set((state: any) => ({
          plugin: { ...state.plugin, showDetailsFor: showDetailsFor },
        }))
      },

      setSearchTerm: (searchTerm: string) => {
        set((state: any) => ({
          plugin: { ...state.plugin, searchTerm: searchTerm },
        }))
        get().plugin.actions.filterItems()
      },

      setStatusConditionFilter: (statusConditionFilter: StatusConditionFilter) => {
        set((state: any) => ({
          plugin: { ...state.plugin, statusConditionFilter: statusConditionFilter },
        }))
        get().plugin.actions.filterItems()
      },

      filterItems: () => {
        let items = (get().plugin.pluginConfig || []).slice()
        const searchTerm = get().plugin.searchTerm

        if (searchTerm && items) {
          items = items.filter((item: any) => {
            const itemString = JSON.stringify(item)
            const re = new RegExp(searchTerm, "i")
            if (itemString.match(re)) {
              return true
            } else false
          })
        }
        set((state: any) => ({
          plugin: { ...state.plugin, filteredPluginConfigs: items },
        }))
      },
    },
  },
})

export default createPluginSlice
