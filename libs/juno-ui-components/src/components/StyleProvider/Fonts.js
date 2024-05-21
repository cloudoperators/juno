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

const CSS_FONTS_URL =
  "https://assets.juno.global.cloud.sap/assets/fonts/plex/css/ibm-plex.min.css"

const STYLE_ID = "juno-style-provider-golbal-fonts"
const Fonts = ({ inline }) => {
  // add fonts to document.head
  useInsertionEffect(() => {
    // add necessary prerequisites to HEAD to use google fonts
    if (!document.querySelector(`[id="${STYLE_ID}"]`)) {
      // Add font links to head (Plex font from google CDN)
      const link1 = document.createElement("link")
      link1.rel = "preconnect"
      link1.href = "https://fonts.googleapis.com"

      const link2 = document.createElement("link")
      link2.rel = "preconnect"
      link2.href = "https://fonts.gstatic.com"
      link2.crossOrigin = "anonymous"

      const link3 = document.createElement("link")
      link3.rel = "stylesheet"
      link3.href = CSS_FONTS_URL
      link3.setAttribute("id", STYLE_ID)

      document.head.appendChild(link1)
      document.head.appendChild(link2)
      document.head.appendChild(link3)
    }
  }, [])

  if (!inline) return null

  // add fonts inline
  return (
    <style
      {...{ [`data-${STYLE_ID}`]: "" }}
    >{`@import url("${CSS_FONTS_URL}");`}</style>
  )
}

export default Fonts
