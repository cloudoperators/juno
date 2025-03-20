/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Stack,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@cloudoperators/juno-ui-components"
import HintNotFound from "../shared/HintNotFound"
import ServicesListItem from "./ServicesListItem"
import HintLoading from "../shared/HintLoading"

const ServicesList = ({ items, isLoading }: any) => {
  return (
    <>
      {/* clickableTable Table allow changes the background by css when hovering or active*/}
      <DataGrid minContentColumns={[3, 4]} columns={5} className="clickableTable">
        <DataGridRow>
          <DataGridHeadCell>Service</DataGridHeadCell>
          <DataGridHeadCell>Owners</DataGridHeadCell>
          <DataGridHeadCell>Support Groups</DataGridHeadCell>
          <DataGridHeadCell>
            <Stack direction="vertical">
              <Tooltip triggerEvent="hover">
                <TooltipTrigger>Pods</TooltipTrigger>
                <TooltipContent>Total Number of Pods</TooltipContent>
              </Tooltip>
            </Stack>
          </DataGridHeadCell>
          <DataGridHeadCell>
            <Stack direction="vertical">
              <Tooltip triggerEvent="hover">
                <TooltipTrigger>Vulnerabilities</TooltipTrigger>
                <TooltipContent>Total Number of Vulnerabilities</TooltipContent>
              </Tooltip>
            </Stack>
          </DataGridHeadCell>
        </DataGridRow>
        {isLoading && !items ? (
          <DataGridRow>
            <DataGridCell colSpan={10}>
              <HintLoading className="my-4" text="Loading services..." />
            </DataGridCell>
          </DataGridRow>
        ) : (
          <>
            {items?.length > 0 ? (
              <>
                {items.map((item: any, i: any) => (
                  <ServicesListItem key={i} item={item} />
                ))}
              </>
            ) : (
              <DataGridRow>
                <DataGridCell colSpan={5}>
                  <HintNotFound text="No services found" />
                </DataGridCell>
              </DataGridRow>
            )}
          </>
        )}
      </DataGrid>
    </>
  )
}
export default ServicesList
