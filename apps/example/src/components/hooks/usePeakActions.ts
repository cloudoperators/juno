/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useGlobalsActions } from "../../store/StoreProvider"
import { Panels } from "../constants"

interface UsePeakActions {
  onBack?: () => void
}

const usePeakActions = ({ onBack }: UsePeakActions = {}) => {
  const { setCurrentPanel } = useGlobalsActions()

  const handleEdit = (peakId: string) => {
    setCurrentPanel({ type: Panels.EDIT_PEAKS, peakId })
  }

  const handleDelete = () => {
    if (onBack) {
      onBack()
    }
  }

  return { handleEdit, handleDelete }
}

export default usePeakActions
