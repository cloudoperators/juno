/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { useGlobalsActiveNavEntry } from "../../hooks/useAppStore"

const NavEntry = ({ value, children }) => {
  const activeNavEntry = useGlobalsActiveNavEntry()

  // ATENTION!! compare with == since tabindex is int and value is string
  const displayChildren = useMemo(() => activeNavEntry == value, [activeNavEntry, value])

  return <div style={{ display: displayChildren ? "inline" : "none" }}>{children}</div>
}

export default NavEntry
