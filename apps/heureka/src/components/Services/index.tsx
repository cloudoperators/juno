/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { Breadcrumb } from "../common/Breadcrumb"
import { Filters } from "../common/Filters"
import { ServicesList } from "./ServicesList"
import { FilterSettings } from "../common/Filters/types"
import { useFetchServiceFilters } from "./useFetchServiceFilters"
import { InitialFilters } from "../../App"
import { useStore } from "../../store/StoreProvider"
import { AllServicesIssuesCount } from "./AllServicesIssuesCount"
import { useFetchServices } from "./useFetchServices"
import { useActions as useMessageActions } from "@cloudoperators/juno-messages-provider"

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
  const { addMessage, resetMessages } = useMessageActions()
  const [filterSettings, setFilterSettings] = useState<FilterSettings>(getInitialFilters(initialFilters))
  const { loading, error, services, servicesIssuesCount, currentPage, totalNumberOfPages, goToPage } = useFetchServices(
    {
      filterSettings,
    }
  )

  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: error,
      })
    } else {
      resetMessages()
    }
  }, [error])

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
        <AllServicesIssuesCount counts={servicesIssuesCount} loading={loading} error={error} />
        <ServicesList
          services={services}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalNumberOfPages={totalNumberOfPages}
          goToPage={goToPage}
        />
      </>
    </>
  )
}
