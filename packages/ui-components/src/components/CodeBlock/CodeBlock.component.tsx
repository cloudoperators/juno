/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useCallback, useEffect, ReactNode, HTMLAttributes } from "react"
import { JsonViewer } from "../JsonViewer"
import { Icon } from "../Icon"

const wrapperStyles = `
  jn:bg-theme-code-block
  jn:rounded
`

const preStyles = (wrap: boolean) => {
  return `
    jn:p-6
    ${wrap ? "jn:break-words jn:break-all jn:whitespace-pre-wrap" : "jn:overflow-x-auto"}
  `
}

const sizeStyles = (size: CodeBlockSize) => {
  switch (size) {
    case "small":
      return `
        juno-codeblock-pre-small
        jn:max-h-64
        jn:overflow-y-auto
      `
    case "medium":
      return `
        juno-codeblock-pre-medium
        jn:max-h-[32rem]
        jn:overflow-y-auto
      `
    case "large":
      return `
        juno-codeblock-pre-large
        jn:max-h-[56rem]
        jn:overflow-y-auto
      `
    default:
      return ``
  }
}

const codeStyles = `
  jn:bg-theme-code-block
  jn:text-sm
`

const headingStyles = `
  jn:text-sm
  jn:border-b-[1px]
  jn:border-theme-codeblock-bar 
  jn:h-[3.4375rem]
  jn:flex
`

const headingInnerStyles = `
  jn:flex
  jn:font-bold
  jn:px-[1.5625rem]
  jn:items-center
`

const bottomBarStyles = `
  jn:flex 
  jn:justify-end 
  jn:px-3
  jn:py-2 
  jn:border-t-[1px]
  jn:border-theme-codeblock-bar
`

const copyTextStyles = `
  jn:font-bold 
  jn:text-sm 
  jn:mr-4 
  jn:mt-1
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

/**
 * The `CodeBlock` component renders a block of preformatted code or content. It offers features such
 * as optional wrapping, copying to clipboard, and syntax highlighting for JSON content via a custom viewer.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-codeblock--docs
 * @see {@link CodeBlockProps}
 */
export const CodeBlock = ({
  content = "",
  children,
  wrap = true,
  size = "auto",
  copy = true,
  lang = "",
  className = "",
  ...props
}: CodeBlockProps): ReactNode => {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const { heading } = props
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    } // clear when component is unmounted
  }, [])

  const theCode = useRef<HTMLElement>(null)

  const handleCopyClick = useCallback(() => {
    const textToCopy = lang === "json" ? JSON.stringify(content || children) : theCode.current?.textContent
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).catch(() => {
        console.warn("Cannot copy text to clipboard")
      })
    }
    setIsCopied(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current) // clear any possibly existing Refs
    }
    timeoutRef.current = window.setTimeout(() => setIsCopied(false), 1000)
  }, [content, children, lang])

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
            {children ?? (typeof content === "string" ? content : null)}
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

type CodeBlockSize = "auto" | "small" | "medium" | "large"

export interface CodeBlockProps extends Omit<HTMLAttributes<HTMLDivElement>, "content" | "children"> {
  /**
   * The content to render. Used when `lang` is "json". Overrides children if not specified.
   * Defaults to an empty string or object.
   */
  content?: string | object

  /**
   * Elements or text to render inside the code block. Used when `lang` is not "json", overriding `content`.
   */
  children?: ReactNode

  /**
   * Optional caption or title to render, styled like a tab.
   */
  heading?: string

  /**
   * Determines whether the code should wrap.
   * @default true
   */
  wrap?: boolean

  /**
   * Specifies the size of the CodeBlock.
   * @default "auto"
   */
  size?: CodeBlockSize

  /**
   * Enables or disables the copy-to-clipboard option.
   * @default true
   */
  copy?: boolean

  /**
   * Language for the content. "json" will render a structured JsonView. Adds a data-lang attribute.
   */
  lang?: string

  /**
   * Additional CSS classes for customizing the CodeBlock styling.
   * @default ""
   */
  className?: string
}
