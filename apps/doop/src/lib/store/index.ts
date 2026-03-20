/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import createDataSlice from "./createDataSlice"
import createFiltersSlice from "./createFiltersSlice"
import createUserActivitySlice from "./createUserActivitySlice"
import createGlobalsSlice from "./createGlobalsSlice"

export default (options: any) =>
  createStore(
    devtools((set, get) => ({
      ...createUserActivitySlice(set),
      ...createFiltersSlice(set, get, options),
      ...createDataSlice(set, get),
      ...createGlobalsSlice(set),
    }))
  )
