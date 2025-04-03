/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, MouseEvent, useEffect } from "react"
import { Box, Stack, Tooltip, TooltipTrigger, TooltipContent, Icon } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersion, ComponentInstance } from "../../utils"

const MAX_VISIBLE_ITEMS = 20

type ToolTipBoxType = {
  instance: ComponentInstance
}

const ToolTipBox = ({ instance }: ToolTipBoxType) => (
  <Tooltip triggerEvent="hover">
    <TooltipTrigger>
      <Box className="text-sm text-theme-light">
        <span>{instance?.cluster || "--"}</span>
      </Box>
    </TooltipTrigger>
    <TooltipContent>
      <span>Pod: {instance?.pod || "--"} </span>
      <br />
      <span>Container: {instance?.container || "--"}</span>
    </TooltipContent>
  </Tooltip>
)

const groupInstancesByNamespace = (instances: ComponentInstance[], maxInstances: number) => {
  let instanceCount = 0
  const grouped: Record<string, ComponentInstance[]> = {}

  instances.forEach((instance) => {
    const namespace = instance.namespace || "Unknown"
    if (!grouped[namespace]) grouped[namespace] = []

    if (instanceCount < maxInstances) {
      grouped[namespace].push(instance)
      instanceCount++
    }
  })

  return grouped
}

type ImageVersionOccurrencesProps = {
  imageVersion: ServiceImageVersion
}

const ImageVersionOccurrences = ({ imageVersion }: ImageVersionOccurrencesProps) => {
  const [visibleInstancesCount, setVisibleInstancesCount] = useState(MAX_VISIBLE_ITEMS)
  const groupedByNamespace = groupInstancesByNamespace(imageVersion.componentInstances || [], visibleInstancesCount)

  useEffect(() => {
    // Reset state when myProp changes
    setVisibleInstancesCount(MAX_VISIBLE_ITEMS) // or any other default value you want to reset to
  }, [imageVersion])

  const onShowMoreClicked = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setVisibleInstancesCount((prev) =>
      prev === MAX_VISIBLE_ITEMS ? imageVersion.componetInstancesCount : MAX_VISIBLE_ITEMS
    )
  }

  return (
    <div>
      {groupedByNamespace &&
        Object.entries(groupedByNamespace).map(([namespace, instances]) => (
          <div className="my-2" key={namespace}>
            <div className="mb-4">
              Namespace <b>{namespace}</b>:
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
              {instances.map((item, i) => (
                <ToolTipBox key={i} instance={item} />
              ))}
            </div>
          </div>
        ))}
      {imageVersion.componetInstancesCount > MAX_VISIBLE_ITEMS && (
        <div className="advance-link mt-4">
          <a href="#" rel="noopener noreferrer" onClick={onShowMoreClicked}>
            <Stack alignment="center">
              {visibleInstancesCount === MAX_VISIBLE_ITEMS ? "Show more" : "Show less"}
              <Icon
                color="jn-global-text"
                icon={visibleInstancesCount === MAX_VISIBLE_ITEMS ? "expandMore" : "expandLess"}
              />
            </Stack>
          </a>
        </div>
      )}
    </div>
  )
}

export default ImageVersionOccurrences
