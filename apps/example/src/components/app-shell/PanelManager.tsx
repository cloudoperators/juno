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
import { Panels, Pages } from "../constants"
import PeakForm from "../peaks/list/PeakForm"
import { PeakFields, TooltipExplanation } from "../constants"
import HelpTooltip from "../common/HelpTooltip"

type CurrentPanelType = (typeof Panels)[keyof typeof Panels]

interface CurrentPanel {
  type: CurrentPanelType
  itemId?: string
}

const EDIT_HEADING = "Edit Peak"
const INITAL_PLACEHOLDER_PEAK_DATA = {
  name: "Mount Sample",
  height: "8848",
  mainrange: "Himalayas",
  region: "Asia",
  countries: "Nepal/China",
  url: "https://example.com/sample",
}

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
      setCurrentPage(Pages.PEAKS) // Navigate to the peaks detail page
      closePanel()
    }
  }

  const getPanelHeading = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return EDIT_HEADING
      case Panels.SHOW_PEAK:
        return peakDetails ? `${peakDetails.name} Overview` : null
    }
  }

  const renderPanelContent = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return <PeakForm initialValues={peakDetails || INITAL_PLACEHOLDER_PEAK_DATA} closeCallback={closePanel} />
      case Panels.SHOW_PEAK:
        return (
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {peakDetails && (
              <DataGrid columns={2} style={{ gridTemplateColumns: "30% 70%", margin: "20px" }}>
                <DataGridRow key="safety-status" style={{ padding: "10px 0" }}>
                  <DataGridCell>
                    <div className="flex items-center">
                      <strong className="mr-2">{PeakFields.SAFETY}</strong>
                      <HelpTooltip tooltipText={TooltipExplanation.SAFETY_STATUS} />
                    </div>
                  </DataGridCell>
                  <DataGridCell>
                    <Badge
                      icon
                      text={peakDetails.safety.status}
                      variant={peakDetails.safety.variant}
                      style={{ width: "70px", textAlign: "center" }}
                    />
                  </DataGridCell>
                  <DataGridRow key="height" style={{ padding: "10px 0" }}>
                    <DataGridCell>
                      <div className="flex items-center">
                        <strong className="mr-2">{PeakFields.HEIGHT}</strong>
                        <HelpTooltip tooltipText={TooltipExplanation.HEIGHT} />
                      </div>
                    </DataGridCell>
                    <DataGridCell>{peakDetails.height}</DataGridCell>
                  </DataGridRow>
                </DataGridRow>
                <DataGridRow key="mainrange" style={{ padding: "10px 0" }}>
                  <DataGridCell>
                    <strong>{PeakFields.RANGE}</strong>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.mainrange}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="region" style={{ padding: "10px 0" }}>
                  <DataGridCell>
                    <strong>{PeakFields.REGION}</strong>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.region}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="countries" style={{ padding: "10px 0" }}>
                  <DataGridCell>
                    <strong>{PeakFields.COUNTRY}</strong>
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
              </DataGrid>
            )}
            <div style={{ textAlign: "center", marginTop: "auto", padding: "30px" }}>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToDetailPage() // Navigate to detailed peak page
                }}
                style={{ cursor: "pointer" }}
              >
                Go to Peaks Detail Page
              </Button>
            </div>
          </div>
        )
    }
  }

  return (
    <Panel heading={getPanelHeading()} opened={Boolean(renderPanelContent())} onClose={closePanel}>
      {renderPanelContent()}
    </Panel>
  )
}

export default PanelManager
