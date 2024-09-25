/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

interface WelcomeState {
  welcome: string
}

export const useWellcomeStore = create<WelcomeState>(
  immer((set) => ({
    welcome: "Welcome to the template app",
    setWelcome: (welcome: string) => set((state) => ({ welcome: state.welcome + welcome })),
  }))
)
