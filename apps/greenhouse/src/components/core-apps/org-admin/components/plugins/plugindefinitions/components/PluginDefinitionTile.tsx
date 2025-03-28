/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Icon, Stack } from "@cloudoperators/juno-ui-components"
import React from "react"
import { PluginDefinition } from "../../../../types/types"
import useStore from "../store"
import { useGlobalsActions } from "../../plugins/components/StoreProvider"

interface PluginDefinitionTileProps {
  pluginDefinition: PluginDefinition
}
const allowedIconFileEndings = [".png"]
const PluginDefinitionTile: React.FC<PluginDefinitionTileProps> = (props: PluginDefinitionTileProps) => {
  // @ts-ignore
  const { setPanel } = useGlobalsActions()

  const setPluginDefinitionDetail = useStore((state: any) => state.setPluginDefinitionDetail)

  let iconUrl: string | undefined
  if (allowedIconFileEndings.some((ending) => props.pluginDefinition.spec?.icon?.endsWith(ending))) {
    iconUrl = props.pluginDefinition.spec?.icon
  } else {
    iconUrl = undefined
  }

  const openPluginDefinitionDetails = () => {
    setPanel("showPluginDefinitionDetail")
    setPluginDefinitionDetail(props.pluginDefinition)
  }

  const cardHeaderCss = `
  font-bold
  text-lg
  `

  const cardCss = `
  card
  bg-theme-background-lvl-1
  hover:bg-theme-background-lvl-2
  rounded
  p-8
  h-full
  w-full
  cursor-pointer
  `

  return (
    <div className={cardCss} onClick={openPluginDefinitionDetails}>
      <Stack direction="vertical" alignment="start" className="h-full w-full">
        <div className={cardHeaderCss}>
          {props.pluginDefinition.spec?.displayName ?? props.pluginDefinition.metadata?.name}
        </div>
        <div className="mt-4">{props.pluginDefinition.spec?.description}</div>

        <div className="mt-auto w-full">
          <Stack alignment="center">
            <div className="w-full">{props.pluginDefinition.spec?.version}</div>

            {!iconUrl && (
              <Icon
                // @ts-ignore
                icon={props.pluginDefinition.spec?.icon ?? "autoAwesomeMosaic"}
                className="filtered fill-current text-theme-high"
                size="50"
              />
            )}
            {iconUrl && <img className="filtered fill-current " src={iconUrl} alt="icon" width="50" />}
          </Stack>
        </div>
      </Stack>
    </div>
  )
}

export default PluginDefinitionTile
