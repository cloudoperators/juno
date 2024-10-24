import React, { useContext } from "react"
import { ThemeContext } from "./JsonViewer.context"

// Toolbar Icon
export const ExpandAllIcon = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={colors.icon.expandAll}
      role="img"
    >
      <title>Expand All</title>
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
    </svg>
  )
}

// Toolbar Icon
export const CollapseAllIcon = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={colors.icon.expandAll}
      role="img"
    >
      <title>Collapse All</title>
      <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"></path>
    </svg>
  )
}
