/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react"
import {
  Container,
  FormRow,
  SideNavigation,
  SideNavigationItem,
  Stack,
  Select,
  SelectOption,
} from "juno-ui-components"
import useStore from "../store"
import Markdown from "./Markdown"
import { currentState, push } from "url-state-provider"
import HintNotFound from "./HintNotFound"
import HintLoading from "./HintLoading"

const Documentation = ({ isLoading, data }) => {
  const origin = useStore((state) => state.origin)
  const urlStateKey = useStore((state) => state.urlStateKey)
  const urlState = currentState(urlStateKey)
  const [activeNavItem, setActiveNavItem] = useState("about")
  const [widgetLoaderVersion, setWidgetLoaderVersion] = useState("")

  const nav = useMemo(() => {
    if (!origin) return null
    let config = null

    if (data?.readme) {
      config = {
        about: {
          label: "About",
          path: `${origin}${data?.readme}`,
        },
      }
    }

    if (data?.["widget-loader"]) {
      config = {
        ...config,
        wigetLoader: {
          label: "Widget Loader",
          path: `${origin}${
            data["widget-loader"]?.[widgetLoaderVersion || "latest"]?.readme
          }`,
        },
      }
    }

    if (config) setActiveNavItem(Object.keys(config)[0])

    return config
  }, [data, origin, widgetLoaderVersion, setActiveNavItem])

  useEffect(() => {
    if (urlState?.navItem) setActiveNavItem(urlState?.navItem)
    if (urlState?.widgetLoaderVersion)
      setWidgetLoaderVersion(urlState?.widgetLoaderVersion)
  }, [urlState])

  const onNavItemClicked = (value) => {
    const urlState = currentState(urlStateKey)
    push(urlStateKey, {
      ...urlState,
      navItem: value,
      // reset widget loader version to latest
      widgetLoaderVersion: widgetLoaderVersions[0].value,
    })
    setActiveNavItem(value)
  }

  // ################ VERSIONS ####################
  const widgetLoaderVersions = React.useMemo(() => {
    if (!data?.["widget-loader"]) return null

    const versionMap = Object.keys(data["widget-loader"]).reduce(
      (map, version) => {
        map[data["widget-loader"][version]?.version] =
          version === "latest"
            ? `latest (${data["widget-loader"][version]?.version})`
            : version
        return map
      },
      {}
    )
    return Object.keys(versionMap)
      .sort((a, b) => (a > b ? -1 : b < a ? 1 : 0))
      .map((version) => ({ value: version, label: versionMap[version] }))
  }, [data?.["widget-loader"]])

  const changeVersion = React.useCallback(
    (version) => {
      setWidgetLoaderVersion(version)
      const urlState = currentState(urlStateKey)
      push(urlStateKey, { ...urlState, widgetLoaderVersion: version })
    },
    [urlStateKey, currentState]
  )
  //############### END ###################
  return useMemo(() => {
    return (
      <>
        {isLoading ? (
          <HintLoading text="Loading documentation..." />
        ) : (
          <>
            {nav ? (
              <Stack alignmet="start" gap="5">
                <SideNavigation>
                  {Object.keys(nav).map((key, index) => (
                    <SideNavigationItem
                      key={index}
                      className="whitespace-nowrap"
                      active={activeNavItem === key}
                      label={nav[key]?.label}
                      onClick={() => onNavItemClicked(key)}
                    />
                  ))}
                </SideNavigation>
                <Container>
                  {activeNavItem === "wigetLoader" && widgetLoaderVersions && (
                    <Stack distribution="end" className="w-full">
                      <FormRow>
                        <Select
                          label="version"
                          value={widgetLoaderVersion}
                          onChange={(value) => changeVersion(value)}
                        >
                          {widgetLoaderVersions?.map((version, i) => (
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
                  <Markdown path={nav?.[activeNavItem]?.path} />
                </Container>
              </Stack>
            ) : (
              <HintNotFound text="No documentation found" />
            )}
          </>
        )}
      </>
    )
  }, [activeNavItem, nav, isLoading])
}

export default Documentation
