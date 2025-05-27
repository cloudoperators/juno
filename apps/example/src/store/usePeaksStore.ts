/* eslint-disable no-unused-vars */

import { create } from "zustand"
import { Peak } from "../mocks/db"

interface PeaksState {
  peaks: Peak[]
  selectedPeakId: string | null
  setPeaks: (peaks: Peak[]) => void
  setSelectedPeakId: (id: string | null) => void
}

const usePeaksStore = create<PeaksState>((set) => ({
  peaks: [],
  selectedPeakId: null,
  setPeaks: (peaks: Peak[]) => set({ peaks }),
  setSelectedPeakId: (id: string | null) => set({ selectedPeakId: id }),
}))

export default usePeaksStore
