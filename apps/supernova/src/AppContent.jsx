/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"
import { Container, Spinner, Stack } from "@cloudoperators/juno-ui-components"
import {
  useAlertsIsUpdating,
  useAlertsUpdatedAt,
  useAlertsTotalCounts,
  useSilencesError,
  useGlobalsActiveSelectedTab,
  useAlertsError,
  useAlertsIsLoading,
} from "./components/StoreProvider"
import AlertsList from "./components/alerts/AlertsList"
import RegionsList from "./components/regions/RegionsList"
import StatusBar from "./components/status/StatusBar"
import Filters from "./components/filters/Filters"
import { parseError } from "./helpers"
import AlertDetail from "./components/alerts/AlertDetail"
import PredefinedFilters from "./components/filters/PredefinedFilters"
import SilencesList from "./components/silences/SilencesList"

const AppContent = () => {
  const { addMessage } = useActions()
  const isAlertsLoading = useAlertsIsLoading()

  // alerts
  const totalCounts = useAlertsTotalCounts()
  const isAlertsUpdating = useAlertsIsUpdating()
  const updatedAt = useAlertsUpdatedAt()

  // silences
  const silencesError = useSilencesError()
  const alertsError = useAlertsError()

  const activeSelectedTab = useGlobalsActiveSelectedTab()

  // since the API call is done in a web worker and not logging aware, we need to show the error just in case the user is logged in
  if (silencesError) {
    addMessage({
      variant: "error",
      text: parseError(silencesError),
    })
  }

  // since the API call is done in a web worker and not logging aware, we need to show the error just in case the user is logged in

  if (alertsError) {
    addMessage({
      variant: "error",
      text: parseError(alertsError),
    })
  }

  return (
    <Container px py className="h-full">
      <Messages className="pb-6" />

      {activeSelectedTab === "alerts" && (
        <>
          <AlertDetail />
          <RegionsList />
          {isAlertsLoading ? (
            <Stack gap="2">
              <span>Loading</span>
              <Spinner variant="primary" />
            </Stack>
          ) : (
            <>
              <PredefinedFilters />
              <Filters />
              <StatusBar totalCounts={totalCounts} isUpdating={isAlertsUpdating} updatedAt={updatedAt} />
              <AlertsList />
            </>
          )}
        </>
      )}
      {activeSelectedTab === "silences" && <SilencesList />}
    </Container>
  )
}

export default AppContent
