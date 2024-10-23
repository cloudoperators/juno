/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useLayoutEffect } from "react"
import * as themes from "./themes"
import { SearchInput } from "../SearchInput"

// DEFAULT THEME (DARK)
const DEFAULT_THEME: themes.JsonViewerTheme = {
  base00: "var(--color-syntax-highlight-base00)", // background
  base01: "var(--color-syntax-highlight-base01)", // toolbar: border, background
  base02: "var(--color-syntax-highlight-base02)", // border, type background, border
  base03: "var(--color-syntax-highlight-base03)", // -
  base04: "var(--color-syntax-highlight-base04)", // size
  base05: "var(--color-syntax-highlight-base05)", // types: "undefined"
  base06: "var(--color-syntax-highlight-base06)", // -
  base07: "var(--color-syntax-highlight-base07)", // key, brace
  base08: "var(--color-syntax-highlight-base08)", // types: "NaN"
  base09: "var(--color-syntax-highlight-base09)", // ..., types: "string"
  base0A: "var(--color-syntax-highlight-base0A)", // types: "null", "regex"
  base0B: "var(--color-syntax-highlight-base0B)", // types: "float"
  base0C: "var(--color-syntax-highlight-base0C)", // array index
  base0D: "var(--color-syntax-highlight-base0D)", // expanded icon, types: "date", "function"
  base0E: "var(--color-syntax-highlight-base0E)", // collapsed icon, types: "boolean"
  base0F: "var(--color-syntax-highlight-base0F)", // copy icon, types: "integer"
}

// indent size in pixel
const INDENTATION_SIZE = 5
// default truncate size
const DEFAULT_TRUNCATE_LENGTH = 100
// default indent width
const DEFAULT_INDENT_WIDTH = 4
// default expand setting
const DEFAULT_EXPANDED = 1

// map of color keys to theme
const colorMap = (theme: themes.JsonViewerTheme): ThemeColors => ({
  background: theme.base00,
  ellipsis: theme.base09,
  brace: theme.base07,
  key: theme.base07,
  index: theme.base0C,
  size: theme.base04,
  border: theme.base02,
  highlight: {
    foreground: theme.base06,
    background: theme.base02,
  },
  toolbar: {
    border: theme.base01,
    background: theme.base01,
    foreground: theme.base07,
  },
  icon: {
    expanded: theme.base0D,
    collapsed: theme.base0E,
    expandAll: theme.base0E,
  },
  dataType: {
    boolean: theme.base0E,
    date: theme.base0D,
    float: theme.base0B,
    function: theme.base0D,
    integer: theme.base0F,
    string: theme.base09,
    nan: theme.base08,
    null: theme.base0A,
    undefined: theme.base05,
    regexp: theme.base0A,
    background: theme.base02,
  },
})

// get type of value
const type = (value: unknown): TypeValueLabelType => {
  if (value === null) return "null"
  if (Array.isArray(value)) return "array"
  if (value instanceof RegExp) return "regexp"
  if (value instanceof Date) return "date"
  const t = (typeof value).toLowerCase()
  if (t === "number") {
    if (Number.isNaN(value)) return "nan"
    return Number.isInteger(value) ? "integer" : "float"
  } else return t as TypeValueLabelType
}

interface ThemeColors {
  background?: string
  ellipsis?: string
  brace?: string
  key?: string
  index?: string
  size?: string
  border?: string
  highlight: {
    foreground?: string
    background?: string
  }
  toolbar: {
    border?: string
    background?: string
    foreground?: string
  }
  icon: {
    expanded?: string
    collapsed?: string
    expandAll?: string
  }
  dataType: {
    array?: string
    object?: string
    boolean?: string
    date?: string
    float?: string
    function?: string
    integer?: string
    string?: string
    nan?: string
    null?: string
    undefined?: string
    regexp?: string
    background?: string
  }
}

interface ThemeContextType {
  //extends themes.JsonViewerTheme {
  colors: ThemeColors
  searchTerm?: string | null
  truncate?: number | boolean
  onExpandAll?: OnExapandFunc
  onSearch?: OnSearchFunc

  expanded: number | boolean
  indentWidth: number
  expandAll?: ExpandControlType | null
}

interface ExpandControlType {
  expanded: boolean
  timestamp: number
}

// eslint-disable-next-line no-unused-vars
type OnExapandFunc = (value: boolean) => void
// eslint-disable-next-line no-unused-vars
type OnSearchFunc = (value: string | null) => void

// Theme context to provide colors, ident size ect. in component tree
const ThemeContext = React.createContext<ThemeContextType>({
  colors: colorMap(DEFAULT_THEME),
  indentWidth: DEFAULT_INDENT_WIDTH,
  expanded: DEFAULT_EXPANDED,
})

interface ExpandIconProps {
  expanded: boolean
}
// this component renders the expand icon depends on the expanded prop
// per entry
const ExpandIcon = ({ expanded }: ExpandIconProps) => {
  const { colors } = useContext(ThemeContext)
  return (
    <svg
      fill={expanded ? colors.icon.expanded : colors.icon.collapsed}
      width="1em"
      height="1em"
      viewBox="0 0 1792 1792"
      style={{
        verticalAlign: "middle",
        color: "var(--color-syntax-highlight-base0E)",
        height: "1em",
        width: "1em",
      }}
    >
      <title>Expand/Collapse</title>
      {expanded ? (
        <path d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"></path>
      ) : (
        <path d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"></path>
      )}
    </svg>
  )
}

// Toolbar Icon
const ExpandAllIcon = () => {
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
const CollapseAllIcon = () => {
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

const StringWithHighlight = ({ value }: StringWithHighlightProps) => {
  const { colors, searchTerm } = useContext(ThemeContext)

  const highlight = React.useMemo(() => {
    if (value === undefined || value === null || !searchTerm || searchTerm === "") return null

    try {
      const startIndex = value.toString().toLowerCase().indexOf(searchTerm.toLowerCase())

      if (startIndex < 0) return null

      return { start: startIndex, end: startIndex + searchTerm.length }
    } catch (e) {
      console.debug("JsonViewer:", e)
      return null
    }
  }, [searchTerm])

  return highlight ? (
    <>
      {value.slice(0, highlight.start)}
      <span
        style={{
          backgroundColor: colors.highlight.background,
          color: colors.highlight.foreground,
        }}
      >
        {value.slice(highlight.start, highlight.end)}
      </span>
      {value.slice(highlight.end)}
    </>
  ) : (
    value
  )
}

interface StringWithHighlightProps {
  value: string
}

// Key label (left side) with highlight functionality
const NameLabel = ({ name }: NameLabelProps) => {
  const { colors } = useContext(ThemeContext)
  const isIndex = typeof name === "number"
  const color = isIndex ? colors.index : colors.key
  const label = isIndex ? `${name}` : `"${name}"`

  return (
    <span style={{ color }}>
      {" "}
      <span style={{ opacity: 0.85 }}>
        <StringWithHighlight value={label} />
      </span>
      {" : "}
    </span>
  )
}

interface NameLabelProps {
  name?: string | number | boolean | null
}

// this component show the right side of the json, type + value
// for null, NaN and undefined values a background is shown
// value label (left side) with highlight functionality
const TypeValueLabel = ({ type, value }: TypeValueLabelProps) => {
  const { colors, truncate } = useContext(ThemeContext)
  const undefinedValue = ["nan", "null", "undefined"].includes(type)
  let label = type === "string" ? `"${value as string}"` : `${value as any}`
  if (truncate) {
    const length = truncate === true ? DEFAULT_TRUNCATE_LENGTH : truncate
    if (label.length > length) label = label.slice(0, length - 3) + "..."
  }

  return (
    <span
      style={{
        color: colors.dataType[type],
        backgroundColor: undefinedValue ? colors.dataType.background : undefined,
        borderRadius: 3,
        padding: undefinedValue ? "2px 5px" : 0,
      }}
    >
      {!undefinedValue && (
        <span
          style={{
            opacity: 0.8,
            fontSize: "small",
            margin: "0 4px",
          }}
        >
          {type}
        </span>
      )}
      <span>
        <StringWithHighlight value={label} />
      </span>
    </span>
  )
}

type TypeValueLabelType =
  | "array"
  | "object"
  | "boolean"
  | "date"
  | "float"
  | "function"
  | "integer"
  | "string"
  | "nan"
  | "null"
  | "undefined"
  | "regexp"
  | "background"

interface TypeValueLabelProps {
  type: TypeValueLabelType
  value: unknown
}

const Toolbar = () => {
  const { colors, onExpandAll, onSearch } = useContext(ThemeContext)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${colors.toolbar?.border}`,
        padding: "3px 0 5px 0",
      }}
    >
      <span style={{ display: "flex" }}>
        <span style={{ cursor: "pointer" }} onClick={() => onExpandAll && onExpandAll(true)}>
          <ExpandAllIcon />
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => onExpandAll && onExpandAll(false)}>
          <CollapseAllIcon />
        </span>
      </span>

      <SearchInput
        className="jn-me-1"
        style={{
          backgroundColor: colors.toolbar.background,
          color: colors.toolbar.foreground,
        }}
        onChange={(e) => onSearch && onSearch(e.target.value)}
        clear
        onClear={() => onSearch && onSearch(null)}
      />
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
type ExpandButtonSetExpandedFunc = (value: boolean) => void
interface ExpandButtonProps {
  children?: React.ReactNode
  isExpanded: boolean
  setIsExpanded: ExpandButtonSetExpandedFunc
}
const ExpandButton = ({ children, isExpanded, setIsExpanded }: ExpandButtonProps) => {
  return (
    <span
      style={{ cursor: "pointer", display: "inline-block" }}
      onClick={() => {
        setIsExpanded(!isExpanded)
      }}
    >
      {children}
    </span>
  )
}

// This component renders a row of json entry
const JsonData = ({ name, value, nestedLevel = 0 }: JsonDataProps) => {
  const { colors, expanded, searchTerm, indentWidth, expandAll } = useContext(ThemeContext)
  const [isExpanded, setIsExpanded] = React.useState(
    expanded === true || (expanded !== false && expanded > nestedLevel)
  )

  useLayoutEffect(() => {
    if (!expandAll) return
    setIsExpanded(expandAll.expanded)
  }, [expandAll])

  useLayoutEffect(() => {
    if (value && searchTerm) {
      try {
        if (JSON.stringify(value).indexOf(searchTerm) > 0) setIsExpanded(true)
      } catch (_e) {
        // do nothing
      }
    }
  }, [searchTerm])

  const dataType = React.useMemo(() => type(value), [value])

  const children = React.useMemo(() => {
    if (dataType === "array") {
      return (value as Array<unknown>).map((v, i) => ({ name: i, value: v }))
    }
    if (dataType === "object")
      return Object.keys(value as object).map((key, _i) => ({
        name: key,
        value: (value as Record<any, unknown>)[key],
      }))
    return null
  }, [dataType, value])

  return (
    <div data-json-viewer={name}>
      <div style={{ letterSpacing: 0.5, padding: "3px 0" }}>
        {/* Expand Button */}
        {children && (
          <>
            <ExpandButton isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
              <ExpandIcon expanded={isExpanded} />
            </ExpandButton>{" "}
          </>
        )}
        {/* NAME */}
        {(name || name === 0) && <NameLabel name={name} />}

        {/* show type and value if no children */}
        {!children ? (
          // atomic value, not an array nor an object
          <TypeValueLabel type={dataType} value={value} />
        ) : (
          <>
            <span style={{ color: colors.brace }}>{dataType === "array" ? "[" : "{"}</span>
            {!isExpanded && (
              <>
                {/* Expand Icon */}
                <ExpandButton isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
                  <span style={{ color: colors.ellipsis }}>...</span>
                </ExpandButton>
                <span style={{ color: colors.brace }}>{dataType === "array" ? "]" : "}"}</span>
              </>
            )}
            <span
              style={{
                color: colors.size,
                opacity: 0.85,
                fontStyle: "italic",
                fontSize: "smaller",
              }}
            >
              {" "}
              {children?.length} {children?.length === 1 ? "item" : "items"}
            </span>

            {isExpanded && (
              <>
                {/* sub items */}
                <div
                  data-body={name}
                  style={{
                    paddingLeft: INDENTATION_SIZE * indentWidth,
                    marginLeft: 8,
                    borderLeft: `1px solid ${colors.border}`,
                  }}
                >
                  {children?.map((entry, i) => (
                    <JsonData key={i} name={entry.name} value={entry.value} nestedLevel={nestedLevel + 1} />
                  ))}
                </div>
                <span style={{ color: colors.key, marginLeft: 6 }}>{dataType === "array" ? "]" : "}"}</span>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface JsonDataProps {
  name?: string | number | boolean
  value?: unknown
  nestedLevel?: number
}

/** A component to render json data in a nice way. */
export const JsonViewer = ({
  data = {},
  showRoot = false,
  toolbar = false,
  theme = null,
  expanded = DEFAULT_EXPANDED,
  indentWidth = DEFAULT_INDENT_WIDTH,
  style,
  truncate = false,
  className,
  ...props
}: JsonViewerProps) => {
  const currentTheme =
    typeof theme === "string"
      ? themes[theme]
      : {
          ...DEFAULT_THEME,
          ...theme,
        }

  const colors = colorMap(currentTheme)
  const [searchTerm, setSearchTerm] = React.useState<string | null>("")
  const [expandAll, setExpandAll] = React.useState<ExpandControlType | null>(null)

  return (
    <ThemeContext.Provider
      value={{
        colors,
        expanded,
        expandAll,
        searchTerm,
        indentWidth,
        truncate,
        onExpandAll: (v: boolean) => setExpandAll({ expanded: v, timestamp: Date.now() }),
        onSearch: (v: string | null) => setSearchTerm(v),
      }}
    >
      <div
        data-json-viewer
        className={`juno-json-viewer ${className}`}
        style={{
          backgroundColor: colors.background,
          fontFamily: "monospace",
          overflow: "auto",
          ...style,
        }}
        {...props}
      >
        {toolbar && <Toolbar />}
        <JsonData name={showRoot ? "root" : false} value={data} />
      </div>
    </ThemeContext.Provider>
  )
}

type ThemeType = "dark" | "light"

export interface JsonViewerProps extends Omit<React.HTMLProps<HTMLDivElement>, "data"> {
  /** Pass a valid json. Required.  */
  // data: PropTypes.object.isRequired,
  data: object | object[]
  /** pass a styles object */
  style?: object
  /** show toolbar */
  toolbar?: boolean
  /** show root key */
  showRoot?: boolean
  /** dark, light or map of colors
   *
   * @param base00 background
   * @param base01 NOT used
   * @param base02 border, NaN,null, undefined background
   * @param base03 NOT used
   * @param base04 size (x items)
   * @param base05 type "undefined"
   * @param base06 NOT used
   * @param base07 key, brace
   * @param base08 type "NaN"
   * @param base09 ellipsis (...), type "string"
   * @param base0A types: "null", "regex"
   * @param base0B type "float"
   * @param base0C index
   * @param base0D expanded icon, types: "date", "function"
   * @param base0E collapsed icon, types: "boolean"
   * @param base0F copy icon, type "integer"
   */
  theme?: themes.JsonViewerTheme | ThemeType | null
  /** expanded can be true|false or a number. The number denotes the hierarchy level to which the object is expanded. */
  expanded?: boolean | number
  // cut strings after max length is reached, default length is 100 characters, if set to true. Or specifcy a different character length. */
  truncate?: boolean | number
  /* indent width */
  indentWidth?: number
  /* add custom classes */
  className?: string
}
