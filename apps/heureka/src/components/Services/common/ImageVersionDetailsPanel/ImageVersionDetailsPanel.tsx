/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  Panel,
  PanelBody,
  Stack,
  Badge,
  Pill,
  Label,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
} from "@cloudoperators/juno-ui-components"
import { ServiceImageVersion } from "../../utils"
import ImageVersionOccurrences from "./ImageVersionOccurrences"
import { IssuesCountBadges } from "../../../common/IssuesCountBadges"

type ImageVersionDetailsPanelProps = {
  imageVersion: ServiceImageVersion
  onClose: () => void
}

export const ImageVersionDetailsPanel = ({ imageVersion, onClose }: ImageVersionDetailsPanelProps) => {
  return (
    <Panel heading={`Image ${imageVersion.repository} Information`} opened={true} onClose={onClose} size="large">
      <PanelBody>
        <DataGrid columns={2}>
          <DataGridRow>
            <DataGridHeadCell>Details</DataGridHeadCell>
            <DataGridCell>
              <Stack gap="1" direction="horizontal" wrap>
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
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>Issues</DataGridHeadCell>
            <DataGridCell>
              <IssuesCountBadges counts={imageVersion.issueCounts} />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>{`Instances (${imageVersion.componetInstancesCount || 0})`}</DataGridHeadCell>
            <DataGridCell>
              <ImageVersionOccurrences imageVersion={imageVersion} />
            </DataGridCell>
          </DataGridRow>
        </DataGrid>
      </PanelBody>
    </Panel>
  )
}
