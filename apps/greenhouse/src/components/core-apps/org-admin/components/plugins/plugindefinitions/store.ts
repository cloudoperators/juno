/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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
const usePluginDefinitionsStore = create<State>((set) => ({
  endpoint: "",
  token: "",
  namespace: "",
  initialize: (endpoint, token, namespace) => set((state) => ({ endpoint, token, namespace })),
  urlStateKey: "",
  setUrlStateKey: (newUrlStateKey) => set((state) => ({ urlStateKey: newUrlStateKey })),

  pluginDefinitions: [],
  modifyPluginDefinitions: (pds) =>
    set((state) => {
      let newPluginDefinitions = [...state.pluginDefinitions]
      pds.forEach((inputPluginDefinition) => {
        const index = newPluginDefinitions.findIndex((knownPluginDefinition) => {
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
  deletePluginDefinitions: (pds) =>
    set((state) => {
      const newPluginDefinitions = state.pluginDefinitions.filter((knownPluginDefinition) => {
        return !pds.some((inputPluginDefinition) => {
          return knownPluginDefinition.metadata!.name === inputPluginDefinition.metadata!.name
        })
      })
      return { pluginDefinitions: newPluginDefinitions }
    }),
  showPluginDefinitionDetails: false,
  setShowPluginDefinitionDetails: (showPluginDefinitionDetails) =>
    set((state) => ({
      ...state,
      showPluginDefinitionDetails: showPluginDefinitionDetails,
    })),

  pluginDefinitionDetail: null,
  setPluginDefinitionDetail: (pluginDefinition) => set((state) => ({ pluginDefinitionDetail: pluginDefinition })),

  showEditForm: false,
  setShowEditForm: (showEditForm) => set((state) => ({ showEditForm: showEditForm })),

  editFormState: EditFormState.PLUGIN_CREATE,
  setEditFormState: (editFormState) => set((state) => ({ editFormState: editFormState })),

  pluginToEdit: undefined,
  setPluginToEdit: (plugin) => set((state) => ({ pluginToEdit: plugin })),

  editFormData: {
    metadata: undefined,
    spec: undefined,
    labelSelector: undefined,
  },
  setEditFormData: (editFormData) => set((state) => ({ editFormData: editFormData })),

  isFormEditMode: false,
  setIsFormEditMode: (isEditMode) => set((state) => ({ isFormEditMode: isEditMode })),

  isFormPluginPresetMode: false,
  setIsFormPluginPresetMode: (isEditMode) => set((state) => ({ isFormPluginPresetMode: isEditMode })),

  isPluginEditMode: false,
  setIsPluginEditMode: (isEditMode) => set((state) => ({ isPluginEditMode: isEditMode })),

  secrets: [],
  modifySecrets: (secrets) =>
    set((state) => {
      let newSecrets = [...state.secrets]
      secrets.forEach((inputSecret) => {
        const index = newSecrets.findIndex((knownSecret) => {
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
  deleteSecrets: (secrets) =>
    set((state) => {
      const newSecrets = state.secrets.filter((knownSecret) => {
        return !secrets.some((inputSecret) => {
          return knownSecret.metadata!.name === inputSecret.metadata!.name
        })
      })
      return { secrets: newSecrets }
    }),
  secretDetail: undefined,
  setSecretDetail: (secret) => set((state) => ({ secretDetail: secret })),
  showSecretEdit: false,
  setShowSecretEdit: (showSecretEdit) => set((state) => ({ showSecretEdit: showSecretEdit })),

  isSecretEditMode: false,
  setIsSecretEditMode: (isEditMode) => set((state) => ({ isSecretEditMode: isEditMode })),
}))

export default usePluginDefinitionsStore
