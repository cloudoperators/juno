/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import { useFilterActions } from "../StoreProvider"
import { humanizeString } from "../../lib/utils"

const FilterPills = ({ entityName, activeFilters }: any) => {
  // @ts-ignore
  const { removeActiveFilter } = useFilterActions()

  return (
    <Stack gap="2" wrap={true}>
      {Object.entries(activeFilters || {}).map(([key, values]) =>
        // @ts-ignore
        values.map((value: any) => (
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
