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

const BoxWithTooltip = ({ instance }: ToolTipBoxType) => (
  <Box className="text-sm text-theme-light">
    <div className="whitespace-nowrap">{instance?.pod || "--"}</div>
    <Stack>
      <div className="whitespace-nowrap w-full">{instance?.cluster || "--"}</div>
      <Tooltip triggerEvent="hover">
        <TooltipTrigger>
          <Icon icon="info" size="18" className="cursor-pointer hover:text-theme-primary" />
        </TooltipTrigger>
        <TooltipContent>
          <span>Id: {instance?.id || "--"}</span>
          <br />
          <span> Region: {instance?.region || "--"}</span>
        </TooltipContent>
      </Tooltip>
    </Stack>
  </Box>
)

/**
 *  Groups instances by namespace and container, and calculates the minimum width for the grid based on the longest pod name.
 *  Also limits the number of instances displayed to a maximum value.
 * @param instances
 * @param maxInstances
 * @returns
 */
const groupInstances = (instances: ComponentInstance[], maxInstances: number) => {
  let instanceCount = 0
  let maxPodLength = 0
  const grouped: Record<string, Record<string, ComponentInstance[]>> = {} // Namespace -> Container -> Instances

  instances.forEach((instance) => {
    const namespace = instance.namespace || "Unknown"
    const container = instance.container || "Unknown"

    if (!grouped[namespace]) grouped[namespace] = {}
    if (!grouped[namespace][container]) grouped[namespace][container] = []

    if (instanceCount < maxInstances) {
      grouped[namespace][container].push(instance)
      instanceCount++
    }

    if (instance.pod) {
      maxPodLength = Math.max(maxPodLength, instance.pod.length)
    }
  })

  // Calculate the minWidth based on the longest pod name
  let minWidth
  if (maxPodLength <= 14) {
    minWidth = 150
  } else if (maxPodLength <= 20) {
    minWidth = 190
  } else if (maxPodLength <= 30) {
    minWidth = 230
  } else if (maxPodLength <= 50) {
    minWidth = 240
  } else {
    minWidth = 300
  }

  return { grouped, minWidth }
}

type ImageVersionOccurrencesProps = {
  imageVersion: ServiceImageVersion
}

const ImageVersionOccurrences = ({ imageVersion }: ImageVersionOccurrencesProps) => {
  const [visibleInstancesCount, setVisibleInstancesCount] = useState(MAX_VISIBLE_ITEMS)
  const { grouped, minWidth } = groupInstances(imageVersion.componentInstances || [], visibleInstancesCount)

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
      {grouped &&
        Object.entries(grouped).map(([namespace, containers]) => (
          <>
            {Object.entries(containers).map(([container, instances]) => (
              <div className="my-2" key={`${namespace}-${container}`}>
                <div className="mb-4">
                  Namespace <b>{namespace}</b> - Container <b>{container}</b>
                </div>
                <div className={`grid grid-cols-[repeat(auto-fill,_minmax(${minWidth}px,_1fr))] gap-4`}>
                  {instances.map((item, i) => (
                    <BoxWithTooltip key={i} instance={item} />
                  ))}
                </div>
              </div>
            ))}
          </>
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
