/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ObservableQuery } from "@apollo/client"
import { GetImageVersionsQuery } from "../../../../../generated/graphql"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { IssuesDataRow } from "../../../ImageDetails/ImageIssuesList/IssuesDataRows/IssuesDataRow"
import { getNormalizedImageVersionDetailsResponse } from "../../../../Services/utils"

type ImageVersionIssuesDataRowsProps = {
  issuesPromise: Promise<ObservableQuery.Result<GetImageVersionsQuery>>
  service: string
  image: string
}

export const ImageVersionIssuesDataRows = ({ issuesPromise, service, image }: ImageVersionIssuesDataRowsProps) => {
  const { error, data } = use(issuesPromise)
  const { imageVersion: versionDetails } = getNormalizedImageVersionDetailsResponse(
    data as GetImageVersionsQuery | undefined
  )

  if (error) {
    return <EmptyDataGridRow colSpan={4}>Error loading vulnerabilities: {error.message}</EmptyDataGridRow>
  }

  if (!versionDetails || !versionDetails.vulnerabilities || versionDetails.vulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={4}>No vulnerabilities found! 🚀</EmptyDataGridRow>
  }

  return (
    <>
      {versionDetails.vulnerabilities.map((vulnerability) => (
        <IssuesDataRow
          key={vulnerability.id || vulnerability.name}
          issue={vulnerability}
          service={service}
          image={image}
          showFalsePositiveAction={false}
        />
      ))}
    </>
  )
}
