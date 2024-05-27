/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { devtools } from "zustand/middleware"

const createCertSlice = (set, get) => ({
  cert: {
    showNewCert: false,
    isFormSubmitting: false,
    revokedList: [], // used to keep track of the revoked certs and poll until we get the right state

    actions: {
      setShowNewCert: (show) =>
        set(
          (state) => ({ cert: { ...state.cert, showNewCert: show } }),
          false,
          "cert/setShowNewCert"
        ),
      setIsFormSubmitting: (isFormSubmitting) => {
        set(
          (state) => ({
            cert: {
              ...state.cert,
              isFormSubmitting: isFormSubmitting,
            },
          }),
          false,
          "cert/setIsFormSubmitting"
        )
      },
      addRevokedCert: (ca, certSN) => {
        set(
          (state) => {
            const index = state.cert.revokedList.findIndex(
              (i) => i.certSN === certSN && i.ca === ca
            )
            if (index >= 0) return state
            const newList = state.cert.revokedList.slice()
            newList.push({ certSN: certSN, ca: ca })
            return { cert: { ...state.cert, revokedList: newList } }
          },
          false,
          "cert/addRevokedCert"
        )
      },
      removeRevokedCert: (ca, certSN) => {
        set(
          (state) => {
            const index = state.cert.revokedList.findIndex(
              (i) => i.certSN === certSN && i.ca === ca
            )
            if (index < 0) return state
            const newList = state.cert.revokedList.slice()
            newList.splice(index, 1)
            return { cert: { ...state.cert, revokedList: newList } }
          },
          false,
          "cert/removeRevokedCert"
        )
      },
    },
  },
})

const createAuthSlice = (set, get) => ({
  auth: {
    data: null,
    isProcessing: false,
    loggedIn: false,
    error: null,
    login: null,
    logout: null,

    actions: {
      setData: (data) => {
        set(
          (state) => ({
            auth: {
              ...state.auth,
              isProcessing: data.isProcessing,
              loggedIn: data.loggedIn,
              error: data.error,
              data: data.auth,
            },
          }),
          false,
          "auth/setData"
        )
      },
      setLogin: (func) =>
        set(
          (state) => ({ auth: { ...state.auth, login: func } }),
          false,
          "auth/setLogin"
        ),
      setLogout: (func) =>
        set(
          (state) => ({ auth: { ...state.auth, logout: func } }),
          false,
          "auth/setLogout"
        ),
    },
  },
})

const createGlobalsSlice = (set, get) => ({
  globals: {
    endpoint: "",
    disabledCAs: [],
    documentationLinks: {},
    selectedCA: "",
    embedded: false,
    isMock: false,
    actions: {
      setEmbedded: (embedded) =>
        set(
          (state) => ({ globals: { ...state.globals, embedded: embedded } }),
          false,
          "globals/setEmbedded"
        ),
      setEndpoint: (endpoint) =>
        set(
          (state) => ({ globals: { ...state.globals, endpoint: endpoint } }),
          false,
          "globals/setEndpoint"
        ),
      setSelectedCA: (ca) =>
        set(
          (state) => ({ globals: { ...state.globals, selectedCA: ca } }),
          false,
          "globals/setSelectedCA"
        ),
      setDisabledCAs: (cas) =>
        set(
          (state) => {
            if (!cas || typeof cas !== "string") return state
            const disabledCAs = cas.split(",")
            return { globals: { ...state.globals, disabledCAs: disabledCAs } }
          },
          false,
          "globals/setDisabledCAs"
        ),
      setDocumentationLinks: (links) =>
        set(
          (state) => {
            if (!links || typeof links !== "string") return state
            let newLinks = {}
            const keyValueLinks = links.split(",")
            keyValueLinks.forEach((kv) => {
              const kvArr = kv.split("=")
              // ensure that there are key and value
              if (kvArr.length === 2) {
                newLinks[kvArr[0]] = kvArr[1]
              }
            })
            return {
              globals: { ...state.globals, documentationLinks: newLinks },
            }
          },
          false,
          "globals/setDocumentationLinks"
        ),

      setMock: (isMock) =>
        set(
          (state) => ({ globals: { ...state.globals, isMock } }),
          false,
          "globals/setMock"
        ),
    },
  },
})

const useStore = create(
  devtools((set, get) => ({
    ...createCertSlice(set, get),
    ...createAuthSlice(set, get),
    ...createGlobalsSlice(set, get),
  }))
)

// atomic exports only instead of exporting whole store
// See reasoning here: https://tkdodo.eu/blog/working-with-zustand

// Globals exports
export const useGlobalsEndpoint = () =>
  useStore((state) => state.globals.endpoint)
export const useGlobalsDisabledCAs = () =>
  useStore((state) => state.globals.disabledCAs)
export const useGlobalsDocumentationLinks = () =>
  useStore((state) => state.globals.documentationLinks)
export const useGlobalsSelectedCA = () =>
  useStore((state) => state.globals.selectedCA)
export const useGlobalsEmbedded = () =>
  useStore((state) => state.globals.embedded)
export const useGlobalsIsMock = () => useStore((state) => state.globals.isMock)
export const useGlobalsActions = () =>
  useStore((state) => state.globals.actions)

// Auth exports
export const useAuthData = () => useStore((state) => state.auth.data)
export const useAuthIsProcessing = () =>
  useStore((state) => state.auth.isProcessing)
export const useAuthLoggedIn = () => useStore((state) => state.auth.loggedIn)
export const useAuthError = () => useStore((state) => state.auth.error)
export const useAuthLogin = () => useStore((state) => state.auth.login)
export const useAuthLogout = () => useStore((state) => state.auth.logout)

export const useAuthActions = () => useStore((state) => state.auth.actions)

// Cert exports
export const useCertShowNew = () => useStore((state) => state.cert.showNewCert)
export const useCertIsFormSubmitting = () =>
  useStore((state) => state.cert.isFormSubmitting)
export const useRevokedList = () => useStore((state) => state.cert.revokedList)

export const useCertActions = () => useStore((state) => state.cert.actions)
