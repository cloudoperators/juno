import { create } from "zustand"
import { Pages } from "../components/constants"

interface NavigationState {
  currentPage: string
  // eslint-disable-next-line no-unused-vars
  setCurrentPage: (page: string) => void
}

const useNavigationStore = create<NavigationState>((set) => ({
  currentPage: Pages.PEAKS,
  setCurrentPage: (page) => set({ currentPage: page }),
}))

export default useNavigationStore
