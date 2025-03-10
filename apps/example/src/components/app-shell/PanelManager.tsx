/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel } from "@cloudoperators/juno-ui-components"

import { useGlobalsActions, useGlobalsCurrentPanel } from "../../store/StoreProvider"

import { Panels } from "../constants"
import EditPeak from "../peaks/actions/EditPeak"
import AddPeak from "../peaks/actions/AddPeak"

type CurrentPanelType = (typeof Panels)[keyof typeof Panels]

interface CurrentPanel {
  type: CurrentPanelType
  itemId?: string
}

const EDIT_HEADING = "Edit Peak"
const ADD_HEADING = "Add a New Peak"

const PanelManager: React.FC = () => {
  const { setCurrentPanel } = useGlobalsActions()
  const currentPanel = useGlobalsCurrentPanel() as CurrentPanel
  const closePanel = (): void => setCurrentPanel(null)

  const getPanelHeading = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return EDIT_HEADING
      case Panels.ADD_PEAKS:
        return ADD_HEADING
      default:
        return null
    }
  }

  const renderPanelContent = (): React.ReactNode => {
    switch (currentPanel?.type) {
      case Panels.EDIT_PEAKS:
        return <EditPeak peakId={currentPanel.itemId} closeCallback={closePanel} />
      case Panels.ADD_PEAKS:
        return <AddPeak closeCallback={closePanel} />
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
