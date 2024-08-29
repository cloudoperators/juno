/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { DocsContainer as BaseContainer } from "@storybook/addon-docs"
import { JUNO_THEME_CHANGE } from "./constants"
import { getCurrentTheme } from "./themes"

function Container(props) {
  // store the current theme in state so that we can update the theme when the theme changes
  const [currentTheme, setCurrentTheme] = React.useState(getCurrentTheme())

  // listen for theme change events and update the theme in state
  React.useEffect(() => {
    const updateDocsTheme = () => setCurrentTheme(getCurrentTheme())

    // get channel from context and listen to our custom event
    // the event is emitted from the theme toggle tool
    const channel = props.context?.channel
    if (channel) {
      channel.on(JUNO_THEME_CHANGE, updateDocsTheme)
    }
    return () => {
      // remove the listener when the component unmounts
      if (channel) channel.off(JUNO_THEME_CHANGE, updateDocsTheme)
    }
  }, [])

  return <BaseContainer {...props} theme={currentTheme} />
}

Container.propTypes = {
  context: PropTypes.object,
}

export default Container
