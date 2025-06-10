/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { Spinner } from "@cloudoperators/juno-ui-components/index"
import { ApolloQueryResult } from "@apollo/client"
import { ServicesList } from "./ServicesList"
import { FilterSettings } from "../common/Filters/types"
import { AllServicesIssuesCount } from "./AllServicesIssuesCount"
import { GetServiceFiltersQuery, GetServicesQuery } from "../../generated/graphql"
import { ServicesFilters } from "./ServicesFilters"

type ServicesProps = {
  filterSettings: FilterSettings
  selectedService?: string
  servicesPromise: Promise<ApolloQueryResult<GetServicesQuery>>
  filtersPromise: Promise<ApolloQueryResult<GetServiceFiltersQuery>>
}

export const Services = ({ filtersPromise, filterSettings, selectedService, servicesPromise }: ServicesProps) => (
  <>
    <Suspense>
      <ServicesFilters filterSettings={filterSettings} filtersPromise={filtersPromise} />
    </Suspense>
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-full pt-10">
          <Spinner size="small" />
        </div>
      }
    >
      <AllServicesIssuesCount servicesPromise={servicesPromise} />
      <ServicesList servicesPromise={servicesPromise} selectedService={selectedService} />
    </Suspense>
  </>
)
