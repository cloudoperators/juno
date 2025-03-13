/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateCreator } from "zustand"
import { getStatusCondition } from "../../hooks/helper"

interface PluginState {
  pluginConfig: any[] | null
  filteredPluginConfigs: any[] | null
  showDetailsFor: any | null
  searchTerm: string
  statusConditionFilter: StatusConditionFilter
  labelValuesFilters: LabelValuesFilter[] | undefined
}

export type StatusConditionFilter = "True" | "False" | "Unknown" | "All"
export type LabelValueFilter = { label: string; value: string } | undefined
export type LabelValuesFilter = { label: string; value: string[] } | undefined

interface PluginActions {
  setPluginConfig: (pluginConfig: any[]) => void
  addPluginConfigItems: (pluginConfigItems: any[]) => void
  modifyPluginConfigItems: (modifiedItems: any[]) => void
  deletePluginConfigItems: (pluginConfigItems: any[]) => void
  setShowDetailsFor: (showDetailsFor: any | null) => void
  setSearchTerm: (searchTerm: string) => void
  setStatusConditionFilter: (statusConditionFilter: StatusConditionFilter) => void
  addLabelValueFilter: (labelValueFilter: LabelValueFilter) => void
  removeLabelValueFilter: (labelValueFilter: LabelValueFilter) => void
  filterItems: () => void
}

export interface PluginSlice {
  plugin: PluginState & { actions: PluginActions }
}

function sortPluginConfigItems(items: any) {
  return items.sort((a: any, b: any) => {
    // First, sort by `disabled` status
    if (a?.spec?.disabled && !b?.spec?.disabled) {
      return 1
    } else if (!a?.spec?.disabled && b?.spec?.disabled) {
      return -1
    }

    // Then, sort by displayName or metadata.name
    const nameA = a?.spec?.displayName || a?.metadata?.name || ""
    const nameB = b?.spec?.displayName || b?.metadata?.name || ""

    return nameA.localeCompare(nameB)
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
    statusConditionFilter: "All",
    labelValuesFilters: undefined,

    actions: {
      setPluginConfig: (pluginConfig: any) => {
        // Sort plugins by id alphabetically, but put disabled plugins at the end
        let sortedPlugins = sortPluginConfigItems(pluginConfig)
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

      addLabelValueFilter: (labelValueFilter: LabelValueFilter) => {
        if (!labelValueFilter) return

        set((state: any) => {
          const existingFilters = state.plugin.labelValuesFilters || []

          // Check if the label already exists
          const existingFilterIndex = existingFilters.findIndex(
            (f: LabelValuesFilter) => f?.label === labelValueFilter.label
          )

          let updatedFilters

          if (existingFilterIndex !== -1) {
            // Label exists → Add unique value
            updatedFilters = [...existingFilters]
            updatedFilters[existingFilterIndex] = {
              label: labelValueFilter.label,
              value: Array.from(new Set([...updatedFilters[existingFilterIndex].value, labelValueFilter.value])), // Ensure uniqueness
            }
          } else {
            // Label does not exist → Add new entry
            updatedFilters = [...existingFilters, { label: labelValueFilter.label, value: [labelValueFilter.value] }]
          }

          return {
            plugin: {
              ...state.plugin,
              labelValuesFilters: updatedFilters,
            },
          }
        })

        get().plugin.actions.filterItems()
      },

      removeLabelValueFilter: (labelValueFilter: LabelValueFilter) => {
        if (!labelValueFilter) return
        set((state: any) => {
          const existingFilters = state.plugin.labelValuesFilters || []
          const selectedLabelValues = existingFilters.find(
            (filter: LabelValuesFilter) => filter?.label === labelValueFilter.label
          )

          const filteredArray = selectedLabelValues.value.filter((item: string) => item !== labelValueFilter.value)

          let updatedFilters

          if (filteredArray.length === 0) {
            updatedFilters = existingFilters.filter(
              (filter: LabelValuesFilter) => filter?.label !== labelValueFilter.label
            )
          } else {
            updatedFilters = existingFilters.map((filter: LabelValuesFilter) =>
              filter?.label === labelValueFilter.label ? { ...filter, value: filteredArray } : filter
            )
          }

          return {
            plugin: {
              ...state.plugin,
              labelValuesFilters: updatedFilters,
            },
          }
        })
        get().plugin.actions.filterItems()
      },

      filterItems: () => {
        let items = (get().plugin.pluginConfig || []).slice()
        const searchTerm = get().plugin.searchTerm
        const statusConditionFilter = get().plugin.statusConditionFilter
        const labelValuesFilters = get().plugin.labelValuesFilters

        // Filter StatusCondition
        if (statusConditionFilter && statusConditionFilter != "All" && items) {
          items = items.filter((item: any) => {
            if (getStatusCondition(item) == statusConditionFilter) {
              return true
            } else {
              return false
            }
          })
        }

        // Filter by LabelValueFilter
        if (labelValuesFilters?.length && items) {
          items = items.filter((item: any) => {
            const labels = item.metadata?.labels || {}

            // Check if at least one filter matches
            return labelValuesFilters.every(
              (filter) => filter && filter.value.some((val) => labels[filter.label] === val)
            )
          })
        }

        // Filter SearchTerm
        if (searchTerm && items) {
          items = items.filter((item: any) => {
            const itemString = JSON.stringify(item)
            const re = new RegExp(searchTerm, "i")
            if (itemString.match(re)) {
              return true
            } else return false
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
