// usePeaksStore.ts
import { create } from "zustand"
import { Peak } from "../mocks/db"

interface PeaksState {
  peaks: Peak[]
  setPeaks: (peaks: Peak[]) => void
}

const usePeaksStore = create<PeaksState>((set) => ({
  peaks: [],
  setPeaks: (peaks: Peak[]) => set({ peaks }),
}))

export default usePeaksStore
