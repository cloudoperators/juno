/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Breadcrumb } from "../common/Breadcrumb"
import { Filters } from "../common/Filters"
import { ServicesList } from "./ServicesList"
import { Panel } from "../common/Panel"
import { FilterSettings } from "../common/Filters/types"
import { useFetchServiceFilters } from "./useFetchServiceFilters"

export type ServiceType = {
  id: string
  name: string
  issuesCount: {
    critical: number
    high: number
  }
  serviceDetails: {
    supportGroups: string[]
  }
  components: number
  remediationDate: string
  serviceOwners: string[]
}

const defaultFilterSettings = {
  selectedFilters: [],
  searchTerm: "",
}

export const Services = () => {
  const [filterSettings, setFilterSettings] = useState<FilterSettings>(defaultFilterSettings)
  const { serviceFilters } = useFetchServiceFilters()

  return (
    <div className="flex-1 flex flex-col overflow-hidden gap-5">
      <Breadcrumb />
      <Filters filters={serviceFilters} filterSettings={filterSettings} onFilterChange={setFilterSettings} />
      <ServicesList filterSettings={filterSettings} />
      <Panel />
    </div>
  )
}
