/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs refactoring, some TS errors ignored

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
import { DEFAULT_SMALL_APP_MARGIN, FormLabels, ModalLabels, PeakFields } from "../../constants"
import { validateFormField } from "../utils/validateFormFields"

type TextInputType = "text" | "url"

interface PeakFormProps {
  initialValues?: Peak
  closeCallback: () => void
}

const sanitizeHeight = (height?: string): string => height?.replace(/\D/g, "") || ""

const PeakForm: React.FC<PeakFormProps> = ({ initialValues, closeCallback }) => {
  const [formState, setFormState] = useState<Peak>({
    id: initialValues?.id || "",
    name: initialValues?.name || "",
    height: sanitizeHeight(initialValues?.height),
    mainrange: initialValues?.mainrange || "",
    region: initialValues?.region || "",
    countries: initialValues?.countries || "",
    url: initialValues?.url || "",
    details: initialValues?.details || "",
    safety: initialValues?.safety || { status: "", variant: "info", recommendation: "", common_hazards: "" },
  })

  const [errors, setErrors] = useState<Partial<Peak>>({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [backendError, setBackendError] = useState(false)
  const [hasEdited, setHasEdited] = useState(false) // Track if any field has been changed
  const [isSaveEnabled, setIsSaveEnabled] = useState(false)

  const requiredFields: Array<keyof Peak> = ["name", "height", "mainrange", "region", "countries"]

  const isFormChanged = useCallback(
    () => JSON.stringify(formState) !== JSON.stringify(initialValues),
    [formState, initialValues]
  )

  const updateSaveEnabled = useCallback(() => {
    if (!hasEdited) return // Ensure validation logic only kicks in after an edit
    // @ts-ignore
    const noErrors = requiredFields.every((field) => validateFormField(field, formState[field] || "") === "")
    setIsSaveEnabled(noErrors && isFormChanged())
  }, [formState, hasEdited, isFormChanged])

  useEffect(() => updateSaveEnabled(), [formState, updateSaveEnabled, hasEdited])

  const handleAttrChange = (key: keyof Peak, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }))
    setHasEdited(true)
  }

  const handleFieldBlur = (key: keyof Peak) => {
    if (!hasEdited) return
    // @ts-ignore
    const errorMsg = validateFormField(key, formState[key] || "")
    setErrors((prev) => ({ ...prev, [key]: errorMsg }))
  }

  const handleSubmit = () => {
    if (!isSaveEnabled) return
    setLoading(true)
    setErrorMessage(null)

    // Simulate API call for error message
    setTimeout(() => {
      setLoading(false)
      setBackendError(true)
      setErrorMessage(FormLabels.INVALID_PEAK)
    }, 2000)
  }

  const renderTooltip = (message: string) => (
    // @ts-ignore
    <Tooltip trigger={<Icon name="info" size="small" />} position="bottom" content={<span>{message}</span>} />
  )

  const formFields = [
    { label: PeakFields.NAME, key: "name", required: true, autoFocus: true, invalid: backendError },
    { label: PeakFields.HEIGHT, key: "height", required: true },
    { label: PeakFields.RANGE, key: "mainrange", required: true },
    { label: PeakFields.REGION, key: "region", required: true },
    { label: PeakFields.COUNTRY, key: "countries", required: true },
    { label: PeakFields.URL, key: "url", type: "url" as TextInputType },
  ]

  return (
    <PanelBody
      footer={
        <PanelFooter>
          <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} distribution="end">
            <Button label={ModalLabels.CANCEL} variant="subdued" onClick={closeCallback} disabled={loading} />
            <Button
              label={ModalLabels.SAVE}
              variant="primary"
              onClick={handleSubmit}
              progress={loading}
              disabled={!isSaveEnabled || loading}
            />
          </Stack>
        </PanelFooter>
      }
    >
      {errorMessage && (
        <Message title={FormLabels.CREATION_FAILURE} text={errorMessage} variant="error" className="mb-5" />
      )}
      <IntroBox text={FormLabels.MANDATORY_FIELD_SYMBOL} />
      <Form>
        {formFields.map(({ label, key, type = "text", required, autoFocus, invalid }) => (
          <FormRow key={key}>
            <TextInput
              label={label}
              type={type}
              // @ts-ignore
              value={formState[key as keyof Peak] || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleAttrChange(key as keyof Peak, e.target.value)}
              onBlur={() => handleFieldBlur(key as keyof Peak)}
              // @ts-ignore
              errortext={errors[key as keyof Peak]}
              maxLength={200}
              disabled={loading}
              required={required}
              autoFocus={autoFocus}
              invalid={invalid}
              // @ts-ignore
              icon={errors[key as keyof Peak] ? renderTooltip(errors[key as keyof Peak]) : undefined}
            />
          </FormRow>
        ))}
      </Form>
    </PanelBody>
  )
}

export default PeakForm
