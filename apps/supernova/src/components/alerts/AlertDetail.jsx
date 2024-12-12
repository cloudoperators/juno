/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  CodeBlock,
  Container,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  JsonViewer,
  Panel,
  PanelFooter,
  Stack,
  PanelBody,
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "@cloudoperators/juno-ui-components"
import { useShowDetailsFor, useGlobalsActions, useAlertsActions } from "../StoreProvider"
import AlertIcon from "./shared/AlertIcon"
import AlertTimestamp from "./shared/AlertTimestamp"
import AlertDescription from "./shared/AlertDescription"
import AlertLinks from "./shared/AlertLinks"
import AlertLabels from "./shared/AlertLabels"
import SilenceNew from "../silences/SilenceNew"
import AlertStatus from "./AlertStatus"
import AlertRegion from "./shared/AlertRegion"
import AlertSilences from "./AlertSilences"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { useBoundQuery } from "../../hooks/useBoundQuery"

const AlertDetail = () => {
  const alertID = useShowDetailsFor()
  const { setShowDetailsFor } = useGlobalsActions()
  const { getAlertByFingerprint } = useAlertsActions()
  const alert = getAlertByFingerprint(alertID)

  const onPanelClose = () => {
    setShowDetailsFor(null)
  }

  const { isAlertsLoading } = useBoundQuery("alerts")

  return (
    <MessagesProvider>
      <Panel
        heading={
          <Stack gap="2">
            <AlertIcon severity={alert?.labels?.severity} />
            <span>{alert?.annotations?.summary || "Not found"}</span>
          </Stack>
        }
        opened={!!alertID}
        onClose={onPanelClose}
        size="large"
      >
        <PanelBody>
          <Messages className="pb-6 absolute" />
          <Tabs>
            <TabList>
              <Tab>Details</Tab>
              <Tab>Raw Data</Tab>
            </TabList>
            <TabPanel>
              <Container px={false} py>
                {!alert ? (
                  isAlertsLoading ? (
                    <Stack gap="2">
                      <span>Loading</span>
                      <Spinner variant="primary" />
                    </Stack>
                  ) : (
                    "Not found - the alert is probably not firing at the moment"
                  )
                ) : (
                  <>
                    <DataGrid columns={2}>
                      <DataGridRow>
                        <DataGridHeadCell>Status</DataGridHeadCell>
                        <DataGridCell>
                          <AlertStatus alert={alert} />
                        </DataGridCell>
                      </DataGridRow>
                      <DataGridRow>
                        <DataGridHeadCell>Firing Since</DataGridHeadCell>
                        <DataGridCell>
                          <AlertTimestamp startTimestamp={alert?.startsAt} />
                        </DataGridCell>
                      </DataGridRow>
                      <DataGridRow>
                        <DataGridHeadCell>Service</DataGridHeadCell>
                        <DataGridCell>{alert?.labels?.service}</DataGridCell>
                      </DataGridRow>
                      <DataGridRow>
                        <DataGridHeadCell>Region</DataGridHeadCell>
                        <DataGridCell>
                          <AlertRegion region={alert?.labels?.region} cluster={alert?.labels?.cluster} />
                        </DataGridCell>
                      </DataGridRow>
                      <DataGridRow>
                        <DataGridHeadCell>Description</DataGridHeadCell>
                        <DataGridCell>
                          <AlertDescription description={alert?.annotations?.description} />
                        </DataGridCell>
                      </DataGridRow>
                      <DataGridRow>
                        <DataGridHeadCell>Links</DataGridHeadCell>
                        <DataGridCell>
                          <AlertLinks alert={alert} />
                        </DataGridCell>
                      </DataGridRow>
                      <DataGridRow>
                        <DataGridHeadCell>Labels</DataGridHeadCell>
                        <DataGridCell>
                          <AlertLabels alert={alert} showAll={true} />
                        </DataGridCell>
                      </DataGridRow>
                    </DataGrid>

                    <AlertSilences alert={alert} />
                  </>
                )}
              </Container>
            </TabPanel>

            <TabPanel>
              <Container px={false} py>
                <CodeBlock>{alert && <JsonViewer data={alert} expanded={true} />}</CodeBlock>
              </Container>
            </TabPanel>
          </Tabs>
        </PanelBody>

        <PanelFooter>{alert && <SilenceNew alert={alert} variant="primary" />}</PanelFooter>
      </Panel>
    </MessagesProvider>
  )
}

export default AlertDetail
