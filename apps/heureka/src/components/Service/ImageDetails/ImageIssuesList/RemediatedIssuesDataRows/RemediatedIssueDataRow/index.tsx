/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { DataGridRow, DataGridCell, Stack } from "@cloudoperators/juno-ui-components"
import { Icon } from "@cloudoperators/juno-ui-components"
import { IssueIcon } from "../../../../../common/IssueIcon"
import { IssueTimestamp } from "../../../../../common/IssueTimestamp"
import { ImageVulnerability } from "../../../../../Services/utils"
import { getSeverityColor, useTextOverflow } from "../../../../../../utils"

const cellSeverityClasses = (severity: string) => {
  const borderColor = getSeverityColor(severity.toLowerCase())
  return `
    border-l-2
    ${borderColor}
    h-full
    pl-5
  `
}

type RemediatedIssueDataRowProps = {
  issue: ImageVulnerability
  selected?: boolean
  onSelect: () => void
}

export const RemediatedIssueDataRow = ({ issue, selected, onSelect }: RemediatedIssueDataRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { needsExpansion, textRef } = useTextOverflow(issue?.description || "")

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  if (!issue?.name) {
    return null
  }

  return (
    <DataGridRow
      onClick={onSelect}
      className={selected ? "bg-theme-background-selected cursor-pointer" : "cursor-pointer"}
    >
      <DataGridCell className="pl-0">
        <div className={cellSeverityClasses(issue.severity)}>
          <IssueIcon severity={issue.severity} />
        </div>
      </DataGridCell>

      <DataGridCell className="whitespace-nowrap">
        <Stack gap="2" direction="vertical">
          <span>{issue.name}</span>
          {issue.sourceUrl && issue.sourceUrl !== "-" && (
            <a
              href={issue.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover"
              onClick={(e) => e.stopPropagation()}
            >
              <Stack gap="1.5" alignment="center">
                <Icon icon="openInNew" size="16" />
                <span>Vulnerability source</span>
              </Stack>
            </a>
          )}
        </Stack>
      </DataGridCell>
      <DataGridCell className="whitespace-nowrap">
        <IssueTimestamp targetDate={issue.earliestTargetRemediationDate} />
      </DataGridCell>
      <DataGridCell className="min-w-0">
        <Stack gap="2" direction="vertical">
          <span
            ref={textRef}
            className={isExpanded ? "" : "whitespace-nowrap overflow-hidden text-ellipsis max-w-full"}
          >
            {issue.description}
          </span>
          {issue.description && needsExpansion && (
            <a
              href="#"
              onClick={(e) => {
                e.stopPropagation()
                toggleDescription(e)
              }}
              className="link-hover"
            >
              <Stack alignment="center">
                {isExpanded ? "Show less" : "Show more"}
                <Icon color="global-text" icon={isExpanded ? "expandLess" : "expandMore"} />
              </Stack>
            </a>
          )}
        </Stack>
      </DataGridCell>
    </DataGridRow>
  )
}
