/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const initialAlertsState = {
  enrichedLabels: ["status"], // labels that are enriched by the alert worker
}

const createAlertsSlice = () => ({
  alerts: {
    ...initialAlertsState,
    actions: {
      // filterItems: () => {
      //   let activePredefinedFilter = null
      //   if (get().filters.predefinedFilters && get().filters.activePredefinedFilter) {
      //     activePredefinedFilter = get().filters.predefinedFilters.find(
      //       (filter) => filter.name === get().filters.activePredefinedFilter
      //     )
      //   }
      //   const filteredRegions = new Set()
      //   // reduce active filters to only those that are not paused (this will make the filter logic more intuitive)
      //   const unpausedActiveFilters = Object.keys(get().filters.activeFilters).reduce((acc, key) => {
      //     // check all values of the current label key and filter out the paused ones, so that only unpaused values remain
      //     const filtered = get().filters.activeFilters[key].filter(
      //       (value) => !get().filters.pausedFilters[key]?.includes(value)
      //     )
      //     // if there are still values left after filtering out the paused ones, add them to the new filtered object
      //     if (filtered.length > 0) {
      //       acc[key] = filtered
      //     }
      //     return acc
      //   }, {})
      //   set(
      //     produce((state) => {
      //       state.alerts.itemsFiltered = state.alerts.items.filter((item) => {
      //         let visible = true
      //         // test if the item has a label "visibility" with value "hidden"
      //         // if it does, immediately return false, no further processing needed, these items are always filtered out
      //         if (item.labels.visibility === "hidden") {
      //           return false
      //         }
      //         // if the item is still visible test if item labels match the regex matchers of the active predefined filter
      //         // for each key and value pair in the filter matchers check if the key's value regex matches the item's label value for this key
      //         // if it doesn't match, set visible to false and break out of the loop
      //         activePredefinedFilter &&
      //           Object.entries(activePredefinedFilter.matchers).forEach(([key, value]) => {
      //             if (!new RegExp(value, "i").test(item.labels[key])) {
      //               visible = false
      //               return
      //             } else {
      //               // if the item is visible, add the item's region to the filtered regions set
      //               // this way the filtered Regions set will contain all regions that have at least one visible item
      //               filteredRegions.add(item.labels.region)
      //             }
      //           })
      //         // if the item is still visible after the predefined filters, check if it gets filtered out by the active filters
      //         // active filters is an object where the keys correspond to labels and the value is an array of all selected values to be filtered by
      //         // iterate over all (unpaused) active filter keys and then check if one of the selected values matches the item's value for this key
      //         if (visible) {
      //           Object.keys(unpausedActiveFilters).forEach((key) => {
      //             if (!unpausedActiveFilters[key].includes(item.labels[key])) {
      //               // if the item's label value for the current label isn't included in the active filters set visible to false, i.e. filter out item
      //               // this automatically leads to different values for the same label to be OR concatenated, while different labels are AND concatenated
      //               // so an item must have at least one of the selected values for each filtered label
      //               // we can break out of the loop here since we already know the item is not visible
      //               visible = false
      //               return
      //             }
      //           })
      //         }
      //         // if the item is still visible check if it gets filtered out by a search term
      //         // the search term is matched against the stringified item object via regex
      //         // if the item object does not contain the search term, it is not visible
      //         if (visible && state.filters.searchTerm && state.filters.searchTerm.length > 0) {
      //           const itemString = JSON.stringify(item)
      //           const re = new RegExp(state.filters.searchTerm, "i")
      //           if (!itemString.match(re)) {
      //             visible = false
      //           }
      //         }
      //         return visible
      //       })
      //     }),
      //     false,
      //     "alerts.filterItems"
      //   )
      //   get().alerts.actions.updateFilteredCounts()
      //   if (filteredRegions.size > 0) {
      //     get().alerts.actions.setRegionsFiltered(Array.from(filteredRegions).sort())
      //   } else {
      //     // if nothing was filtered out, set the filtered regions to all available regions
      //     get().alerts.actions.setRegionsFiltered(get().alerts.regions)
      //   }
      // },
    },
  },
})

export default createAlertsSlice
