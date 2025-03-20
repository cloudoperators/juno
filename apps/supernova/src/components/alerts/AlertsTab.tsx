/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { useBoundQuery } from "../../hooks/useBoundQuery"
import AlertsList from "./AlertsList"
import StatusBar from "../status/StatusBar"
import Filters from "../filters/Filters"
import { useActions } from "@cloudoperators/juno-messages-provider"
import PredefinedFilters from "../filters/PredefinedFilters"
import { useAlertsUpdatedAt, useAlertsTotalCounts, useAlertsActions } from "../StoreProvider"
import { parseError } from "../../helpers"
import { AlertsData } from "../../api/alerts"

const AlertsTab = () => {
  const totalCounts = useAlertsTotalCounts()
  const updatedAt = useAlertsUpdatedAt()
  const { setAlertsData } = useAlertsActions()
  const { addMessage } = useActions()

  // Fetch alerts data
  const { data, isLoading, error } = useBoundQuery<AlertsData>("alerts")
  if (error) {
    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }
  useEffect(() => {
    if (data) {
      setAlertsData({ items: data.alerts, counts: data.counts })
    }
  }, [data])

  return (
    <>
      {isLoading ? (
        <Stack gap="2">
          <span>Loading</span>
          <Spinner variant="primary" />
        </Stack>
      ) : (
        <>
          <PredefinedFilters />
          <Filters />
          <StatusBar totalCounts={totalCounts} isUpdating={isLoading} updatedAt={updatedAt} />
          <AlertsList />
        </>
      )}
    </>
  )
}

export default AlertsTab
