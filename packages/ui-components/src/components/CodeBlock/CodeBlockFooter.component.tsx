import React from "react"
import { Icon } from "../Icon"

const bottomBarStyles = `
  jn:flex
  jn:justify-end
  jn:px-3
  jn:py-2
  jn:border-t
  jn:border-theme-codeblock-bar
`

const copyTextStyles = `
  jn:font-bold
  jn:text-sm
  jn:mr-4
  jn:mt-1
`

export interface CodeBlockFooterProps {
  /**
   * Callback function to handle the copy action.
   */
  onCopy: () => void

  /**
   * Indicates whether the content has been copied.
   */
  isCopied: boolean
}

export const CodeBlockFooter = ({ onCopy, isCopied }: CodeBlockFooterProps) => (
  <div className={`juno-codeblock-bottombar ${bottomBarStyles}`}>
    <span className={`${copyTextStyles}`}>{isCopied ? "Copied!" : ""}</span>
    <Icon icon="contentCopy" onClick={onCopy} />
  </div>
)
