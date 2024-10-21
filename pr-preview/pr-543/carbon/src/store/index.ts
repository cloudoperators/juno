/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface WelcomeState {
  welcome: string
}
type Actions = {
  setWelcome: (welcome: string) => void
}

export const useWellcomeStore = create<WelcomeState & Actions>()(
  immer((set) => ({
    welcome: "Welcome to the template app with zustand",
    setWelcome: (welcome: string) =>
      set((state) => {
        state.welcome = welcome
      }),
  }))
)
