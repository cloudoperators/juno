/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ServiceImageVersion } from "../../../Services/utils"
import { DataGridRow, DataGridCell, Button, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { SeverityCount } from "../../SeverityCount"

type ImageVersionsDataRowProps = {
  version: ServiceImageVersion
  selected: boolean
  displayDetailsButton?: boolean
  onItemClick: React.MouseEventHandler<HTMLDivElement>
  onDetailClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export const ImageVersionsDataRow = ({
  version,
  selected = false,
  displayDetailsButton = true,
  onItemClick,
  onDetailClick,
}: ImageVersionsDataRowProps) => {
  return (
    <DataGridRow onClick={onItemClick} className={`cursor-pointer ${selected ? "active" : ""}`}>
      <DataGridCell className="service-image-versions-cell">
        <Stack gap="1" direction="vertical">
          <Stack gap="0.5" direction="vertical">
            <span>{version.repository}</span>
            <span className="text-sm text-theme-light">{version.version}</span>
          </Stack>
          <Stack gap="1" alignment="center">
            <a
              href={`https://${version.ccrn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Stack gap="1.5" alignment="center">
                <Icon icon="openInNew" size="16" color="global-text" />
                <span>Image registry</span>
              </Stack>
            </a>
          </Stack>
        </Stack>
      </DataGridCell>
      <DataGridCell className="service-image-versions-cell">{version.tag}</DataGridCell>
      <DataGridCell className="items-center">
        <span>{version.componentInstancesCount || 0}</span>
      </DataGridCell>
      <DataGridCell className="items-center">
        <SeverityCount
          severity="critical"
          count={version.issueCounts.critical}
          tooltipContent="Critical Vulnerabilities"
        />
      </DataGridCell>
      <DataGridCell className="items-center">
        <SeverityCount severity="high" count={version.issueCounts.high} tooltipContent="High Vulnerabilities" />
      </DataGridCell>
      <DataGridCell className="items-center">
        <SeverityCount severity="medium" count={version.issueCounts.medium} tooltipContent="Medium Vulnerabilities" />
      </DataGridCell>
      <DataGridCell className="items-center">
        <SeverityCount severity="low" count={version.issueCounts.low} tooltipContent="Low Vulnerabilities" />
      </DataGridCell>
      <DataGridCell className="items-center">
        <SeverityCount severity="unknown" count={version.issueCounts.none} tooltipContent="None Vulnerabilities" />
      </DataGridCell>
      {displayDetailsButton && (
        <DataGridCell>
          <Button size="small" label="Show Details" onClick={onDetailClick} />
        </DataGridCell>
      )}
    </DataGridRow>
  )
}
