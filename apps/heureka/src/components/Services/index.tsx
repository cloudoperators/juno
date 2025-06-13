/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { Spinner } from "@cloudoperators/juno-ui-components/index"
import { ServicesList } from "./ServicesList"
import { AllServicesIssuesCount } from "./AllServicesIssuesCount"
import { ServicesFilters } from "./ServicesFilters"

export const Services = () => (
  <>
    <Suspense>
      <ServicesFilters />
    </Suspense>
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-full pt-10">
          <Spinner size="small" />
        </div>
      }
    >
      <AllServicesIssuesCount />
      <ServicesList />
    </Suspense>
  </>
)
