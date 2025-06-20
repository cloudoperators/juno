/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { StyleProvider } from "../../components/StyleProvider/StyleProvider.component"
import { addons } from "storybook/preview-api"

const STORAGE_KEY = "__junoThemeMode"
const getCurrentThemeMode = () => localStorage.getItem(STORAGE_KEY) || "dark"

// allows to implement themed components in the storybook
// component adjusts to the selected theme and enables tailwind classes.
export function JunoComponentWrapper(props: JunoComponentWrapperProps) {
  // returns nothing if there is no child
  if (!props.children) {
    return
  }

  const [parentTheme, setParentTheme] = useState("theme-" + getCurrentThemeMode())

  useEffect(() => {
    const updateThemeClass = (mode: string) => {
      setParentTheme("theme-" + mode)
    }
    const channel = addons.getChannel()
    if (channel) {
      channel.on("JUNO_THEME_CHANGE", updateThemeClass)
    }
    return () => {
      if (channel) channel.off("JUNO_THEME_CHANGE", updateThemeClass)
    }
  }, [])

  return (
    <div>
      <StyleProvider key="decorator" stylesWrapper="shadowRoot" theme={parentTheme}>
        {props.children}
      </StyleProvider>
    </div>
  )
}

interface JunoComponentWrapperProps {
  children?: React.ReactNode
}
