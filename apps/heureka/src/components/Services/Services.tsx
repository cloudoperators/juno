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
import { InitialFilters } from "../../App"
import StatusBar from "./ServicesList/StatusBar"
import { useFetchServices } from "./useFetchServices"

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

const getInitialFilters = (initialFilters?: InitialFilters): FilterSettings => {
  const supportGroupFilters =
    initialFilters?.support_group?.map((sg) => ({ name: "supportGroupCcrn", value: sg })) ?? []
  return {
    selectedFilters: supportGroupFilters,
    searchTerm: "",
  }
}

type Props = {
  initialFilters?: InitialFilters
}

export const Services = ({ initialFilters }: Props) => {
  const [filterSettings, setFilterSettings] = useState<FilterSettings>(getInitialFilters(initialFilters))
  const { serviceFilters } = useFetchServiceFilters()
  const { loading, error, services, currentPage, totalNumberOfPages, goToPage } = useFetchServices({
    filterSettings,
  })

  return (
    <>
      <Breadcrumb />
      <Filters
        filters={serviceFilters}
        filterSettings={filterSettings}
        onFilterChange={setFilterSettings}
        searchInputPlaceholder="search term for services name"
      />
      <StatusBar filterSettings={filterSettings} />
      <ServicesList
        loading={loading}
        error={error}
        services={services}
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
        goToPage={goToPage}
      />
      <Panel />
    </>
  )
}
