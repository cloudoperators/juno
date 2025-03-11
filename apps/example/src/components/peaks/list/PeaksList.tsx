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
} from "@cloudoperators/juno-ui-components"

import GenericCard from "../../common/GenericCard"
import HintNotFound from "../../messages/HintNotFound"
import { Views, PeakFields } from "../../constants"

import { Peak } from "../../../mocks/db"
import PeaksListItem from "./PeaksListItem"
import HelpTooltip from "../../common/HelpTooltip"
import { TooltipExplanation } from "../../constants"

interface PeaksListProps {
  viewType: string
  paginatedItems: Peak[]
  // eslint-disable-next-line no-unused-vars
  onSelect: (peak: Peak) => void
  isLoading: boolean
}

const NO_PEAKS_HINT = "No peaks found"
const JSON_TITLE = "Raw JSON Data for All Peaks"

const PeaksList: React.FC<PeaksListProps> = ({ viewType, paginatedItems, onSelect, isLoading }) => {
  if (viewType === Views.JSON) {
    return (
      <CodeBlock size="large">
        <JsonViewer data={paginatedItems} expanded={true} toolbar={true} title={JSON_TITLE} />
      </CodeBlock>
    )
  }

  if (viewType === Views.CARD) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedItems.map((peak) => (
          <GenericCard
            key={String(peak.id)}
            iconElement={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-6"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            }
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
      </div>
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
        <DataGridHeadCell>{PeakFields.HEIGHT}</DataGridHeadCell>
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
            {isLoading ? <Spinner variant="primary" /> : <HintNotFound text={NO_PEAKS_HINT} />}
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
}

export default PeaksList
