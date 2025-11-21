import { PluginPreset } from "./types/k8sTypes"

// Get the "Ready" condition from a PluginPreset
export const getReadyCondition = (preset: PluginPreset) => {
  return preset.status?.statusConditions?.conditions?.find((condition) => condition.type === "Ready")
}

// Check if a PluginPreset is ready
export const isReady = (preset: PluginPreset) => {
  const readyCondition = getReadyCondition(preset)
  return readyCondition?.type === "Ready" && readyCondition?.status === "True"
}

// Replace _.isEmpty()
export const isEmpty = (value: any): boolean => {
  if (value == null) return true
  if (typeof value === "string" || Array.isArray(value)) return value.length === 0
  if (typeof value === "object") return Object.keys(value).length === 0
  return false
}
