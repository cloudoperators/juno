/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

// Shows a color from a tailwind class props.colorClass and the name the color given through props.colorName
// Optional: A prefix like "theme-" can be used (props.prefix)
// The Card is used by ColorPalette.jsx

export function ColorCard(props) {
  if (!props.colorName || !props.colorClass) {
    console.warn("ColorCard has no color name")
    return (
      <>
        <p>name of the color is needed</p>
      </>
    )
  }

  const colorContainerStyle = `
    jn-h-16 ${props.colorClass}
  `

  return (
    <div className="jn-rounded-lg jn-border ">
      <div className="jn-p-3 jn-text-theme-highest">
        <p>{props.colorName}</p>
      </div>
      <div className={colorContainerStyle}></div>
      <div className="jn-px-3 jn-py-4 ">
        <p>
          {props.prefix ? props.prefix : ""}
          {props.colorName}
        </p>
      </div>
    </div>
  )
}
