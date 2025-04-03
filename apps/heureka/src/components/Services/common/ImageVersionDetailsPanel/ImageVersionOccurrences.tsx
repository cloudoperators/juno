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
    <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{instance?.pod || "--"}</div>
    <Stack>
      <div className="text-sm whitespace-nowrap  w-full">{instance?.cluster || "--"}</div>
      <Tooltip triggerEvent="hover">
        <TooltipTrigger>
          <Icon icon="info" size="18" className="cursor-pointer hover:text-theme-primary" />
        </TooltipTrigger>
        <TooltipContent>
          <span> Namespace: {instance?.namespace || "--"}</span>
          <br />
          <span> Region: {instance?.region || "--"}</span>
          <br />
          <span> Cluster: {instance?.cluster || "--"}</span>
          <br />
          <span> Container: {instance?.container || "--"}</span>
          <br />
          <span> Pod: {instance?.pod || "--"}</span>
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

  return grouped
}

type ImageVersionOccurrencesProps = {
  imageVersion: ServiceImageVersion
}

const ImageVersionOccurrences = ({ imageVersion }: ImageVersionOccurrencesProps) => {
  const [visibleInstancesCount, setVisibleInstancesCount] = useState(MAX_VISIBLE_ITEMS)
  const grouped = groupInstances(imageVersion.componentInstances || [], visibleInstancesCount)

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
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-2">
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
