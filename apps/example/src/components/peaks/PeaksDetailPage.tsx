/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Stack,
  ContentHeading,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  Button,
  Icon,
} from "@cloudoperators/juno-ui-components"

const PeaksDetailPage: React.FC = () => {
  {
    /* Detail Page */
  }
  return (
    <>
      {/* should be on higher level */}
      <Breadcrumb>
        <BreadcrumbItem label="Overview" />
        <BreadcrumbItem active={true} label="Ama Dablam" />
      </Breadcrumb>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <ContentHeading>Ama Dablam</ContentHeading>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Icon icon="openInNew" href={""} target="_blank" />
          <Icon icon="edit" onClick={() => ""} />
          <Icon icon="deleteForever" onClick={() => ""} />
        </div>
      </div>
      <div> Details</div>
      <DataGrid columns={2}>
        <DataGridRow>
          <DataGridHeadCell>Height</DataGridHeadCell>
          <DataGridCell>6814m</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell>Main Range</DataGridHeadCell>
          <DataGridCell> Hello</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridCell>Khumbu</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell>Country</DataGridHeadCell>
          <DataGridCell>Nepal</DataGridCell>
        </DataGridRow>
      </DataGrid>
    </>
  )
}

export default PeaksDetailPage
