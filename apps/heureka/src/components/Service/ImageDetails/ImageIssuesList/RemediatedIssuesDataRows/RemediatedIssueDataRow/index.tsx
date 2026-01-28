/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
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
import { RemediatedVulnerability } from "../../../../../Services/utils"
import { useTextOverflow } from "../../../../../../utils"

const cellSeverityClasses = () => {
  // For remediated vulnerabilities, we don't have severity info
  // Using a neutral border color
  return `
    border-l-2
    border-theme-default
    h-full
    pl-5
  `
}

type RemediatedIssueDataRowProps = {
  remediation: RemediatedVulnerability
  onRevert: (remediationId: string) => Promise<void>
}

export const RemediatedIssueDataRow = ({ remediation, onRevert }: RemediatedIssueDataRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isReverting, setIsReverting] = useState(false)
  const { needsExpansion, textRef } = useTextOverflow(remediation.description || "")

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const handleRevertClick = async () => {
    setIsReverting(true)
    try {
      await onRevert(remediation.remediationId)
    } catch (error) {
      console.error("Failed to revert remediation:", error)
    } finally {
      setIsReverting(false)
    }
  }

  return (
    <DataGridRow>
      <DataGridCell className="pl-0">
        <div className={cellSeverityClasses()}>
          <Icon icon="checkCircle" color="success" />
        </div>
      </DataGridCell>

      <DataGridCell className="whitespace-nowrap">
        <Stack gap="2" direction="vertical">
          <span>{remediation.vulnerability || "N/A"}</span>
        </Stack>
      </DataGridCell>
      <DataGridCell>
        <Stack gap="2" direction="vertical">
          <span ref={textRef} className={isExpanded ? "" : "whitespace-nowrap overflow-hidden text-ellipsis"}>
            {remediation.description || "No description available"}
          </span>
          {remediation.description && needsExpansion && (
            <a href="#" onClick={toggleDescription} className="link-hover">
              <Stack alignment="center">
                {isExpanded ? "Show less" : "Show more"}
                <Icon color="global-text" icon={isExpanded ? "expandLess" : "expandMore"} />
              </Stack>
            </a>
          )}
        </Stack>
      </DataGridCell>
      <DataGridCell className="cursor-default interactive" onClick={(e) => e.stopPropagation()}>
        <PopupMenu icon="moreVert" className="whitespace-nowrap" disabled={isReverting}>
          <PopupMenuOptions>
            <PopupMenuItem
              label={isReverting ? "Reverting..." : "Revert false positive"}
              onClick={handleRevertClick}
              disabled={isReverting}
            />
          </PopupMenuOptions>
        </PopupMenu>
      </DataGridCell>
    </DataGridRow>
  )
}
