/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon } from "@cloudoperators/juno-ui-components"
import { getSafeExternalUrl } from "../utils"

interface LinkElementProps {
  url: string
  label: string
}

export const ExternalLink: React.FC<LinkElementProps> = ({ url, label }) => {
  const placeholder = "Unknown Service"
  const safeUrl = getSafeExternalUrl(url)
  const displayName = label || placeholder

  return safeUrl ? (
    <a
      href={safeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${displayName} in a new tab`}
      className="cursor-pointer"
    >
      <div className="inline-block mr-2">{displayName}</div>
      <Icon size="18" icon="openInNew" className="inline-block" />
    </a>
  ) : (
    <span>{displayName}</span>
  )
}
