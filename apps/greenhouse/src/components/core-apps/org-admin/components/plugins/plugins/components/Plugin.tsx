/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { DataGridRow, DataGridCell, Icon } from "@cloudoperators/juno-ui-components"
import { usePluginActions, useGlobalsActions, useShowDetailsFor } from "./StoreProvider"
import useStore, { EditFormState } from "../../plugindefinitions/store"
import { buildExternalServicesUrls } from "./buildExternalServicesUrls"
import { PluginConditionIcon } from "./PluginConditionIcon"

// renders a single plugin row
const Plugin = (props: any) => {
  const plugin = props.plugin
  // @ts-ignore
  const { setShowDetailsFor } = usePluginActions()
  const showDetailsFor = useShowDetailsFor()
  // @ts-ignore
  const { setPanel } = useGlobalsActions()

  const setPluginDefinitionDetail = useStore((state: any) => state.setPluginDefinitionDetail)
  const setEditFormState = useStore((state: any) => state.setEditFormState)
  const setEditFormData = useStore((state: any) => state.setEditFormData)

  const pluginDefinitions = useStore((state: any) => state.pluginDefinitions)

  const showDetails = (e: any) => {
    e.stopPropagation()
    e.preventDefault()

    setPanel("showPlugin")
    showDetailsFor === plugin.metadata.uid ? setShowDetailsFor(null) : setShowDetailsFor(plugin.metadata.uid)
  }

  const onPluginClick = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    let pluginDefinition
    pluginDefinitions.some((pd: any) => {
      if (pd.metadata.name === plugin.spec.pluginDefinition) {
        pluginDefinition = pd
        return true
      }
      return false
    })
    if (pluginDefinition) {
      setPluginDefinitionDetail(pluginDefinition)
      setPanel("editPlugin")
      setEditFormData({
        metadata: plugin.metadata,
        spec: plugin.spec,
      })
      setEditFormState(EditFormState.PLUGIN_EDIT)
    } else {
      console.error(`Plugin definition not found for plugin ${plugin.metadata.name} could not open edit screen`)
    }
  }

  return (
    <DataGridRow
      key={plugin?.metadata?.uid}
      onClick={showDetails}
      className={`cursor-pointer ${
        showDetailsFor === plugin?.metadata?.uid ? "active" : ""
      } ${plugin?.spec?.disabled ? "text-theme-disabled" : ""} `}
    >
      <DataGridCell>
        <PluginConditionIcon plugin={plugin} />
      </DataGridCell>
      <DataGridCell>{plugin?.spec?.displayName || plugin?.metadata?.name}</DataGridCell>
      <DataGridCell>{plugin?.spec?.clusterName ? plugin?.spec?.clusterName : <>&mdash;</>}</DataGridCell>
      <DataGridCell>
        {plugin?.status?.exposedServices ? (
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          buildExternalServicesUrls(plugin.status.exposedServices).map((url) => {
            return (
              <a
                href={url.url}
                target="_blank"
                rel="noreferrer"
                key={url.url}
                className={`mr-3 ${plugin?.disabled ? "text-theme-link text-opacity-50" : ""}`}
              >
                {url.name}
              </a>
            )
          })
        ) : (
          <>&mdash;</>
        )}
      </DataGridCell>
      <DataGridCell>
        <Icon color="global-text" icon="edit" onClick={onPluginClick} />
      </DataGridCell>
    </DataGridRow>
  )
}

export default Plugin
