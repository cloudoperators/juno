/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useNavigate } from "@tanstack/react-router"
import { Pill } from "@cloudoperators/juno-ui-components"
import { useFiltersActions } from "../StoreProvider"
import { ACTIVE_FILTERS_PREFIX } from "../../constants"
import { addFilter as addFilterToUrlState } from "../../lib/urlStateUtils"

const FilterPill = ({ name, value, nameLabel, valueLabel }: any) => {
  // @ts-ignore
  const { add: addFilter } = useFiltersActions()
  const navigate = useNavigate()

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Pill
        pillKey={name}
        pillKeyLabel={nameLabel || name}
        pillValue={value}
        pillValueLabel={valueLabel || value}
        onClick={() => {
          const filterName = name === "service" ? `check:${name}` : name
          addFilter(filterName, value)
          // add filter to URL state
          navigate({
            to: "/violations",
            search: (prev) => addFilterToUrlState({ ...prev }, `${ACTIVE_FILTERS_PREFIX}${filterName}`, value),
          })
        }}
      />
    </div>
  )
}

export default FilterPill
