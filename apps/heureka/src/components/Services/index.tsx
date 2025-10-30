/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ServicesList } from "./ServicesList"
import { AllServicesIssuesCount } from "./AllServicesIssuesCount"
import { ServicesFilters } from "./ServicesFilters"
import { ErrorBoundary } from "../common/ErrorBoundary"

export const Services = () => (
  <>
    <ServicesFilters />
    <ErrorBoundary>
      <AllServicesIssuesCount />
      <ServicesList />
    </ErrorBoundary>
  </>
)
