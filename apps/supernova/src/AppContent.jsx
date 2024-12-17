/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"
import { Container, Stack, Spinner } from "@cloudoperators/juno-ui-components"
import {
  useAlertsUpdatedAt,
  useAlertsTotalCounts,
  useGlobalsActiveSelectedTab,
  useSilencesActions,
} from "./components/StoreProvider"
import AlertsList from "./components/alerts/AlertsList"
import RegionsList from "./components/regions/RegionsList"
import StatusBar from "./components/status/StatusBar"
import Filters from "./components/filters/Filters"
import { parseError } from "./helpers"
import AlertDetail from "./components/alerts/AlertDetail"
import PredefinedFilters from "./components/filters/PredefinedFilters"
import SilencesList from "./components/silences/SilencesList"

import { useBoundQuery } from "./hooks/useBoundQuery"

const AppContent = () => {
  const { addMessage } = useActions()

  // alerts
  const totalCounts = useAlertsTotalCounts()
  const updatedAt = useAlertsUpdatedAt()
  const { setSilences } = useSilencesActions()

  const activeSelectedTab = useGlobalsActiveSelectedTab()

  const { error: alertsError, isLoading: isAlertsLoading } = useBoundQuery("alerts")
  const { error: silencesError, data: silencesData, isLoading: isSilencesLoading } = useBoundQuery("silences")

  useEffect(() => {
    if (silencesData) {
      console.log(silencesData)
      setSilences({
        items: silencesData?.silences,
      })
    }
  }, [silencesData])

  // since the API call is done in a web worker and not logging aware, we need to show the error just in case the user is logged in
  if (silencesError) {
    addMessage({
      variant: "error",
      text: parseError(alertsError),
    })
  }

  // since the API call is done in a web worker and not logging aware, we need to show the error just in case the user is logged in
  if (alertsError) {
    addMessage({
      variant: "error",
      text: parseError(silencesError),
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
              <StatusBar totalCounts={totalCounts} isUpdating={isAlertsLoading} updatedAt={updatedAt} />
              <AlertsList />
            </>
          )}
        </>
      )}
      {activeSelectedTab === "silences" && (
        <>
          {isSilencesLoading ? (
            <Stack gap="2">
              <span>Loading</span>
              <Spinner variant="primary" />
            </Stack>
          ) : (
            <SilencesList />
          )}
        </>
      )}
    </Container>
  )
}

export default AppContent
