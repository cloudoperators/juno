/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Badge, Panel, DataGrid, DataGridRow, DataGridCell } from "@cloudoperators/juno-ui-components"
import { useGlobalsActions, useGlobalsCurrentPanel } from "../../store/StoreProvider"
import usePeaksStore from "../../store/usePeaksStore"
import useNavigationStore from "../../store/useNavigationStore"
import { Panels, Pages } from "../constants"

type CurrentPanelType = (typeof Panels)[keyof typeof Panels]

interface CurrentPanel {
  type: CurrentPanelType
  itemId?: string
}

const PanelManager: React.FC = () => {
  const { setCurrentPanel, setSelectedPeak } = useGlobalsActions() // Ensure setSelectedPeak is available
  const currentPanel = useGlobalsCurrentPanel() as CurrentPanel
  const { peaks } = usePeaksStore()
  const { setCurrentPage } = useNavigationStore()

  const closePanel = (): void => setCurrentPanel(null)

  const peakDetails = currentPanel?.itemId ? peaks.find((peak) => peak.id === Number(currentPanel.itemId)) : null

  const navigateToDetailPage = () => {
    if (peakDetails) {
      setSelectedPeak(peakDetails)
      setCurrentPage(Pages.PEAKS)
      closePanel()
    }
  }

  const rows = peakDetails
    ? [
        <>
          <DataGridRow>
            <DataGridCell>
              <strong>Height</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.height}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
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
          <DataGridRow>
            <DataGridCell>
              <strong>Main Range</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.mainrange}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>
              <strong>Region</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.region}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>
              <strong>Countries</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.countries}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>
              <strong>Details</strong>
            </DataGridCell>
            <DataGridCell>{peakDetails.details}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>
              <strong>More Info</strong>
            </DataGridCell>
            <DataGridCell>
              <a href={peakDetails.url} target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell colSpan={2} style={{ textAlign: "center", paddingTop: "10px" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToDetailPage()
                }}
                style={{ cursor: "pointer", color: "#007BFF", textDecoration: "underline" }}
              >
                View Detailed Page
              </a>
            </DataGridCell>
          </DataGridRow>
        </>,
      ]
    : []

  const renderPanelContent = (): React.ReactNode => {
    return (
      <DataGrid columns={2} style={{ gridTemplateColumns: "30% 70%", margin: "20px" }}>
        {rows.map((row, index) => (
          <React.Fragment key={index}>{row}</React.Fragment>
        ))}
      </DataGrid>
    )
  }

  return (
    <Panel heading={`${peakDetails?.name} Overview`} opened={Boolean(peakDetails)} onClose={closePanel}>
      {renderPanelContent()}
    </Panel>
  )
}

export default PanelManager
