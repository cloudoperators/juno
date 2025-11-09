/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Stack, TabNavigation, TabNavigationItem } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"
import { useActivePredefinedFilter, usePredefinedFilters } from "../StoreProvider"
import SilenceScheduled from "../silences/SilenceScheduled"

const PredefinedFilters = () => {
  const navigate = useNavigate()
  const predefinedFilters = usePredefinedFilters()
  const activePredefinedFilter = useActivePredefinedFilter()

  const handleTabSelect = (item: React.ReactNode) => {
    if (typeof item === "string") {
      navigate({
        to: "/alerts",
        search: (prev) => ({
          ...prev,
          predefinedFilter: item,
        }),
      })
    }
  }

  return (
    <Stack>
      {renderPredefinedFilterTabs()}
      <div className="ml-auto">
        <SilenceScheduled />
      </div>
    </Stack>
  )

  function renderPredefinedFilterTabs(): React.ReactNode {
    return (
      predefinedFilters &&
      activePredefinedFilter && (
        <TabNavigation activeItem={activePredefinedFilter} onActiveItemChange={handleTabSelect}>
          {predefinedFilters?.map((filter: any) => (
            <TabNavigationItem key={filter.name} value={filter.name} label={filter.displayName} />
          ))}
        </TabNavigation>
      )
    )
  }
}

export default PredefinedFilters
