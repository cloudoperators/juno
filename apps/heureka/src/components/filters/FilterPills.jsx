/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import {
  useIssueMatchesActiveFilters,
  useServiceActiveFilters,
  useComponentActiveFilters,
  useFilterActions,
} from "../../hooks/useAppStore"
import { humanizeString } from "../../lib/utils"

const entityHooks = {
  IssueMatches: useIssueMatchesActiveFilters,
  Services: useServiceActiveFilters,
  Components: useComponentActiveFilters,
}

const FilterPills = ({ entityName }) => {
  // Use a fallback function if entity is undefined or doesn't exist in entityHooks
  const useActiveFiltersHook = entityHooks?.[entityName] || (() => ({}))

  // Safely call the hook and get active filters
  const activeFilters = useActiveFiltersHook()
  const { removeActiveFilter } = useFilterActions()

  return (
    <Stack gap="2" wrap={true}>
      {Object.entries(activeFilters || {}).map(([key, values]) =>
        values.map((value) => (
          <Pill
            pillKey={humanizeString(key)}
            pillValue={value}
            closeable
            onClose={() => removeActiveFilter(entityName, key, value)}
            key={`${key}:${value}`}
          />
        ))
      )}
    </Stack>
  )
}

export default FilterPills
