/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, MouseEvent, useEffect } from "react"
import { Box, Stack, Tooltip, TooltipTrigger, TooltipContent, Icon } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersion, ComponentInstance } from "../../Services/utils"

type ToolTipBoxType = {
  instance: ComponentInstance
}

const BoxWithTooltip = ({ instance }: ToolTipBoxType) => (
  <Box className="text-sm text-theme-light">
    <Stack>
      <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis w-full">{instance?.pod || "--"}</div>
      <Tooltip triggerEvent="hover">
        <TooltipTrigger>
          <Icon icon="info" size="18" className="cursor-pointer hover:text-theme-primary" />
        </TooltipTrigger>
        <TooltipContent>
          <Stack gap="1" direction="vertical">
            <span>Namespace: {instance?.namespace || "--"}</span>
            <span>Region: {instance?.region || "--"}</span>
            <span>Cluster: {instance?.cluster || "--"}</span>
            <span>Container: {instance?.container || "--"}</span>
            <span>Pod: {instance?.pod || "--"}</span>
          </Stack>
        </TooltipContent>
      </Tooltip>
    </Stack>
    <div className="text-sm whitespace-nowrap">{instance?.cluster || "--"}</div>
  </Box>
)

/**
 *  Groups instances by namespace and container, and calculates the minimum width for the grid based on the longest pod name.
 *  Also limits the number of instances displayed to a maximum value.
 * @param instances
 * @param maxInstances
 * @returns
 */
const groupInstances = (instances: ComponentInstance[]) => {
  const grouped: Record<string, Record<string, ComponentInstance[]>> = {} // Namespace -> Container -> Instances

  instances.forEach((instance) => {
    // Use parsed fields from ccrn
    const namespace = instance.namespace || "Unknown"
    const container = instance.container || "All"

    if (!grouped[namespace]) grouped[namespace] = {}
    if (!grouped[namespace][container]) grouped[namespace][container] = []

    grouped[namespace][container].push(instance)
  })

  return grouped
}

type ImageVersionOccurrencesProps = {
  imageVersion: ServiceImageVersion
}

const ImageVersionOccurrences = ({ imageVersion }: ImageVersionOccurrencesProps) => {
  const [displayOccurrences, setDisplayOccurrences] = useState(false)
  const componentInstances = imageVersion.componentInstances || []
  const grouped = groupInstances(componentInstances)

  useEffect(() => {
    // Reset state when myProp changes
    setDisplayOccurrences(false)
  }, [imageVersion])

  const onShowMoreClicked = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setDisplayOccurrences(!displayOccurrences)
  }

  return (
    <>
      {displayOccurrences &&
        grouped &&
        Object.entries(grouped).map(([namespace, containers]) => (
          <div key={namespace}>
            {Object.entries(containers).map(([container, instances]) => (
              <div className="my-2" key={`${namespace}-${container}`}>
                <div className="mb-4">
                  Namespace <b>{namespace}</b> - Container <b>{container}</b>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-2">
                  {instances.map((item, i) => (
                    <BoxWithTooltip key={item.id || i} instance={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

      <div className="advance-link">
        <a href="#" onClick={onShowMoreClicked}>
          <Stack alignment="center">
            {displayOccurrences ? "Hide Occurrences" : "Display Occurrences"}
            <Icon color="global-text" icon={displayOccurrences ? "expandLess" : "expandMore"} />
          </Stack>
        </a>
      </div>
    </>
  )
}

export default ImageVersionOccurrences
