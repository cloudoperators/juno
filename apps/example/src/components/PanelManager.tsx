/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { Panel } from "@cloudoperators/juno-ui-components"

import PeaksEdit from "./peaks/PeaksEdit"
import PeaksNew from "./peaks/PeaksNew"
import { useGlobalsActions, useGlobalsCurrentPanel } from "./StoreProvider"

interface CurrentPanel {
  type: string
  itemId?: string
}

const PanelManager: React.FC = () => {
  const { setCurrentPanel } = useGlobalsActions()
  const currentPanel = useGlobalsCurrentPanel() as CurrentPanel

  const heading = useMemo(() => {
    switch (currentPanel?.type) {
      case "PeaksEdit":
        return "Edit Peak"
      case "PeaksNew":
        return "Add a New Peak"
      default:
        return null
    }
  }, [currentPanel])

  const panelBody = () => {
    switch (currentPanel?.type) {
      case "PeaksEdit":
        return <PeaksEdit peakId={currentPanel?.itemId as string} closeCallback={onClose} />
      case "PeaksNew":
        return <PeaksNew closeCallback={onClose} />
      default:
        return null
    }
  }

  const onClose = () => {
    setCurrentPanel(null)
  }

  return (
    <Panel heading={heading} opened={Boolean(panelBody())} onClose={onClose}>
      {panelBody()}
    </Panel>
  )
}

export default PanelManager
