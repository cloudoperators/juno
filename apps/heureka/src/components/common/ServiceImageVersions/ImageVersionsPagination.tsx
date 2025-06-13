/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { Stack, Pagination } from "@cloudoperators/juno-ui-components"
import { getNormalizedImageVersionsData } from "../../Services/utils"
import { GetServiceImageVersionsQuery } from "../../../generated/graphql"

type ImageVersionsPaginationProps = {
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
}

export const ImageVersionsPagination = ({ imageVersionsPromise }: ImageVersionsPaginationProps) => {
  const { data } = use(imageVersionsPromise)
  const { pages, pageNumber } = getNormalizedImageVersionsData(data)

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
