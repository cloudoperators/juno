/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { Peak } from "../mocks/db"

interface PeaksState {
  peaks: Peak[]
  selectedPeakId: string | null
  setPeaks: (_peaks: Peak[]) => void
  setSelectedPeakId: (_id: string | null) => void
}

const usePeaksStore = create<PeaksState>((set) => ({
  peaks: [],
  selectedPeakId: null,
  setPeaks: (peaks) => set({ peaks }),
  setSelectedPeakId: (id) => set({ selectedPeakId: id }),
}))

export default usePeaksStore
