/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { Pagination, Stack } from "@cloudoperators/juno-ui-components"
import { ApolloQueryResult } from "@apollo/client"
import { GetServiceImageVersionIssuesQuery } from "../../../../generated/graphql"
import { getNormalizedImageVersionIssues } from "../../../Services/utils"

type IssuesPaginationProps = {
  issuesPromise: Promise<ApolloQueryResult<GetServiceImageVersionIssuesQuery>>
}

export const IssuesPagination = ({ issuesPromise }: IssuesPaginationProps) => {
  const { error, data } = use(issuesPromise)
  const { pages, pageNumber } = getNormalizedImageVersionIssues(data)

  if (error) {
    return null
  }

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
