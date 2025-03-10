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
import PeaksListItem from "./PeaksListItem"
import HintNotFound from "../../messages/HintNotFound"
import { Views } from "../../constants"

const PeaksList = ({ viewType, paginatedItems, onSelect, isLoading }) => {
  if (viewType === Views.JSON) {
    return (
      <CodeBlock size="large">
        <JsonViewer data={paginatedItems} expanded={true} toolbar={true} title="Raw JSON Data for All Peaks" />
      </CodeBlock>
    )
  }
  if (viewType === Views.CARD) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedItems.map((peak) => (
          <GenericCard
            key={peak.id}
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
              <Badge text={peak.safety.status} variant={peak.safety.variant} icon className="cursor-pointer" />
            }
            content={
              <p>
                <strong>Height:</strong> {peak.height}
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
        <DataGridHeadCell>Safety</DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Height</DataGridHeadCell>
        <DataGridHeadCell>Main Range</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Country</DataGridHeadCell>
        <DataGridHeadCell>Actions</DataGridHeadCell>
      </DataGridRow>
      {paginatedItems.length > 0 ? (
        paginatedItems.map((peak) => <PeaksListItem key={peak.id} peak={peak} onSelect={onSelect} />)
      ) : (
        <DataGridRow>
          <DataGridCell colSpan={7}>
            {isLoading ? <Spinner variant="primary" /> : <HintNotFound text="No peaks found" />}
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
}

export default PeaksList
