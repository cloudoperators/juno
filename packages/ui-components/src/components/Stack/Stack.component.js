/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

// Previously we used template literals to dynamically determine the gap classname like this: gap-${gap ? gap : '0'}
// however if we want to use tailwind jit this doesn't work since these dynamic classnames will get purged. The way
// you have to do it is to always select a complete tailwind classname. Read more here:
// https://medium.com/coding-at-dawn/the-tailwind-css-jit-mode-bug-that-only-happens-in-production-4f25ef009fe8
const gapSize = (gap) => {
  switch (gap) {
    case "0":
      return "jn-gap-0"
    case "px":
      return "jn-gap-px"
    case "0.5":
      return "jn-gap-0.5"
    case "1":
      return "jn-gap-1"
    case "1.5":
      return "jn-gap-1.5"
    case "2":
      return "jn-gap-2"
    case "2.5":
      return "jn-gap-2.5"
    case "3":
      return "jn-gap-3"
    case "3.5":
      return "jn-gap-3.5"
    case "4":
      return "jn-gap-4"
    case "5":
      return "jn-gap-5"
    case "6":
      return "jn-gap-6"
    case "7":
      return "jn-gap-7"
    case "8":
      return "jn-gap-8"
    case "9":
      return "jn-gap-9"
    case "10":
      return "jn-gap-10"
    case "11":
      return "jn-gap-11"
    case "12":
      return "jn-gap-12"
    case "14":
      return "jn-gap-14"
    case "16":
      return "jn-gap-16"
    case "20":
      return "jn-gap-20"
    case "24":
      return "jn-gap-24"
    case "28":
      return "jn-gap-28"
    case "32":
      return "jn-gap-32"
    case "36":
      return "jn-gap-36"
    case "40":
      return "jn-gap-40"
    case "44":
      return "jn-gap-44"
    case "48":
      return "jn-gap-48"
    case "52":
      return "jn-gap-52"
    case "56":
      return "jn-gap-56"
    case "60":
      return "jn-gap-60"
    case "64":
      return "jn-gap-64"
    case "72":
      return "jn-gap-72"
    case "80":
      return "jn-gap-80"
    case "96":
      return "jn-gap-96"
    default:
      return "jn-gap-0"
  }
}

const baseStack = (direction, gap, wrap) => {
  return `
      ${direction === "vertical" ? "jn-flex jn-flex-col" : "jn-flex jn-flex-row"}
      ${wrap && "jn-flex-wrap"}
      ${gapSize(gap)}
    `
}

const alignItems = (alignment) => {
  switch (alignment) {
    case "start":
      return "jn-items-start"
    case "end":
      return "jn-items-end"
    case "center":
      return "jn-items-center"
    case "baseline":
      return "jn-items-baseline"
    case "stretch":
      return "jn-items-stretch"
    default:
      return ""
  }
}

const justifyItems = (distribution) => {
  switch (distribution) {
    case "start":
      return "jn-justify-start"
    case "end":
      return "jn-justify-end"
    case "center":
      return "jn-justify-center"
    case "between":
      return "jn-justify-between"
    case "around":
      return "jn-justify-around"
    case "evenly":
      return "jn-justify-evenly"
    default:
      return ""
  }
}

/**
 * A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.
 * In addition a gap can be defined which the Stack injects between its children so they have some margin from one another.
 */
export const Stack = ({
  direction = "horizontal",
  gap = "0",
  alignment = "stretch",
  distribution = "start",
  wrap = false,
  className = "",
  children = null,
  ...props
}) => {
  return (
    <div
      className={`juno-stack ${baseStack(direction, gap, wrap)} ${alignItems(alignment)} ${justifyItems(distribution)} ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  )
}

Stack.propTypes = {
  children: PropTypes.node,
  /** Pass css class names */
  className: PropTypes.string,
  /** Stack items horizontally or vertically */
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  /** Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment) */
  alignment: PropTypes.oneOf(["start", "end", "center", "baseline", "stretch"]),
  /** Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution) */
  distribution: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
  ]),
  /** Specify whether the Stack children should be allowed to wrap or not */
  wrap: PropTypes.bool,
  /** Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale */
  gap: PropTypes.oneOf([
    "0",
    "px",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96",
  ]),
}
