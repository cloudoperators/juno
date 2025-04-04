/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

////// Form Validation

export const validateForm = (state: any) => {
  const minCommentLength = 3
  const minUserNameLength = 1

  let formState = state
  let errorexist = false

  // validate if comment is at least 3 characters long
  if (formState.comment.value.length < minCommentLength) {
    errorexist = true
    formState = {
      ...formState,
      comment: {
        ...formState.comment, // Only create the comment object if it exists
        error: "Please enter at least 3 characters",
      },
    }
  }

  // validate if createdBy is at least 1 characters long
  if (!formState?.createdBy?.value || formState?.createdBy?.value.length < minUserNameLength) {
    errorexist = true
    formState = {
      ...formState,
      createdBy: {
        ...formState.createdBy, // Only create the comment object if it exists
        error: "Created by cannot be empty",
      },
    }
  }

  // checks if start date is before end date
  if (new Date(formState.date.start) >= new Date(formState.date.end)) {
    errorexist = true
    formState = {
      ...formState,
      date: {
        ...formState.date, // Only create the comment object if it exists
        error: "The start date need to be before the end date",
      },
    }
  }

  // All editable labels are valid regular expressions
  Object.keys(formState.editable_labels).map((editable_label) => {
    if (!validateLabelValue(formState.editable_labels[editable_label].value)) {
      errorexist = true
      formState = {
        ...formState,
        editable_labels: {
          ...formState.editable_labels,
          [editable_label]: {
            ...formState.editable_labels[editable_label],
            error: `Value for ${editable_label} is not a valid regular expression`,
          },
        },
      }
    }

    if (!formState.editable_labels[editable_label]?.value) {
      errorexist = true
      formState = {
        ...formState,
        editable_labels: {
          ...formState.editable_labels,
          [editable_label]: {
            ...formState.editable_labels[editable_label],
            error: `Value for ${editable_label} is empty`,
          },
        },
      }
    }
  })

  if (!errorexist) {
    return null
  }

  return formState
}

const validateLabelValue = (value: any) => {
  try {
    return !!new RegExp(value)
  } catch (e) {
    console.error(e)
    return false
  }
}
