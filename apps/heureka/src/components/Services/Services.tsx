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
import IssuesCount from "./ServicesList/IssuesCount"
import { useFetchServices } from "./useFetchServices"
import { ServiceDetails } from "./ServiceDetails"
import { ServiceImageVersion } from "./common/ServiceImageVersions"

export type ServiceType = {
  id: string
  name: string
  issuesCount: {
    critical: number
    high: number
    medium: number
    low: number
    none: number
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
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [selectedImageVersion, setSelectedImageVersion] = useState<ServiceImageVersion | undefined>()
  const { serviceFilters } = useFetchServiceFilters()
  const { loading, error, services, currentPage, totalNumberOfPages, goToPage } = useFetchServices({
    filterSettings,
  })

  const handleShowDetails = (service: ServiceType, version?: ServiceImageVersion) => {
    setSelectedService(service)
    setSelectedImageVersion(version)
  }

  const handleBack = () => {
    setSelectedService(null)
    setSelectedImageVersion(undefined)
  }

  return (
    <>
      <Breadcrumb selectedService={selectedService?.name} onNavigateHome={handleBack} />
      {selectedService ? (
        <ServiceDetails
          selectedService={selectedService}
          selectedImageVersion={selectedImageVersion}
          onBack={handleBack}
          onShowDetails={handleShowDetails}
        />
      ) : (
        <>
          <Filters
            filters={serviceFilters}
            filterSettings={filterSettings}
            onFilterChange={setFilterSettings}
            searchInputPlaceholder="search term for services name"
          />
          <IssuesCount filterSettings={filterSettings} />
          <ServicesList
            loading={loading}
            error={error}
            services={services}
            currentPage={currentPage}
            totalNumberOfPages={totalNumberOfPages}
            goToPage={goToPage}
            onShowDetails={handleShowDetails}
          />
          <Panel />
        </>
      )}
    </>
  )
}
