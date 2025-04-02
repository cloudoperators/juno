/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Box, Stack } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersion } from "../../utils"

type ImageVersionOccurrencesProps = {
  imageVersion: ServiceImageVersion
}

const ImageVersionOccurrences = ({ imageVersion }: ImageVersionOccurrencesProps) => {
  const groupedByNamespace = imageVersion.componentInstances?.reduce(
    (acc, instance) => {
      const namespace = instance.namespace || "Unknown"
      if (!acc[namespace]) acc[namespace] = []
      acc[namespace].push(instance)
      return acc
    },
    {} as Record<string, typeof imageVersion.componentInstances>
  )

  return (
    <>
      {groupedByNamespace &&
        Object.entries(groupedByNamespace).map(([namespace, instances]) => (
          <>
            <div>{namespace}:</div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
              {instances.map((item, i) => (
                <Box key={i} className="text-sm text-theme-light">
                  <Stack gap="4" direction="horizontal" distribution="center">
                    <span>{item?.cluster || "-"}</span>
                  </Stack>
                </Box>
              ))}
            </div>
          </>
        ))}
    </>
  )
}

export default ImageVersionOccurrences
