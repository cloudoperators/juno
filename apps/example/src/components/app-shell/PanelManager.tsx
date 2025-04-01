/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel } from "@cloudoperators/juno-ui-components"

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

  const renderPanelContent = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return (
          <PeakForm initialValues={INITAL_PLACEHOLDER_PEAK_DATA} closeCallback={closePanel} disableAutoFocus={true} />
        )
      case Panels.SHOW_PEAK:
        return <div />
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
