/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Spinner, Stack, Badge } from "@cloudoperators/juno-ui-components"
import { FilterSettings } from "../../common/Filters/types"
import { useFetchServicesCounts } from "../useFetchServicesCounts"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"

const statusBarStyles = `
  bg-theme-background-lvl-1
  py-1.5
  px-4
  my-px
  text-theme-light
`

type StatusBarProps = {
  filterSettings: FilterSettings
}

const StatusBar = ({ filterSettings }: StatusBarProps) => {
  const { addMessage } = messageActions()

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
    <Stack className={`status-bar ${statusBarStyles}`} alignment="center">
      <Stack gap="1">
        <div className="font-bold">All issues:</div>
        {!error && !loading && (
          <>
            <div className="font-bold mr-2">{counts.totalCount}</div>
            <Badge icon text={`${counts.critical}`} variant="danger" />
            <Badge icon text={`${counts.high}`} variant="warning" />
          </>
        )}
      </Stack>
      <Stack alignment="center" className="ml-auto">
        {loading && <Spinner size="small" className="mr-2" />}
      </Stack>
    </Stack>
  )
}

export default StatusBar
