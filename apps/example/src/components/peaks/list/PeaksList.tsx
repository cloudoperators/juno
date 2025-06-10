/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridCell,
  CodeBlock,
  JsonViewer,
  Spinner,
  Badge,
  DataGridHeadCell,
  Stack,
} from "@cloudoperators/juno-ui-components"

import { Peak } from "../../../mocks/db"
import useConfigStore from "../../../store/useConfigStore"

import Mountain from "../../../assets/mountain.svg?react"

import HelpTooltip from "../../common/HelpTooltip"
import GenericCard from "../../common/GenericCard"
import { Views, PeakFields, TooltipExplanation, DEFAULT_MEDIUM_APP_MARGIN } from "../../constants"
import HintNotFound from "../../messages/HintNotFound"

import PeaksListItem from "./PeaksListItem"

// Needs refactoring

interface PeaksListProps {
  viewType: string
  paginatedItems: Peak[]
  onSelect: (_peak: Peak) => void
}

const NO_PEAKS_HINT = "No peaks found"
const JSON_TITLE = "Raw JSON Data for All Peaks"

const PeaksList: React.FC<PeaksListProps> = ({ viewType, paginatedItems, onSelect }) => {
  const { isQueryClientReady } = useConfigStore()

  if (!isQueryClientReady) {
    return <Spinner variant="primary" />
  }

  if (viewType === Views.JSON) {
    return (
      <CodeBlock size="large">
        <JsonViewer data={paginatedItems} expanded={true} toolbar={true} title={JSON_TITLE} />
      </CodeBlock>
    )
  }

  if (paginatedItems.length === 0) {
    return <HintNotFound text={NO_PEAKS_HINT} />
  }

  if (viewType === Views.CARD) {
    return (
      <Stack gap={DEFAULT_MEDIUM_APP_MARGIN} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {paginatedItems.map((peak) => (
          <GenericCard
            key={String(peak.id)}
            iconElement={<Mountain />}
            title={`${peak.name}, ${peak.countries}`}
            badgeContainer={
              peak.safety ? (
                <Badge text={peak.safety.status} variant={peak.safety.variant} icon className="cursor-pointer" />
              ) : null
            }
            content={
              <p>
                <strong>{PeakFields.HEIGHT}:</strong> {peak.height}
              </p>
            }
            onClick={() => onSelect(peak)}
          />
        ))}
      </Stack>
    )
  }

  return (
    <DataGrid columns={7}>
      <DataGridRow>
        <DataGridHeadCell>
          <div className="flex items-center">
            <span className="mr-2">{PeakFields.SAFETY}</span>
            <HelpTooltip tooltipText={TooltipExplanation.SAFETY_STATUS} />
          </div>
        </DataGridHeadCell>
        <DataGridHeadCell>{PeakFields.NAME}</DataGridHeadCell>
        <DataGridHeadCell>
          <div className="flex items-center">
            <span className="mr-2">{PeakFields.HEIGHT}</span>
            <HelpTooltip tooltipText={TooltipExplanation.HEIGHT} />
          </div>
        </DataGridHeadCell>
        <DataGridHeadCell>{PeakFields.RANGE}</DataGridHeadCell>
        <DataGridHeadCell>{PeakFields.REGION}</DataGridHeadCell>
        <DataGridHeadCell>{PeakFields.COUNTRY}</DataGridHeadCell>
        <DataGridHeadCell>{PeakFields.ACTIONS}</DataGridHeadCell>
      </DataGridRow>
      {paginatedItems.length > 0 ? (
        paginatedItems.map((peak) => <PeaksListItem key={String(peak.id)} peak={peak} onSelect={onSelect} />)
      ) : (
        <DataGridRow>
          <DataGridCell colSpan={7}>
            <HintNotFound text={NO_PEAKS_HINT} />
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
}

export default PeaksList
