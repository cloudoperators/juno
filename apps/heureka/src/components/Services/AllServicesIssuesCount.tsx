/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Spinner, Stack } from "@cloudoperators/juno-ui-components"
import { useActions as useMessageActions } from "@cloudoperators/juno-messages-provider"
import { FilterSettings } from "../common/Filters/types"
import { useFetchServicesIssuesCounts } from "./useFetchServicesIssuesCounts"
import { IssuesCountPerSeverityLevel } from "../common/IssuesCountPerSeverityLevel"

type AllServicesIssuesCountProps = {
  filterSettings: FilterSettings
}

export const AllServicesIssuesCount = ({ filterSettings }: AllServicesIssuesCountProps) => {
  const { addMessage } = useMessageActions()

  const { counts, error, loading } = useFetchServicesIssuesCounts({
    filterSettings,
  })

  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: error,
      })
    }
  }, [error])

  return (
    <Stack className="status-bar bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light" alignment="center">
      <Stack gap="1">
        {!error && !loading ? (
          <IssuesCountPerSeverityLevel counts={counts} />
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
