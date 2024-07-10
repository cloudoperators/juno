/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This component adds global (lib) styles to the head or inline
 * based on the provided inline parameter.
 * @module GlobalStyles
 */
import React, { useInsertionEffect } from "react"
import globalCss from "../../global.scss"
const styles = globalCss.toString()

const GLOBAL_STYLE_ID = "juno-style-provider-global-styles"

const GlobalStyles = ({ inline }) => {
  // add to document.head
  useInsertionEffect(() => {
    // do nothing if inline or already presented
    if (inline || document.querySelector(`[id="${GLOBAL_STYLE_ID}"]`)) return

    // create and add style element to head
    const style = document.createElement("style")
    style.setAttribute("id", GLOBAL_STYLE_ID)
    style.appendChild(document.createTextNode(styles))

    document.head.append(style)
  }, [])

  // add styles inline
  if (!inline) return null
  return <style {...{ [`data-${GLOBAL_STYLE_ID}`]: "" }}>{styles}</style>
}

export default GlobalStyles

export { styles }
