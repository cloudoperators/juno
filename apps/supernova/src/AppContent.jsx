/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { Container } from "@cloudoperators/juno-ui-components"
import { useGlobalsActiveSelectedTab } from "./components/StoreProvider"
import RegionsList from "./components/regions/RegionsList"
import AlertDetail from "./components/alerts/AlertDetail"
import SilencesList from "./components/silences/SilencesList"
import AlertsTab from "./components/alerts/AlertsTab"

const AppContent = () => {
  const activeSelectedTab = useGlobalsActiveSelectedTab()

  return (
    <Container px py className="h-full">
      <Messages className="pb-6" />

      {activeSelectedTab === "alerts" && (
        <>
          <MessagesProvider>
            <AlertDetail />
          </MessagesProvider>
          <RegionsList />
          <AlertsTab />
        </>
      )}
      {activeSelectedTab === "silences" && <SilencesList />}
    </Container>
  )
}

export default AppContent
