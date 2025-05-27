import useUIStore from "../../store/useUIStore"
import { Panels } from "../constants"

interface UsePeakActions {
  onBack?: () => void
}

const usePeakActions = ({ onBack }: UsePeakActions = {}) => {
  const { setCurrentPanel } = useUIStore()

  const handleEdit = (peakId: number) => {
    setCurrentPanel({ type: Panels.EDIT_PEAKS, itemId: String(peakId) }) // Correctly set panel type and ID
  }

  const handleDelete = () => {
    if (onBack) {
      onBack()
    }
  }

  return { handleEdit, handleDelete }
}

export default usePeakActions
