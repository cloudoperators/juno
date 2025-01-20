/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import createGlobalsSlice from "./createGlobalsSlice"
import Plugin from "../plugin"

export default (options) => {
  const store = createStore(
    devtools((set, get) => ({
      ...createGlobalsSlice(set, get, options),
    }))
  )

  const plugin = Plugin(options)

  return { store, plugin }
}
