/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ObservableQuery } from "@apollo/client"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { IssuesDataRow } from "./IssuesDataRow"
import { getNormalizedImageVulnerabilitiesResponse } from "../../../../Services/utils"
import { GetImagesQuery } from "../../../../../generated/graphql"

type IssuesDataRowsProps = {
  issuesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>
  service: string
  image: string
  onFalsePositiveSuccess: (cveNumber: string) => void
  onFalsePositiveError: (error: Error, cveNumber: string) => void
}

export const IssuesDataRows = ({
  issuesPromise,
  service,
  image,
  onFalsePositiveSuccess,
  onFalsePositiveError,
}: IssuesDataRowsProps) => {
  const { error, data } = use(issuesPromise)
  const { vulnerabilities } = getNormalizedImageVulnerabilitiesResponse(data as GetImagesQuery | undefined)

  if (error) {
    return <EmptyDataGridRow colSpan={5}>Error loading vulnerabilities: {error.message}</EmptyDataGridRow>
  }

  if (vulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={5}>No vulnerabilities found! 🚀</EmptyDataGridRow>
  }

  return vulnerabilities
    .filter((vulnerability) => vulnerability && vulnerability.name)
    .map((vulnerability) => (
      <IssuesDataRow
        key={vulnerability.id || vulnerability.name}
        issue={vulnerability}
        service={service}
        image={image}
        onFalsePositiveSuccess={onFalsePositiveSuccess}
        onFalsePositiveError={onFalsePositiveError}
      />
    ))
}
