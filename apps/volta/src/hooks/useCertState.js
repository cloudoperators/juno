/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { createStore, useStore } from "zustand"

const validateState = ({ name, description, csr }) => {
  const invalidItems = {}

  if (!name || name.length === 0) {
    if (!invalidItems["name"]) invalidItems["name"] = []
    invalidItems["name"].push(`Name can't be blank`)
  }

  if (name && name.length < 3) {
    if (!invalidItems["name"]) invalidItems["name"] = []
    invalidItems["name"].push(`3 characters is the minimum allowed`)
  }

  if (name && name.length > 30) {
    if (!invalidItems["name"]) invalidItems["name"] = []
    invalidItems["name"].push(`30 characters is the maximum allowed`)
  }

  if (description && description.length > 100) {
    if (!invalidItems["description"]) invalidItems["description"] = []
    invalidItems["description"].push(`100 characters is the maximum allowed`)
  }

  if (!csr || csr.length === 0) {
    if (!invalidItems["csr"]) invalidItems["csr"] = []
    invalidItems["csr"].push(`Certificate signing request can't be blank`)
  }

  return invalidItems
}

const createFormState = (set) => ({
  formState: { name: "", description: "", identity: "", csr: "" },
  formValidation: validateState({}),
  setAttribute: ({ key, value }) =>
    set((state) => {
      const newFormState = { ...state.formState, [key]: value }
      // run the validation
      const validation = validateState(newFormState)
      return {
        formState: newFormState,
        formValidation: validation,
      }
    }),
})

const CertContext = createContext(null)

export const CertStateProvider = ({ children }) => {
  const state = createStore((set) => createFormState(set))
  return <CertContext.Provider value={state}>{children}</CertContext.Provider>
}

export const useCertState = (selector) =>
  useStore(useContext(CertContext), selector)
