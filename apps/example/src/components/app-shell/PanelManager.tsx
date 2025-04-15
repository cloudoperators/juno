/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Badge, Panel, DataGrid, DataGridRow, DataGridCell, Button } from "@cloudoperators/juno-ui-components"
import { useGlobalsActions, useGlobalsCurrentPanel } from "../../store/StoreProvider"
import usePeaksStore from "../../store/usePeaksStore"
import useNavigationStore from "../../store/useNavigationStore"
import useSelectedPeak from "../../store/createSelectedPeakSlice"
import { Pages } from "../constants"

const PanelManager: React.FC = () => {
  const { setCurrentPanel } = useGlobalsActions()
  const currentPanel = useGlobalsCurrentPanel() as CurrentPanel
  const { peaks } = usePeaksStore()
  const { setCurrentPage } = useNavigationStore()
  const { setSelectedPeakId } = useSelectedPeak()

  const closePanel = (): void => setCurrentPanel(null)

  const peakDetails = currentPanel?.itemId ? peaks.find((peak) => peak.id === Number(currentPanel.itemId)) : null

  const navigateToDetailPage = () => {
    if (peakDetails) {
      setSelectedPeakId(String(peakDetails.id))
      setCurrentPage(Pages.PEAKS) // Navigate to the peaks detail page on navigation from the peak panel
      closePanel()
    }
  }

  const renderDataGrid = (): React.ReactNode => (
    <DataGrid columns={2} style={{ gridTemplateColumns: "30% 70%", margin: "20px" }}>
      {peakDetails && (
        <>
          <DataGridRow key="height" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>Height</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.height}</DataGridCell>
          </DataGridRow>
          <DataGridRow key="safety-status" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>Safety Status</strong>
            </DataGridCell>
            <DataGridCell>
              <Badge
                icon
                text={peakDetails.safety.status}
                variant={peakDetails.safety.variant}
                style={{ width: "70px", textAlign: "center" }}
              />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow key="mainrange" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>Main Range</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.mainrange}</DataGridCell>
          </DataGridRow>
          <DataGridRow key="region" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>Region</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.region}</DataGridCell>
          </DataGridRow>
          <DataGridRow key="countries" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>Countries</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.countries}</DataGridCell>
          </DataGridRow>
          <DataGridRow key="details" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>Details</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.details}</DataGridCell>
          </DataGridRow>
          <DataGridRow key="more-info" style={{ padding: "10px 0" }}>
            <DataGridCell>
              <strong>More Info</strong>
            </DataGridCell>
            <DataGridCell>
              <a href={peakDetails.url} target="_blank" rel="noopener noreferrer">
                Wikipedia
              </a>
            </DataGridCell>
          </DataGridRow>
        </>
      )}
    </DataGrid>
  )

  return (
    <Panel heading={`${peakDetails?.name || "Peak"} Overview`} opened={Boolean(peakDetails)} onClose={closePanel}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {renderDataGrid()}
        <div style={{ textAlign: "center", marginTop: "auto", padding: "30px" }}>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault()
              navigateToDetailPage() // Trigger loading of detailed peak view
            }}
            style={{ cursor: "pointer" }}
          >
            Go to Peaks Detail Page
          </Button>
        </div>
      </div>
    </Panel>
  )
}

export default PanelManager
