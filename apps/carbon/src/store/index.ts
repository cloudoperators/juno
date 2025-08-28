/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"

interface WelcomeState {
  welcome: string
}
type Actions = {
  setWelcome: (_welcome: string) => void
}

export const useWellcomeStore = create<WelcomeState & Actions>()((set) => ({
  welcome: "Welcome to the template app with zustand",
  setWelcome: (welcome: string) =>
    set(() => ({
      welcome,
    })),
}))
