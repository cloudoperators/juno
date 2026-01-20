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
  onFalsePositiveSuccess?: (cveNumber: string) => void
  onFalsePositiveError?: (error: Error, cveNumber: string) => void
}

export const IssuesDataRow = ({
  issue,
  service,
  image,
  showFalsePositiveAction = true,
  onFalsePositiveSuccess,
  onFalsePositiveError,
}: IssuesDataRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { needsExpansion, textRef } = useTextOverflow(issue?.description || "")
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })

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
    try {
      await createRemediation({ apiClient, input })
      setIsModalOpen(false)
      // Invalidate queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["images"] })
      queryClient.invalidateQueries({ queryKey: ["remediations"] })
      const cveNumber = issue?.name || "unknown"
      onFalsePositiveSuccess?.(cveNumber)
    } catch (error) {
      console.error("Failed to create remediation:", error)
      const cveNumber = issue?.name || "unknown"
      onFalsePositiveError?.(error instanceof Error ? error : new Error("Failed to create remediation"), cveNumber)
    }
  }

  const handleModalClose = () => {
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
                <PopupMenuItem label="False-positive" onClick={handleFalsePositiveClick} />
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
          service={service}
          image={image}
        />
      )}
    </>
  )
}
