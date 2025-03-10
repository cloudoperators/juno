/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Validate name field
export const validateNameField = (value: string): string => {
  if (!value) return "Field is required"
  if (value.length < 3) return "Must be at least 3 characters long"
  if (!/^[a-zA-Z\s]+$/.test(value)) return "Must contain only alphabetical characters and spaces"
  return ""
}

// Validate height field
export const validateHeightField = (value: string): string => {
  if (!value) return "Field is required"
  if (!/^\d+$/.test(value)) return "Must be a positive number"
  return ""
}

// Validate URL fiels
export const validateUrlField = (value: string): string => {
  if (!value) return "" // URL is optional
  try {
    new URL(value)
    return ""
  } catch {
    return "Please enter a valid URL (e.g., https://example.com)"
  }
}

// General validation that picks specific function based on field
export const validateFormField = (key: keyof FormState, value: string): string => {
  switch (key) {
    case "name":
    case "range":
    case "region":
    case "country":
      return validateNameField(value)
    case "height":
      return validateHeightField(value)
    case "url":
      return validateUrlField(value)
    default:
      return ""
  }
}

// Validates the entire form; assumes formState and errors are globally accessible or passed as parameters
export const validateEntireForm = (formState: FormState, errors: FormState): boolean => {
  const mandatoryFilled = ["name", "height", "range", "region", "country"].every((key) => formState[key]?.trim() !== "")
  const noErrors = Object.values(errors).every((error) => error === "")
  return mandatoryFilled && noErrors
}
