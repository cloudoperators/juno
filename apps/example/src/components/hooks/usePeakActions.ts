import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"
import { Panels } from "../constants"

interface UsePeakActions {
  onBack?: () => void
}

const usePeakActions = ({ onBack }: UsePeakActions = {}) => {
  const { setCurrentPanel } = useUIStore()
  const { setSelectedPeakId } = usePeaksStore()

  const handleEdit = (peakId: number) => {
    setCurrentPanel(Panels.EDIT_PEAKS)
    setSelectedPeakId(String(peakId))
  }

  const handleDelete = () => {
    if (onBack) {
      onBack()
    }
  }

  return { handleEdit, handleDelete }
}

export default usePeakActions
