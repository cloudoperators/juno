/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { Pagination, Stack } from "@cloudoperators/juno-ui-components"
import { ApolloQueryResult } from "@apollo/client"
import { GetServicesQuery } from "../../../generated/graphql"
import { getNormalizedData } from "../utils"

type ServicesPaginationProps = {
  servicesPromise: Promise<ApolloQueryResult<GetServicesQuery>>
}

export const ServicesPagination = ({ servicesPromise }: ServicesPaginationProps) => {
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
