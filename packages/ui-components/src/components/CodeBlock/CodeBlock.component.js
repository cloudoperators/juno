/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { JsonViewer } from "../JsonViewer/JsonViewer.component"
import { Icon } from "../Icon/index"

const wrapperStyles = `
  jn-bg-theme-code-block
  jn-rounded
`

const preStyles = (wrap) => {
  return `
    jn-p-6
    ${wrap ? "jn-break-words jn-break-all jn-whitespace-pre-wrap" : "jn-overflow-x-auto"}
  `
}

const sizeStyles = (size) => {
  switch (size) {
    case "small":
      return `
        juno-codeblock-pre-small
        jn-max-h-64
        jn-overflow-y-auto
      `
    case "medium":
      return `
        juno-codeblock-pre-medium
        jn-max-h-[32rem]
        jn-overflow-y-auto
      `
    case "large":
      return `
        juno-codeblock-pre-large
        jn-max-h-[56rem]
        jn-overflow-y-auto
      `
    default:
      return ``
  }
}

const codeStyles = `
  jn-bg-theme-code-block
  jn-text-sm
`

const headingStyles = `
  jn-text-sm
  jn-border-b-[1px]
  jn-border-theme-codeblock-bar 
  jn-h-[3.4375rem]
  jn-flex
`

const headingInnerStyles = `
  jn-flex
  jn-font-bold
  jn-px-[1.5625rem]
  jn-items-center
`

const bottomBarStyles = `
  jn-flex 
  jn-justify-end 
  jn-px-3
  jn-py-2 
  jn-border-t-[1px]
  jn-border-theme-codeblock-bar
`

const copyTextStyles = `
  jn-font-bold 
  jn-text-sm 
  jn-mr-4 
  jn-mt-1
`

const jsonViewStyles = {
  fontFamily: "IBM Plex Mono",
  fontSize: "0.875rem",
  padding: "1.5rem",
}

const jsonTheme = {
  base00: "var(--color-syntax-highlight-base00)", //bg
  base01: "var(--color-syntax-highlight-base01)", //?
  base02: "var(--color-syntax-highlight-base02)", //lines and boxes
  base03: "var(--color-syntax-highlight-base03)",
  base04: "var(--color-syntax-highlight-base04)",
  base05: "var(--color-syntax-highlight-base05)",
  base06: "var(--color-syntax-highlight-base06)",
  base07: "var(--color-syntax-highlight-base07)",
  base08: "var(--color-syntax-highlight-base08)", // NULL
  base09: "var(--color-syntax-highlight-base09)", // String value
  base0A: "var(--color-syntax-highlight-base0A)", // NaN
  base0B: "var(--color-syntax-highlight-base0B)", // float value
  base0C: "var(--color-syntax-highlight-base0C)", // index
  base0D: "var(--color-syntax-highlight-base0D)", // expanded icon
  base0E: "var(--color-syntax-highlight-base0E)", // bool + collapsed icon
  base0F: "var(--color-syntax-highlight-base0F)", // integer value
}

/**  A basic CodeBlock component. Accepts a content prop or children. Will render a pre-wrapped code element. */
export const CodeBlock = ({
  content = "",
  children = null,
  heading,
  wrap = true,
  size = "auto",
  copy = true,
  lang = "",
  className = "",
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = React.useRef(null)

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current) // clear when component is unmounted
  }, [])

  const theCode = useRef(null)

  const handleCopyClick = () => {
    const textToCopy = lang === "json" ? JSON.stringify(content || children) : theCode.current.textContent
    navigator.clipboard.writeText(textToCopy)
    setIsCopied(true)
    clearTimeout(timeoutRef.current) // clear any possibly existing Refs
    timeoutRef.current = setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <div
      className={`juno-code-block ${wrapperStyles} ${lang ? `juno-code-block-lang-${lang}` : ""} ${className}`}
      data-lang={lang || null}
      {...props}
    >
      {heading && heading.length ? (
        <div className={`juno-codeblock-heading ${headingStyles}`}>
          <span className={`${headingInnerStyles}`}>{heading}</span>
        </div>
      ) : (
        ""
      )}
      {lang === "json" ? (
        <JsonViewer data={content} expanded={3} theme={jsonTheme} style={jsonViewStyles} />
      ) : (
        <pre className={`juno-code-block-pre ${preStyles(wrap)} ${sizeStyles(size)}`}>
          <code className={`${codeStyles}`} ref={theCode}>
            {content || children}
          </code>
        </pre>
      )}

      {copy ? (
        <div className={`juno-codeblock-bottombar ${bottomBarStyles}`}>
          <span className={`${copyTextStyles}`}>{isCopied ? "Copied!" : ""}</span>
          <Icon icon="contentCopy" onClick={handleCopyClick} />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

CodeBlock.propTypes = {
  /** The content to render. Will override children if passed. */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The children to render. Will be overridden by content prop if passed as well.  */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  /** Pass at title to render. Will look like a single tab. */
  heading: PropTypes.string,
  /** Set whether the code should wrap or not. Default is true. */
  wrap: PropTypes.bool,
  /** Set the size of the CodeBlock. Default is "auto" */
  size: PropTypes.oneOf(["auto", "small", "medium", "large"]),
  /** Render a button to copy the code to the clipboard. Defaults to true */
  copy: PropTypes.bool,
  /** Pass a lang prop. Passing "json" will render a fully-featured JsonView. Will also add a data-lang-attribute to the codeblock */
  lang: PropTypes.string,
  /** Add a custom className to the wrapper of the CodeBlock */
  className: PropTypes.string,
}
