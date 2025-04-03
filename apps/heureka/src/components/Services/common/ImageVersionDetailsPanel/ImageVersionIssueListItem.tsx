/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { DataGridRow, DataGridCell, Badge, Stack } from "@cloudoperators/juno-ui-components"
import { Icon } from "@cloudoperators/juno-ui-components"
import { IssueIcon } from "../../../common/IssueIcon/IssueIcon"
import { IssueTimestamp } from "../../../common/IssueTimestamp/IssueTimestamp"
import { Issue } from "../../utils"

const cellSeverityClasses = (severity: string) => {
  let borderColor = "border-text-theme-default"
  switch (severity.toLowerCase()) {
    case "critical":
      borderColor = "border-theme-danger"
      break
    case "high":
      borderColor = "border-theme-warning"
      break
    case "medium":
      borderColor = "border-theme-info"
      break
  }

  return `
    border-l-2
    ${borderColor}
    h-full
    pl-5
  `
}

type ImageVersionIssueListItemProps = {
  issue: Issue
}

export const ImageVersionIssueListItem = ({ issue }: ImageVersionIssueListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  return (
    <DataGridRow>
      <DataGridCell className="pl-0">
        <div className={cellSeverityClasses(issue.severity)}>
          <IssueIcon severity={issue.severity} />
        </div>
      </DataGridCell>

      <DataGridCell className="whitespace-nowrap">
        <Stack gap="2" direction="vertical">
          <span>{issue.name}</span>
          <a href={issue.sourceLink} target="_blank" rel="noopener noreferrer" className="link-hover">
            <Stack gap="1.5" alignment="center">
              <Icon icon="openInNew" size="16" />
              <span>Issue source</span>
            </Stack>
          </a>
        </Stack>
      </DataGridCell>
      <DataGridCell className="whitespace-nowrap">
        <IssueTimestamp targetDate={issue.earliestTargetRemediation} />
      </DataGridCell>
      <DataGridCell>
        {isExpanded ? (
          <Stack gap="2" direction="vertical">
            <span>{issue.description}</span>
            <a href="#" onClick={toggleDescription} className="link-hover">
              Show less
            </a>
          </Stack>
        ) : (
          <Stack gap="2" direction="vertical">
            <span>{issue.description.substring(0, 95)}...</span>
            <a href="#" onClick={toggleDescription} className="link-hover">
              Show more
            </a>
          </Stack>
        )}
      </DataGridCell>
    </DataGridRow>
  )
}
