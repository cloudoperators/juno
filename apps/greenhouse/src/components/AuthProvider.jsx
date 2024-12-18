import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ options, children }) => {
  const [authConfig, setAuthConfig] = useState({
    issuerURL: options?.authIssuerUrl,
    clientID: options?.authClientId,
    mock: options?.mockAuth || false,
    demoOrg: options?.demoOrg || "demo",
    demoUserToken: options?.demoUserToken,
  })

  const [authData, setAuthData] = useState(null)

  return <AuthContext.Provider value={{ authConfig, authData, setAuthData }}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export const useAuthConfig = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthConfig must be used within an AuthProvider")
  }
  return context
}
