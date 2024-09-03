/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { getThemeColors, getThemeTextColors } from "./TailwindColors"
import { ColorCard } from "./ColorCard"
import { TextColorCard } from "./TextColorCard"

import { ContentArea } from "../../components/ContentArea/index"

// Shows the colors from tailwind classes for a given theme (props.theme)
export function ColorPalette(props) {
  if (!props.theme) {
    console.warn("ColorPalette has no selected theme")
    return (
      <>
        <p>name of the theme is needed</p>
      </>
    )
  }

  const theme = props.theme
  const gridStyle = `jn-grid jn-gap-4 xl:jn-grid-cols-4 md:jn-grid-cols-3 jn-grid-cols-2 jn-mb-6`
  const h2Style = "jn-text-xl jn-my-2 jn-font-semibold"

  return (
    <ContentArea className={`jn-p-4 jn-rounded-xl ${theme}`}>
      <h2 className={h2Style}>Theme colors</h2>
      <div className={gridStyle}>
        {Object.entries(getThemeColors).map((color) => (
          <ColorCard key={color[0]} prefix="theme-" colorName={color[0]} colorClass={color[1]} />
        ))}
      </div>
      <h2 className={h2Style}>Font colors</h2>
      <div className={gridStyle}>
        {Object.entries(getThemeTextColors).map((textColor) => (
          <TextColorCard key={textColor[0]} colorName={textColor[0]} colorClass={textColor[1]} />
        ))}
      </div>
    </ContentArea>
  )
}

ColorPalette.propTypes = {
  theme: PropTypes.string.isRequired,
}
