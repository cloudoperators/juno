/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useQuery } from "@tanstack/react-query"
import {
  ContentHeading,
  Container,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsQueryClientFnReady, useGlobalsQueryOptions, useGlobalsActions } from "../StoreProvider"
import LoadElement from "../shared/LoadElement"
import { severityString, highestSeverity } from "../shared/Helper"
import PaginationComponent from "../shared/PaginationComponent"
import HintNotFound from "../shared/HintNotFound"

const ComponentInstancesList = ({ serviceCcrn }) => {
  const queryOptions = useGlobalsQueryOptions("ComponentInstancesOfService")
  const { setQueryOptions } = useGlobalsActions()
  const queryClientFnReady = useGlobalsQueryClientFnReady()

  const { data, isLoading } = useQuery({
    queryKey: [
      "ComponentInstancesOfService",
      {
        ...queryOptions,
        filter: { serviceCcrn: [serviceCcrn] },
      },
    ],
    enabled: !!queryClientFnReady && !!serviceCcrn,
  })

  const items = data?.ComponentInstances?.edges || []

  return (
    <>
      <ContentHeading className="mt-8 mb-2" heading="Pods" />
      <DataGrid columns={4}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Version</DataGridHeadCell>
          <DataGridHeadCell>Total Number of Issues</DataGridHeadCell>
          <DataGridHeadCell>Highest Severity</DataGridHeadCell>
        </DataGridRow>
        {isLoading ? (
          <DataGridRow>
            <DataGridCell colSpan={4}>
              <Container py>
                <LoadElement />
              </Container>
            </DataGridCell>
          </DataGridRow>
        ) : items.length === 0 ? (
          <HintNotFound text="No component instances available." />
        ) : (
          items.map((componentInstance, i) => (
            <DataGridRow key={i}>
              <DataGridCell>{componentInstance?.node?.ccrn}</DataGridCell>
              <DataGridCell className="break-all overflow-hidden">
                {componentInstance?.node?.componentVersion?.version}
              </DataGridCell>
              <DataGridCell>{componentInstance?.node?.issueMatches?.totalCount}</DataGridCell>
              <DataGridCell>
                {severityString(highestSeverity(componentInstance?.node?.issueMatches?.edges))}
              </DataGridCell>
            </DataGridRow>
          ))
        )}
      </DataGrid>
      <PaginationComponent
        queryKey="ComponentInstancesOfService"
        queryOptions={queryOptions}
        entityName="ComponentInstances"
        setQueryOptions={setQueryOptions}
        countData={data}
      />
    </>
  )
}

export default ComponentInstancesList
