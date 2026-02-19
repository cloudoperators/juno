import { createAuthStore } from "./createAuthStore"

describe("AuthStore", () => {
  it("should initialize with anonymous", () => {
    const store = createAuthStore()
    expect(store.getSnapshot()).toEqual({ status: "anonymous" })
  })

  it("should update state with setAuthState", () => {
    const store = createAuthStore()
    store.setAuthState({ status: "authenticated", token: "jwt", userId: "user1" })
    expect(store.getSnapshot()).toEqual({ status: "authenticated", token: "jwt", userId: "user1" })
  })
})
