/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react"
import {
  Button,
  Panel,
  PanelBody,
  PanelFooter,
  Spinner,
  Stack,
  MainTabs,
  Message,
  TabList,
  Tab,
  TabPanel,
  Select,
  SelectOption,
  Pill,
  FormRow,
} from "juno-ui-components"
import useStore from "../store"
import { currentState, push, onGlobalChange } from "url-state-provider"
import { useQuery } from "@tanstack/react-query"
import { fetchAssetsManifest } from "../actions"
import { APP } from "../helpers"
import { MessagesProvider } from "messages-provider"
import { compareVersions } from "../helpers"

import TabWithMarkdown from "./details/TabWithMarkdown"
import AssetDetailsGetStarted from "./details/TabGetStarted"
import TabAdvanced from "./details/TabAdvanced"
import TabPreview from "./details/TabPreview"

const AssetDetailsFooter = ({ onCancelCallback }) => {
  return (
    <PanelFooter>
      <Button variant="subdued" onClick={onCancelCallback}>
        Close
      </Button>
    </PanelFooter>
  )
}

const AssetDetails = () => {
  const manifestUrl = useStore((state) => state.manifestUrl)
  const urlStateKey = useStore((state) => state.urlStateKey)
  const urlState = currentState(urlStateKey)
  const [opened, setOpened] = useState(false)
  const [assetName, setAssetName] = useState(null)
  const [assetVersion, setAssetVersion] = useState(null)
  const [tabIndex, setTabIndex] = useState(0)

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["manifest", manifestUrl],
    queryFn: fetchAssetsManifest,
    enabled: !!manifestUrl,
    staleTime: Infinity,
  })

  const asset = useMemo(() => {
    if (!data) return null
    if (!assetName || !assetVersion) return null

    // check just the latest version, since this param exists in the latest versions
    const latestAppPreview =
      data[assetName] &&
      data[assetName]["latest"] &&
      data[assetName]["latest"]?.appPreview

    return {
      ...data[assetName][assetVersion],
      name: assetName,
      latestAppPreview: latestAppPreview,
    }
  }, [data, assetName, assetVersion])

  // assets that this asset depends on
  const dependencies = React.useMemo(() => {
    if (!asset?.appDependencies) return []

    const deps = []
    for (let name in asset.appDependencies) {
      const version = asset.appDependencies[name]
      const app = data[name]?.[version]
      if (app) deps.push(app)
    }

    return deps
  }, [asset?.appDependencies])

  // wait until the global state is set to fetch the url state
  useEffect(() => {
    const updatePanelStateFromURL = (newState) => {
      setOpened(newState?.panelOpened)
      setAssetName(newState?.assetName)
      setAssetVersion(newState?.assetVersion)
      if (newState?.panelTabIndex != null) {
        setTabIndex(newState?.panelTabIndex)
      }
    }
    updatePanelStateFromURL(urlState)
    // this listener reacts on any change on the url state
    const unregisterUrlListener = onGlobalChange((newState) => {
      if (newState?.[urlStateKey])
        updatePanelStateFromURL(newState[urlStateKey])
    })
    return unregisterUrlListener
  }, [urlStateKey])

  // call close reducer from url store
  const onClose = () => {
    // remove assetName,assetVersion and panelTabIndex
    const { assetName, assetVersion, panelTabIndex, ...restOfKeys } = urlState
    push(urlStateKey, { ...restOfKeys, panelOpened: false })
    // since the panel is cached reset following values
    setTabIndex(0)
  }

  const onTabSelected = (index) => {
    setTabIndex(index)
    const urlState = currentState(urlStateKey)
    push(urlStateKey, { ...urlState, panelTabIndex: index })
  }

  // ############### VERSION HANDLING #################
  const versions = useMemo(() => {
    if (!data || !assetName) return null

    const versionMap = Object.keys(data[assetName]).reduce((map, version) => {
      map[data[assetName][version]?.version] =
        version === "latest"
          ? `latest (${data[assetName][version]?.version})`
          : version
      return map
    }, {})

    const result = Object.keys(versionMap)
      .sort(compareVersions())
      .reverse()
      .map((version) => ({ value: version, label: versionMap[version] }))
    console.groupEnd()

    return result
  }, [data, assetName])

  const isLatest = useMemo(() => {
    if (!data || !assetVersion) return null
    return assetVersion === data[assetName]["latest"]?.version
  }, [data, assetVersion])

  const changeVersion = React.useCallback(
    (version) => {
      setAssetVersion(version)
      const urlState = currentState(urlStateKey)
      push(urlStateKey, { ...urlState, assetVersion: version })
    },
    [urlStateKey, currentState]
  )
  //########### END ##############
  return (
    <Panel heading={assetName} opened={opened} onClose={onClose} size="large">
      <PanelBody footer={<AssetDetailsFooter onCancelCallback={onClose} />}>
        {isLoading && !asset ? (
          <Stack className="pt-2" alignment="center">
            <Spinner variant="primary" />
            Loading asset...
          </Stack>
        ) : (
          <>
            {versions && (
              <Stack distribution="between">
                <Stack gap="2">
                  {asset.author && (
                    <div>
                      <Pill
                        closeable={false}
                        pillKeyLabel="Powered by"
                        pillValueLabel={asset.author}
                      />
                    </div>
                  )}
                  {asset.license && (
                    <div>
                      <Pill
                        closeable={false}
                        pillKeyLabel="License"
                        pillValueLabel={asset.license}
                      />
                    </div>
                  )}
                  {asset.repository && (
                    <div>
                      <Pill
                        closeable={false}
                        pillKeyLabel="Repo"
                        pillValueLabel={asset.repository}
                      />
                    </div>
                  )}
                </Stack>
                <FormRow>
                  <Select
                    label="version"
                    value={asset?.version}
                    onValueChange={(value) => {
                      return changeVersion(value)
                    }}
                  >
                    {versions?.map((version, i) => (
                      <SelectOption
                        key={i}
                        label={version.label}
                        value={version.value}
                      />
                    ))}
                  </Select>
                </FormRow>
              </Stack>
            )}

            {/* TODO: use MessagesProvider instead */}
            {isError && (
              <Message
                dismissible
                text={error && error.toString()}
                variant="error"
              />
            )}

            {Object.keys(asset || {}).length > 0 ? (
              <MainTabs selectedIndex={tabIndex} onSelect={onTabSelected}>
                <TabList>
                  <Tab>Readme</Tab>
                  {asset?.communicatorReadme && <Tab>Communication</Tab>}
                  {asset?.type === APP && <Tab>Get started</Tab>}
                  {asset?.type === APP && <Tab>Preview</Tab>}
                  <Tab>Advance</Tab>
                </TabList>
                <TabPanel>
                  <MessagesProvider>
                    <TabWithMarkdown path={asset?.readme} />
                  </MessagesProvider>
                </TabPanel>
                {asset?.communicatorReadme && (
                  <TabPanel>
                    <TabWithMarkdown path={asset?.communicatorReadme} />
                  </TabPanel>
                )}
                {asset?.type === APP && (
                  <TabPanel>
                    <AssetDetailsGetStarted
                      asset={asset}
                      isLatest={isLatest}
                      dependencies={dependencies}
                    />
                  </TabPanel>
                )}
                {asset?.type === APP && (
                  <TabPanel>
                    <MessagesProvider>
                      <TabPreview asset={asset} />
                    </MessagesProvider>
                  </TabPanel>
                )}
                <TabPanel>
                  <TabAdvanced asset={asset} />
                </TabPanel>
              </MainTabs>
            ) : (
              <span>No asset found</span>
            )}
          </>
        )}
      </PanelBody>
    </Panel>
  )
}

export default AssetDetails
