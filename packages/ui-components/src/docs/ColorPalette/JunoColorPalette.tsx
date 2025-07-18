/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { getJunoColors } from "./TailwindColors"
import { ColorCard } from "./ColorCard"

// Shows the colors from tailwind classes for a given theme (props.theme)
export function JunoColorPalette() {
  const gridStyle = `jn:grid jn:gap-4 jn:xl:grid-cols-4 jn:md:grid-cols-3 jn:grid-cols-2 jn:mb-6`

  return (
    <div className={`juno-content-area jn:p-4`}>
      <div className={gridStyle}>
        {Object.entries(getJunoColors).map((color) => (
          <ColorCard key={color[0]} colorName={color[0]} colorClass={color[1]} />
        ))}
      </div>
    </div>
  )
}
