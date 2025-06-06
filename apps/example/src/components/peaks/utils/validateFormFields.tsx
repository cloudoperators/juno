/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

interface FormState {
  id?: string
  name?: string
  height?: string
  mainrange?: string
  region?: string
  countries?: string
  url?: string
}

type ValidationFunctionType = (value: string) => string

const ErrorMessages = {
  REQUIRED: "Field is required",
  MINIMUM_LENGTH: "Must be at least 3 characters long",
  INVALID_CHARACTERS: "Must contain only alphabetical characters and spaces",
  POSITIVE_NUMBER: "Must be a positive number",
  INVALID_URL: "Please enter a valid URL (e.g., https://example.com)",
}

export const validateNameField: ValidationFunctionType = (value) => {
  if (!value) return ErrorMessages.REQUIRED
  if (value.length < 3) return ErrorMessages.MINIMUM_LENGTH
  if (!/^[a-zA-Z\s]+$/.test(value)) return ErrorMessages.INVALID_CHARACTERS
  return ""
}

export const validateHeightField: ValidationFunctionType = (value) => {
  if (!value) return ErrorMessages.REQUIRED
  if (!/^\d+$/.test(value)) return ErrorMessages.POSITIVE_NUMBER
  return ""
}

export const validateUrlField: ValidationFunctionType = (value) => {
  if (!value) return ""
  try {
    new URL(value)
    return ""
  } catch {
    return ErrorMessages.INVALID_URL
  }
}

export const validateFormField = (key: keyof FormState, value: string): string => {
  const validators: Record<keyof FormState, ValidationFunctionType> = {
    id: () => "",
    name: validateNameField,
    height: validateHeightField,
    mainrange: validateNameField,
    region: validateNameField,
    countries: validateNameField,
    url: validateUrlField,
  }

  return (validators[key] || (() => ""))(value)
}

export const validateEntireForm = (formState: FormState, errors: FormState): boolean => {
  const mandatoryFields: Array<keyof FormState> = ["name", "height", "mainrange", "region", "countries"]
  const mandatoryFilled = mandatoryFields.every((key) => formState[key]?.trim() !== "")
  const noErrors = Object.values(errors).every((error) => error === "")
  return mandatoryFilled && noErrors
}
