/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect, ChangeEvent } from "react"
import {
  Button,
  FormRow,
  TextInput,
  PanelBody,
  PanelFooter,
  Stack,
  Message,
  Modal,
  ModalFooter,
  Icon,
  Form,
  IntroBox,
} from "@cloudoperators/juno-ui-components"

import { validateFormField, validateEntireForm } from "./validateFormFields"

interface FormState {
  name?: string
  height?: string
  range?: string
  region?: string
  country?: string
  url?: string
}

interface PeakFormProps {
  initialValues: FormState
  closeCallback: () => void
}

const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }
}

const PeakForm: React.FC<PeakFormProps> = ({ initialValues, closeCallback }) => {
  const [formState, setFormState] = useState<FormState>(initialValues)
  const [errors, setErrors] = useState<FormState>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [backendError, setBackendError] = useState<boolean>(false)
  const [isSaveEnabled, setIsSaveEnabled] = useState<boolean>(false)

  const debouncedValidation = useCallback(
    debounce(() => {
      setIsSaveEnabled(validateEntireForm(formState, errors))
    }, 300),
    [formState, initialValues, errors]
  )

  useEffect(() => {
    debouncedValidation()
  }, [formState, debouncedValidation])

  const onAttrChanged = (key: keyof FormState, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }))
    if (key === "name") {
      setBackendError(false)
    }
  }

  const onFieldBlur = (key: keyof FormState) => {
    const errorMessage = validateFormField(key, formState[key] || "")
    setErrors((prevErrors) => ({ ...prevErrors, [key]: errorMessage }))
  }

  const handleSubmit = () => {
    if (!isSaveEnabled) return
    setLoading(true)
    setErrorMessage(null)

    // Simulate backend error after a delay
    setTimeout(() => {
      setLoading(false)
      setBackendError(true)
      setErrorMessage(
        <>
          Invalid peak data. Please correct the following fields and try again:
          <ul>
            <li>- Name: The name must be a valid peak of the world</li>
          </ul>
        </>
      )
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
            <Button label="Cancel" variant="subdued" onClick={handleCloseClick} disabled={loading} />
            <Button
              label="Save"
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
        <Message title="Failed to add a new peak" text={errorMessage} variant="error" className="mb-5" />
      )}
      <IntroBox text="Mandatory fields are marked with a blue circle." />
      <Form>
        <FormRow>
          <TextInput
            label="Name"
            required
            autoFocus
            value={formState.name || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("name", e.target.value)}
            onBlur={() => onFieldBlur("name")}
            invalid={backendError}
            errortext={backendError ? "" : errors.name}
            maxLength={200}
            disabled={loading}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Height"
            required
            value={formState.height || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("height", e.target.value)}
            onBlur={() => onFieldBlur("height")}
            errortext={errors.height}
            maxLength={200}
            disabled={loading}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Main Range"
            required
            value={formState.range || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("range", e.target.value)}
            onBlur={() => onFieldBlur("range")}
            errortext={errors.range}
            maxLength={200}
            disabled={loading}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Region"
            required
            value={formState.region || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("region", e.target.value)}
            onBlur={() => onFieldBlur("region")}
            errortext={errors.region}
            maxLength={200}
            disabled={loading}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Country"
            required
            value={formState.country || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("country", e.target.value)}
            onBlur={() => onFieldBlur("country")}
            errortext={errors.country}
            maxLength={200}
            disabled={loading}
          />
        </FormRow>
        <FormRow>
          <TextInput
            type="url"
            label="URL"
            value={formState.url || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("url", e.target.value)}
            onBlur={() => onFieldBlur("url")}
            errortext={errors.url}
            maxLength={200}
            disabled={loading}
          />
        </FormRow>
      </Form>

      <Modal
        title={
          <Stack gap="2">
            <Icon color="jn-text-theme-warning" icon="warning" /> <div>Unsaved Changes</div>
          </Stack>
        }
        open={isModalOpen}
        modalFooter={
          <ModalFooter className="jn-justify-between jn-items-center">
            <Stack gap="2">
              <Button label="Keep Editing" variant="subdued" onClick={() => setIsModalOpen(false)} />
              <Button label="Discard Changes" variant="primary-danger" onClick={handleModalConfirm} />
            </Stack>
          </ModalFooter>
        }
      >
        <p>You have unsaved changes. Are you sure you want to close and discard them?</p>
      </Modal>
    </PanelBody>
  )
}

export default PeakForm
