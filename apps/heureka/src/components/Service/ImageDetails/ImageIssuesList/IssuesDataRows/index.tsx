/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ObservableQuery } from "@apollo/client"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { IssuesDataRow } from "./IssuesDataRow"
import { getNormalizedImageVulnerabilitiesResponse } from "../../../../Services/utils"
import { GetImagesQuery, GetRemediationsQuery } from "../../../../../generated/graphql"

type IssuesDataRowsProps = {
  issuesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>
  remediationsPromise: Promise<ObservableQuery.Result<GetRemediationsQuery>>
  service: string
  image: string
  onFalsePositiveSuccess: (cveNumber: string) => void | Promise<void>
}

export const IssuesDataRows = ({
  issuesPromise,
  remediationsPromise,
  service,
  image,
  onFalsePositiveSuccess,
}: IssuesDataRowsProps) => {
  const { error, data } = use(issuesPromise)
  const remediationsResult = use(remediationsPromise)
  const { vulnerabilities } = getNormalizedImageVulnerabilitiesResponse(data as GetImagesQuery | undefined)

  // CVEs with a remediation record were marked as false positive — hide them immediately
  // so the Active tab reflects the change without waiting for the backend to update the status.
  const remediatedCveNames = new Set(
    remediationsResult.data?.Remediations?.edges?.map((e) => e?.node?.vulnerability).filter(Boolean) ?? []
  )

  if (error) {
    return <EmptyDataGridRow colSpan={5}>Error loading vulnerabilities: {error.message}</EmptyDataGridRow>
  }

  const activeVulnerabilities = vulnerabilities.filter((v) => v?.name && !remediatedCveNames.has(v.name))

  if (activeVulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={5}>No vulnerabilities found! 🚀</EmptyDataGridRow>
  }

  return activeVulnerabilities.map((vulnerability) => (
    <IssuesDataRow
      key={vulnerability.id || vulnerability.name}
      issue={vulnerability}
      service={service}
      image={image}
      onFalsePositiveSuccess={onFalsePositiveSuccess}
    />
  ))
}
