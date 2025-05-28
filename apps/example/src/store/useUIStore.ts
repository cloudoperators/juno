/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

import { create } from "zustand"

interface UIState {
  currentModal: string | null
  currentPanel: string | null
  showPeakDetails: boolean
  tabIndex: number
  setCurrentModal: (modal: string | null) => void
  setCurrentPanel: (panel: string | null) => void
  setShowPeakDetails: (show: boolean) => void
  setTabIndex: (index: number) => void
}

const useUIStore = create<UIState>((set) => ({
  currentModal: null,
  currentPanel: null,
  showPeakDetails: false,
  tabIndex: 0,
  setCurrentModal: (modal) => set({ currentModal: modal }),
  setCurrentPanel: (panel) => set({ currentPanel: panel }),
  setShowPeakDetails: (show) => set({ showPeakDetails: show }),
  setTabIndex: (index) => set({ tabIndex: index }),
}))

export default useUIStore
