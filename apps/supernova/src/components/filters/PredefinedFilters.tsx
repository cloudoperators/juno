/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"

import { Stack, TabNavigation, TabNavigationItem } from "@cloudoperators/juno-ui-components"
import { useActivePredefinedFilter, useFilterActions, usePredefinedFilters } from "../StoreProvider"
import SilenceScheduled from "../silences/SilenceScheduled"

const PredefinedFilters = () => {
  // @ts-ignore
  const { setActivePredefinedFilter } = useFilterActions()
  const predefinedFilters = usePredefinedFilters()
  const activePredefinedFilter = useActivePredefinedFilter()

  const [selectedItem, setSelectedItem] = useState(activePredefinedFilter)

  const handleTabSelect = (item: any) => {
    setSelectedItem(item)
    setActivePredefinedFilter(item)
  }

  return (
    <Stack>
      {
        // @ts-ignore
        renderPredefinedFilterTabs()
      }
      <div className="ml-auto">
        <SilenceScheduled />
      </div>
    </Stack>
  )

  function renderPredefinedFilterTabs(): React.ReactNode {
    // @ts-ignore
    return (
      predefinedFilters &&
      selectedItem && (
        // @ts-ignore
        <TabNavigation activeItem={selectedItem} onActiveItemChange={handleTabSelect}>
          {// @ts-ignore
          predefinedFilters?.map((filter: any) => (
            <TabNavigationItem key={filter.name} value={filter.name} label={filter.displayName} />
          ))}
        </TabNavigation>
      )
    )
  }
}

export default PredefinedFilters
