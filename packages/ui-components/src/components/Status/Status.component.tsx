/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { Spinner } from "../Spinner"
import { useDataGridContext } from "../DataGrid/DataGrid.component"

const HTTP_ERRORS: Record<number, { title: string; body: string }> = {
  400: { title: "Bad Request", body: "The request could not be processed due to invalid syntax. Try again." },
  401: { title: "Authentication Required", body: "Authentication failed. Verify your credentials and try again." },
  403: { title: "Access Denied", body: "You do not have the required permissions to access this resource." },
  404: { title: "Page Not Found", body: "The requested URL does not exist or may have moved." },
  408: {
    title: "Request Timeout",
    body: "The request did not return a complete result in time. Check your connection and try again.",
  },
  409: { title: "Conflict", body: "" },
  429: { title: "Too Many Requests", body: "" },
  500: { title: "Internal Server Error", body: "An internal error occurred. Try again." },
  502: { title: "Bad Gateway", body: "The server returned an invalid response. Try again." },
  503: { title: "Service Unavailable", body: "The service is temporarily unavailable. Try again later." },
  504: { title: "Gateway Timeout", body: "A server did not respond in time. Check your connection and try again." },
}

const STATUS_DEFAULTS: Record<string, { title: string; body: string }> = {
  progress: { title: "Loading…", body: "" },
  error: { title: "Something went wrong", body: "An error occurred. Try again." },
  empty: { title: "No items", body: "There are no items to display." },
  "no-matches": { title: "", body: "No items match the current filters. Adjust or clear filters." },
}

export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The status to display. Determines the default copy. Defaults to `"error"`. */
  status?: "progress" | "error" | "empty" | "no-matches"
  /** Optional title. Overrides the per-status default title when set. */
  title?: string
  /** Optional body text. Overrides the per-status default body text when set. */
  body?: string
  /** Renders a `Spinner`. Defaults to `true` when `status="progress"`, `false` otherwise. */
  spinner?: boolean
  /** Displayed large and prominently above the title. Intended for HTTP error codes such as 404 or 500. */
  code?: number | string
  /** Rendered in a `<pre>` block using monospaced font. Intended for stack traces and server responses. Scrolls vertically if content exceeds the maximum height. */
  details?: string
  /** Optional action area rendered below the content. Typically a `Button` or a button-styled anchor element. */
  action?: ReactNode
  /** Add custom CSS classes to the root element. */
  className?: string
}

const statusStyles = `
  jn:flex
  jn:flex-col
  jn:items-center
  jn:text-center
`

const statusDataGridStyles = `
  jn:min-h-[12.5rem]
  jn:max-h-[18.1875rem]
  jn:justify-center
  jn:my-2
`

const detailsDataGridStyles = `
  jn:min-h-0
  jn:overflow-y-auto
`

const codeStyles = `
  jn:text-[12.5rem]
  jn:font-bold
  jn:leading-none
  jn:text-theme-status-code
`

const titleStyles = `
  jn:text-lg
  jn:leading-[1.5]
  jn:max-w-[50rem]
`

const bodyStyles = `
  jn:leading-[1.5]
  jn:max-w-[50rem]
`

const detailsStyles = `
  jn:text-left
  jn:text-xs
  jn:bg-theme-status-details
  jn:text-theme-status-details
  jn:border
  jn:border-theme-status-details
  jn:py-0.5
  jn:px-1
  jn:mt-4
  jn:w-full
  jn:max-w-[50rem]
  jn:max-h-[30rem]
  jn:overflow-x-auto
  jn:overflow-y-auto
`

export const Status = ({
  status = "error",
  title,
  body,
  spinner,
  code,
  details,
  action,
  className = "",
  ...props
}: StatusProps) => {
  const { isDataGrid } = useDataGridContext()

  const numericCode = typeof code === "string" ? parseInt(code, 10) : code
  const httpDefaults = numericCode ? HTTP_ERRORS[numericCode] : undefined
  const statusDefaults = status ? STATUS_DEFAULTS[status] : undefined

  const resolvedTitle = title ?? httpDefaults?.title ?? statusDefaults?.title
  const resolvedBody = body ?? httpDefaults?.body ?? statusDefaults?.body

  const resolvedSpinner = spinner ?? status === "progress"

  const role = status === "error" ? "alert" : "status"

  return (
    <div
      role={role}
      className={`juno-status ${isDataGrid ? `juno-status-datagrid ${statusDataGridStyles}` : ""} ${statusStyles} ${className}`}
      {...props}
    >
      {/* suppress rendering HTTP error codes inside a DataGrid: */}
      {/* explicit null check instead of truthiness — 0 is falsy but a valid (if unusual/non-sensical) value, but still… */}
      {code != null && !isDataGrid && <div className={`juno-status-code ${codeStyles}`}>{code}</div>}
      {resolvedSpinner && <Spinner variant="primary" aria-label={resolvedTitle ?? "Loading"} />}
      {resolvedTitle && <strong className={`juno-status-title ${titleStyles}`}>{resolvedTitle}</strong>}
      {resolvedBody && <div className={`juno-status-body ${bodyStyles}`}>{resolvedBody}</div>}
      {details && (
        <pre
          aria-label="Error details"
          className={`juno-status-details ${detailsStyles} ${isDataGrid ? detailsDataGridStyles : ""}`}
        >
          {details}
        </pre>
      )}
      {action && <div className="juno-status-action jn:mt-4">{action}</div>}
    </div>
  )
}
