/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { ApolloQueryResult } from "@apollo/client"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow"
import { ServicePanel } from "./ServicePanel"
import { GetServicesQuery } from "../../../generated/graphql"
import { ServicesDataRows } from "./ServicesDataRows"
import { ServicesPagination } from "./ServicesPagination"

const COLUMN_SPAN = 8

type ServiceListProps = {
  selectedService?: string
  servicesPromise: Promise<ApolloQueryResult<GetServicesQuery>>
}

export const ServicesList = ({ servicesPromise, selectedService }: ServiceListProps) => (
  <div className="datagrid-hover">
    <DataGrid minContentColumns={[1, 2, 3, 4, 5, 7]} columns={COLUMN_SPAN}>
      <DataGridRow>
        <DataGridHeadCell>Service</DataGridHeadCell>
        <DataGridHeadCell colSpan={5} className="whitespace-nowrap">
          Issue Counts
        </DataGridHeadCell>
        <DataGridHeadCell>Details</DataGridHeadCell>
        <DataGridHeadCell></DataGridHeadCell>
      </DataGridRow>
      <Suspense
        fallback={
          <EmptyDataGridRow colSpan={COLUMN_SPAN}>
            <Stack gap="2" alignment="center">
              <div>Loading</div>
              <Spinner variant="primary"></Spinner>
            </Stack>
          </EmptyDataGridRow>
        }
      >
        <ServicesDataRows servicesPromise={servicesPromise} selectedService={selectedService} />
      </Suspense>
    </DataGrid>
    <Suspense>
      <ServicesPagination servicesPromise={servicesPromise} />
    </Suspense>
    <ServicePanel selectedService={selectedService} />
  </div>
)
