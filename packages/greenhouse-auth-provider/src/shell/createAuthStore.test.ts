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

  it("should transition from authenticated to anonymous", () => {
    const store = createAuthStore()
    store.setAuthState({ status: "authenticated", token: "jwt", userId: "user1" })
    store.setAuthState({ status: "anonymous" })
    expect(store.getSnapshot()).toEqual({ status: "anonymous" })
  })

  it("should transition from anonymous to authenticated", () => {
    const store = createAuthStore()
    expect(store.getSnapshot()).toEqual({ status: "anonymous" })
    store.setAuthState({ status: "authenticated", token: "new-token", userId: "user2" })
    expect(store.getSnapshot()).toEqual({ status: "authenticated", token: "new-token", userId: "user2" })
  })

  it("should update authenticated state with new token", () => {
    const store = createAuthStore()
    store.setAuthState({ status: "authenticated", token: "token1", userId: "user1" })
    store.setAuthState({ status: "authenticated", token: "token2", userId: "user1" })
    expect(store.getSnapshot()).toEqual({ status: "authenticated", token: "token2", userId: "user1" })
  })

  it("should return the same reference for getSnapshot", () => {
    const store = createAuthStore()
    const snapshot1 = store.getSnapshot
    const snapshot2 = store.getSnapshot
    expect(snapshot1).toBe(snapshot2)
  })

  it("should return new state object after setAuthState", () => {
    const store = createAuthStore()
    const initialState = store.getSnapshot()
    store.setAuthState({ status: "authenticated", token: "jwt", userId: "user1" })
    const newState = store.getSnapshot()
    expect(newState).not.toBe(initialState)
  })

  it("should handle multiple rapid state changes", () => {
    const store = createAuthStore()
    store.setAuthState({ status: "authenticated", token: "token1", userId: "user1" })
    store.setAuthState({ status: "authenticated", token: "token2", userId: "user2" })
    store.setAuthState({ status: "anonymous" })
    store.setAuthState({ status: "authenticated", token: "token3", userId: "user3" })
    expect(store.getSnapshot()).toEqual({ status: "authenticated", token: "token3", userId: "user3" })
  })
})
