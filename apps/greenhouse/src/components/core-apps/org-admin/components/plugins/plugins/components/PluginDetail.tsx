/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { useShowDetailsFor, usePluginActions, useGlobalsActions, usePluginConfig, usePanel } from "./StoreProvider"
import {
  CodeBlock,
  Container,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  JsonViewer,
  Panel,
  Pill,
  PanelBody,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "@cloudoperators/juno-ui-components"
import { PluginConditionIcon } from "./PluginConditionIcon"
import { buildExternalServicesUrls } from "./buildExternalServicesUrls"

// Renders the plugin details panel
const PluginDetail = () => {
  const pluginConfig = usePluginConfig()
  const { setShowDetailsFor } = usePluginActions()
  const { setPanel } = useGlobalsActions()
  const panel = usePanel()
  const showDetailsFor = useShowDetailsFor()
  const [plugin, setPlugin] = useState(null)

  useEffect(() => {
    if (!showDetailsFor || !pluginConfig) {
      return
    }
    setPlugin(pluginConfig.find((p: any) => p.metadata.uid === showDetailsFor))
  }, [showDetailsFor, pluginConfig])

  const onPanelClose = () => {
    setShowDetailsFor(null)
    setPanel(null)
  }

  return (
    <Panel
      opened={!!showDetailsFor && panel === "showPlugin"}
      onClose={onPanelClose}
      size="large"
      heading={
        <Stack gap="2">
          <PluginConditionIcon plugin={plugin} />
          {/* @ts-expect-error TS(2339): Property 'spec' does not exist on type 'never'. */}
          <span>{plugin?.spec?.displayName}</span>
        </Stack>
      }
    >
      <PanelBody>
        <Tabs>
          <TabList>
            <Tab>Details</Tab>
            <Tab>Raw Data</Tab>
          </TabList>
          <TabPanel>
            <Container px={false} py>
              <DataGrid columns={2} cellVerticalAlignment="top" gridColumnTemplate="35% auto">
                <DataGridRow>
                  <DataGridHeadCell>Name</DataGridHeadCell>
                  {/* @ts-expect-error TS(2339): Property 'spec' does not exist on type 'never'. */}
                  <DataGridCell>{plugin?.spec?.displayName}</DataGridCell>
                </DataGridRow>
                {/* @ts-expect-error TS(2339): Property 'spec' does not exist on type 'never'. */}
                {plugin?.spec?.disabled && (
                  <DataGridRow>
                    <DataGridHeadCell>Disabled</DataGridHeadCell>
                    {/* @ts-expect-error TS(2339): Property 'spec' does not exist on type 'never'. */}
                    <DataGridCell>{plugin?.spec?.disabled.toString()}</DataGridCell>
                  </DataGridRow>
                )}
                <DataGridRow>
                  <DataGridHeadCell>Version</DataGridHeadCell>
                  {/* @ts-expect-error TS(2339): Property 'status' does not exist on type 'never'. */}
                  <DataGridCell>{plugin?.status?.version}</DataGridCell>
                </DataGridRow>
                <DataGridRow>
                  <DataGridHeadCell>Cluster</DataGridHeadCell>
                  {/* @ts-expect-error TS(2339): Property 'spec' does not exist on type 'never'. */}
                  <DataGridCell>{plugin?.spec?.clusterName}</DataGridCell>
                </DataGridRow>
                <DataGridRow>
                  <DataGridHeadCell>External Links</DataGridHeadCell>
                  <DataGridCell>
                    {/* @ts-expect-error TS(2339): Property 'status' does not exist on type 'never'. */}
                    {plugin?.status?.exposedServices &&
                      // @ts-expect-error TS(2531): Object is possibly 'null'.
                      buildExternalServicesUrls(plugin.status.exposedServices).map((url) => {
                        return (
                          <a href={url.url} target="_blank" rel="noreferrer" className="mr-3" key={url.url}>
                            {url.name}
                          </a>
                        )
                      })}
                  </DataGridCell>
                </DataGridRow>
                <DataGridRow>
                  <DataGridHeadCell>Condition</DataGridHeadCell>
                  <DataGridCell>
                    <PluginConditionIcon plugin={plugin} />
                  </DataGridCell>
                </DataGridRow>
                <DataGridRow>
                  <DataGridHeadCell>Conditions</DataGridHeadCell>
                  <DataGridCell>
                    <Stack gap="2" alignment="start" wrap={true}>
                      {/* @ts-expect-error TS(2339): Property 'status' does not exist on type 'never'. */}
                      {plugin?.status?.statusConditions?.conditions?.map((condition: any) => {
                        return <Pill key={condition.type} pillKey={condition.type} pillValue={condition.status} />
                      })}
                    </Stack>
                  </DataGridCell>
                </DataGridRow>
                {/* @ts-expect-error TS(2339): Property 'spec' does not exist on type 'never'. */}
                {plugin?.spec?.optionValues?.map((option: any) => {
                  {
                    /* Every optionValue which not starts with greenhouse is shown */
                  }
                  if (option?.name.startsWith("greenhouse.")) return null

                  return (
                    <DataGridRow key={option?.name}>
                      <DataGridHeadCell style={{ overflowWrap: "break-word" }}>{option?.name}</DataGridHeadCell>
                      <DataGridCell>
                        {typeof option?.value != "undefined" &&
                          (typeof option?.value === "object"
                            ? option?.value && <JsonViewer data={option?.value} />
                            : String(option?.value))}
                      </DataGridCell>
                    </DataGridRow>
                  )
                })}
              </DataGrid>
            </Container>
          </TabPanel>

          <TabPanel>
            <Container px={false} py>
              <CodeBlock>{plugin && <JsonViewer data={plugin} expanded={true} />}</CodeBlock>
            </Container>
          </TabPanel>
        </Tabs>
      </PanelBody>
    </Panel>
  )
}

export default PluginDetail
