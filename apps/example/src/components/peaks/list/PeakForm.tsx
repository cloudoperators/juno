/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, ChangeEvent } from "react"
import {
  PanelBody,
  PanelFooter,
  Button,
  Stack,
  Message,
  Form,
  IntroBox,
  TextInput,
  FormRow,
  Tooltip,
  Icon,
} from "@cloudoperators/juno-ui-components"
import { validateFormField } from "../utils/validateFormFields"
import { PeakFields } from "../../constants"
import { useDebounce } from "../../hooks/useDebounce"

export type TextInputType = "text" | "url"

interface FormState {
  id?: string
  name?: string
  height?: string
  mainrange?: string
  region?: string
  countries?: string
  url?: string
}

interface PeakFormProps {
  initialValues?: FormState
  closeCallback: () => void
}

const Errors = {
  INVALID_PEAK: "Invalid peak data. Please correct the name field and try again.",
  CREATION_FAILURE: "Failed to add a new peak. This is a simulation.",
}

const Hints = {
  MANDATORY_FIELD_SYMBOL: "Mandatory fields are marked with a blue circle.",
}

const Labels = {
  CANCEL: "Cancel",
  SAVE: "Save",
}

const INITIAL_VALUES: FormState = {
  id: "",
  name: "",
  height: "",
  mainrange: "",
  region: "",
  countries: "",
  url: "",
}

const PeakForm: React.FC<PeakFormProps> = ({ initialValues = INITIAL_VALUES, closeCallback }) => {
  const [formState, setFormState] = useState<FormState>(initialValues)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [backendError, setBackendError] = useState(false)
  const [isTyping, setIsTyping] = useState<Record<keyof FormState, boolean>>({})
  const [isSaveEnabled, setIsSaveEnabled] = useState(false)

  const requiredFields: Array<keyof FormState> = ["name", "height", "mainrange", "region", "countries"]

  const isFormChanged = useCallback(() => {
    return JSON.stringify(formState) !== JSON.stringify(initialValues)
  }, [formState, initialValues])

  const updateSaveEnabled = useCallback(() => {
    const hasErrors = requiredFields.some((field) => validateFormField(field, formState[field] || ""))
    setIsSaveEnabled(!hasErrors && isFormChanged() && !errors.url)
  }, [formState, isFormChanged, errors.url])

  const debouncedSaveUpdate = useDebounce(updateSaveEnabled, 300)

  useEffect(() => {
    debouncedSaveUpdate()
  }, [formState, errors, debouncedSaveUpdate])

  const handleAttrChange = (key: keyof FormState, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }))
    setIsTyping((prev) => ({ ...prev, [key]: true })) // Start typing

    debouncedSaveUpdate()
  }

  const handleFieldBlur = (key: keyof FormState) => {
    const errorMsg = validateFormField(key, formState[key] || "")
    setErrors((prevErrors) => ({ ...prevErrors, [key]: errorMsg }))
    setIsTyping((prev) => ({ ...prev, [key]: false })) // Only show error if not typing
  }

  const handleSubmit = () => {
    if (!isSaveEnabled) return
    setLoading(true)
    setErrorMessage(null)

    // Simulate API call for error message
    setTimeout(() => {
      setLoading(false)
      setBackendError(true)
      setErrorMessage(Errors.INVALID_PEAK)
    }, 2000)
  }

  const handleCloseClick = () => {
    closeCallback()
  }

  const renderTooltip = (message: string) => (
    <Tooltip trigger={<Icon name="info" size="small" />} position="bottom" content={<span>{message}</span>} />
  )

  return (
    <PanelBody
      footer={
        <PanelFooter>
          <Stack direction="horizontal" gap="2" distribution="end">
            <Button label={Labels.CANCEL} variant="subdued" onClick={handleCloseClick} disabled={loading} />
            <Button
              label={Labels.SAVE}
              variant="primary"
              onClick={handleSubmit}
              progress={loading}
              disabled={!isSaveEnabled || loading}
            />
          </Stack>
        </PanelFooter>
      }
    >
      {/* Note: This is simulated, an error occurs on purpose! */}
      {errorMessage && <Message title={Errors.CREATION_FAILURE} text={errorMessage} variant="error" className="mb-5" />}
      <IntroBox text={Hints.MANDATORY_FIELD_SYMBOL} />
      <Form>
        {[
          { label: PeakFields.NAME, key: "name", required: true, autoFocus: true, invalid: backendError },
          { label: PeakFields.HEIGHT, key: "height", required: true },
          { label: PeakFields.RANGE, key: "mainrange", required: true },
          { label: PeakFields.REGION, key: "region", required: true },
          { label: PeakFields.COUNTRY, key: "countries", required: true },
          { label: PeakFields.URL, key: "url", type: "url" as TextInputType },
        ].map(({ label, key, type = "text", required, autoFocus, invalid }) => (
          <FormRow key={key}>
            <TextInput
              label={label}
              type={type}
              value={formState[key as keyof FormState] || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleAttrChange(key as keyof FormState, e.target.value)}
              onBlur={() => handleFieldBlur(key as keyof FormState)}
              errortext={!isTyping[key] && errors[key as keyof FormState] ? errors[key as keyof FormState] : undefined}
              maxLength={200}
              disabled={loading}
              required={required}
              autoFocus={autoFocus}
              invalid={invalid}
              icon={errors[key as keyof FormState] ? renderTooltip(errors[key as keyof FormState]!) : undefined}
            />
          </FormRow>
        ))}
      </Form>
    </PanelBody>
  )
}

export default PeakForm
