/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import createGlobalsSlice from "./createGlobalsSlice"

export default () =>
  createStore(
    devtools((set, get, options) => ({
      ...createGlobalsSlice(set, get, options),
    }))
  )
