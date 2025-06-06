/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel } from "@cloudoperators/juno-ui-components"

import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"

import { Panels } from "../constants"
import PeakForm from "../peaks/list/PeakForm"
import { PeakDetailPanelContent } from "../peaks/list/PeakDetailsPanelContent"

const EDIT_HEADING = "Edit Peak"
const SHOW_HEADING_TEMPLATE = (peakName: string) => `${peakName} Overview`

interface PanelManagerProps {
  openDetailPageWithPeak: (peakId: string) => void
  closePanel: () => void
}

const PanelManager: React.FC<PanelManagerProps> = ({ openDetailPageWithPeak, closePanel }) => {
  const { currentPanel } = useUIStore()
  const { peaks, selectedPeakId } = usePeaksStore()

  const peakDetails = selectedPeakId ? peaks.find((peak) => peak.id === selectedPeakId) : undefined

  const getPanelHeading = (): React.ReactNode => {
    switch (currentPanel) {
      case Panels.EDIT_PEAKS:
        return EDIT_HEADING
      case Panels.SHOW_PEAK:
        return peakDetails ? SHOW_HEADING_TEMPLATE(peakDetails.name) : null
      default:
        return null
    }
  }

  const PanelContent: React.FC = () => {
    switch (currentPanel) {
      case Panels.EDIT_PEAKS:
        return <PeakForm initialValues={peakDetails} closeCallback={closePanel} />
      case Panels.SHOW_PEAK:
        return peakDetails ? <PeakDetailPanelContent openDetailPageWithPeak={openDetailPageWithPeak} /> : null
      default:
        return null
    }
  }

  return (
    <Panel heading={getPanelHeading()} opened={Boolean(currentPanel)} onClose={closePanel}>
      <PanelContent />
    </Panel>
  )
}

export default PanelManager
