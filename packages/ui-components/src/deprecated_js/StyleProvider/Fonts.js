/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This component adds fonts to document's head.
 * If inline is set to true, an additional inline style tag is rendered that imports the fonts.
 * @module Fonts
 */
import React, { useInsertionEffect } from "react"
import PropTypes from "prop-types"

import fonts from "../../fonts/plex/css/ibm-plex.scss"

const STYLE_ID = "juno-style-provider-golbal-fonts"
const Fonts = ({ inline }) => {
  // add fonts to document.head
  useInsertionEffect(() => {
    if (inline) return

    // add necessary prerequisites to HEAD to use google fonts
    if (!document.querySelector(`[id="${STYLE_ID}"]`)) {
      const styleTag = document.createElement("style")
      styleTag.setAttribute("id", STYLE_ID)
      styleTag.innerHTML = fonts.toString()
      document.head.appendChild(styleTag)
    }
  }, [])

  if (!inline) return null

  // add fonts inline
  return <style {...{ [`data-${STYLE_ID}`]: "" }}>{fonts.toString()}</style>
}

Fonts.propTypes = {
  inline: PropTypes.bool,
}

export default Fonts
