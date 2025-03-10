/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"
import { devtools } from "zustand/middleware"
import createGlobalsSlice, { Globals } from "./createGlobalsSlice"
import createAuthSlice, { AuthData } from "./createAuthSlice"

type StoreState = Globals & AuthData

export default () =>
  createStore<StoreState>(
    // @ts-ignore
    devtools((set, get) => ({
      // @ts-ignore
      ...createGlobalsSlice(set, get),
      // @ts-ignore
      ...createAuthSlice(set, get),
    }))
  )
