/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ObservableQuery } from "@apollo/client"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { RemediatedIssueDataRow } from "./RemediatedIssueDataRow"
import { getNormalizedRemediationsResponse } from "../../../../Services/utils"
import { getNormalizedImageVulnerabilitiesResponse } from "../../../../Services/utils"
import { GetRemediationsQuery } from "../../../../../generated/graphql"
import { GetImagesQuery } from "../../../../../generated/graphql"

const COLUMN_SPAN = 4

type RemediatedIssuesDataRowsProps = {
  issuesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>
  remediationsPromise: Promise<ObservableQuery.Result<GetRemediationsQuery>>
  selectedVulnerabilityName: string | null
  onSelectVulnerability: (vulnerabilityName: string | null) => void
}

export const RemediatedIssuesDataRows = ({
  issuesPromise,
  remediationsPromise,
  selectedVulnerabilityName,
  onSelectVulnerability,
}: RemediatedIssuesDataRowsProps) => {
  const issuesResult = use(issuesPromise)
  const remediationsResult = use(remediationsPromise)
  const { error: issuesError, data: issuesData } = issuesResult
  const { data: remediationsData } = remediationsResult
  const { vulnerabilities } = getNormalizedImageVulnerabilitiesResponse(issuesData as GetImagesQuery | undefined)
  // Keep remediations loaded for future remediation-actions panel
  getNormalizedRemediationsResponse(remediationsData as GetRemediationsQuery | undefined)
  if (issuesError) {
    return (
      <EmptyDataGridRow colSpan={COLUMN_SPAN}>
        Error loading remediated vulnerabilities: {issuesError.message}
      </EmptyDataGridRow>
    )
  }

  if (vulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={COLUMN_SPAN}>No remediated vulnerabilities found!</EmptyDataGridRow>
  }

  return (
    <>
      {vulnerabilities.map((issue) => (
        <RemediatedIssueDataRow
          key={issue.id}
          issue={issue}
          selected={selectedVulnerabilityName === issue.name}
          onSelect={() => onSelectVulnerability(issue.name)}
        />
      ))}
    </>
  )
}
