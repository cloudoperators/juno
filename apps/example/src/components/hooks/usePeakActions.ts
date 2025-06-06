/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"
import { Panels } from "../constants"

interface UsePeakActions {
  onBack?: () => void
}

const usePeakActions = ({ onBack }: UsePeakActions = {}) => {
  const { setCurrentPanel } = useUIStore()
  const { setSelectedPeakId } = usePeaksStore()

  const handleEdit = (peakId: String) => {
    setCurrentPanel(Panels.EDIT_PEAKS)
    setSelectedPeakId(String(peakId))
  }

  const handleDelete = () => {
    if (onBack) onBack()
  }

  return { handleEdit, handleDelete }
}

export default usePeakActions
