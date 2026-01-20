/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ObservableQuery } from "@apollo/client"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { RemediatedIssueDataRow } from "./RemediatedIssueDataRow"
import { getNormalizedRemediationsResponse } from "../../../../Services/utils"
import { GetRemediationsQuery } from "../../../../../generated/graphql"
import { useRouteContext } from "@tanstack/react-router"
import { deleteRemediation } from "../../../../../api/deleteRemediation"

type RemediatedIssuesDataRowsProps = {
  remediationsPromise: Promise<ObservableQuery.Result<GetRemediationsQuery>>
}

export const RemediatedIssuesDataRows = ({ remediationsPromise }: RemediatedIssuesDataRowsProps) => {
  const { error, data } = use(remediationsPromise)
  const { remediatedVulnerabilities } = getNormalizedRemediationsResponse(data as GetRemediationsQuery | undefined)
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })

  const handleRevert = async (remediationId: string) => {
    try {
      await deleteRemediation({ apiClient, remediationId })
      // Invalidate queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["remediations"] })
      queryClient.invalidateQueries({ queryKey: ["images"] })
    } catch (error) {
      console.error("Failed to delete remediation:", error)
      throw error
    }
  }

  if (error) {
    return <EmptyDataGridRow colSpan={4}>Error loading remediated vulnerabilities: {error.message}</EmptyDataGridRow>
  }

  if (remediatedVulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={4}>No remediated vulnerabilities found!</EmptyDataGridRow>
  }

  return (
    <>
      {remediatedVulnerabilities.map((remediation) => (
        <RemediatedIssueDataRow key={remediation.remediationId} remediation={remediation} onRevert={handleRevert} />
      ))}
    </>
  )
}
