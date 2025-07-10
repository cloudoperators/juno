/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { Spinner } from "@cloudoperators/juno-ui-components/index"
import { VulnerabilitiesList } from "./VulnerabilitiesList"
import { VulnerabilitiesFilters } from "./VulnerabilitiesFilters"

export const Vulnerabilities = () => (
  <>
    <VulnerabilitiesFilters />
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-full pt-10">
          <Spinner size="small" />
        </div>
      }
    >
      <VulnerabilitiesList />
    </Suspense>
  </>
) 