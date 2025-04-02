/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Panel, PanelBody, Stack, Badge, Pill, Label } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersion } from "../../utils"
import ImageVersionOccurrences from "./ImageVersionOccurrences"

type ImageVersionDetailsPanelProps = {
  imageVersion: ServiceImageVersion
  onClose: () => void
}

export const ImageVersionDetailsPanel = ({ imageVersion, onClose }: ImageVersionDetailsPanelProps) => {
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
            <Label text={`Image Instances (${imageVersion.componetInstancesCount || 0})`} />
            <ImageVersionOccurrences imageVersion={imageVersion} />
          </Stack>
        </Stack>
      </PanelBody>
    </Panel>
  )
}
