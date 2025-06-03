/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { useActions as useMessageActions } from "@cloudoperators/juno-messages-provider"
import { useNavigate } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { ServicesList } from "./ServicesList"
import { FilterSettings } from "../common/Filters/types"
import { useFetchServiceFilters } from "./useFetchServiceFilters"
import { AllServicesIssuesCount } from "./AllServicesIssuesCount"
import { useFetchServices } from "./useFetchServices"
import { getFiltersForUrl } from "./utils"

type ServicesProps = {
  defaultSelectService?: string
  defaultFilterSettings: FilterSettings
}

export const Services = ({ defaultSelectService, defaultFilterSettings }: ServicesProps) => {
  const navigate = useNavigate()
  const { serviceFilters } = useFetchServiceFilters()
  const { addMessage, resetMessages } = useMessageActions()
  const [filterSettings, setFilterSettings] = useState<FilterSettings>(defaultFilterSettings)
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

  const handleFilterChange = (updatedFilterSettings: FilterSettings) => {
    setFilterSettings((prev) => ({
      ...prev,
      selectedFilters: updatedFilterSettings.selectedFilters,
      searchTerm: updatedFilterSettings.searchTerm,
    }))

    navigate({
      to: "/services",
      search: {
        service: updatedFilterSettings.searchTerm,
        ...getFiltersForUrl(updatedFilterSettings),
      },
    })
  }

  return (
    <>
      <Filters
        filters={serviceFilters}
        filterSettings={filterSettings}
        onFilterChange={handleFilterChange}
        searchInputPlaceholder="search term for services name"
      />
      <AllServicesIssuesCount counts={servicesIssuesCount} loading={loading} error={error} />
      <ServicesList
        defaultSelectService={defaultSelectService}
        services={services}
        loading={loading}
        error={error}
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
        goToPage={goToPage}
      />
    </>
  )
}
