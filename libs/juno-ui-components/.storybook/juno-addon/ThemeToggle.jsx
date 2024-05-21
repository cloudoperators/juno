/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { addons, types } from "@storybook/manager-api"
const ADDON_ID = "juno-addon"
const TOOL_ID = `${ADDON_ID}/theme-toggle`
import { Icons, IconButton } from "@storybook/components"
import { JUNO_THEME_CHANGE } from "./constants"
import { dark, getCurrentThemeMode, light, setCurrentThemeMode } from "./themes"

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Toggle Dark Mode",
    matches: ({ viewMode }) => viewMode === "story" || viewMode === "docs",

    render: () => {
      const [mode, setMode] = React.useState(getCurrentThemeMode())

      const toggleTheme = React.useCallback(() => {
        const newMode = mode === "dark" ? "light" : "dark"
        api.emit(JUNO_THEME_CHANGE, newMode)
        setMode(newMode)
        setCurrentThemeMode(newMode)
        api.setOptions({
          theme: newMode === "dark" ? dark : light,
        })
      }, [mode])

      return (
        <IconButton
          key={TOOL_ID}
          title={`Change Theme to ${mode}`}
          onClick={() => {
            toggleTheme()
          }}
        >
          <Icons icon={mode === "dark" ? "sun" : "moon"} />
        </IconButton>
      )
    },
  })
})
