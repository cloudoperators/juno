/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ServiceImageVersion } from "../../utils"
import { DataGridRow, DataGridCell, Button, Badge, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { IssuesCountBadges } from "../../../common/IssuesCountBadges"

type ServiceImageVersionsItemProps = {
  version: ServiceImageVersion
  selected: boolean
  displayDetailsButton: boolean
  onItemClick: React.MouseEventHandler<HTMLDivElement>
  onDetailClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

const ServiceImageVersionsItem = ({
  version,
  selected = false,
  displayDetailsButton = true,
  onItemClick,
  onDetailClick,
}: ServiceImageVersionsItemProps) => {
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
                <Icon icon="openInNew" size="16" color="jn-global-text" />
                <span>Image registery</span>
              </Stack>
            </a>
          </Stack>
        </Stack>
      </DataGridCell>
      <DataGridCell className="service-image-versions-cell">{version.tag}</DataGridCell>
      <DataGridCell>
        <IssuesCountBadges counts={version.issueCounts} />
      </DataGridCell>
      {displayDetailsButton && (
        <DataGridCell>
          <Button size="small" label="Show Details" onClick={onDetailClick} />
        </DataGridCell>
      )}
    </DataGridRow>
  )
}

export default ServiceImageVersionsItem
