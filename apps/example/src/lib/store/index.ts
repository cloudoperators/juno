/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import createGlobalsSlice from "./createGlobalsSlice"
import createAuthSlice from "./createAuthSlice"

export default () =>
  createStore(
    devtools((set, get) => ({
      ...createGlobalsSlice(set, get),
      ...createAuthSlice(set, get),
    }))
  )
