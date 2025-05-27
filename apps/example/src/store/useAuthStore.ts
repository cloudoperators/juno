/* eslint-disable no-unused-vars */
import { create } from "zustand"

interface AuthState {
  loggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
}

const useAuthStore = create<AuthState>((set) => ({
  loggedIn: true,
  setLoggedIn: (loggedIn) => set({ loggedIn }),
}))

export default useAuthStore
