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
const AlertsTab = () => {
  const totalCounts = useAlertsTotalCounts()
  const updatedAt = useAlertsUpdatedAt()
  // @ts-ignore FIXME: Property 'setAlertsData' does not exist on type 'unknown'.
  const { setAlertsData } = useAlertsActions()
  const { addMessage } = useActions()

  // Fetch alerts data
  const { data, isLoading, error } = useBoundQuery("alerts")
  if (error) {
    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }
  useEffect(() => {
    if (data) {
      // @ts-ignore FIXME: Property 'alerts' does not exist on type 'unknown'.
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
