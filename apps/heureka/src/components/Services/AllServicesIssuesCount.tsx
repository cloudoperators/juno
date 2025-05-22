/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Spinner, Stack } from "@cloudoperators/juno-ui-components"
import { IssuesCountsType } from "../types"
import { IssueCountsPerSeverityLevel } from "../common/IssueCountsPerSeverityLevel"

type AllServicesIssuesCountProps = {
  loading: boolean
  error: string | null
  counts: IssuesCountsType
}

export const AllServicesIssuesCount = ({ loading, error, counts }: AllServicesIssuesCountProps) => {
  return (
    <Stack className="status-bar bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light" alignment="center">
      <Stack gap="1">
        {!error && !loading ? (
          <IssueCountsPerSeverityLevel counts={counts} />
        ) : (
          <div className="font-bold">All issues: --</div>
        )}
      </Stack>
      <Stack alignment="center" className="ml-auto">
        {loading && <Spinner size="small" className="mr-2" />}
      </Stack>
    </Stack>
  )
}
