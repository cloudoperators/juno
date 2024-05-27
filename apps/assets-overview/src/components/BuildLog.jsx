/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Icon,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "juno-ui-components"
import React from "react"

const DateString = ({ date }) => {
  const d = new Date(parseInt(date) * 1000)
  return d.toLocaleDateString() + " " + d.toLocaleTimeString()
}

const BuildLog = ({ data }) => {
  // unique list of data by name and version
  data = data
    .filter(
      (v, i, a) =>
        a.findIndex((t) => t.name === v.name && t.version === v.version) === i
    )
    .filter((i) => i.name !== null && i.name !== "")
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div>
      <DataGrid columns={5} minContentColumns={[0]}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Version</DataGridHeadCell>
          <DataGridHeadCell>Date</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Build Url</DataGridHeadCell>
          {/* <DataGridHeadCell>Files</DataGridHeadCell> */}
        </DataGridRow>
        {data &&
          data.map((asset, i) => (
            <DataGridRow key={i}>
              <DataGridCell>{asset.name}</DataGridCell>
              <DataGridCell>{asset.version}</DataGridCell>
              <DataGridCell>
                <DateString date={asset.date} />
              </DataGridCell>
              <DataGridCell>
                <Tooltip
                  triggerEvent="hover"
                  variant={asset.passed ? "success" : "warning"}
                >
                  <TooltipTrigger asChild>
                    {asset.passed ? (
                      <Icon
                        color="jn-text-theme-success"
                        icon="success"
                        onClick={function noRefCheck() {}}
                      />
                    ) : (
                      <Icon
                        color="jn-text-theme-warning"
                        icon="warning"
                        onClick={function noRefCheck() {}}
                      />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    {asset.check} check: {asset.passed ? "passed" : asset.error}
                  </TooltipContent>
                </Tooltip>
              </DataGridCell>
              <DataGridCell>
                <a href={asset.buildUrl} target="_blank">
                  Show Details
                </a>
              </DataGridCell>
              {/* <DataGridCell>
                <ul>
                  <li>
                    <a href={`/build-log/${asset.log}/report.txt`}>Report</a>
                  </li>
                  <li>
                    <a href={`/build-log/${asset.log}/screenshot`}>
                      Scrennshot
                    </a>
                  </li>
                  <li>
                    <a href={`/build-log/${asset.log}/video`}>Video</a>
                  </li>
                </ul>
              </DataGridCell> */}
            </DataGridRow>
          ))}
      </DataGrid>
    </div>
  )
}

export default BuildLog
