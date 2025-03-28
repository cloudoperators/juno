/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Spinner, Stack, Badge } from "@cloudoperators/juno-ui-components"
import { FilterSettings } from "../../common/Filters/types"
import { useFetchServicesCounts } from "../useFetchServicesCounts"
import { useActions as useMessageActions } from "@cloudoperators/juno-messages-provider"

type StatusBarProps = {
  filterSettings: FilterSettings
}

const IssuesCount = ({ filterSettings }: StatusBarProps) => {
  const { addMessage } = useMessageActions()

  const { counts, error, loading } = useFetchServicesCounts({
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
        <div className="font-bold">All issues:</div>
        {!error && !loading && (
          <>
            <div className="font-bold mr-2">{counts.totalCount}</div>
            <Badge icon="danger" text={`${counts.critical}`} variant={counts.critical > 0 ? "danger" : "default"} />
            <Badge icon="warning" text={`${counts.high}`} variant={counts.high > 0 ? "warning" : "default"} />
          </>
        )}
      </Stack>
      <Stack alignment="center" className="ml-auto">
        {loading && <Spinner size="small" className="mr-2" />}
      </Stack>
    </Stack>
  )
}

export default IssuesCount
