/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"
import { Container } from "@cloudoperators/juno-ui-components"
import {
  useAlertsIsUpdating,
  useAlertsUpdatedAt,
  useAlertsTotalCounts,
  useSilencesError,
  useGlobalsActiveSelectedTab,
  useAlertsError,
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

  // alerts
  const totalCounts = useAlertsTotalCounts()
  const isAlertsUpdating = useAlertsIsUpdating()
  const updatedAt = useAlertsUpdatedAt()

  // silences
  const silencesError = useSilencesError()
  const alertsError = useAlertsError()

  const activeSelectedTab = useGlobalsActiveSelectedTab()

  useEffect(() => {
    // since the API call is done in a web worker and not logging aware, we need to show the error just in case the user is logged in
    if (!silencesError) return
    addMessage({
      variant: "error",
      text: parseError(silencesError),
    })
  }, [silencesError])

  useEffect(() => {
    // since the API call is done in a web worker and not logging aware, we need to show the error just in case the user is logged in
    if (!alertsError) return
    addMessage({
      variant: "error",
      text: parseError(alertsError),
    })
  }, [alertsError])

  return (
    <Container px py className="h-full">
      <Messages className="pb-6" />

      {activeSelectedTab === "alerts" && (
        <>
          <AlertDetail />
          <RegionsList />
          <>
            <PredefinedFilters />
            <Filters />
            <StatusBar totalCounts={totalCounts} isUpdating={isAlertsUpdating} updatedAt={updatedAt} />
            <AlertsList />
          </>
        </>
      )}
      {activeSelectedTab === "silences" && <SilencesList />}
    </Container>
  )
}

export default AppContent
