/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 2.
      ...createUserActivitySlice(set, get),
      ...createFiltersSlice(set, get, options),
      ...createDataSlice(set, get),
      // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 2.
      ...createGlobalsSlice(set, get),
    }))
  )
