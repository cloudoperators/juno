/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Badge, Panel } from "@cloudoperators/juno-ui-components"

import { useGlobalsActions, useGlobalsCurrentPanel } from "../../store/StoreProvider"

import { Panels } from "../constants"
import PeakForm from "../peaks/list/PeakForm"

type CurrentPanelType = (typeof Panels)[keyof typeof Panels]

interface CurrentPanel {
  type: CurrentPanelType
  itemId?: string
}

const EDIT_HEADING = "Edit Peak"
const SHOW_PEAK_HEADING = "Peak Details"
const INITAL_PLACEHOLDER_PEAK_DATA = {
  name: "Mount Sample",
  height: "8848",
  range: "Himalayas",
  region: "Asia",
  country: "Nepal/China",
  url: "https://example.com/sample",
}

const PanelManager: React.FC = () => {
  const { setCurrentPanel } = useGlobalsActions()
  const currentPanel = useGlobalsCurrentPanel() as CurrentPanel
  const closePanel = (): void => setCurrentPanel(null)

  const getPanelHeading = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return EDIT_HEADING
      case Panels.SHOW_PEAK:
        return SHOW_PEAK_HEADING
      default:
        return null
    }
  }

  // Assuming INITAL_PEAK_DATA simulates fetching peak data - replace with actual data fetch/filter logic.
  const findPeakById = (id: string) => {
    // Placeholder function that fetches peak by ID, replace this with actual logic for retrieving peaks
    return {
      id,
      name: "Mount Sample",
      height: "8848",
      range: "Himalayas",
      region: "Asia",
      country: "Nepal/China",
      url: "https://example.com/sample",
      safety: {
        status: "safe",
        variant: "positive",
      },
    }
  }

  const renderPanelContent = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return (
          <PeakForm initialValues={INITAL_PLACEHOLDER_PEAK_DATA} closeCallback={closePanel} disableAutoFocus={true} />
        )
      case Panels.SHOW_PEAK:
        const peakDetails = currentPanel.itemId ? findPeakById(currentPanel.itemId) : null
        // Show detailed information for the selected peak
        return (
          peakDetails && (
            <div>
              <h3>{peakDetails.name}</h3>
              <p>Height: {peakDetails.height}</p>
              <p>Range: {peakDetails.range}</p>
              <p>Region: {peakDetails.region}</p>
              <p>Country: {peakDetails.country}</p>
              <a href={peakDetails.url} target="_blank" rel="noopener noreferrer">
                More Info
              </a>
              <Badge
                icon
                text={peakDetails.safety.status}
                variant={peakDetails.safety.variant}
                style={{ minWidth: "70px", textAlign: "center" }}
              />
            </div>
          )
        )
      default:
        return null
    }
  }

  return (
    <Panel heading={getPanelHeading()} opened={Boolean(renderPanelContent())} onClose={closePanel}>
      {renderPanelContent()}
    </Panel>
  )
}

export default PanelManager
