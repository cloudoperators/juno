/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Stack, ContentHeading, Button, TextInput } from "@cloudoperators/juno-ui-components"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const validateInputs = () => {
    const isUsernameValid = username.length >= 3
    const isPasswordValid = password.length >= 6 // Example length check for password
    setIsFormValid(isUsernameValid && isPasswordValid)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isFormValid) {
      // Proceed with login logic
      console.log("Logged in with:", { username, password })
    }
  }

  return (
    <div className="flex h-screen">
      {/* Branding Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-blue-900 text-white p-8">
        <svg
          className="w-20 h-20 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l9-9 4 4L21 7"></path>
        </svg>
        <ContentHeading className="text-xl">SAP Mountain Peaks Dashboard</ContentHeading>
      </div>

      {/* Login Form Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <Stack direction="vertical" alignment="center" distribution="center" gap="6">
          <h2>Welcome to the SAP Mountain Peaks Dashboard! Log in to get access to the peaks of the world!</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <TextInput
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  validateInputs()
                }}
                placeholder="Enter your username"
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="password">
                Password <span className="text-xs text-gray-600">(at least 6 characters)</span>
              </label>
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  validateInputs()
                }}
                placeholder="Enter your password"
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!isFormValid}
              label="Log In"
              variant={isFormValid ? "primary" : "primary-disabled"}
            />
          </form>
        </Stack>
      </div>
    </div>
  )
}

export default LoginPage
