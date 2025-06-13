/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { Pagination, Stack } from "@cloudoperators/juno-ui-components"
import { useLoaderData } from "@tanstack/react-router"
import { getNormalizedData } from "../utils"

export const ServicesPagination = () => {
  const { servicesPromise } = useLoaderData({ from: "/services/" })
  const { data } = use(servicesPromise)
  const { pages, pageNumber } = getNormalizedData(data)

  return (
    <Stack distribution="end" className="mt-4">
      <Pagination
        variant="number"
        currentPage={pageNumber}
        onPressNext={() => {}}
        onPressPrevious={() => {}}
        pages={pages.length}
      />
    </Stack>
  )
}
