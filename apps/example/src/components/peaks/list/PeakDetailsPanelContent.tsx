/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGrid, DataGridRow, DataGridCell, Button, Badge, Stack } from "@cloudoperators/juno-ui-components"

import { Peak } from "../../../mocks/db"
import usePeaksStore from "../../../store/usePeaksStore"

import HelpTooltip from "../../common/HelpTooltip"
import { DEFAULT_MEDIUM_APP_MARGIN, DEFAULT_SMALL_APP_MARGIN, PeakFields, TooltipExplanation } from "../../constants"

interface PeakDetailPanelContentProps {
  openDetailPageWithPeak: (_peakId: string) => void
}

const PeakDetailPanelContent: React.FC<PeakDetailPanelContentProps> = ({ openDetailPageWithPeak }) => {
  const { peaks, selectedPeakId } = usePeaksStore()
  const peakDetails = selectedPeakId ? peaks.find((peak) => peak.id === selectedPeakId) : undefined

  if (!peakDetails) return null

  return (
    <Stack direction="vertical" gap={DEFAULT_MEDIUM_APP_MARGIN} className="h-full">
      <DataGrid columns={2} className="grid grid-cols-[30%_70%] m-5">
        <DataGridRows peakDetails={peakDetails} />
      </DataGrid>
      <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} className="justify-center mt-auto p-8">
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault()
            openDetailPageWithPeak(peakDetails.id?.toString())
          }}
          className="cursor-pointer"
        >
          Open Detail Page
        </Button>
      </Stack>
    </Stack>
  )
}

const DataGridRows: React.FC<{ peakDetails: Peak }> = ({ peakDetails }) => {
  const rows = [
    {
      key: "safety-status",
      field: PeakFields.SAFETY,
      content: (
        <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} className="w-[70px] text-center">
          <Badge icon text={peakDetails.safety?.status || "N/A"} variant={peakDetails.safety?.variant || "warning"} />
        </Stack>
      ),
      tooltip: TooltipExplanation.SAFETY_STATUS,
    },
    { key: "height", field: PeakFields.HEIGHT, value: peakDetails.height, tooltip: TooltipExplanation.HEIGHT },
    { key: "mainrange", field: PeakFields.RANGE, value: peakDetails.mainrange },
    { key: "region", field: PeakFields.REGION, value: peakDetails.region },
    { key: "countries", field: PeakFields.COUNTRY, value: peakDetails.countries },
    { key: "details", field: "Details", value: peakDetails.details },
    { key: "more-info", field: "More Info", link: peakDetails.url },
  ]

  return (
    <>
      {rows.map(({ key, field, content, value, tooltip, link }) => (
        <DataGridRow key={key} className="py-2.5">
          <DataGridCell>
            <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} alignment="center">
              <strong>{field}</strong>
              {tooltip && <HelpTooltip tooltipText={tooltip} />}
            </Stack>
          </DataGridCell>
          <DataGridCell>
            {content ||
              (link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                </a>
              ) : (
                value
              ))}
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}

export { PeakDetailPanelContent, DataGridRows }
