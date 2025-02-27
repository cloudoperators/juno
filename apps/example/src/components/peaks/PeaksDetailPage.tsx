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
} from "@cloudoperators/juno-ui-components"

const PeaksDetailPage: React.FC = () => {
  {
    /* Detail Page */
  }
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem label="Peaks" />
        <BreadcrumbItem label="Ama Dablam" />
      </Breadcrumb>
      <Stack gap="6">
        <ContentHeading>Ama Dablam</ContentHeading>
      </Stack>
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
        <DataGridRow>
          <DataGridHeadCell>Actions</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="1.5">
              <Button icon="edit" onClick={() => ""} variant="primary" />
              <Button icon="deleteForever" onClick={() => ""} variant="primary-danger" />
              <Button icon="openInNew" href={""} target="_blank" />
            </Stack>
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </>
  )
}

export default PeaksDetailPage
