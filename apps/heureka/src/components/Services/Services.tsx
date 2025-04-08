/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Breadcrumb } from "../common/Breadcrumb"
import { Filters } from "../common/Filters"
import { ServicesList } from "./ServicesList"
import { FilterSettings } from "../common/Filters/types"
import { useFetchServiceFilters } from "./useFetchServiceFilters"
import { InitialFilters } from "../../App"
import { useStore } from "../../store/StoreProvider"
import { IssuesCountsType } from "./useFetchServicesIssuesCounts"
import { AllServicesIssuesCount } from "./AllServicesIssuesCount"

export type ServiceType = {
  id: string
  name: string
  issuesCount: IssuesCountsType
  serviceDetails: {
    supportGroups: string[]
  }
  components: number
  remediationDate: string
  serviceOwners: string[]
}

const getInitialFilters = (initialFilters?: InitialFilters): FilterSettings => {
  const supportGroupFilters =
    initialFilters?.support_group?.map((sg) => ({ name: "supportGroupCcrn", value: sg })) ?? []
  return {
    selectedFilters: supportGroupFilters,
    searchTerm: "",
  }
}

export const Services = () => {
  const { initialFilters } = useStore()
  const { serviceFilters } = useFetchServiceFilters()
  const [filterSettings, setFilterSettings] = useState<FilterSettings>(getInitialFilters(initialFilters))

  return (
    <>
      <Breadcrumb />
      <>
        <Filters
          filters={serviceFilters}
          filterSettings={filterSettings}
          onFilterChange={setFilterSettings}
          searchInputPlaceholder="search term for services name"
        />
        <AllServicesIssuesCount filterSettings={filterSettings} />
        <ServicesList filterSettings={filterSettings} />
      </>
    </>
  )
}
