/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, ContentHeading } from "@cloudoperators/juno-ui-components"
import { Plugin } from "../../types/k8sTypes"
import YamlViewer from "../../common/YamlViewer"

type ConfigurationProps = {
  plugin: Plugin
}

const INJECTED_VALUES_IDENTIFIER = "global.greenhouse."

export const Configuration: React.FC<ConfigurationProps> = ({ plugin }) => {
  const optionValues = plugin.spec?.optionValues || []

  return (
    <Stack direction="vertical" gap="4">
      <ContentHeading>Configuration</ContentHeading>
      {optionValues.length === 0 ? (
        <p>No configuration</p>
      ) : (
        <YamlViewer
          value={
            optionValues.filter((val) => !val.name?.startsWith(INJECTED_VALUES_IDENTIFIER)) // exclude injected values
          }
        />
      )}
    </Stack>
  )
}
