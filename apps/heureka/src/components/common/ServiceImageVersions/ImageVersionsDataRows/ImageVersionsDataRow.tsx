/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ServiceImage } from "../../../Services/utils"
import { DataGridRow, DataGridCell, Button, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { SeverityCount } from "../../SeverityCount"

type ImageVersionsDataRowProps = {
  version: ServiceImage
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
            {version.versionsCount !== undefined && version.versionsCount > 0 && (
              <span className="text-sm text-theme-light">{version.versionsCount} version{version.versionsCount !== 1 ? 's' : ''}</span>
            )}
          </Stack>
          <Stack gap="1" alignment="center">
            {version.imageRegistryUrl && (
              <a
                href={
                  version.imageRegistryUrl.startsWith("http://") || version.imageRegistryUrl.startsWith("https://")
                    ? version.imageRegistryUrl
                    : `https://${version.imageRegistryUrl}`
                }
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
            )}
          </Stack>
        </Stack>
      </DataGridCell>
      <DataGridCell className="service-image-versions-cell">
        {version.versionsCount !== undefined ? `${version.versionsCount} version${version.versionsCount !== 1 ? 's' : ''}` : '-'}
      </DataGridCell>
      <DataGridCell className="items-center">
        <span>{version.componentInstancesCount || 0}</span>
      </DataGridCell>
      {/* Due to UX designer feedback, when showing counts with severity icons in datagrid cells,
          we override the default padding (5px horizontal, 3px vertical) and instead only use px-2 */}
      <DataGridCell className="items-center !px-2">
        <SeverityCount
          severity="critical"
          count={version.issueCounts.critical}
          tooltipContent="Critical Vulnerabilities"
        />
      </DataGridCell>
      <DataGridCell className="items-center !px-2">
        <SeverityCount severity="high" count={version.issueCounts.high} tooltipContent="High Vulnerabilities" />
      </DataGridCell>
      <DataGridCell className="items-center !px-2">
        <SeverityCount severity="medium" count={version.issueCounts.medium} tooltipContent="Medium Vulnerabilities" />
      </DataGridCell>
      <DataGridCell className="items-center !px-2">
        <SeverityCount severity="low" count={version.issueCounts.low} tooltipContent="Low Vulnerabilities" />
      </DataGridCell>
      <DataGridCell className="items-center !px-2">
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
