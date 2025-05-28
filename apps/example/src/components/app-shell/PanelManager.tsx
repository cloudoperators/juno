/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

import React from "react"
import { Badge, Panel, DataGrid, DataGridRow, DataGridCell, Button } from "@cloudoperators/juno-ui-components"
import { Peak } from "../../mocks/db"

import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"

import { Panels, Pages } from "../constants"
import PeakForm from "../peaks/list/PeakForm"
import HelpTooltip from "../common/HelpTooltip"
import { PeakFields, TooltipExplanation } from "../constants"

const EDIT_HEADING = "Edit Peak"
const INITAL_PLACEHOLDER_PEAK_DATA = {
  name: "Mount Sample",
  height: "8848",
  mainrange: "Himalayas",
  region: "Asia",
  countries: "Nepal/China",
  url: "https://example.com/sample",
}

const PanelManager: React.FC<{ openDetailPageWithPeak: (peakId: string) => void; closePanel: () => void }> = ({
  openDetailPageWithPeak,
  closePanel,
}) => {
  const { currentPanel } = useUIStore()
  const { peaks, selectedPeakId } = usePeaksStore()

  const peakDetails = selectedPeakId ? peaks.find((peak) => peak.id === selectedPeakId) : null

  const getPanelHeading = (): React.ReactNode => {
    switch (currentPanel) {
      case Panels.EDIT_PEAKS:
        return EDIT_HEADING
      case Panels.SHOW_PEAK:
        return peakDetails ? `${peakDetails.name} Overview` : null
      default:
        return null
    }
  }

  const PanelContent: React.FC = () => {
    switch (currentPanel) {
      case Panels.EDIT_PEAKS:
        return <PeakForm initialValues={peakDetails || INITAL_PLACEHOLDER_PEAK_DATA} closeCallback={closePanel} />
      case Panels.SHOW_PEAK:
        return <ShowPeakContent peakDetails={peakDetails} openDetailPageWithPeak={openDetailPageWithPeak} />
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

const ShowPeakContent: React.FC<{ peakDetails: Peak; openDetailPageWithPeak: (peakId: string) => void }> = ({
  peakDetails,
  openDetailPageWithPeak,
}) => (
  <div className="flex flex-col h-full">
    {peakDetails && (
      <DataGrid columns={2} className="grid grid-cols-[30%_70%] m-5">
        {renderDataGridRows(peakDetails)}
      </DataGrid>
    )}
    <div className="text-center mt-auto p-8">
      <Button
        variant="primary"
        onClick={(e) => {
          e.preventDefault()
          openDetailPageWithPeak(peakDetails.id.toString())
        }}
        className="cursor-pointer"
      >
        Open Detail Page
      </Button>
    </div>
  </div>
)

const renderDataGridRows = (peakDetails: Peak) => {
  const rows = [
    {
      key: "safety-status",
      field: PeakFields.SAFETY,
      content: <BadgeComponent peak={peakDetails} />,
      tooltip: TooltipExplanation.SAFETY_STATUS,
    },
    { key: "height", field: PeakFields.HEIGHT, value: peakDetails.height, tooltip: TooltipExplanation.HEIGHT },
    { key: "mainrange", field: PeakFields.RANGE, value: peakDetails.mainrange },
    { key: "region", field: PeakFields.REGION, value: peakDetails.region },
    { key: "countries", field: PeakFields.COUNTRY, value: peakDetails.countries },
    { key: "details", field: "Details", value: peakDetails.details },
    { key: "more-info", field: "More Info", link: peakDetails.url },
  ]

  return rows.map(({ key, field, content, value, tooltip, link }) => (
    <DataGridRow key={key} className="py-2.5">
      <DataGridCell>
        <div className="flex items-center">
          <strong className="mr-2">{field}</strong>
          {tooltip && <HelpTooltip tooltipText={tooltip} />}
        </div>
      </DataGridCell>
      <DataGridCell>
        {content ||
          (link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          ) : (
            value
          ))}
      </DataGridCell>
    </DataGridRow>
  ))
}

const BadgeComponent: React.FC<{ peak: Peak }> = ({ peak }) => (
  <Badge icon text={peak.safety.status} variant={peak.safety.variant} className="w-[70px] text-center" />
)

export default PanelManager
