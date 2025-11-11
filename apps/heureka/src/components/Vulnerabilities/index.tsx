/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { VulnerabilitiesList } from "./VulnerabilitiesList"
import { VulnerabilitiesFilters } from "./VulnerabilitiesFilters"
import { AllVulnerabilitiesCount } from "./AllVulnerabilitiesCount"
import { ErrorBoundary } from "../common/ErrorBoundary"

export const Vulnerabilities = () => (
  <>
    <VulnerabilitiesFilters />
    <ErrorBoundary>
      <AllVulnerabilitiesCount />
      <VulnerabilitiesList />
    </ErrorBoundary>
  </>
)
