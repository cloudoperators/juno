/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { PluginDefinition, Plugin, Secret, LabelSelector } from "../../../types/types"

export type EditFormData = {
  metadata?: Plugin["metadata"]
  spec?: Plugin["spec"]
  labelSelector?: LabelSelector
}

export enum EditFormState {
  "PLUGIN_CREATE",
  "PLUGIN_EDIT",
  "PLUGIN_PRESET_CREATE",
  "PLUGIN_PRESET_EDIT",
}

export interface State {
  endpoint: string
  token: string
  namespace: string
  initialize: (endpoint: string, token: string, namespace: string) => void
  urlStateKey: string
  setUrlStateKey: (newUrlStateKey: string) => void

  pluginDefinitions: PluginDefinition[]
  modifyPluginDefinitions: (pds: PluginDefinition[]) => void
  deletePluginDefinitions: (pds: PluginDefinition[]) => void
  showPluginDefinitionDetails: boolean
  setShowPluginDefinitionDetails: (showPluginDefinitionDetails: boolean) => void
  pluginDefinitionDetail: PluginDefinition | null
  setPluginDefinitionDetail: (pluginDefinition: PluginDefinition) => void
  showEditForm: boolean
  setShowEditForm: (showEditForm: boolean) => void
  pluginToEdit?: Plugin
  setPluginToEdit: (plugin?: Plugin) => void

  editFormData: EditFormData
  setEditFormData: (editFormData: EditFormData) => void
  editFormState: EditFormState
  setEditFormState: (editFormState: EditFormState) => void
  isFormEditMode: boolean
  setIsFormEditMode: (isEditMode: boolean) => void
  isFormPluginPresetMode: boolean
  setIsFormPluginPresetMode: (isEditMode: boolean) => void

  isPluginEditMode: boolean
  setIsPluginEditMode: (isEditMode: boolean) => void
  secrets: Secret[]
  modifySecrets: (secrets: Secret[]) => void
  deleteSecrets: (secrets: Secret[]) => void
  secretDetail?: Secret
  setSecretDetail: (secret?: Secret) => void
  showSecretEdit: boolean
  setShowSecretEdit: (showSecretEdit: boolean) => void
  isSecretEditMode: boolean
  setIsSecretEditMode: (isEditMode: boolean) => void
}

// global zustand store. See how this works here: https://github.com/pmndrs/zustand
const usePluginDefinitionsStore = create<State>((set: any) => ({
  endpoint: "",
  token: "",
  namespace: "",

  initialize: (endpoint: any, token: any, namespace: any) =>
    set((state: any) => ({
      endpoint,
      token,
      namespace,
    })),

  urlStateKey: "",

  setUrlStateKey: (newUrlStateKey: any) =>
    set((state: any) => ({
      urlStateKey: newUrlStateKey,
    })),

  pluginDefinitions: [],

  modifyPluginDefinitions: (pds: any) =>
    set((state: any) => {
      let newPluginDefinitions = [...state.pluginDefinitions]
      pds.forEach((inputPluginDefinition: any) => {
        const index = newPluginDefinitions.findIndex((knownPluginDefinition: any) => {
          return knownPluginDefinition.metadata!.name === inputPluginDefinition.metadata!.name
        })
        if (index >= 0) {
          newPluginDefinitions[index] = inputPluginDefinition
        } else {
          newPluginDefinitions.push(inputPluginDefinition)
        }
      })
      return { pluginDefinitions: newPluginDefinitions }
    }),

  deletePluginDefinitions: (pds: any) =>
    set((state: any) => {
      const newPluginDefinitions = state.pluginDefinitions.filter((knownPluginDefinition: any) => {
        return !pds.some((inputPluginDefinition: any) => {
          return knownPluginDefinition.metadata!.name === inputPluginDefinition.metadata!.name
        })
      })
      return { pluginDefinitions: newPluginDefinitions }
    }),

  showPluginDefinitionDetails: false,

  setShowPluginDefinitionDetails: (showPluginDefinitionDetails: any) =>
    set((state: any) => ({
      ...state,
      showPluginDefinitionDetails: showPluginDefinitionDetails,
    })),

  pluginDefinitionDetail: null,

  setPluginDefinitionDetail: (pluginDefinition: any) =>
    set((state: any) => ({
      pluginDefinitionDetail: pluginDefinition,
    })),

  showEditForm: false,

  setShowEditForm: (showEditForm: any) =>
    set((state: any) => ({
      showEditForm: showEditForm,
    })),

  editFormState: EditFormState.PLUGIN_CREATE,

  setEditFormState: (editFormState: any) =>
    set((state: any) => ({
      editFormState: editFormState,
    })),

  pluginToEdit: undefined,

  setPluginToEdit: (plugin: any) =>
    set((state: any) => ({
      pluginToEdit: plugin,
    })),

  editFormData: {
    metadata: undefined,
    spec: undefined,
    labelSelector: undefined,
  },

  setEditFormData: (editFormData: any) =>
    set((state: any) => ({
      editFormData: editFormData,
    })),

  isFormEditMode: false,

  setIsFormEditMode: (isEditMode: any) =>
    set((state: any) => ({
      isFormEditMode: isEditMode,
    })),

  isFormPluginPresetMode: false,

  setIsFormPluginPresetMode: (isEditMode: any) =>
    set((state: any) => ({
      isFormPluginPresetMode: isEditMode,
    })),

  isPluginEditMode: false,

  setIsPluginEditMode: (isEditMode: any) =>
    set((state: any) => ({
      isPluginEditMode: isEditMode,
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

export default usePluginDefinitionsStore
