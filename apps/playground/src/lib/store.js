/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"

const defaultEditorCode = `
import React from "react"
import { LoadingIndicator } from "juno-ui-components"

export default function App() {
  return (
    <LoadingIndicator />
  )
}
`.trim()

export default (options) =>
  createStore(
    devtools((set, get) => ({
      theme: options?.theme,
      readOnly: options?.readOnly === true || options?.readOnly === "true",
      initialEditorCode: options?.initialEditorCode || defaultEditorCode,
    }))
  )
