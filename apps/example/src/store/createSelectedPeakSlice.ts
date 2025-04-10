/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"

interface SelectedPeakState {
  selectedPeakId: string | null
  setSelectedPeakId: (id: string | null) => void
}

const useSelectedPeak = create<SelectedPeakState>((set) => ({
  selectedPeakId: null,
  setSelectedPeakId: (id: string | null) => set({ selectedPeakId: id }),
}))

export default useSelectedPeak
