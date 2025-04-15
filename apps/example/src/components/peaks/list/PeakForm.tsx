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
  Modal,
  ModalFooter,
  Form,
  IntroBox,
  TextInput,
  FormRow,
} from "@cloudoperators/juno-ui-components"
import { validateFormField, validateEntireForm } from "../utils/validateFormFields"
import { PeakFields } from "../../constants"
import { useDebounce } from "../../hooks/useDebounce"

export type TextInputType = "text" | "url"

interface FormState {
  id?: string
  name?: string
  height?: string
  range?: string
  region?: string
  country?: string
  url?: string
}

interface PeakFormProps {
  initialValues?: FormState
  closeCallback: () => void
  hasButtons?: Boolean
  disableAutoFocus?: Boolean
}

const Errors = {
  INVALID_PEAK: "Invalid peak data. Please correct the name field and try again.",
  CREATION_FAILURE: "Failed to add a new peak",
}

const Hints = {
  MANDATORY_FIELD_SYMBOL: "Mandatory fields are marked with a blue circle.",
  UNSAVED_CHANGES: "You have unsaved changes. Are you sure you want to close and discard them?",
}

const Labels = {
  CANCEL: "Cancel",
  SAVE: "Save",
  KEEP_EDITING: "Keep Editing",
  DISCARD: "Discard Changes",
  UNSAVED_CHANGES: "Unsaved Changes",
}

const INITIAL_VALUES: FormState = {
  id: "",
  name: "",
  height: "",
  range: "",
  region: "",
  country: "",
  url: "",
}

const PeakForm: React.FC<PeakFormProps> = ({ initialValues = INITIAL_VALUES, closeCallback, hasButtons = true }) => {
  const [formState, setFormState] = useState<FormState>(initialValues)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null) // Ensure it's string or null and assign correctly
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [backendError, setBackendError] = useState(false)
  const [isSaveEnabled, setIsSaveEnabled] = useState(false)

  const debouncedValidation = useDebounce(() => {
    setIsSaveEnabled(validateEntireForm(formState, errors))
  }, 300)

  useEffect(() => {
    debouncedValidation()
  }, [formState, debouncedValidation])

  const handleAttrChange = (key: keyof FormState, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }))
    if (key === "name") {
      setBackendError(false)
    }
  }

  const handleFieldBlur = (key: keyof FormState) => {
    const errorMsg = validateFormField(key, formState[key] || "")
    setErrors((prevErrors) => ({ ...prevErrors, [key]: errorMsg }))
  }

  const handleSubmit = () => {
    if (!isSaveEnabled) return
    setLoading(true)
    setErrorMessage(null)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setBackendError(true)
      setErrorMessage(Errors.INVALID_PEAK)
    }, 2000)
  }

  const isFormChanged = useCallback(
    () => JSON.stringify(formState) !== JSON.stringify(initialValues),
    [formState, initialValues]
  )

  const handleCloseClick = () => {
    if (isFormChanged()) {
      setIsModalOpen(true)
    } else {
      closeCallback()
    }
  }

  const handleModalConfirm = () => {
    setIsModalOpen(false)
    closeCallback()
  }

  return (
    <PanelBody
      footer={
        <PanelFooter>
          <Stack direction="horizontal" gap="2" distribution="end">
            <Button
              label={Labels.CANCEL}
              variant="subdued"
              onClick={() => {
                handleCloseClick()
                closeCallback()
              }}
              disabled={loading}
            />
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
          { label: PeakFields.NAME, key: "name", required: true, invalid: backendError },
          { label: PeakFields.HEIGHT, key: "height", required: true },
          { label: PeakFields.RANGE, key: "range", required: true },
          { label: PeakFields.REGION, key: "region", required: true },
          { label: PeakFields.COUNTRY, key: "country", required: true },
          { label: PeakFields.URL, key: "url", type: "url" as TextInputType },
        ].map(({ label, key, type = "text", required, invalid }) => (
          <FormRow key={key}>
            <TextInput
              label={label}
              type={type}
              value={formState[key as keyof FormState] || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleAttrChange(key as keyof FormState, e.target.value)}
              onBlur={() => handleFieldBlur(key as keyof FormState)}
              errortext={errors[key as keyof FormState]}
              maxLength={200}
              disabled={loading}
              required={required}
              invalid={invalid}
            />
          </FormRow>
        ))}
      </Form>
      {/* Add icon? <Icon color="jn-text-theme-warning" icon="warning" /> */}
      {hasButtons && (
        <Modal
          title={Labels.UNSAVED_CHANGES}
          open={isModalOpen}
          modalFooter={
            <ModalFooter style={{ justifyContent: "flex-end" }} className="jn-justify-between jn-items-center">
              <Stack gap="2">
                <Button label={Labels.KEEP_EDITING} variant="subdued" onClick={() => setIsModalOpen(false)} />
                <Button label={Labels.DISCARD} variant="primary-danger" onClick={handleModalConfirm} />
              </Stack>
            </ModalFooter>
          }
        >
          <div>{Hints.UNSAVED_CHANGES}</div>
        </Modal>
      )}
    </PanelBody>
  )
}

export default PeakForm
