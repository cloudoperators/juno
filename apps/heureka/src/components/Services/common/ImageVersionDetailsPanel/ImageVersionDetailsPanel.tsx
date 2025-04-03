/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Panel, PanelBody, Stack, Badge, Pill, Label } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersion } from "../../utils"

type ImageVersionDetailsPanelProps = {
  imageVersion: ServiceImageVersion
  onClose: () => void
}

export const ImageVersionDetailsPanel = ({ imageVersion, onClose }: ImageVersionDetailsPanelProps) => {
  const [showOccurrences, setShowOccurrences] = useState(false)

  return (
    <Panel heading={`Image ${imageVersion.repository} Information`} opened={true} onClose={onClose} size="large">
      <PanelBody>
        <Stack gap="6" direction="vertical" className="w-full">
          <Stack gap="4" direction="vertical">
            {/* Component Details Row */}
            <Stack gap="2" direction="horizontal">
              <Label text="Image Details: " />
              <Stack direction="horizontal" gap="2" wrap>
                <Pill pillKey="tag" pillKeyLabel="tag" pillValue={imageVersion.tag} pillValueLabel={imageVersion.tag} />
                <Pill
                  pillKey="repository"
                  pillKeyLabel="repository"
                  pillValue={imageVersion.repository}
                  pillValueLabel={imageVersion.repository}
                />
                <Pill
                  pillKey="version"
                  pillKeyLabel="version"
                  pillValue={imageVersion.version}
                  pillValueLabel={imageVersion.version}
                />
              </Stack>
            </Stack>

            {/* Issues Count Row */}
            <Stack gap="2" direction="horizontal">
              <Label text="Number of Issues: " />
              <Stack direction="horizontal" gap="4" alignment="center">
                <Stack direction="horizontal" gap="2" alignment="center">
                  <span>Critical:</span>
                  <Badge
                    icon="danger"
                    text={`${imageVersion.issueCounts?.critical || 0}`}
                    variant={imageVersion.issueCounts?.critical > 0 ? "danger" : "default"}
                  />
                </Stack>
                <Stack direction="horizontal" gap="2" alignment="center">
                  <span>High:</span>
                  <Badge
                    icon="warning"
                    text={`${imageVersion.issueCounts?.high || 0}`}
                    variant={imageVersion.issueCounts?.high > 0 ? "warning" : "default"}
                  />
                </Stack>
                <Stack direction="horizontal" gap="2" alignment="center">
                  <span>Low:</span>
                  <span>{imageVersion.issueCounts?.low || 0}</span>
                </Stack>
              </Stack>
            </Stack>

            {/* Occurrences Section */}
            <Stack gap="2" direction="vertical">
              <Stack gap="2" direction="horizontal" alignment="center">
                <Label text="Image Instances: " />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowOccurrences(!showOccurrences)
                  }}
                  className="hover:underline text-sm"
                >
                  {showOccurrences ? "Hide Occurrences" : "Show Occurrences"} (
                  {imageVersion.componetInstancesCount || 0})
                </a>
              </Stack>
              {showOccurrences && (
                <Stack gap="4" direction="vertical" className="pl-4">
                  {imageVersion.componentInstances && imageVersion.componentInstances.length > 0 ? (
                    <Stack gap="2" direction="vertical">
                      {imageVersion.componentInstances.map((componentInstance) => (
                        <Stack key={`${componentInstance?.ccrn}-${componentInstance?.id}`} gap="2" direction="vertical">
                          <span>{componentInstance?.region || "-"}</span>
                          <span>{componentInstance?.cluster || "-"}</span>
                          <span>{componentInstance?.namespace || "-"}</span>
                          <span>{componentInstance?.pod || "-"}</span>
                          <span>{componentInstance?.container || "-"}</span>
                        </Stack>
                      ))}
                    </Stack>
                  ) : (
                    <span className="text-theme-light">No image instances found</span>
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </PanelBody>
    </Panel>
  )
}
