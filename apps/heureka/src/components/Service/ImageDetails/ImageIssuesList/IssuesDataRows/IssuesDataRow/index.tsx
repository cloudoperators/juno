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
  Spinner,
  Icon,
} from "@cloudoperators/juno-ui-components"
import { IssueIcon } from "../../../../../common/IssueIcon"
import { IssueTimestamp } from "../../../../../common/IssueTimestamp"
import { ImageVulnerability } from "../../../../../Services/utils"
import { getSeverityColor, useTextOverflow } from "../../../../../../utils"
import { FalsePositiveModal } from "../../../FalsePositiveModal"
import { RiskAcceptanceModal } from "../../../RiskAcceptanceModal"
import { MitigateManuallyModal } from "../../../MitigateManuallyModal"
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
  onRiskAcceptanceSuccess?: (cveNumber: string) => void | Promise<void>
  onMitigateManuallySuccess?: (cveNumber: string) => void | Promise<void>
}

export const IssuesDataRow = ({
  issue,
  service,
  image,
  showFalsePositiveAction = true,
  onFalsePositiveSuccess,
  onRiskAcceptanceSuccess,
  onMitigateManuallySuccess,
}: IssuesDataRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRiskAcceptanceModalOpen, setIsRiskAcceptanceModalOpen] = useState(false)
  const [isMitigateManuallyModalOpen, setIsMitigateManuallyModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { needsExpansion, textRef } = useTextOverflow(issue?.description || "")
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })

  if (!issue || !issue.name) {
    return null
  }

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const handleModalConfirm = async (input: RemediationInput): Promise<{ error: string } | void> => {
    setIsSubmitting(true)
    try {
      const remediation = await createRemediation({ apiClient, input })
      const cveNumber = issue?.name || "unknown"
      if (remediation) {
        queryClient.setQueriesData(
          {
            predicate: (query) => {
              const [key, filter] = query.queryKey as [string, any]
              if (key !== "remediations") return false
              if (filter?.service && !filter.service.includes(service)) return false
              if (filter?.image && !filter.image.includes(image)) return false
              if (filter?.vulnerability && !filter.vulnerability.includes(cveNumber)) return false
              return true
            },
          },

          (old: any) => {
            if (!old?.data?.Remediations) return old
            const edges = old.data.Remediations.edges ?? []

            if (edges.some((e: any) => e?.node?.id === remediation.id)) return old
            return {
              ...old,
              data: {
                ...old.data,
                Remediations: {
                  ...old.data.Remediations,
                  edges: [...edges, { node: remediation }],
                  totalCount: (old.data.Remediations.totalCount ?? 0) + 1,
                },
              },
            }
          }
        )
      }
      await onFalsePositiveSuccess?.(cveNumber)
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Failed to create remediation" }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRiskAcceptanceConfirm = async (input: RemediationInput): Promise<{ error: string } | void> => {
    setIsSubmitting(true)
    try {
      const remediation = await createRemediation({ apiClient, input })
      const cveNumber = issue?.name || "unknown"
      if (remediation) {
        queryClient.setQueriesData(
          {
            predicate: (query) => {
              const [key, filter] = query.queryKey as [string, any]
              if (key !== "remediations") return false
              if (filter?.service && !filter.service.includes(service)) return false
              if (filter?.image && !filter.image.includes(image)) return false
              if (filter?.vulnerability && !filter.vulnerability.includes(cveNumber)) return false
              return true
            },
          },

          (old: any) => {
            if (!old?.data?.Remediations) return old
            const edges = old.data.Remediations.edges ?? []

            if (edges.some((e: any) => e?.node?.id === remediation.id)) return old
            return {
              ...old,
              data: {
                ...old.data,
                Remediations: {
                  ...old.data.Remediations,
                  edges: [...edges, { node: remediation }],
                  totalCount: (old.data.Remediations.totalCount ?? 0) + 1,
                },
              },
            }
          }
        )
      }
      await onRiskAcceptanceSuccess?.(cveNumber)
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Failed to create remediation" }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMitigateManuallyConfirm = async (input: RemediationInput): Promise<{ error: string } | void> => {
    setIsSubmitting(true)
    try {
      const remediation = await createRemediation({ apiClient, input })
      const cveNumber = issue?.name || "unknown"
      if (remediation) {
        queryClient.setQueriesData(
          {
            predicate: (query) => {
              const [key, filter] = query.queryKey as [string, any]
              if (key !== "remediations") return false
              if (filter?.service && !filter.service.includes(service)) return false
              if (filter?.image && !filter.image.includes(image)) return false
              if (filter?.vulnerability && !filter.vulnerability.includes(cveNumber)) return false
              return true
            },
          },
          (old: any) => {
            if (!old?.data?.Remediations) return old
            const edges = old.data.Remediations.edges ?? []
            if (edges.some((e: any) => e?.node?.id === remediation.id)) return old
            return {
              ...old,
              data: {
                ...old.data,
                Remediations: {
                  ...old.data.Remediations,
                  edges: [...edges, { node: remediation }],
                  totalCount: (old.data.Remediations.totalCount ?? 0) + 1,
                },
              },
            }
          }
        )
      }
      await onMitigateManuallySuccess?.(cveNumber)
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Failed to create remediation" }
    } finally {
      setIsSubmitting(false)
    }
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
            {isSubmitting ? (
              <Spinner variant="primary" size="small" className="ml-auto" />
            ) : (
              <PopupMenu icon="moreVert" className="whitespace-nowrap ml-auto">
                <PopupMenuOptions>
                  <PopupMenuItem label="Mark False Positive" onClick={() => setIsModalOpen(true)} />
                  <PopupMenuItem label="Accept Risk" onClick={() => setIsRiskAcceptanceModalOpen(true)} />
                  <PopupMenuItem label="Mitigate Manually" onClick={() => setIsMitigateManuallyModalOpen(true)} />
                </PopupMenuOptions>
              </PopupMenu>
            )}
          </DataGridCell>
        )}
      </DataGridRow>
      {showFalsePositiveAction && (
        <>
          <FalsePositiveModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleModalConfirm}
            vulnerability={issue.name}
            severity={issue.severity}
            service={service}
            image={image}
          />
          <RiskAcceptanceModal
            open={isRiskAcceptanceModalOpen}
            onClose={() => setIsRiskAcceptanceModalOpen(false)}
            onConfirm={handleRiskAcceptanceConfirm}
            vulnerability={issue.name}
            severity={issue.severity}
            service={service}
            image={image}
          />
          <MitigateManuallyModal
            open={isMitigateManuallyModalOpen}
            onClose={() => setIsMitigateManuallyModalOpen(false)}
            onConfirm={handleMitigateManuallyConfirm}
            vulnerability={issue.name}
            severity={issue.severity}
            service={service}
            image={image}
          />
        </>
      )}
    </>
  )
}
