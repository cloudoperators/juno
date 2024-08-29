/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This module inserts a shadow dom element inline.
 * In addition to the properties 'mode' and 'delegateFocus',
 * it also accepts styles. Where styles is a string.
 * The component automatically converts it to CSSStyleSheet,
 * if supported by the browser. Otherwise there is a fallback to
 * inline style element.
 * @module ShadowRoot
 */
import ReactDOM from "react-dom"
import React, { useRef, useState } from "react"
import PropTypes from "prop-types"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO: deactivating constructed stylesheets for now because of the decision of the authors to always include constructed stylesheets last
// which means for us that users of the ui component lib can't override styles in their own stylesheet because the constructed stylesheet always wins
// See discussion here: https://github.com/WICG/construct-stylesheets/issues/93
// One solution might be that we provide a capability to users of this lib to add their styles as a constructed stylesheet (one of the proposed solutions in the the above thread)

// // check if constructable styles are supported by browser.
// const constructableStylesheetsSupported =
//   window &&
//   window.ShadowRoot &&
//   window.ShadowRoot.prototype.hasOwnProperty("adoptedStyleSheets") &&
//   window.CSSStyleSheet &&
//   window.CSSStyleSheet.prototype.hasOwnProperty("replace")

// // function to convert styles string to CSSStyleSheet
// const toStyleSheet = (styles) => {
//   const sheet = new CSSStyleSheet()
//   sheet.replaceSync(styles)
//   return [sheet]
// }

/**
 * Functional component which creates and inserts a shadow dom element
 * in to the current parent element. ShadowRoot allows html to be isolated from the rest of the DOM. If styles are given, these and
 * the children are added to the shadow element. The themeClass is added to a wrapper div surrounding the children.
 * @param {Object} props
 * @returns {function} component
 */
export const ShadowRoot = ({ mode = "open", delegatesFocus = false, children = null }) => {
  // reference element which is replaced by the shadow dom element
  const ref = useRef()
  // hold shadow element in the state
  const [shadowRoot, setShadowRoot] = useState()

  React.useEffect(() => {
    // wait until the reference element is rendered!
    if (!ref.current) return
    // create the shadow dom element
    setShadowRoot(ref.current.attachShadow({ delegatesFocus, mode }))
  }, [])

  // if shadow element is available place children and styles iside it and return.
  // otherwise render the reference element
  return (
    <div ref={ref} data-shadow-host="true" style={{ height: "100%" }}>
      {shadowRoot && ReactDOM.createPortal(children, shadowRoot)}
    </div>
  )
}

// define accepted properties
ShadowRoot.propTypes = {
  /** Choose "closed" to prevent styles from being inherited from the parent node. */
  mode: PropTypes.oneOf(["open", "closed"]),
  delegatesFocus: PropTypes.bool,
  /** The children to render */
  children: PropTypes.node,
}
