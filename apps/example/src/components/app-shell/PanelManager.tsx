/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Badge, Panel, DataGrid, DataGridRow, DataGridCell, Button } from "@cloudoperators/juno-ui-components"
import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"
import useNavigationStore from "../../store/useNavigationStore"
import { Panels, Pages } from "../constants"
import PeakForm from "../peaks/list/PeakForm"
import { PeakFields, TooltipExplanation } from "../constants"
import HelpTooltip from "../common/HelpTooltip"

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
  const { currentPanel, setCurrentPanel } = useUIStore()
  const { peaks, setSelectedPeakId } = usePeaksStore()
  const { setCurrentPage } = useNavigationStore()

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
          <div className="flex flex-col h-full">
            {peakDetails && (
              <DataGrid columns={2} className="grid grid-cols-[30%_70%] m-5">
                <DataGridRow key="safety-status" className="py-2.5">
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
                      className="w-[70px] text-center"
                    />
                  </DataGridCell>
                </DataGridRow>
                <DataGridRow key="height" className="py-2.5">
                  <DataGridCell>
                    <div className="flex items-center">
                      <strong className="mr-2">{PeakFields.HEIGHT}</strong>
                      <HelpTooltip tooltipText={TooltipExplanation.HEIGHT} />
                    </div>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.height}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="mainrange" className="py-2.5">
                  <DataGridCell>
                    <strong>{PeakFields.RANGE}</strong>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.mainrange}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="region" className="py-2.5">
                  <DataGridCell>
                    <strong>{PeakFields.REGION}</strong>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.region}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="countries" className="py-2.5">
                  <DataGridCell>
                    <strong>{PeakFields.COUNTRY}</strong>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.countries}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="details" className="py-2.5">
                  <DataGridCell>
                    <strong>Details</strong>
                  </DataGridCell>
                  <DataGridCell>{peakDetails.details}</DataGridCell>
                </DataGridRow>
                <DataGridRow key="more-info" className="py-2.5">
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
            <div className="text-center mt-auto p-8">
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToDetailPage()
                }}
                className="cursor-pointer"
              >
                Open Detail Page
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
