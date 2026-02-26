/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ObservableQuery } from "@apollo/client"
import { Message, Stack } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { RemediatedIssueDataRow } from "./RemediatedIssueDataRow"
import { getNormalizedImageVulnerabilitiesResponse } from "../../../../Services/utils"
import { GetRemediationsQuery, GetImagesQuery } from "../../../../../generated/graphql"

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
  const { error: remediationsError } = remediationsResult
  const { vulnerabilities } = getNormalizedImageVulnerabilitiesResponse(issuesData as GetImagesQuery | undefined)
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
      {remediationsError && (
        <EmptyDataGridRow colSpan={COLUMN_SPAN}>
          <Stack direction="vertical" gap="2">
            <Message
              variant="error"
              text={`Remediation history could not be loaded: ${remediationsError.message}. You can try opening the panel again.`}
            />
          </Stack>
        </EmptyDataGridRow>
      )}
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
