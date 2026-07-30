/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { Spinner } from "../Spinner"

const HTTP_ERRORS: Record<number, { title: string; body: string }> = {
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
  empty: { title: "No items", body: "" },
  "no-matches": { title: "No results", body: "No items match your current filters." },
}

export interface StatusProps {
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
  const numericCode = typeof code === "string" ? parseInt(code, 10) : code
  const httpDefaults = numericCode ? HTTP_ERRORS[numericCode] : undefined
  const statusDefaults = status ? STATUS_DEFAULTS[status] : undefined

  const resolvedTitle = title ?? httpDefaults?.title ?? statusDefaults?.title
  const resolvedBody = body ?? httpDefaults?.body ?? statusDefaults?.body

  const resolvedSpinner = spinner ?? status === "progress"

  return (
    <div className={`juno-status ${className}`} {...props}>
      {code && <div className="juno-status-code">{code}</div>}
      {resolvedSpinner && <Spinner variant="primary" />}
      {resolvedTitle && <div className="juno-status-title">{resolvedTitle}</div>}
      {resolvedBody && <div className="juno-status-body">{resolvedBody}</div>}
      {details && <pre className="juno-status-details">{details}</pre>}
      {action && <div className="juno-status-action">{action}</div>}
    </div>
  )
}
