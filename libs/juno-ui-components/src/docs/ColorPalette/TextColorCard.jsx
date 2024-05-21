/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

// Shows a color and a name, given through props.colorName
// The Card is used by ColorPalette.jsx
export function TextColorCard(props) {
  if (!props.colorName) {
    console.warn("ColorCard has no color name")
    return (
      <>
        <p>name of the color is needed</p>
      </>
    )
  }

  const colorContainerStyle = `
    jn-h-16 
    ${props.colorClass}
    jn-font-extrabold
    jn-text-6xl
    jn-px-auto
    jn-text-center
  `

  return (
    <div className="jn-rounded-lg jn-border jn-border-theme-light">
      <div className="jn-p-3 jn-text-theme-highest">
        <p>{props.colorName}</p>
      </div>
      <div className={colorContainerStyle}>
        <p>Juno</p>
      </div>
      <div className="jn-px-3 jn-py-4">
        <p>theme-{props.colorName}</p>
      </div>
    </div>
  )
}
