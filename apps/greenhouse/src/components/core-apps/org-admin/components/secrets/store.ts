/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { Secret } from "../../types/types"

export interface State {
  endpoint: string
  token: string
  namespace: string
  initialize: (endpoint: string, token: string, namespace: string) => void
  urlStateKey: string
  setUrlStateKey: (newUrlStateKey: string) => void

  secrets: Secret[]
  deleteSecrets: (secrets: Secret[]) => void
  modifySecrets: (secrets: Secret[]) => void
  secretDetail?: Secret
  setSecretDetail: (secret?: Secret) => void
  showSecretEdit: boolean
  setShowSecretEdit: (showSecretEdit: boolean) => void
  isSecretEditMode: boolean
  setIsSecretEditMode: (isEditMode: boolean) => void
}

// global zustand store. See how this works here: https://github.com/pmndrs/zustand
const useStore = create<State>((set: any) => ({
  endpoint: "",
  token: "",
  namespace: "",

  initialize: (endpoint: any, token: any, namespace: any) =>
    set((state: any) => ({
      endpoint,
      token,
      namespace,
    })),

  urlStateKey: "secret-admin",

  setUrlStateKey: (newUrlStateKey: any) =>
    set((state: any) => ({
      urlStateKey: newUrlStateKey,
    })),

  secrets: [],

  modifySecrets: (secrets: any) =>
    set((state: any) => {
      let newSecrets = [...state.secrets]
      secrets.forEach((inputSecret: any) => {
        const index = newSecrets.findIndex((knownSecret: any) => {
          return knownSecret.metadata!.name === inputSecret.metadata!.name
        })
        if (index >= 0) {
          newSecrets[index] = inputSecret
        } else {
          newSecrets.push(inputSecret)
        }
      })
      return { ...state, secrets: newSecrets }
    }),

  deleteSecrets: (secrets: any) =>
    set((state: any) => {
      const newSecrets = state.secrets.filter((knownSecret: any) => {
        return !secrets.some((inputSecret: any) => {
          return knownSecret.metadata!.name === inputSecret.metadata!.name
        })
      })
      return { secrets: newSecrets }
    }),

  secretDetail: undefined,

  setSecretDetail: (secret: any) =>
    set((state: any) => ({
      secretDetail: secret,
    })),

  showSecretEdit: false,

  setShowSecretEdit: (showSecretEdit: any) =>
    set((state: any) => ({
      showSecretEdit: showSecretEdit,
    })),

  isSecretEditMode: false,

  setIsSecretEditMode: (isEditMode: any) =>
    set((state: any) => ({
      isSecretEditMode: isEditMode,
    })),
}))

const updateSecrets = (existingSecrets: Secret[], newSecrets: Secret[]): Secret[] => {
  let returnSecrets = existingSecrets
  newSecrets.forEach((inputSecret) => {
    const index = existingSecrets.findIndex((knownSecret: any) => {
      return knownSecret.metadata!.name === inputSecret.metadata!.name
    })
    if (index >= 0) {
      returnSecrets[index] = inputSecret
    } else {
      returnSecrets.push(inputSecret)
    }
  })
  return returnSecrets
}

export default useStore
