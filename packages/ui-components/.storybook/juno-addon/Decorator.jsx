/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "../../src/global.scss"
import { StyleProvider } from "../../src/components/StyleProvider"
import { ContentContainer } from "../../src/components/ContentContainer/index"
import { Container } from "../../src/components/Container/index"
import React, { useEffect } from "react"
import { useChannel, addons } from "@storybook/preview-api"
import { getCurrentTheme, getCurrentThemeMode } from "./themes"

const fixBodyBg = () => {
  document.body.style.setProperty(
    "background-color",
    getCurrentTheme().appContentBg,
    "important"
  )
}

fixBodyBg()

export default (Story, context) => {
  const [theme, setTheme] = React.useState("theme-" + getCurrentThemeMode())

  useEffect(() => {
    const updateThemeClass = (mode) => {
      // console.log("=======UPDATE JUNO THEME CLASS=======", mode)
      setTheme(`theme-${mode}`)
      fixBodyBg()
    }
    const channel = addons.getChannel()
    if (channel) {
      channel.on("JUNO_THEME_CHANGE", updateThemeClass)
    }
    updateThemeClass(getCurrentThemeMode())
    return () => {
      if (channel) channel.off("JUNO_THEME_CHANGE", updateThemeClass)
    }
  }, [])

  return (
    <StyleProvider stylesWrapper="head" theme={theme}>
      <ContentContainer>
        <Container px py>
          <Story />
        </Container>
      </ContentContainer>
    </StyleProvider>
  )
}
