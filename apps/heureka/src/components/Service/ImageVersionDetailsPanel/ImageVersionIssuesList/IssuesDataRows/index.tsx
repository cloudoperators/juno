/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { IssuesDataRow } from "./IssuesDataRow"
import { getNormalizedImageVersionIssuesResponse } from "../../../../Services/utils"
import { GetServiceImageVersionIssuesQuery } from "../../../../../generated/graphql"

type IssuesDataRowsProps = {
  issuesPromise: Promise<ApolloQueryResult<GetServiceImageVersionIssuesQuery>>
}

export const IssuesDataRows = ({ issuesPromise }: IssuesDataRowsProps) => {
  const { error, data } = use(issuesPromise)
  const { issues } = getNormalizedImageVersionIssuesResponse(data)

  if (error) {
    return <EmptyDataGridRow colSpan={4}>Error loading vulnerabilities: {error.message}</EmptyDataGridRow>
  }

  if (issues.length === 0) {
    return <EmptyDataGridRow colSpan={4}>No vulnerabilities found! 🚀</EmptyDataGridRow>
  }

  return issues.map((issue) => <IssuesDataRow key={issue.name} issue={issue} />)
}
