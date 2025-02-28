/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ChangeEvent, FocusEvent } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { PanelBody, PanelFooter, Button, FormRow, TextInput } from "@cloudoperators/juno-ui-components"

interface FormState {
  name?: string
  height?: string
  range?: string
  region?: string
  country?: string
  url?: string
}

interface PeaksNewProps {
  closeCallback: () => void
}

interface AddMessage {
  variant: "success" | "error" | "info" | "warning"
  text: string
}

const PeaksNew: React.FC<PeaksNewProps> = ({ closeCallback }) => {
  const queryClient = useQueryClient()
  const [formState, setFormState] = useState<FormState>({})
  const [errors, setErrors] = useState<FormState>({})
  const { addMessage } = useActions() as { addMessage: (message: AddMessage) => void }

  const validateName = (value: string): string => {
    if (value.length < 3) return "Name must be at least 3 characters long"
    if (!/^[a-zA-Z\s]+$/.test(value)) return "Name must contain only alphabetical characters and spaces"
    return ""
  }

  const validateHeight = (value: string): string => {
    if (!/^\d+$/.test(value)) return "Height must be a positive number"
    return ""
  }

  const validateUrl = (value: string): string => {
    try {
      new URL(value)
      return ""
    } catch {
      return "Please enter a valid URL (e.g., https://example.com)"
    }
  }

  const validateField = (key: keyof FormState, value: string): string => {
    switch (key) {
      case "name":
        return validateName(value)
      case "height":
        return validateHeight(value)
      case "url":
        return validateUrl(value)
      default:
        return ""
    }
  }

  const onAttrChanged = (key: keyof FormState, value: string) => {
    setFormState({ ...formState, [key]: value })
  }

  const onFieldBlur = (key: keyof FormState, value: string) => {
    const errorMessage = validateField(key, value)
    setErrors({ ...errors, [key]: errorMessage })
  }

  const validateForm = (): boolean => {
    return Object.values(errors).every((error) => error === "")
  }

  const isSaveEnabled = validateForm() && Object.values(formState).every((field) => field !== "")

  const { mutateAsync } = useMutation({
    mutationKey: ["peakAdd"],
    mutationFn: async (data: { formState: FormState }) => {
      const response = await fetch("/api/peaks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.formState),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    },
  })

  const onSubmit = async () => {
    try {
      await mutateAsync({ formState })
      addMessage({
        variant: "success",
        text: `Successfully added Peak`,
      })
      closeCallback()
      await queryClient.invalidateQueries(["peaks"])
    } catch (error) {
      console.error("Error adding peak:", error)
      addMessage({
        variant: "error",
        text: `Error adding Peak: ${error.message}`,
      })
    }
  }

  const handleOnSubmit = () => {
    void onSubmit()
  }

  return (
    <PanelBody
      footer={
        <PanelFooter>
          <Button label="Cancel" variant="subdued" onClick={closeCallback} />
          <Button label="Save" variant="primary" onClick={handleOnSubmit} disabled={!isSaveEnabled} />
        </PanelFooter>
      }
    >
      <FormRow>
        <TextInput
          label="Name"
          required={true}
          autoFocus
          value={formState.name || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("name", e.target.value)}
          onBlur={(e: FocusEvent<HTMLInputElement>) => onFieldBlur("name", e.target.value)}
          errortext={errors.name}
          maxLength={200}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Height"
          required={true}
          value={formState.height || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("height", e.target.value)}
          onBlur={(e: FocusEvent<HTMLInputElement>) => onFieldBlur("height", e.target.value)}
          errortext={errors.height}
          maxLength={200}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Main Range"
          required={true}
          value={formState.range || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("range", e.target.value)}
          maxLength={200}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Region"
          required={true}
          value={formState.region || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("region", e.target.value)}
          maxLength={200}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Country"
          required={true}
          value={formState.country || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("country", e.target.value)}
          maxLength={200}
        />
      </FormRow>
      <FormRow>
        <TextInput
          type="url"
          label="URL"
          value={formState.url || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("url", e.target.value)}
          onBlur={(e: FocusEvent<HTMLInputElement>) => onFieldBlur("url", e.target.value)}
          errortext={errors.url}
          maxLength={200}
        />
      </FormRow>
    </PanelBody>
  )
}

export default PeaksNew
