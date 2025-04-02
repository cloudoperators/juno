import React from "react"
import { ServiceImageVersion } from "./ServiceImageVersions"
import { DataGridRow, DataGridCell, Button, Badge, Icon, Stack } from "@cloudoperators/juno-ui-components"

type ServiceImageVersionsItemProps = {
  version: ServiceImageVersion
  selected: boolean
  displayDetailsButton: boolean
  onItemClick: () => void
  onDetailClick: (e: React.MouseEvent<HTMLDivElement>) => void
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
            <span>{version.imageRepository}</span>
            <span className="text-sm text-theme-light">{version.imageVersion}</span>
          </Stack>
          <Stack gap="1" alignment="center">
            <a
              href={`https://${version.imageName}`}
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
      <DataGridCell className="service-image-versions-cell">{version.imageTag}</DataGridCell>
      <DataGridCell>
        {version.issueCounts.critical ? (
          <Badge icon text={version.issueCounts.critical.toString()} variant="danger" />
        ) : (
          "-"
        )}
      </DataGridCell>
      <DataGridCell>
        {version.issueCounts.high ? <Badge icon text={version.issueCounts.high.toString()} variant="warning" /> : "-"}
      </DataGridCell>
      <DataGridCell>{version.issueCounts.medium || "-"}</DataGridCell>
      <DataGridCell>{version.issueCounts.low || "-"}</DataGridCell>
      <DataGridCell>
        {displayDetailsButton && <Button size="small" label="Show Details" onClick={onDetailClick} />}
      </DataGridCell>
    </DataGridRow>
  )
}

export default ServiceImageVersionsItem
