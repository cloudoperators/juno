import React from "react"
import { Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { useAlertsQuery } from "../../hooks/useAlertsQuery"
import AlertsList from "./AlertsList"
import StatusBar from "../status/StatusBar"
import Filters from "../filters/Filters"
import { useActions } from "@cloudoperators/juno-messages-provider"
import PredefinedFilters from "../filters/PredefinedFilters"
import { parseError } from "../../helpers"

const AlertsTab = () => {
  const { addMessage } = useActions()

  // Fetch alerts data
  const { isLoading, error, totalCounts, updatedAt } = useAlertsQuery()

  if (error) {
    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }

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
