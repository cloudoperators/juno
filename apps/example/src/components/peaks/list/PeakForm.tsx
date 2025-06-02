/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, ChangeEvent, useEffect } from "react"
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

import { Peak } from "../../../mocks/db"

import { PeakFields } from "../../constants"
import { useDebounce } from "../../hooks/useDebounce"

import { validateFormField } from "../utils/validateFormFields"

// Needs refactoring, some TS errors ignored

type TextInputType = "text" | "url"

interface PeakFormProps {
  initialValues?: Peak
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

const PeakForm: React.FC<PeakFormProps> = ({ initialValues, closeCallback }) => {
  const [formState, setFormState] = useState<Peak>(
    //@ts-ignore
    initialValues || {
      id: "",
      name: "",
      height: "",
      mainrange: "",
      region: "",
      countries: "",
      url: "",
      details: "",
      safety: { status: "", variant: "" },
    }
  )
  const [errors, setErrors] = useState<Partial<Peak>>({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [backendError, setBackendError] = useState(false)
  //@ts-ignore
  const [isTyping, setIsTyping] = useState<Record<keyof Peak, boolean>>({})
  const [isSaveEnabled, setIsSaveEnabled] = useState(false)

  const requiredFields: Array<keyof Peak> = ["name", "height", "mainrange", "region", "countries"]

  const isFormChanged = useCallback(() => {
    return JSON.stringify(formState) !== JSON.stringify(initialValues)
  }, [formState, initialValues])

  const updateSaveEnabled = useCallback(() => {
    //@ts-ignore
    const hasErrors = requiredFields.some((field) => validateFormField(field, formState[field] || ""))
    setIsSaveEnabled(!hasErrors && isFormChanged() && !errors.url)
  }, [formState, isFormChanged, errors.url])

  const debouncedSaveUpdate = useDebounce(updateSaveEnabled, 300)

  useEffect(() => {
    debouncedSaveUpdate()
  }, [formState, errors, debouncedSaveUpdate])

  const handleAttrChange = (key: keyof Peak, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }))
    setIsTyping((prev) => ({ ...prev, [key]: true }))
    debouncedSaveUpdate()
  }

  const handleFieldBlur = (key: keyof Peak) => {
    //@ts-ignore
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
    //@ts-ignore
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
              {...{
                label,
                type,
                value: formState[key as keyof Peak] || "",
                onChange: (e: ChangeEvent<HTMLInputElement>) => handleAttrChange(key as keyof Peak, e.target.value),
                onBlur: () => handleFieldBlur(key as keyof Peak),
                //@ts-ignore
                errortext: !isTyping[key] && errors[key as keyof Peak] ? errors[key as keyof Peak] : undefined,
                maxLength: 200,
                disabled: loading,
                required,
                autoFocus,
                invalid,
              }}
              //@ts-ignore
              icon={errors[key as keyof Peak] ? renderTooltip(errors[key as keyof Peak]) : undefined}
            />
          </FormRow>
        ))}
      </Form>
    </PanelBody>
  )
}

export default PeakForm
