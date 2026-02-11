/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  DataGridRow,
  DataGridCell,
  Stack,
  PopupMenu,
  PopupMenuOptions,
  PopupMenuItem,
} from "@cloudoperators/juno-ui-components"
import { Icon } from "@cloudoperators/juno-ui-components"
import { IssueIcon } from "../../../../../common/IssueIcon"
import { IssueTimestamp } from "../../../../../common/IssueTimestamp"
import { ImageVulnerability } from "../../../../../Services/utils"
import { getSeverityColor, useTextOverflow } from "../../../../../../utils"
import { FalsePositiveModal } from "../../../FalsePositiveModal"
import { useRouteContext } from "@tanstack/react-router"
import { createRemediation } from "../../../../../../api/createRemediation"
import { RemediationInput } from "../../../../../../generated/graphql"

const cellSeverityClasses = (severity: string) => {
  const borderColor = getSeverityColor(severity.toLowerCase())

  return `
    border-l-2
    ${borderColor}
    h-full
    pl-5
  `
}

type IssuesDataRowProps = {
  issue: ImageVulnerability
  service: string
  image: string
  showFalsePositiveAction?: boolean
  onFalsePositiveSuccess?: (cveNumber: string) => void | Promise<void>
}

export const IssuesDataRow = ({
  issue,
  service,
  image,
  showFalsePositiveAction = true,
  onFalsePositiveSuccess,
}: IssuesDataRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)
  const { needsExpansion, textRef } = useTextOverflow(issue?.description || "")
  const { apiClient } = useRouteContext({ from: "/services/$service" })

  if (!issue || !issue.name) {
    return null
  }

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const handleFalsePositiveClick = () => {
    setIsModalOpen(true)
  }

  const handleModalConfirm = async (input: RemediationInput) => {
    setCreateError(null)
    try {
      await createRemediation({ apiClient, input })
      setIsModalOpen(false)
      const cveNumber = issue?.name || "unknown"
      await onFalsePositiveSuccess?.(cveNumber)
    } catch (error) {
      setCreateError(error instanceof Error ? error.message : "Failed to create remediation")
    }
  }

  const handleModalClose = () => {
    setCreateError(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <DataGridRow>
        <DataGridCell className="pl-0">
          <div className={cellSeverityClasses(issue.severity)}>
            <IssueIcon severity={issue.severity} />
          </div>
        </DataGridCell>

        <DataGridCell className="whitespace-nowrap">
          <Stack gap="2" direction="vertical">
            <span>{issue.name}</span>
            {issue.sourceUrl && issue.sourceUrl !== "-" && (
              <a href={issue.sourceUrl} target="_blank" rel="noopener noreferrer" className="link-hover">
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
        <DataGridCell>
          <Stack gap="2" direction="vertical">
            <span ref={textRef} className={isExpanded ? "" : "whitespace-nowrap overflow-hidden text-ellipsis"}>
              {issue.description}
            </span>
            {issue.description && needsExpansion && (
              <a href="#" onClick={toggleDescription} className="link-hover">
                <Stack alignment="center">
                  {isExpanded ? "Show less" : "Show more"}
                  <Icon color="global-text" icon={isExpanded ? "expandLess" : "expandMore"} />
                </Stack>
              </a>
            )}
          </Stack>
        </DataGridCell>
        {showFalsePositiveAction && (
          <DataGridCell className="cursor-default interactive" onClick={(e) => e.stopPropagation()}>
            <PopupMenu icon="moreVert" className="whitespace-nowrap">
              <PopupMenuOptions>
                <PopupMenuItem label="Mark False Positive" onClick={handleFalsePositiveClick} />
              </PopupMenuOptions>
            </PopupMenu>
          </DataGridCell>
        )}
      </DataGridRow>
      {showFalsePositiveAction && (
        <FalsePositiveModal
          open={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
          vulnerability={issue.name}
          severity={issue.severity}
          service={service}
          image={image}
          errorMessage={createError}
        />
      )}
    </>
  )
}
